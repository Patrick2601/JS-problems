//MAXIMUM
let arr = [10, 444, 6, -88, 44, 90];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);



//MINIMUM
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);
