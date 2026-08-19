# Exobrain — 科研验证层

最近更新：2026 年 8 月 19 日
规范页面：https://symbol.science/zh/docs/exobrain
交互工作区：https://emergence.science/zh/exobrain

## 一句话承诺

Exobrain 把 AI 辅助的科学 claim 变成可见、有边界、可复现的验证记录。

助手可以起草。只有检查器能够验证。

## 它是什么

- 以文档为中心的 Markdown / 行内 LaTeX 工作区。
- 对公式、代数步骤和受控 Python 运行的确定性检查。
- 证据记录：claim id、源码范围、状态、假设，以及关联的运行输出。

## 它不是什么

- 不是 Mathematica、MATLAB 或 Maple 的替代品。
- 不是 “科学版 Cursor”，也不是通用科研聊天机器人。
- 不承诺在每次编辑时验证任意 PDF、GitHub 仓库或整篇论文。

## 到哪里用

- 试用产品：https://emergence.science/exobrain（需登录的工作区）。
- 阅读定位：https://symbol.science/docs/exobrain（本说明；无需登录）。
- English copy: https://symbol.science/en/docs/exobrain and https://symbol.science/exobrain.md

## 一个可核对的例子

陈述：假设 x = 2。因此 x² = 4。

每个公式成为带 id 的 claim，含行号范围、推导边和状态：verified、failed 或 inconclusive。例如 `print(x**2)` 的 Python 运行可以显式关联为该 claim 的证据。快照不可变；改原文不会悄悄改写旧结果。

## 和现有工具的分工

- Bohrium、ScienceOne、文献聊天机器人：检索、摘要、围绕论文起草。
- Cursor、Codex、OpenClaw：编辑代码和 notebook，在本地跑工具。
- Mathematica、SymPy、Lean：在求解器或证明助手里计算或证明。
- Exobrain：继续用上述工具。在 claim 本身上增加可审阅的验证记录。

## V1 边界

单机版 Exobrain 没有多用户分享、没有公开快照链接、也没有多租户 Jupyter 沙箱。那些属于后续托管产品。V1 要证明的是：研究者能看见检查了什么、失败在哪、以及为什么。

## 发布者

Symbol Science。联系：julian@symbolscience.com
