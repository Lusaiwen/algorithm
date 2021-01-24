

var arr = [4,7,8,3,2,1,5,5,9,6];


//arr.sort(fucntion(){return a - b > 0})
function compare(a, b){
  return a - b > 0;
}

function exchange(arr, a, b){
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}


function sort(arr){
  if(arr == null || arr.length == 0 ) return;
  for(var i = 0; i< arr.length; i++){
    for(var j = 0; j < arr.length - 1 - i; j ++){
      if(compare(arr[j], arr[j + 1])){
        exchange(arr, j, j + 1);
      }
    }
  }
}

sort(arr);

console.log(arr);

