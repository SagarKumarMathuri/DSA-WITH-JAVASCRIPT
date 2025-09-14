// arr = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"],
// ];
// for (let i = 0; i < arr.length; i++) {
//   let row = arr[i];
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < mat.length; i++) {
  for (let j = 0; j < mat[i].length; j++) {
    if (i === j) {
      console.log(mat[i][j]);
    }
  }
}
