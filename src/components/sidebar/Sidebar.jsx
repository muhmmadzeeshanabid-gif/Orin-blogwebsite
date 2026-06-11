import { getReferenceSection } from "../utils/orinReference";

export default function Sidebar() {
  const sidebarHtml = getReferenceSection("sidebar (hidden right sidebar)", "end: sidebar overlay");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: sidebarHtml }} />;
}
