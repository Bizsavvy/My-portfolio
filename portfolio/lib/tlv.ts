export function crc16(str: string): string {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

export function tlv(id: string, value: string | number): string {
  const v = String(value);
  return id + String(v.length).padStart(2, "0") + v;
}

export const TLV_NAMES: Record<string, string> = {
  "00": "Payload Format Indicator",
  "01": "Point of Initiation Method",
  "26": "Merchant Account Info (NIBSS)",
  "52": "Merchant Category Code",
  "53": "Transaction Currency",
  "54": "Transaction Amount",
  "58": "Country Code",
  "59": "Merchant Name",
  "60": "Merchant City",
  "63": "CRC Checksum",
};

export interface TLVRow {
  tag: string;
  name: string;
  val: string;
}

export interface BuildResult {
  payload: string;
  crc: string;
  rows: TLVRow[];
}

export function buildNQRPayload(
  merchant: string,
  city: string,
  mode: "static" | "dynamic",
  amount: string
): BuildResult {
  const rows: TLVRow[] = [];
  let p = "";

  function push(id: string, val: string) {
    rows.push({ tag: id, name: TLV_NAMES[id] || id, val });
    p += tlv(id, val);
  }

  push("00", "01");
  const poi = mode === "static" ? "11" : "12";
  push("01", poi);

  const acct = tlv("00", "NG.COM.NIBSS-PLC.QR") + tlv("01", "0011000012");
  rows.push({ tag: "26", name: TLV_NAMES["26"], val: "NG.COM.NIBSS-PLC.QR · 0011000012" });
  p += tlv("26", acct);

  push("52", "0000");
  push("53", "566");

  if (mode === "dynamic") {
    const amt = (parseFloat(amount || "0") || 0).toFixed(2);
    rows.push({ tag: "54", name: TLV_NAMES["54"], val: "₦" + amt });
    p += tlv("54", amt);
  }

  push("58", "NG");

  const name = (merchant || "MERCHANT").toUpperCase().slice(0, 25);
  rows.push({ tag: "59", name: TLV_NAMES["59"], val: name });
  p += tlv("59", name);

  const c = (city || "LAGOS").toUpperCase().slice(0, 15);
  rows.push({ tag: "60", name: TLV_NAMES["60"], val: c });
  p += tlv("60", c);

  p += "6304";
  const crc = crc16(p);
  p += crc;
  rows.push({ tag: "63", name: TLV_NAMES["63"], val: crc });

  return { payload: p, crc, rows };
}
