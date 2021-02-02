
function Node(value) {
  this.value = value;
  this.childs = [];
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');


a.childs.push(b);
a.childs.push(c);
a.childs.push(f);
b.childs.push(d);
b.childs.push(e);

function deepSearch(root, target) {
  if(root == null) return false;
  if(root.value == target) return true;
  var flag = false;
  for(var i = 0; i < root.childs.length; i ++) {
    if(deepSearch(root.childs[i], target)){
      flag = true;
    }
  }
  return flag;
}

console.log(deepSearch(a, 'n'));
// deepSearch(a);




