import { cn } from "@/lib/utils";

type Props = {
  columns: string[];
  rows: string[][];
  /** Names the table for screen readers when no heading sits right above it. */
  label?: string;
  /** Column indexes holding numbers: right-aligned, tabular figures. */
  numeric?: number[];
  /** A column to show in the primary text colour, e.g. the redesign's results. */
  emphasis?: number;
  /** Narrowest width before the table scrolls sideways, in px. */
  minWidth?: number;
  className?: string;
};

/**
 * A results or reference table: dividers between rows, no card, label-style headers.
 * The first cell of each row is its header. Scrolls sideways on narrow screens.
 */
export function DataTable({ columns, rows, label, numeric = [], emphasis, minWidth = 480, className }: Props) {
  const isNum = (i: number) => numeric.includes(i);

  return (
    // tabIndex lets keyboard users scroll a table wider than the screen.
    <div className={cn("overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)} tabIndex={0} role="region" aria-label={label}>
      <table className="w-full border-collapse text-left" style={{ minWidth }}>
        <thead>
          <tr className="border-b border-border">
            {columns.map((c, i) => (
              <th
                key={c}
                scope="col"
                className={cn("pb-g10 align-bottom font-mono text-label font-medium text-muted-foreground uppercase", i > 0 && "pl-g17", isNum(i) && "text-right")}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-border align-top">
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="py-g17 text-body font-normal text-foreground">
                    {cell}
                  </th>
                ) : (
                  <td
                    key={i}
                    className={cn(
                      "py-g17 pl-g17 text-body",
                      isNum(i) && "text-right tabular-nums",
                      emphasis === undefined || emphasis === i ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
