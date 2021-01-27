
/** 
 * -             A
            C        B
          F   G    D   E
1. 前序遍历：A C F G B D E 
2. 中序遍历：F C G A D B E
*/

const hou = ['F','G','C','D','E','B','A'];
const zhong = ['F','C','G','A','D','B','E'];



function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

function f1(hou, zhong) {
  if(hou == null || zhong == null || hou.length == 0 || zhong.length == 0 || hou.length != zhong.length) return null;
  var root = new Node(hou[hou.length - 1]);
  var index = zhong.indexOf(hou[hou.length - 1]);
  var zhongLeft = zhong.slice(0, index);
  var zhongRight = zhong.slice(index + 1, zhong.length);
  var houLeft = hou.slice(0, zhongLeft.length);
  var houRight = hou.slice(zhongLeft.length, hou.length - 1);
  root.left = f1(houLeft, zhongLeft);
  root.right = f1(houRight, zhongRight);
  return root; 
}

function qianBian(root){
  if(root == null) return;
  console.log(root.value);
  qianBian(root.left);
  qianBian(root.right);
}

const root = f1(hou, zhong);
qianBian(root);
