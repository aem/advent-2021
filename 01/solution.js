const fs = require('fs');
const path = require('path');

const distances = fs.readFileSync(path.resolve('input.txt')).toString('utf-8').split('\n').map(val => parseInt(val, 10)).filter(Boolean);

function countIncreasingDistances() {
  const increasingDistances = distances.reduce((increasing, currDistance, currIdx) => {
    if (currDistance > (distances[currIdx - 1] || Infinity)) return increasing + 1;
    return increasing;
  }, 0);

  console.log(`Total count of increasing distances: ${increasingDistances}`);
}

function sum(ints) {
  return ints.reduce((prev, val) => prev + val, 0);
}

function countIncreasingWindows(size = 3) {
  const increasingWindows = distances.reduce((increasing, __, currIdx) => {
    // need to make sure we can calculate the full window
    if (currIdx < (size - 1)) return increasing;
    const cWindowRaw = (distances.slice(currIdx - (size - 1), currIdx + 1));
    const pWindowRaw = (distances.slice(currIdx - size, currIdx));
    const cWindow = sum(cWindowRaw);
    const pWindow = sum(pWindowRaw);
    if (cWindow > pWindow && pWindow !== 0) return increasing + 1;
    return increasing;
  }, 0)

  console.log(`Total count of increasing windows: ${increasingWindows}`);
}

countIncreasingDistances();
countIncreasingWindows();
