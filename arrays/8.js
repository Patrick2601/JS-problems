let arr = [-99, 12, 3, -2, -5, 7, 9, 0, 2, -3, 4, -1];
let a = [],
  b = [];

const res = () => {
  arr.filter((ele) => {
    if (ele < 0) {
      a.push(ele);
    } else {
      b.push(ele);
    }
  });
  return a.concat(b);
};
console.log(res());
