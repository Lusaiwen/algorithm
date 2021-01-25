var arr = [4, 1, 6, 3, 2, 5, 7, 8, 9];



function exchange(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function quickSort(arr, begin, end) {
  if (begin >= end) return arr;
  var left = begin;
  var right = end;
  while (left < right) {
    while (left < right && arr[right] > arr[begin]) right--;
    while (left < right && arr[left] <= arr[begin]) left++;
    
    if (left < right) {
      exchange(arr, left, right);
    }
  }
  console.log(begin, end, left, right);
  exchange(arr, begin, left);

  quickSort(arr, begin, left - 1);
  quickSort(arr, left + 1, end);
  return arr;
}

function sort(arr) {
  if (arr == null || arr.length == 0) return [];
  return quickSort(arr, 0, arr.length - 1);
}

console.log(sort(arr));
