/** 
 * -             A                    
            C        B
          F   G    D   E          
 * -             A                    
            C        X
          F   G    D      E  
                      L  
                         K
1. 前序遍历：A C F G B D E 
2. 中序遍历：F C G A D B E
*/

function Node(value) {
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

var A2 = new Node('A');
var B2 = new Node('B');
var C2 = new Node('C');
var D2 = new Node('D');
var E2 = new Node('E');
var F2 = new Node('F');
var G2 = new Node('G');
var X2 = new Node('X');
var H2 = new Node('H');
var L2 = new Node('L');
var K2 = new Node('K');

// A2.left = C2;
A2.right = X2;
// C2.left = F2;
// C2.right = G2;
X2.left = D2;
X2.right = E2;
E2.left = L2;
L2.right = K2;

var diffList = [];

function diffTree(root1, root2, diffList) {
  if (root1 == root2) return diffList;
  if (root1 != null && root2 == null) {
    //删除节点
    diffList.push({ type: '删除', origin: root1, now: null });
    diffTree(root1.left, null, diffList);
    diffTree(root1.right, null, diffList);
  } else if (root1 == null && root2 != null) {
    diffList.push({ type: '新增', origin: null, now: root2 });
    diffTree(null, root2.left, diffList);
    diffTree(null, root2.right, diffList);
  } else if (root1.value != root2.value) {
    diffList.push({ type: '修改', origin: root1, now: root2 });
    diffTree(root1.left, root2.left, diffList);
    diffTree(root1.right, root2.right, diffList);
  }else {
    diffTree(root1.left, root2.left, diffList);
    diffTree(root1.right, root2.right, diffList);
  }

  return diffList;
}

var diffList = [];
diffTree(A, A2, diffList);
console.log(diffList);
