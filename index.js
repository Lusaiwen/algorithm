function Node(value){
  this.value = value;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

//1 -> 2 -> 3 -> 4 -> 5 -> null



//链表的逆置
//线性数据结构链表，每一个点都认为自己是根节点

function reverseList(root){
  if(root == null || root.next == null) return root;
  const result = reverseList(root.next);
  root.next.next = root;
  root.next = null;
  return result;
}

var newRoot = reverseList(node1);

//链表的遍历
function bianLink(root){
  if(root == null) return;
  console.log(root.value);
  bianLink(root.next);
}

bianLink(newRoot);