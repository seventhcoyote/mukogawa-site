// Static server for out/ on :3021 (Python's http.server drops connections under the capture load).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join } from "node:path";

const ROOT = new URL("../out", import.meta.url).pathname, TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".otf": "font/otf", ".png": "image/png", ".jpg": "image/jpeg", ".ico": "image/x-icon", ".json": "application/json", ".txt": "text/plain" };
createServer(async (req, res) => {
  let p = join(ROOT, decodeURIComponent(new URL(req.url, "http://x").pathname));
  try { if ((await stat(p)).isDirectory()) p = join(p, "index.html"); } catch { p = join(ROOT, "404.html"); res.statusCode = 404; }
  try { res.setHeader("Content-Type", TYPES[extname(p)] ?? "application/octet-stream"); res.end(await readFile(p)); }
  catch { res.statusCode = 404; res.end("not found"); }
}).listen(3021, () => console.log("serving out/ on :3021"));
