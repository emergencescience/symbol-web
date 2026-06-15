"use client";

import MoonSubLayout from "../MoonSubLayout";
import ScrollReveal from "../../../components/ScrollReveal";

export default function TechnologyContent({
  lang,
  dict,
}: {
  lang: string;
  dict: any;
}) {
  const t = dict.moon;
  const isZh = lang === "zh";

  return (
    <MoonSubLayout lang={lang} dict={dict} activePage="technology">
      <ScrollReveal>
        <div className="mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400/50">
            {isZh ? "技术详解" : "TECHNOLOGY"}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
            {t.tech_page_title || (isZh ? "技术详解" : "The Technology")}
          </h1>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-white mb-6">
            {isZh ? "核心问题" : "The Core Problem"}
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            {isZh
              ? "冯·诺依曼自我复制探针假设了一个恒温恒压、有水的友好环境。月球不是这样的。"
              : "Von Neumann self-replicating probes assume a friendly environment — constant temperature, atmospheric pressure, abundant water. The Moon is none of these."}
          </p>
          <p className="text-zinc-400 leading-relaxed">
            {isZh
              ? "我们的核心问题：是否存在一种不依赖水、不依赖地球温度、不依赖大气的自复制制造范式？"
              : "Our core question: is there a self-replicating manufacturing paradigm that works without water, without Earth-like temperature, and without atmosphere?"}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-white mb-6">
            {isZh ? "路径一：熔盐电解（FFC Cambridge 工艺）" : "Path 1: Molten Salt Electrolysis (FFC Cambridge)"}
          </h2>

          <div className="border border-blue-400/15 bg-blue-400/5 px-6 py-4 mb-6">
            <p className="text-sm font-mono text-blue-400/70">
              <span className="text-amber-400/80">TRL 5-6</span> · {isZh ? "最成熟路径" : "Most mature path"} · {isZh ? "已验证" : "Demonstrated"} 2000–2025
            </p>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-4">
            {isZh
              ? "FFC Cambridge 工艺使用熔融 CaCl₂ 在 ~900°C 下直接电解月壤氧化物，同时产出金属和氧气。这个过程在 2000 年由 Chen, Fray & Farthing 在 Nature 上发表（Nature 407, 361-364），此后经过 25 年的持续研究。"
              : "The FFC Cambridge process uses molten CaCl₂ at ~900°C to directly electrolyze lunar regolith oxides, producing both metals and oxygen simultaneously. Discovered by Chen, Fray & Farthing in Nature (407, 361-364, 2000), it has been refined over 25 years."}
          </p>

          <div className="border border-zinc-800 bg-zinc-900/30 p-6 mb-4">
            <h3 className="text-sm font-mono text-amber-400/80 mb-3 uppercase tracking-wider">
              {isZh ? "关键论文" : "Key Papers"}
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>• Chen, Fray & Farthing, <span className="italic">Nature</span> 407, 361–364 (2000) — {isZh ? "奠基性论文" : "Foundational paper"}</li>
              <li>• "Lower temperature electrochemical reduction of lunar regolith," <span className="italic">Planetary & Space Science</span> (2022) DOI: 10.1016/j.pss.2021.105326</li>
              <li>• "FFC Cambridge Process and Metallic 3D Printing for Deep ISRU," Carleton University (2017) — {isZh ? "完整流程验证" : "Full pipeline validation"}</li>
              <li>• "Characterization of metal products from MSE of lunar regolith," <span className="italic">Acta Astronautica</span> (2025) DOI: 10.1016/j.actaastro.2025.01.037 — {isZh ? "最新金属产物分析" : "Latest metal product analysis"}</li>
              <li>• "Identifying efficient endpoint for oxygen extraction from lunar regolith," <span className="italic">Acta Astronautica</span> (2025) 2025AcAau.234..287L</li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-white mb-6">
            {isZh ? "路径二：离子液体" : "Path 2: Ionic Liquids"}
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4">
            {isZh
              ? "离子液体是室温熔盐，具有极低的蒸气压（真空稳定），工作温度范围 -100°C 到 +400°C。它们可以在真空下作为电沉积、sol-gel 转化的介质，且可回收重复使用。"
              : "Ionic liquids are room-temperature molten salts with negligible vapor pressure (vacuum stable) and a working range of -100°C to +400°C. They serve as media for electrodeposition and sol-gel processing in vacuum, and are fully recyclable."}
          </p>

          <div className="border border-zinc-800 bg-zinc-900/30 p-6">
            <h3 className="text-sm font-mono text-amber-400/80 mb-3 uppercase tracking-wider">
              {isZh ? "关键论文" : "Key Papers"}
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>• Todd & Kelly, "Ionic liquids for space applications," <span className="italic">JBIS</span> (2021)</li>
              <li>• "Self-Assembled Nanostructures in Aprotic ILs," <span className="italic">ACS Appl. Mater.</span> (2023) DOI: 10.1021/acsami.3c08606</li>
              <li>• "The Novel Ionic Liquid Self-Assembly in Energy Storage," PMC11935792 (2025)</li>
              <li>• "Use of Ionic Liquid Under Vacuum Conditions," IntechOpen (2013)</li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-white mb-6">
            {isZh ? "路径三：气相沉积" : "Path 3: Vapor Deposition (CVD/PVD)"}
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4">
            {isZh
              ? "完全不需要液体溶剂。已在半导体工业中大规模使用。NASA 开发了激光定向 CVD 用于高温金属 3D 打印（2023）。2025 年 Nature 发表了自驱动物理气相沉积系统，结合贝叶斯机器学习自动优化工艺（DOI: 10.1038/s41524-025-01805-0）。"
              : "Zero-solvent manufacturing, already used at scale in the semiconductor industry. NASA developed laser-directed CVD for refractory metal 3D printing (2023). In 2025, Nature published a self-driving PVD system with Bayesian ML optimization (DOI: 10.1038/s41524-025-01805-0)."}
          </p>

          <div className="border border-zinc-800 bg-zinc-900/30 p-6">
            <h3 className="text-sm font-mono text-amber-400/80 mb-3 uppercase tracking-wider">
              {isZh ? "关键参考" : "Key References"}
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>• "In-Space Manufacturing of Self-Replicating Machines," Tech Briefs (2024)</li>
              <li>• "A self-driving PVD system with Bayesian ML," <span className="italic">Nature</span> (2025)</li>
              <li>• NASA "Laser-Directed CVD 3D Printing for Refractory Metals," TechPort (2023)</li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-white mb-6">
            {isZh ? "路径四：熔盐电解 + 3D 打印集成" : "Path 4: Integrated FFC + Additive Manufacturing"}
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4">
            {isZh
              ? "Alex Ellery（卡尔顿大学）的工作是唯一将熔盐→金属粉末→3D打印→自复制完整链路连接起来的研究。他的核心论证（DOI: 10.2514/1.A33409，被引 72+ 次）表明：现有的 3D 打印技术（RepRap 范式）已经可以作为通用构造函数，月面 ISRU 是其自然应用场景。"
              : "Alex Ellery (Carleton University) is the only researcher who connected the complete chain: molten salt → metal powder → 3D printing → self-replication. His core argument (DOI: 10.2514/1.A33409, cited 72+ times) shows that existing 3D printing technology (RepRap paradigm) can serve as a universal constructor, with lunar ISRU as its natural application."}
          </p>

          <div className="border border-amber-400/15 bg-amber-400/5 px-6 py-4 mt-6">
            <p className="text-sm font-mono text-amber-400/70 italic">
              {isZh ? "关键空白：还没有人在完整集成的系统里验证过非水自复制循环。这就是我们要填补的空白。" : "Key gap: no one has yet demonstrated the complete non-water self-replication cycle in an integrated system. This is what we aim to do."}
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={350}>
        <section>
          <h2 className="text-2xl font-serif text-white mb-6">
            {isZh ? "设计哲学" : "Design Philosophy"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "⊞",
                title: isZh ? "操作系统" : "Operating System",
                desc: isZh
                  ? "工厂软件架构采用操作系统设计：微内核（协议层）+ 制造模块作为用户态进程。无中央调度器，模块通过共识协商资源。"
                  : "The factory software follows OS design: a microkernel protocol layer with manufacturing modules as user-space processes negotiating resources via consensus.",
              },
              {
                icon: "◉",
                title: isZh ? "自组织网络" : "Self-Organizing Network",
                desc: isZh
                  ? "每个工厂模块是独立 AI Agent。通过涌现科学的 Surprise Protocol 协作——一种信息论度量，在预期之外的模式出现时发出信号。"
                  : "Each factory module is an independent AI agent coordinating via Emergence Science's Surprise Protocol — an information-theoretic signal for unexpected patterns.",
              },
              {
                icon: "⟁",
                title: isZh ? "智能制造" : "Intelligent Manufacturing",
                desc: isZh
                  ? "数字孪生 + 强化学习 + 预测性维护。每台机器在实时运行前都有一个仿真孪生提前跑完流程。"
                  : "Digital twin + reinforcement learning + predictive maintenance. Every machine has a simulation twin running ahead of real time.",
              },
              {
                icon: "◇",
                title: isZh ? "AI 原生" : "AI-Native",
                desc: isZh
                  ? "从第一天起即为 AI 设计——不是人工工厂后加 AI。传感器、执行器、控制回路、决策全部为自主运行而构建。"
                  : "AI-native from day one — not a manual factory retrofitted with AI. Sensors, actuators, control loops, and decisions all built for autonomous operation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-zinc-800 bg-zinc-900/30 p-6 hover:border-amber-400/20 transition-all duration-500"
              >
                <div className="text-2xl text-amber-400/60 mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </MoonSubLayout>
  );
}
