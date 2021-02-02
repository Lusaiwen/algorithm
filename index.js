
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



function bfs(nodes, target, path) {
  if(nodes == null || nodes.length == 0) return false;
  var nextNodes = [];
  for(var i = 0; i < nodes.length; i ++){
    if(path.indexOf(nodes[i]) > -1) continue;
    path.push(nodes[i]);
    if(nodes[i].value == target) return true;
    else nextNodes = nextNodes.concat(nodes[i].neighbour);
  }
  return bfs(nextNodes, target, path);
}

console.log(bfs([a], 'n', []));



