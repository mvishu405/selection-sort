function selectionSort(arr) {
  let arrLength = arr.length;
  let i, j, min_index;
  for (i = 0; i < arrLength - 1; i++) {
    min_index = i;
    for (j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
  }
}

let arr = [60, 25, 30, 12, 35, -10];

selectionSort(arr);

console.log(arr);
