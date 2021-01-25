const { threadId } = require('worker_threads');

function Node(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.prev = null;
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;
node5.next = null;

function findRoot(node) {
  if (node == null) return;
  
  function bianLink(root) {
    if(root == null) return;
    console.log(root.value);
    bianLink(root.next);
  }
  if (!node.prev) {
    bianLink(node);
  }else findRoot(node.prev);
}

// console.log(node1.value);
findRoot(node4);
