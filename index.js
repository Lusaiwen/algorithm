

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
  for(var i = 0; i< arr.length; i++){
    var maxIndex = 0;
    for(var j = 0; j < arr.length - i; j ++){
      if(compare(arr[j], arr[maxIndex])){
        maxIndex = j;
      }
    }
    exchange(arr, maxIndex, arr.length - 1 - i);
  }
}

sort(arr);

console.log(arr);

