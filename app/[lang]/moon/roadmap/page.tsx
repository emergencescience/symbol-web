import { getDictionary } from "../../../get-dictionary";
import { generateMoonMetadata } from "../metadata";
import RoadmapContent from "../roadmap/RoadmapContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return generateMoonMetadata({ lang, dict, page: "roadmap" });
}

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <RoadmapContent lang={lang} dict={dict} />;
}
