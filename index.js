/**
 *       A  4   B   6   D
 *
 *        7      8      5       7
 *              C            E
 *
 *    A -> B   4
 *    A -> C   7
 *    B -> A   4
 *    B -> D   6
 *    B -> C   8
 *    C -> A   7
 *    C -> B   8
 *    C -> D   5
 *    D -> B   6
 *    D -> C   5
 *    D -> E   7
 *    E -> D   7
 *
 *
 *        A   B   C   D   E
 *     A  0   4   7   MAX MAX
 *     B  4   0   8   MAX MAX
 *     C  7   8   0   5   MAX
 *     D  MAX 6   5   0   7
 *     E  MAX MAX MAX 7   0
 */
var max = 100000;
var pointSet = [];
var distance = [
  [0, 4, 7, max, max],
  [4, 0, 8, max, max],
  [7, 8, 0, 5, max],
  [max, 6, 5, 0, 7],
  [max, max, max, 7, 0],
];

function Node(value) {
  this.value = value;
  this.neighbour = [];
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');


pointSet.push(A);
pointSet.push(B);
pointSet.push(C);
pointSet.push(D);
pointSet.push(E);


function getIndex(str, pointSet){
  for(var i = 0; i < pointSet.length; i ++){
    if(pointSet[i].value == str){
      return i;
    }
  }
}



function getIndex(str, pointSet){
  for(var i = 0; i < pointSet.length; i ++){
    if(pointSet[i].value == str){
      return i;
    }
  }
}

//传入所有点的集合，距离，已经连接点的集合
//根据当前已有的节点，来进行判断，获得距离最短的点
function getMinDisNode(pointSet, distance, nowPointSet){
  var fromNode = null;
  var toNode = null;
  var minDis = 10000;
  for(var i = 0; i < nowPointSet.length; i++ ){
    var nowIndex = getIndex(nowPointSet[i].value, pointSet);
    for(var j = 0; j < distance[nowIndex].length; j ++){
      var thisNode = pointSet[j];
      if(nowPointSet.indexOf(thisNode) < 0 //当前点不在已经连接的点
      && distance[nowIndex][j] < minDis){
        fromNode = nowPointSet[i];
        toNode = pointSet[j];
        minDis = distance[nowIndex][j];
      }
    }
  }
  fromNode.neighbour.push(toNode);
  toNode.neighbour.push(fromNode);
  return toNode;
}




function prim(pointSet, distance, start){
  var nowPointSet = [];
  nowPointSet.push(start);
  //获取最短的边
  while(true){
    var minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
    nowPointSet.push(minDisNode);
    if(nowPointSet.length == pointSet.length) break;
  }
}


prim(pointSet, distance, pointSet[2]);

console.log(pointSet);