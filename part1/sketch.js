function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  var x = 10
  var count = 5

  var i = 0
  while(i < count) {
    rect(x, 10, 10, 10) // the position and the size of the shape
    x = x + 20 // 10 + 20

    i = i +1
    // i is increased until it hits the count.

  }
}
