# UI to JSON (Semantic UI export for AI frontend generation)
## Product Requirements Document (PRD)

Version: 1.0  
Status: Draft  
Product Type: Figma Plugin + Semantic UI Extraction Engine  
Author: Haye Emmanuel Binjo  
Date: May 2026

---

# 1. OVERVIEW

## Product Summary

UI to JSON (Semantic UI export for AI frontend generation) is a Figma plugin designed to transform Figma design files into structured, AI-optimized semantic JSON representations.

Unlike traditional Figma-to-code tools that attempt direct code generation, this product focuses on extracting and normalizing design intent into a clean intermediate representation that can later be consumed by AI coding agents, code generators, design systems, or frontend frameworks.

The system acts as a semantic UI compiler layer between Figma and AI-assisted frontend generation.

---

# 2. PROBLEM STATEMENT

Current Figma-to-code workflows suffer from:

- Noisy exports
- Poor hierarchy preservation
- Over-reliance on absolute positioning
- Lack of semantic understanding
- Weak component mapping
- Inconsistent naming structures
- Poor responsiveness interpretation
- Excessive metadata irrelevant to UI generation
- Low-quality AI generation caused by poor intermediate representations

Most existing tools optimize for:
- CSS extraction
- HTML generation
- Developer handoff

Instead of:
- semantic layout understanding
- AI-readable UI structures
- deterministic frontend generation

This creates unreliable code generation and inconsistent AI outputs.

---

# 3. PRODUCT VISION

Build the foundational semantic extraction layer for AI-native frontend development workflows.

The plugin should convert Figma designs into a structured UI Abstract Syntax Tree (AST) that preserves:
- layout intent
- hierarchy
- relationships
- constraints
- design tokens
- component identity
- responsive behavior

The generated output should be optimized specifically for AI reasoning and frontend synthesis.

---

# 4. GOALS

## Primary Goals

- Extract semantic UI structure from Figma
- Generate clean AI-optimized JSON
- Preserve layout relationships and hierarchy
- Map reusable components
- Extract design tokens
- Improve one-shot AI frontend generation accuracy
- Reduce hallucination in generated code
- Enable deterministic frontend generation workflows

## Secondary Goals

- Generate optional markdown context files
- Support multiple frontend frameworks
- Enable design system synchronization
- Provide extensible schema architecture

---

# 5. NON-GOALS

The product is NOT intended to:
- generate perfect production-ready code directly
- replace frontend engineers
- export pixel-perfect HTML/CSS
- function as a design tool
- handle backend logic
- manage deployment pipelines

The primary responsibility is semantic extraction and normalization.

---

# 6. TARGET USERS

## Primary Users

### AI-Assisted Frontend Developers
Developers using AI agents to generate UI code from structured design data.

### Designers Building AI-Native Workflows
Designers who want their Figma files to function as executable UI specifications.

### Design System Teams
Teams maintaining reusable semantic component systems.

---

# 7. CORE CONCEPT

## Product Philosophy

The plugin prioritizes:

```text
Intent > Geometry
Structure > Pixels
Relationships > Coordinates
Semantics > Raw Nodes
````

The system should transform Figma designs into a semantic representation rather than a visual export.

---

# 8. CORE FEATURES

# 8.1 Semantic Layout Extraction

## Description

Extract layout structures from Figma frames and nodes.

## Requirements

The plugin must detect:

* parent-child hierarchy
* auto-layout direction
* spacing relationships
* alignment behavior
* stacking order
* responsive intent
* absolute positioning
* relational positioning
* constraints
* frame nesting

## Example Output

```json
{
  "layout": "horizontal",
  "alignItems": "center",
  "justifyContent": "space-between",
  "gap": "spacing-md"
}
```

---

# 8.2 Component Recognition

## Description

Identify reusable components and variants.

## Requirements

The system should detect:

* component instances
* variants
* states
* inheritance
* overrides
* reusable patterns

## Example Output

```json
{
  "component": "Button",
  "variant": "Primary",
  "state": "Default"
}
```

---

# 8.3 Design Token Extraction

## Description

Extract and normalize reusable design tokens.

## Supported Tokens

* colors
* typography
* spacing
* shadows
* border radius
* opacity
* sizing
* elevation

## Example Output

```json
{
  "padding": "spacing-md",
  "color": "primary-500",
  "typography": "body-sm"
}
```

---

# 8.4 Semantic Layer Naming

## Description

Normalize and clean layer naming structures.

## Responsibilities

* remove inconsistent naming
* normalize casing
* infer semantic meaning
* group structural naming
* generate reusable identifiers

## Example

```text
BTN_PRIMARY
btn-primary
Primary Btn
```

Normalized to:

```json
{
  "component": "ButtonPrimary"
}
```

---

# 8.5 Constraint Translation Engine

## Description

Translate raw Figma constraints into implementation-friendly responsive semantics.

## Example

Input:

```json
{
  "constraints": {
    "horizontal": "LEFT_RIGHT"
  }
}
```

Output:

```json
{
  "responsive": {
    "width": "fill",
    "maxWidth": 480
  }
}
```

---

# 8.6 Absolute vs Relational Layout Detection

## Description

Determine whether UI elements should be represented as:

* relational layouts
* absolute layers

## Examples

### Relational

```json
{
  "layout": "vertical",
  "gap": "spacing-lg"
}
```

### Absolute

```json
{
  "position": "absolute",
  "bottom": 24,
  "right": 24
}
```

---

# 8.7 AI-Optimized JSON Export

## Description

Generate highly structured JSON optimized for LLM reasoning.

## Characteristics

* semantic
* hierarchical
* token-efficient
* deterministic
* compressed
* normalized

## Example Structure

```json
{
  "screen": "Dashboard",
  "layout": "vertical",
  "children": [
    {
      "component": "Header"
    },
    {
      "component": "StatsGrid"
    }
  ]
}
```

---

# 8.8 Optional Markdown Export

## Description

Generate supplemental markdown files containing semantic context.

## Use Cases

* UX intent
* interaction notes
* implementation hints
* animation descriptions
* accessibility recommendations

## Example

```md
## Interaction Notes

- Cards should animate subtly on hover
- Navigation remains sticky
- CTA should remain visible above fold
```

---

# 9. SYSTEM ARCHITECTURE

```text
Figma Nodes
    ↓
Structural Parser
    ↓
Semantic Normalizer
    ↓
Layout Intelligence Layer
    ↓
Token Extraction Engine
    ↓
Component Resolver
    ↓
AI-Optimized JSON AST
    ↓
AI Rendering Agent
    ↓
Frontend Code
```

---

# 10. JSON SCHEMA PRINCIPLES

## Schema Requirements

The schema must be:

* human-readable
* AI-readable
* framework-agnostic
* extensible
* normalized
* relational
* deterministic

## Schema Priorities

1. Hierarchy
2. Layout semantics
3. Component identity
4. Responsive intent
5. Token references
6. Minimal noise

---

# 11. USER FLOW

## Primary Workflow

### Step 1

User selects a Figma frame or screen.

### Step 2

Plugin parses all nested nodes and layout structures.

### Step 3

System normalizes:

* hierarchy
* tokens
* components
* naming
* constraints

### Step 4

Plugin generates:

* semantic JSON AST
* optional markdown notes

### Step 5

User exports files or sends directly to AI coding workflow.

---

# 12. TECHNICAL REQUIREMENTS

## Plugin Stack

### Frontend

* React
* TypeScript
* Figma Plugin API

### Processing Layer

* TypeScript parser engine
* semantic normalization engine
* layout analysis system

### Optional Backend

* Node.js
* AI processing services
* schema validation services

---

# 13. FUTURE FEATURES

## Phase 2

* direct AI agent integration
* code generation adapters
* multi-framework output
* responsive breakpoint intelligence
* animation extraction
* accessibility inference

## Phase 3

* design system syncing
* semantic diffing
* live code preview
* collaborative workflows
* AI feedback loops

---

# 14. SUCCESS METRICS

## Core Metrics

* one-shot generation accuracy
* reduction in AI hallucinations
* component reuse consistency
* responsiveness accuracy
* export cleanliness score
* semantic extraction accuracy

## User Metrics

* export time
* developer correction time
* frontend completion speed
* AI generation success rate

---

# 15. RISKS & CHALLENGES

## Major Challenges

### Semantic Abstraction

Determining which visual details matter semantically.

### Layout Intelligence

Correctly reconstructing relational layouts.

### Naming Inconsistency

Handling poorly structured Figma files.

### Scalability

Maintaining clean exports for large design systems.

### AI Compatibility

Balancing human readability with model optimization.

---

# 16. KEY INSIGHT

The primary bottleneck in AI frontend generation is not code generation itself.

It is the quality of the intermediate semantic representation.

This product exists to solve that problem.

---

# 17. FINAL PRODUCT PHILOSOPHY

This system is not a traditional Figma exporter.

It is a semantic UI compiler layer designed for AI-native frontend workflows.

The output is not merely design data.

It is executable interface intent.

```
```
