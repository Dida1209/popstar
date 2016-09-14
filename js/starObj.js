var starObj=function(){
	this.color=[];
	this.depth=[];
	this.x=[];
	this.y=[];
	this.a=[];
	this.vx=[]
	this.vy=[];
}

starObj.prototype.init=function(){
	var n=0;
	for(var i=0;i<10;i++){
		for(var j=0;j<10;j++){
			this.x[n]=i*50;
//			console.log(this.x);
			this.y[n]=j*50;
			//console.log(this.y);
			this.color[n]=colors[Math.floor(Math.random()*colors.length)];
			//console.log(this.color);
			n++;
		}
	}
}
starObj.prototype.draw=function(cxt){
	for(var i=0;i<100;i++){
		//console.log(this.color[i],this.x[i],this.y[i]);
		cxt.fillStyle=this.color[i];
		cxt.roundRect(this.x[i],this.y[i],48,48,10).fill();
	}
}
