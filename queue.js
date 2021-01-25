
//队列

function Queue(){
  this.arr = [];
  this.push = function (value) {
    this.arr.push(value);
  }

  this.pop = function () {
    return this.arr.shift();
  }

}

var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.arr);

queue.pop();
console.log(queue.arr);