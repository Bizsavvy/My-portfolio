import { About } from "./desktop.About";

export default function Desktop() {
  return (
    <main
      className="min-h-dvh flex flex-col"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <About />
    </main>
  );
}
