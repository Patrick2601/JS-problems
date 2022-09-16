let a = [10, 4, 7, 3, 2, 5, 7, 3, 8];
let item = 3;

if (a.includes(item)) {
  a.splice(a.indexOf(item), 1);
  console.log(a);
} else {
  console.log("item not found");
}

