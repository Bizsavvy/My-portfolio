import type { CaseFigure } from "@/lib/case-studies";
import { OshapButtonRuleFigure, OshapGreysFigure, OshapSurfacesFigure, OshapTokenFlowFigure } from "@/components/case/oshap-figures";
import { NawnawFeeLadderFigure } from "@/components/case/nawnaw-figures";

/** Renders a figure drawn in code, by name, so content files stay plain data. */
export function CaseFigureView({ figure }: { figure: CaseFigure }) {
  // data-md-figure lets the Markdown export name the figure instead of copying its sample text.
  return <div data-md-figure={figure}>{figureFor(figure)}</div>;
}

function figureFor(figure: CaseFigure) {
  switch (figure) {
    case "oshap-greys":
      return <OshapGreysFigure />;
    case "oshap-button-rule":
      return <OshapButtonRuleFigure />;
    case "oshap-surfaces":
      return <OshapSurfacesFigure />;
    case "oshap-token-flow":
      return <OshapTokenFlowFigure />;
    case "nawnaw-fee-ladder":
      return <NawnawFeeLadderFigure />;
  }
}
