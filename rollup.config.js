// rollup.config.js
import json from "rollup-plugin-json"
import resolve from "rollup-plugin-node-resolve"
import babel from "rollup-plugin-babel"
import commonjs from 'rollup-plugin-commonjs'

const extensions = ['.js', '.ts']

export default {
  input: './main.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: "ddd"
  },
  plugins:[
    json(),
    commonjs(),
    resolve({
    extensions
  })]
}
