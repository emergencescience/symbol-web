import { getDictionary } from "../../../get-dictionary";
import { generateMoonMetadata } from "../metadata";
import StoryContent from "../story/StoryContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return generateMoonMetadata({ lang, dict, page: "story" });
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <StoryContent lang={lang} dict={dict} />;
}
