export function clone() {
  return new Vector(this.x, this.y)
}

export function invert() {
  this.x = -this.x
  this.y = -this.y
}