let a1 = [5, 8, 9, 3, 5, 7, 1, 3, 4, 9, 3, 5, 1, 8, 4],
  a2 = [3, 5, 7, 2],
  b = [];
c = [];

let hash = new Map();

for (let i = 0; i < a1.length; i++) {
  hash.set(a1[i], hash.get(a1[i]) === undefined ? 1 : hash.get(a1[i]) + 1);
}

for (let i = 0; i < a2.length; i++) {
  if (hash.has(a2[i])) {
    b.push(...Array(hash.get(a2[i])).fill(a2[i]));
  }
}

for (let i = 0; i < a1.length; i++) {
  if (b.includes(a1[i]) === false) {
    c.push(a1[i]);
  }
  c.sort();
}
let res = b.concat(c);

console.log(res);
