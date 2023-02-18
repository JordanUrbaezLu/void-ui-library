"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var babel = require("@rollup/plugin-babel");
var commonjs = require("@rollup/plugin-commonjs");
var path = require("path");
var postcss = require("rollup-plugin-postcss");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
var pkg = require("./package.json");

const extensions = [".js", ".jsx", ".ts", ".tsx"];

/**
 * @type {import("rollup").RollupOptions}
 */
var rollup_config = {
  external: [
    /@babel\/runtime.*/,
    /react\/jsx.*/,
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies),
  ],
  input: path.resolve(__dirname, "src/index.tsx"),
  onwarn: function (warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if (warning.code === "THIS_IS_UNDEFINED") {
      return;
    }
  },
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
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: path.resolve(__dirname, "src"),
    },
  ],
  plugins: [
    nodeResolve({ extensions }),
    babel.babel({
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

exports.default = rollup_config;
