var arr = [];

for (var i = 0; i < 10000; i++) {
  arr[i] = Math.floor(Math.random() * 100000);
}

var num = 0;

function search(arr, target) {
  for(var i = 0; i < arr.length; i ++){
    num ++;
    if(arr[i] == target){
      return true;
    }
  }
  return false;
}

function Node(value) {
  this.value = value;
  this.left = this.right = null;
}

function addNode(root, num) { 
  if(root == null) return;
  if(root.value == num) return;
  if(num >= root.value) {
    if(root.right != null) addNode(root.right, num)
    else root.right = new Node(num);
  }else {
    if(root.left != null) addNode(root.left, num)
    else root.left = new Node(num);
  }
}



function buildTree(arr) {
  if (arr == null || arr.length == 0) return;
  var root = new Node(arr[0]);
  for(var i = 1; i < arr.length; i ++){
      addNode(root, arr[i]);
  }
  return root;
}


var num2 = 0;
function searchByTree(root, target){
  if(root == null) return false;
  num2 ++;
  if(root.value == target) return true;
  if(target >= root.value) return searchByTree(root.right, target)
  else return searchByTree(root.left, target);
}

console.log(search(arr, 9), num);

var root = buildTree(arr);
var flag = searchByTree(root, 9);
console.log(flag, num2);


