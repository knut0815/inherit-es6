### To run this example:

````js
npm install
npm run build
````

You can now import the built example in ``./dist/vector.js`` from anywhere.

### Example:
````js
import Vector from "./dist/vector.js"

let vec = new Vector(2, 4);

console.log(vec.x, vec.y); // 2, 4
vec.invert();
console.log(vec.x, vec.y); // -2, -4
````