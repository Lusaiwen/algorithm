const { beige } = require("color-name");

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

function canLink(resultList, tempBegin, tempEnd) {
  var beginIn = (endIn = null);
  for (var i = 0; i < resultList.length; i++) {
    if (resultList[i].indexOf(tempBegin) > -1) {
      beginIn = resultList[i];
    }
    if (resultList[i].indexOf(tempEnd) > -1) {
      endIn = resultList[i];
    }
  }
  /* 1. 两个都是新节点，新增部落
   * 2. begin在A部落，end为空，A部落扩张end
   * 3. begin为空， end在A部落，A部落扩张begin
   * 4. begin在A部落，end在B部落，A扩张B部落
   * 5. begin在A部落，end也在A部落
   */
  if (beginIn != null && endIn != null && beginIn == endIn) {
    return false;
  }
  return true;
}

function link(resultList, tempBegin, tempEnd) {
  var beginIn = null;
  var endIn = null;
  for (var i = 0; i < resultList.length; i++) {
    if (resultList[i].indexOf(tempBegin) > -1) {
      beginIn = resultList[i];
    }
    if (resultList[i].indexOf(tempEnd) > -1) {
      endIn = resultList[i];
    }
  }
  /* 1. 两个都是新节点，新增部落
   * 2. begin在A部落，end为空，A部落扩张end
   * 3. begin为空， end在A部落，A部落扩张begin
   * 4. begin在A部落，end在B部落，A扩张B部落
   * 5. begin在A部落，end也在A部落.
   */
  if (beginIn == null && endIn == null) {
    //都没有部落
    var newArr = [];
    newArr.push(tempBegin);
    newArr.push(tempEnd);
    resultList.push(newArr);
  } else if (beginIn != null && endIn == null) {
    beginIn.push(tempEnd);
  } else if (beginIn == null && endIn != null) {
    endIn.push(tempBegin);
  } else if (beginIn != null && endIn != null && beginIn != endIn) {
    var all = beginIn.concat(endIn);
    var needRemove = resultList.indexOf(endIn);
    resultList.splice(needRemove, 1);
    needRemove = resultList.indexOf(beginIn);
    resultList.splice(needRemove, 1);
    resultList.push(all);
  }
  tempBegin.neighbour.push(tempEnd);
  tempEnd.neighbour.push(tempBegin);
}

function kruskal(pointSet, distance) {
  var resultList = []; //二位数组，部落
  while (true) {
    var minDis = max;
    var begin = (end = null);
    for (var i = 0; i < pointSet.length; i++) {
      for (var j = 0; j < distance[i].length; j++) {
        var tempBegin = pointSet[i];
        var tempEnd = pointSet[j];
        if (
          distance[i][j] < minDis &&
          i != j &&
          canLink(resultList, tempBegin, tempEnd)
        ) {
          begin = tempBegin;
          end = tempEnd;
          minDis = distance[i][j];
        }
      }
    }
    link(resultList, begin, end);
    if (resultList.length == 1 && resultList[0].length == pointSet.length)
      break;
  }
}

kruskal(pointSet, distance);
console.log(pointSet);
