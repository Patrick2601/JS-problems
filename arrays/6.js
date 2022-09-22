let a1 = [1, 2, 3, 4, 5],
  a2 = [3, 4, 5, 6, 7];
let res = [];

for (let i = 0; i < a1.length; i++) {
  let count = 0;
  for (j = 0; j < a2.length; j++) {
    if (a1[i] === a2[j]) {
      count++;
    }

  }
  if (count === 0) {
    res.push(a1[i]);
  }
}

 console.log(res)
