// function getMax(heights) {
//   let max = heights[1];
//   for (let height of heights) {
//     if (max < height) {
//       max = height;
//     }
//   }
//   return max;
// }
// const heights = [65, 66, 68, 72, 78, 60, 65, 66];
// const max = getMax(heights);
// console.log(max);


// get second max in an array 

function getMax(heights) {
  let max = heights[1];
  let secondMax;
  for (let height of heights) {
    if (max < height) {
        secondMax = max;
      max = height;
    }
  }
  return [max,secondMax];
}
const heights = [65, 66, 68, 72, 78, 60, 65, 66];
const max = getMax(heights);
console.log(max);
