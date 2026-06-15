import { getDictionary } from "../../../get-dictionary";
import { generateMoonMetadata } from "../metadata";
import TechPageContent from "./TechnologyContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return generateMoonMetadata({ lang, dict, page: "technology" });
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <TechPageContent lang={lang} dict={dict} />;
}
