import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react", "react-dom"],
  clean: true,
  minify: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  platform: "browser",
  target: "es2020",
  tsconfig: "tsconfig.build.json",
});
