import { getReferenceSection } from "../utils/orinReference";

export default function Header() {
  const headerHtml = getReferenceSection("header", "end: header");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: headerHtml }} />;
}
