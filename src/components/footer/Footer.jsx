import { getReferenceSection } from "../utils/orinReference";

export default function Footer() {
  const footerHtml = getReferenceSection("footer", "end: footer");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: footerHtml }} />;
}
