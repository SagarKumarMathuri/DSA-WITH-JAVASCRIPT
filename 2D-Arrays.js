arr = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
for (let i = 0; i < arr.length; i++) {
  let row = arr[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
