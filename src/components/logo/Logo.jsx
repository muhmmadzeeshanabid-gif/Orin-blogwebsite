import { getReferenceSection } from "../utils/orinReference";

export default function Logo() {
  const logoHtml = getReferenceSection("logo area", "end: logo area");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: logoHtml }} />;
}
