
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

//前序遍历  当前   左子树   右子树
function preBian(root){
  if(root == null) return;
  console.log(root.value);
  preBian(root.left);
  preBian(root.right);
}

//中序遍历  左子树  当前   右子树
function middleBian(root){
  if(root == null) return;
  middleBian(root.left);
  console.log(root.value);
  middleBian(root.right);
}

//后序遍历  左子树  右子树  当前
function backBian(root) {
  if(root == null) return;
  backBian(root.left);
  backBian(root.right);
  console.log(root.value);
}
backBian(a);
