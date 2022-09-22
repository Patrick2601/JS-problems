let arr = [1, 5, 7, 2, 0,4, 9, 6, 1, 0];
let hash = new Map();
let count = 0;
let res = [];
for (let i = 0; i < arr.length; i++) {
  hash.set(arr[i], hash.get(arr[i]) === undefined ? 1 : hash.get(arr[i]) + 1);
}
console.log(hash);


for (let i = 0; i < arr.length; i++) {
  if (hash.get(arr[i]) === 1) {
    res.push([arr[i]]);
  }
}
console.log(res);
