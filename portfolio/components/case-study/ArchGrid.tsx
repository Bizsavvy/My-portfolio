import type { ReactNode } from "react";

interface ArchNode {
  index: string;
  title: string;
  description: ReactNode;
}

interface ArchGridProps {
  nodes: ArchNode[];
  note?: string;
}

export function ArchGrid({ nodes, note }: ArchGridProps) {
  return (
    <>
      <div
        className="arch mt-[34px] grid border border-[var(--color-line)] rounded-[16px] overflow-hidden"
        style={{ gridTemplateColumns: `repeat(${nodes.length},1fr)` }}
      >
        {nodes.map((node, i) => (
          <div
            key={node.title}
            className="node px-[22px] py-[26px] bg-[var(--color-surface)] border-r border-[var(--color-line)] last:border-r-0 reveal"
          >
            <div className="font-mono text-[11px] text-[var(--color-accent)] mb-[14px]">
              → {node.index}
            </div>
            <h4 className="font-hanken font-bold text-[18px] tracking-[-0.01em] mb-2">
              {node.title}
            </h4>
            <p className="text-[13.5px] text-[var(--color-muted)] m-0">{node.description}</p>
          </div>
        ))}
      </div>
      {note && (
        <div className="arch-note font-mono text-[12px] text-[var(--color-muted)] mt-[18px] text-center tracking-[.04em] reveal">
          {note}
        </div>
      )}
      <style>{`
        @media (max-width: 760px) {
          .arch { grid-template-columns: 1fr !important; }
          .node { border-right: none !important; border-bottom: 1px solid var(--color-line); }
          .node:last-child { border-bottom: none; }
        }
      `}</style>
    </>
  );
}
