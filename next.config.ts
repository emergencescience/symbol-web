import type { NextConfig } from "next";
import path from "path";

const projectRoot = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  // symbol-web is a nested git repo inside the 15GB emergence tree.
  // Pin the workspace root to this package so Turbopack/PostCSS do not
  // walk `apps/` and spawn unbounded postcss workers.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
