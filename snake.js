// this is the constroctor function of a the snake object 
function Snake(x, y, xspeed, yspeed) {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	// this takes care of the direction
	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	};

	// this function will make the snake eat the food
	this.eat = function(postion){
		var d = dist(this.x ,this.y, postion.x, postion.y);
		if(d < 1 ){
			this.total++;
			return true;
		}else {
			return false;
		}
	};

	// this is when the snake kills it self 
	this.death = function(){
		for(var i = 0; i < this.tail.length; i++){
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if(d < 1){
				this.total = 0;
				this.tail = [];
				alert('You Just died FOOOO!');
			} 
		}
	};

	this.update = function (){
		if(this.total === this.tail.length) {
			for(var i =0; i < this.tail.length - 1; i++){
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed*grid;
		this.y = this.y + this.yspeed*grid;

		// will constrate the snake in the screen
		this.x = constrain(this.x, 0, width-grid);
		this.y = constrain(this.y, 0, height-grid);
	};


	this.show = function( ){
		fill(255);
		for (var i = 0; i < this.tail.length; i++){
			rect(this.tail[i].x, this.tail[i].y, grid, grid);
		}

		fill(255);
		rect(this.x, this.y, grid, grid);
	};
}