
var arr = [4,7,8,3,2,1,5,5,9,6];


//简单快排，消耗性能，易于理解
function quickSort(arr){
  if(arr == null || arr.length == 0) return [];
  //1. 选班长
  //2. 小的在左，大的在右
  var leader = arr[0];
  var left = [];
  var right = [];
  for(var i = 1; i< arr.length; i ++){
    if(arr[i] < leader) left.push(arr[i]);
    else right.push(arr[i]);
  }
  left = quickSort(left);
  right = quickSort(right);
  left.push(leader);
  return left.concat(right);
}


console.log(quickSort(arr));


