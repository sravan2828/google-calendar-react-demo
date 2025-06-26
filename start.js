#!/usr/bin/env node

// Wrapper script to handle Node.js compatibility issues
const { spawn } = require("child_process");
const path = require("path");

// Set OpenSSL legacy provider for older webpack versions
process.env.NODE_OPTIONS = "--openssl-legacy-provider";

// Run react-scripts start
const reactScripts = path.join(
  __dirname,
  "node_modules",
  ".bin",
  "react-scripts"
);
const child = spawn("node", [reactScripts, "start"], {
  stdio: "inherit",
  env: process.env
});

child.on("exit", code => {
  process.exit(code);
});
