"use client";

import MoonSubLayout from "../MoonSubLayout";
import ScrollReveal from "../../../components/ScrollReveal";

export default function RoadmapContent({
  lang,
  dict,
}: {
  lang: string;
  dict: any;
}) {
  const isZh = lang === "zh";

  const phases = [
    {
      id: "0",
      period: "2026–2028",
      title_en: "Desert Validation",
      title_zh: "沙漠验证",
      cost: "~$0.6M",
      revenue_en: "AI edge computing revenue",
      revenue_zh: "AI 边缘算力收入",
      items_en: [
        "Solar sintering + autonomous rover in Pilbara, Australia",
        "2-week unattended autonomous run",
        "Starlink remote control from 1,500 km away",
        "Prove: sand to sintered structure, full remote ops",
      ],
      items_zh: [
        "在澳大利亚 Pilbara 进行太阳能烧结 + 自主漫游车",
        "2 周无人自主运行",
        "Starlink 远程控制（距 1500 km）",
        "验证：沙→烧结结构 + 远程运营",
      ],
    },
    {
      id: "1",
      period: "2028–2032",
      title_en: "Pilot Desert Factory",
      title_zh: "中试沙漠工厂",
      cost: "~$18M",
      revenue_en: "Mining contracts + govt funding",
      revenue_zh: "矿业合同 + 政府资金",
      items_en: [
        "Full pipeline: mine → process → 3D print → build",
        "D-Shape sand printer for infrastructure",
        "6-month unattended continuous operation",
        "Prove: autonomous closed-loop manufacturing",
      ],
      items_zh: [
        "完整流水线：采矿→加工→3D打印→建造",
        "D-Shape 沙基打印机打印基础设施",
        "6 个月无人值守连续运行",
        "验证：自主闭环制造",
      ],
    },
    {
      id: "2",
      period: "2032–2040",
      title_en: "Lunar Seed Deployment",
      title_zh: "月面种子部署",
      cost: "~$120M",
      revenue_en: "NASA/ESA ISRU contracts",
      revenue_zh: "NASA/ESA ISRU 合同",
      items_en: [
        "First lunar lander with FFC reactor module",
        "Demonstrate oxygen extraction from regolith",
        "Demonstrate metal extraction from regolith",
        "Prove: seed can survive and operate on lunar surface",
      ],
      items_zh: [
        "首个月面着陆器搭载 FFC 反应器模块",
        "展示月壤制氧",
        "展示月壤金属提取",
        "验证：种子可在月面存活并运行",
      ],
    },
    {
      id: "3",
      period: "2040–2060",
      title_en: "Self-Expanding Moon Factory",
      title_zh: "自扩展月球工厂",
      cost: "~$500M–$2B",
      revenue_en: "Ultra-pure material sales, science collaborations",
      revenue_zh: "超纯材料销售、科学合作",
      items_en: [
        "Factory expands from seed to industrial scale",
        "Vacuum semiconductor manufacturing begins",
        "ZBLAN fiber production",
        "Lunar far-side telescope construction starts",
      ],
      items_zh: [
        "工厂从种子扩展到工业规模",
        "真空半导体制造启动",
        "ZBLAN 光纤生产",
        "月球背面望远镜开始建设",
      ],
    },
    {
      id: "4",
      period: "2060–2100",
      title_en: "Lunar Infrastructure",
      title_zh: "月球基础设施",
      cost: "~$5B–$10B",
      revenue_en: "Mass driver launch services, Helium-3",
      revenue_zh: "质量驱动器发射服务、氦-3",
      items_en: [
        "Lunar electromagnetic mass driver",
        "Helium-3 mining operations",
        "Moon becomes industrial hub for cislunar space",
        "Metals, oxygen, and water shipped to orbital stations",
      ],
      items_zh: [
        "月球电磁质量驱动器",
        "氦-3 开采运营",
        "月球成为地月空间工业中心",
        "金属、氧气和水运往轨道站",
      ],
    },
    {
      id: "5",
      period: "2100–2126",
      title_en: "Type I Civilization Dawn",
      title_zh: "I 型文明的黎明",
      cost: "—",
      revenue_en: "Full cislunar economy",
      revenue_zh: "完整的地月经济圈",
      items_en: [
        "Mars colonization supported by lunar manufacturing",
        "Asteroid belt mining operations begin",
        "Earth-Moon economy reaches planetary scale",
        "Humanity+AI transitions from Type 0 to Type I",
      ],
      items_zh: [
        "月球制造支援火星殖民",
        "小行星带采矿开始",
        "地月经济达到行星级规模",
        "人类+AI 从 0 型跨入 I 型文明",
      ],
    },
  ];

  return (
    <MoonSubLayout lang={lang} dict={dict} activePage="roadmap">
      <ScrollReveal>
        <div className="mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400/50">
            {isZh ? "路线图" : "ROADMAP"}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight mb-4">
            {isZh ? "100 年路线图" : "The 100-Year Roadmap"}
          </h1>
          <p className="text-zinc-400 leading-relaxed max-w-2xl">
            {isZh
              ? "从沙漠验证到 I 型文明。种子工厂的六个阶段。"
              : "From desert validation to Type I civilization. Six phases of the Seed Factory."}
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-12">
        {phases.map((phase, idx) => (
          <ScrollReveal key={phase.id} delay={idx * 80}>
            <div className="border border-zinc-800 bg-zinc-900/30 p-8 hover:border-amber-400/20 transition-all duration-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                    {isZh ? `阶段 ${phase.id}` : `Phase ${phase.id}`} · {phase.period}
                  </span>
                  <h2 className="text-2xl font-serif text-white mt-1">
                    {isZh ? phase.title_zh : phase.title_en}
                  </h2>
                </div>
                <div className="text-right">
                  <div className="text-lg font-mono text-amber-400/60">{phase.cost}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 mt-1">
                    {isZh ? "阶段投入" : "Phase CAPEX"}
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-4 mt-4">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400/60 mb-3">
                  {isZh ? `收入来源: ${phase.revenue_zh}` : `Revenue: ${phase.revenue_en}`}
                </div>
                <ul className="space-y-2">
                  {(isZh ? phase.items_zh : phase.items_en).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                      <span className="text-amber-400/40 mt-0.5">◇</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </MoonSubLayout>
  );
}
