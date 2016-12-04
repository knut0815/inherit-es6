# Inherit-es6 <a href="https://www.npmjs.com/package/inherit-es6"><img src="https://img.shields.io/npm/v/inherit-es6.svg?style=flat-square" alt="NPM Version" /></a>

Get rid of big clunky classes.<br/>
Outsource class methods into seperate files for the sake of cleanness.

## Install

```
$ npm install inherit-es6
```

## Getting started

Alternatively you can use [this](https://github.com/maierfelix/inherit-es6/tree/master/example) prepared example project.

#### Structure:
````
root
  |-- index.js
  |-- functions.js
````

#### Code:
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
