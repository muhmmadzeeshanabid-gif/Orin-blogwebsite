import { getReferenceSection } from "../utils/orinReference";

export default function RecentPosts() {
  const recentPostsHtml = getReferenceSection("section with recent posts", "end: section with recent posts");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: recentPostsHtml }} />;
}
