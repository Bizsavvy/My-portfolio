<!-- Exported from /work/ui-to-json as it renders on 2026-11-21. Rewrite freely; the page updates from your edited copy. -->

Production tool · Figma plugin · AI tooling

# UI to JSON

A Figma plugin that compiles design files into *AI-optimized semantic JSON* : a clean intermediate representation built for AI frontend generation, not noisy CSS export.

![UI to JSON: turn Figma designs into AI-ready semantic JSON](/assets/ui-to-json/cover.webp)

The problem

Figma-to-code tools emit noisy exports with broken hierarchy and absolute positioning. Feed that to an AI agent and you get hallucinated code — the bottleneck is the representation, not the model.

The outcome

300+users reached, and growing

119Figma Community installs

40Kviews on the launch post, 586 likes

**Role:** Designer & Engineer  
**Timeline:** 2026 · shipped 20 May  
**Team:** Solo  
**Tools:** React · TypeScript · Figma API

Live in production[Read the full case study →](/articles/ui-to-json)

[Try it on Figma Community →](https://www.figma.com/community/plugin/1638581049555435822)

From design to AST

## One frame in. One clean tree out.

![UI to JSON plugin panel in Figma, showing a Shappay frame and its extracted semantic JSON](/assets/ui-to-json/screenshot.webp)

Excerpt from a real export · child nodes trimmed for length

ShapPay-user-app.fig → export.json

`{ "version": "1.0.0", "source": { "fileName": "ShapPay User app", "selection": ["1812:16347"] }, "tokens": { "colors": { "surface-colors-surface-container-lowest": "#FFFFFF", "text-colors-primary-text": "#343234", "success-colors-success-icon-bg": "rgba(0, 204, 136, 0.1)" }, "typography": { "label-l1-inter-semi-bold-700": { "fontWeight": 600, "fontSize": 24, "lineHeight": "100%", "letterSpacing": -2 } }, "spacing": { "l": 24, "m": 16, "s": 8 }, "radius": { "m": 16, "radius-100": 100 } }, "components": [ { "name": "QuickActionsCard", "variants": ["Price=Visible"], "instances": 1 }, { "name": "IconFund", "variants": [], "instances": 1 } ], "root": { "kind": "screen", "name": "QuickActionsCard", "component": "QuickActionsCard", "variant": { "Price": "Visible" }, "position": "relational", "layout": { "direction": "vertical", "gap": "l", "padding": "m", "alignItems": "center" }, "style": { "background": "surface-colors-surface-container-lowest", "borderRadius": "m" }, "children": [ { "kind": "container", "name": "WalletBalance", "layout": { "direction": "vertical", "gap": "s" }, "responsive": { "height": "hug" }, "children": [ … ] }, { "kind": "button", "name": "QuickActionsButtons", "semanticRole": "interactive", "layout": { "direction": "horizontal", "gap": "s", "alignItems": "center" }, "children": [ … ] } ] } }`

What the engine extracts

## Six passes between a node tree and a usable spec.

01 / LAYOUT

### Semantic layout

Direction, alignment, spacing, nesting, and responsive intent, captured as relationships instead of pixel coordinates.

02 / COMPONENTS

### Component identity

Instances, variants, states, and overrides are recognised and collapsed into reusable identifiers.

03 / TOKENS

### Design tokens

Colour, type, spacing, radius, shadow, and sizing are normalised into named token references, not raw values.

04 / NAMING

### Normalized naming

BTN_PRIMARY, btn-primary, and “Primary Btn” all resolve to one clean, semantic identifier.

05 / CONSTRAINTS

### Constraint translation

Raw Figma constraints become implementation-friendly responsive semantics like fill, hug, and max-width.

06 / EXPORT

### Token-efficient JSON

A hierarchical, deterministic, low-noise tree, plus optional markdown context for UX and interaction notes.

Architecture

## A semantic compiler layer between Figma and the agent.

→ PARSE

#### Structural parser

Walks the Figma node tree, preserving parent-child hierarchy and stacking order.

→ NORMALIZE

#### Semantic normalizer

Cleans inconsistent layer names and infers meaning, not just geometry.

→ LAYOUT

#### Layout intelligence

Reconstructs auto-layout, spacing, alignment, and relational vs. absolute intent.

→ RESOLVE

#### Tokens + components

Extracts design tokens and maps reusable component instances, variants, and states.

→ EMIT

#### AI-optimized AST

Outputs a compressed, deterministic JSON tree ready for an AI rendering agent.

Figma nodes → semantic JSON AST → AI rendering agent → frontend code

In production

## Not a concept. A tool people use.

Launched on the Figma Community on 20 May 2026, with no paid distribution. 300+ people have reached the tool across Community installs and shared files; 119 of those are direct Community installs to date.

300+Users reached, and growing

119Figma Community installs

42Community likes

Reception

> “This will definitely save tons of tokens. Great plugin.”

Pradeep Prakash · @ku2design

I shipped UI to JSON with a single launch post: a full walkthrough going from Figma to code with no MCPs and no screenshots burning tokens, just a semantic JSON export. It reached 40K views and 586 likes, and the response was immediate: this solved a real cost-and-quality problem people were already feeling in their AI workflows.

![Launch post on X for UI to JSON with 40K views and 586 likes, and a reply praising the plugin](/assets/ui-to-json/testimonial.webp)
