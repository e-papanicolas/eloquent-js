let map = { one: true, two: true, hasOwnProperty: true };

// fix this call console.log(map.hasOwnProperty("one"));
console.log(Object.keys(map).includes("one"));

// from the book
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
