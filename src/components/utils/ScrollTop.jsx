import { getReferenceSection } from "./orinReference";

export default function ScrollTop() {
  const scrollTopHtml = getReferenceSection('button: "back to top"', "sidebar (hidden right sidebar)");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: scrollTopHtml }} />;
}
