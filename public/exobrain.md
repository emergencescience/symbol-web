# Exobrain — scientific verification layer

Last updated: 19 August 2026
Canonical page: https://symbol.science/docs/exobrain
Interactive workspace: https://emergence.science/exobrain

## One-sentence promise

Exobrain turns an AI-assisted scientific claim into a visible, bounded, reproducible verification record.

The assistant can draft. Only a checker can verify.

## What it is

- A document-centered workspace for Markdown and inline LaTeX.
- A deterministic checker for equations, algebraic steps, and bounded Python runs.
- An evidence record: claim id, source span, status, assumptions, and linked execution output.

## What it is not

- Not a Mathematica, MATLAB, or Maple replacement.
- Not “Cursor for science” or a general research chatbot.
- Not a promise to verify any PDF, GitHub repository, or full paper on every edit.

## Where to use it

- Try the product: https://emergence.science/exobrain (sign-in workspace).
- Read the positioning: https://symbol.science/docs/exobrain (this brief; no login).
- Chinese copy: https://symbol.science/zh/docs/exobrain and https://symbol.science/exobrain.zh.md

## Worked example

Claim: Assumption: x = 2. Therefore x² = 4.

Each equation becomes a claim with an id, a line range, a parent edge, and a status: verified, failed, or inconclusive. A Python run such as `print(x**2)` can be linked as evidence for that claim. The snapshot is immutable; editing the source does not silently rewrite the old result.

## How it differs

- Bohrium, ScienceOne, literature chatbots: search, summarize, and draft around papers.
- Cursor, Codex, OpenClaw: edit code and notebooks; run tools locally.
- Mathematica, SymPy, Lean: compute or prove inside a solver or proof assistant.
- Exobrain: keep those tools. Add a reviewable verification record on the claim itself.

## V1 limits

Standalone Exobrain has no multi-user sharing, no public snapshot links, and no multi-tenant Jupyter sandbox. Those belong to a later hosted product. V1 is for proving that a researcher can see what was checked, what failed, and why.

## Publisher

Symbol Science. Contact: julian@symbolscience.com
