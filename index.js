/** 
 * -             A
            C        B
          F   G    D   E
1. 前序遍历：A C F G B D E 
2. 中序遍历：F C G A D B E
*/

const { indigo } = require("color-name");

function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');
var F = new Node('F');
var G = new Node('G');

A.left = C;
A.right = B;
C.left = F;
C.right = G;
B.left = D;
B.right = E;

function wideSearch(rootList, target) {
  if(rootList == null || rootList.length == 0) return false;
  var childrenList = [];
  for(var i = 0; i < rootList.length; i++){
    if(rootList[i] != null && rootList[i].value == target){
      return true;
    }else {
      rootList[i].left ? childrenList.push(rootList[i].left) : null;
      rootList[i].right ? childrenList.push(rootList[i].right) : null;
    }
  }
  return wideSearch(childrenList, target);
}

console.log(wideSearch([A], 'G'));