// index.js 
import inherit from "inherit-es6"
import * as _fns from "./functions"

export default class Vector {
  constructor(x, y) {
    this.x = x || 0
    this.y = y || 0
  }
}

inherit(Vector, _fns)