import fs from "fs";
import path from "path";
import { createServer } from "https";
import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(path.join(process.cwd(), "localhost-key.pem")),
  cert: fs.readFileSync(path.join(process.cwd(), "localhost.pem")),
};

app.prepare().then(() => {
  const server = express();

  // Forward all requests to Next.js
  server.all("*", (req, res) => handle(req, res));

  // Create HTTPS server
  createServer(httpsOptions, server).listen(3000, () => {
    console.log("🚀 Server running at https://localhost:3000");
  });
});
