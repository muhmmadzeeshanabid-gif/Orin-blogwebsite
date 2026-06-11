import { getReferenceSection } from "../utils/orinReference";

export default function HeroSlider() {
  const sliderHtml = getReferenceSection("section with slider", "end: section with slider");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: sliderHtml }} />;
}
