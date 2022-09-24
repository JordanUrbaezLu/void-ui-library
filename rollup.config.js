import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import path from "path";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";

import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  external: [
    /@babel\/runtime.*/,
    /react\/jsx.*/,
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies),
  ],
  input: path.resolve(__dirname, "src/index.tsx"),
  output: [
    {
      dir: path.resolve(__dirname, "dist"),
      exports: "auto",
      format: "cjs",
      preserveModules: true,
      preserveModulesRoot: path.resolve(__dirname, "src"),
    },
    {
      dir: path.resolve(__dirname, "dist"),
      entryFilenames: "[name].esm.js",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: path.resolve(__dirname, "src"),
    },
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules",
      extensions,
    }),
    commonjs(),
    postcss({
      extract: path.resolve(__dirname, "dist/styles.css"),
      minimize: true,
    }),
  ],
};
