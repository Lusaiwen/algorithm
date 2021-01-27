
/** 
 * -             A
            C        B
          F   G    D   E
1. 前序遍历：A C F G B D E 
2. 中序遍历：F C G A D B E
*/

const qian = ['A','C','F','G','B','D','E'];
const zhong = ['F','C','G','A','D','B','E'];

function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

function f1(qian, zhong) {
  if(qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) return null;
  var root = new Node(qian[0]);
  var index = zhong.indexOf(qian[0]);
  var qianLeft = qian.slice(1, index + 1);
  var qianRight = qian.slice(index + 1, qian.length);
  var zhongLeft = zhong.slice(0, index);
  var zhongRight = zhong.slice(index + 1, zhong.length);
  root.left = f1(qianLeft, zhongLeft);
  root.right = f1(qianRight, zhongRight);
  return root;
}

function backBian(root){
  if(root == null) return;
  backBian(root.left);
  backBian(root.right);
  console.log(root.value); 
}

const root = f1(qian, zhong);
backBian(root);

