const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const midPoint = Math.floor(arr.length / 2);
  const leftPart = mergeSort(arr.slice(0, midPoint));
  const rightPart = mergeSort(arr.slice(midPoint));
  return merge(leftPart, rightPart);
};

const merge = (leftArr, rightArr) => {
  const mergedCollection = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    const arrayWithMin = leftArr[0] < rightArr[0] ? leftArr : rightArr;
    const mergeElement = arrayWithMin.shift();
    mergedCollection.push(mergeElement);
  }

  return mergedCollection.concat(leftArr, rightArr);
};

console.log(mergeSort([5, 0, 10, -3, -1, 4, 12, -5]));
console.log(mergeSort([]));
