function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  var x = 10
  var y = 10
  var count = 5
  for(var i = 0; i < count; i++) {
    for(var j = 0; j < count; j++)
    rect(i*10,j*10,10,10)
  }
}
