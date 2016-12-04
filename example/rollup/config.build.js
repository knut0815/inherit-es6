import buble from "rollup-plugin-buble";

export default {
  entry: "index.js",
  moduleName: "vector",
  plugins: [ buble() ],
  targets: [
    { dest: "dist/vector.js", format: "umd" }
  ]
};