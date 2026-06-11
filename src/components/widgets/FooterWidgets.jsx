import { getReferenceSection } from "../utils/orinReference";

export default function FooterWidgets() {
  const footerWidgetsHtml = getReferenceSection("footer widgets", "end: footer widgets");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: footerWidgetsHtml }} />;
}
