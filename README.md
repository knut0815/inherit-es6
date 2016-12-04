# Inherit-es6 <a href="https://www.npmjs.com/package/inherit-es6"><img src="https://img.shields.io/npm/v/inherit-es6.svg?style=flat-square" alt="NPM Version" /></a>

Get rid of big clunky javascript files.<br/>
Split a class's methods into seperate files for a cleaner structure.

## Install

```
$ npm install inherit-es6
```

## Getting started

Structure:
````
root
  |-- index.js
  |-- functions.js
````
Example:
````js
// index.js
import inherit from "inherit-es6"
import * as _fns from "./functions"

export class Vector {
  constructor(x) {
    this.x = x || 0
    this.y = y || 0
  }
}

inherit(Vector, _fns)
````

````js
// functions.js
export function clone() {
  return new Vector(this.x, this.y)
}

export function invert() {
  this.x = -this.x
  this.y = -this.y
}
````