let a = [4, 5, 6, 1, 3, 4, 4, 1, 9, 2, 4, 3, 3, 4, 6],
  res = [],
  count = 0;
let hash = new Map();
for (let i = 0; i < a.length; i++) {
  hash.set(a[i], hash.get(a[i]) === undefined ? 1 : hash.get(a[i]) + 1);
}
// console.log(hash);
// key=hash.keys()
// console.log(key);
for (let i = 0; i < a.length; i++) {
  if (hash.get(a[i]) === 1) {
    res.push(a[i]);
  }
}
console.log(res);
console.log(`Second NON Repeating element is ${res[1]}`);
