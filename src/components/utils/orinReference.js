import fs from "node:fs";
import path from "node:path";

const htmlPath = path.join(process.cwd(), "public", "orin-reference.html");

function getReferenceHtml() {
  return fs.readFileSync(htmlPath, "utf8");
}

function marker(label) {
  return `<!-- ${label} -->`;
}

function cleanupSection(sectionHtml) {
  return sectionHtml
    .replace(/https:\/\/demo\.birdwp\.com\/orin\/wp-content\/uploads\/[^"' )]*\/([^\/"')\s]+\.(?:jpg|jpeg|png|gif|webp|svg))/g, "/images/$1")
    .replace(/\s(?:href|action)=["']https?:\/\/[^"']*["']/g, (match) =>
      match.replace(/=["'][^"']*["']/, '="#"')
    )
    .replace(/\starget="_blank"/g, "")
    .replace(/\srel="nofollow noopener noreferrer"/g, "")
    .replace(/\srel="noopener noreferrer"/g, "");
}

export function getReferenceSection(startLabel, endLabel) {
  const html = getReferenceHtml();
  const start = html.indexOf(marker(startLabel));
  const end = html.indexOf(marker(endLabel));

  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Unable to extract reference section: ${startLabel} -> ${endLabel}`);
  }

  const section = html.slice(start + marker(startLabel).length, end).trim();
  return cleanupSection(section);
}

export function getBodyClassName() {
  const html = getReferenceHtml();
  const match = html.match(/<body[^>]*class="([^"]+)"/i);
  return (match?.[1] ?? "")
    .replace(/\bbwp-dark-style\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
