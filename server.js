#!/usr/bin/env node
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const PORT = Number(process.env.PORT ?? 4173);
const root = process.cwd();

const mimeMap = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function getMime(filePath) {
  return mimeMap[extname(filePath)] ?? "application/octet-stream";
}

function serveFile(req, res, filePath) {
  const fullPath = join(root, filePath);
  if (!existsSync(fullPath)) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Not Found");
    return;
  }

  const stream = createReadStream(fullPath);
  res.setHeader("Content-Type", getMime(fullPath));
  const stat = statSync(fullPath);
  res.setHeader("Content-Length", String(stat.size));
  res.setHeader("Cache-Control", "no-cache");
  res.statusCode = 200;
  stream.pipe(res);
  stream.on("error", () => {
    res.statusCode = 500;
    res.end("Internal Server Error");
  });
}

createServer((req, res) => {
  const requestPath = new URL(req.url ?? "/", `http://localhost:${PORT}`).pathname;
  const safePath = requestPath === "/" ? "/index.html" : requestPath;
  serveFile(req, res, safePath);
}).listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`DEV server running at http://localhost:${PORT}`);
});
