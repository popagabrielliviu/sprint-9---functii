function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandom(3, 5));
console.log(getRandom(10, 20));