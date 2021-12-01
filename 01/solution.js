const fs = require('fs');
const path = require('path');

const distances = fs.readFileSync(path.resolve('input.txt')).toString('utf-8').split('\n').map(val => parseInt(val, 10)).filter(Boolean);

const increasingDistances = distances.reduce((increasing, currDistance, currIdx) => {
  if (currDistance > (distances[currIdx - 1] || Infinity)) return increasing + 1;
  return increasing;
}, 0);

console.log(`Total count of increasing distances: ${increasingDistances}`);
