var s;

// this var is the grid the snake moves on.
var grid = 10;

// this var is the food the snake eats
var food; 

function setup() {
	createCanvas(600,570);
	s = new Snake();
	frameRate(10);
	pickLocation();
}

function pickLocation(){
	var cols = floor(width/grid);
	var rows = float(height/grid);
	food = createVector( floor(random(cols)), floor(random(rows)) );
	food.mult(grid);
}

function mousePressed(){
	s.total++;
}

// this function with draw the snake and the food on the window dom
function draw() {
	background(51);

	if(s.eat(food)){
		pickLocation();
	}	

	s.death();
	s.update();
	s.show();

	fill(255, 0 ,100);
	rect(food.x, food.y, grid, grid);
}

// this function will contorle the direction of the snake
function keyPressed(){
	if(keyCode === UP_ARROW){
		s.dir(0, -1);
	}else if(keyCode === DOWN_ARROW){
		s.dir(0, 1);
	}else if(keyCode === RIGHT_ARROW){
		s.dir(1, 0);
	}else if(keyCode === LEFT_ARROW){
		s.dir(-1, 0);
	}
}
