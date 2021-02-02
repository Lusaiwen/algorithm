
function Node(value) {
  this.value = value;
  this.neighbour = [];
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');


a.neighbour.push(b);
a.neighbour.push(c);
b.neighbour.push(a);
b.neighbour.push(c);
b.neighbour.push(d);
c.neighbour.push(a);
c.neighbour.push(b);
c.neighbour.push(d);
d.neighbour.push(b);
d.neighbour.push(e);
e.neighbour.push(d);

function deepSearch(node, target, path){
  if(node == null) return false;
  if(path.indexOf(node) > -1) return false;
  if(node.value == target) return true;
  path.push(node);
  var flag = false;
  for(var i = 0; i < node.neighbour.length; i ++){
    if(deepSearch(node.neighbour[i], target, path)) {
      flag = true;
      break;
    }
  }
  return flag; 

}


console.log(deepSearch(b, 'e', []));



