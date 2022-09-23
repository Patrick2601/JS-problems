let arr =[9, -3, 5, -2, -8, -6, 1, 3]
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