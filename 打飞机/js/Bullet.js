//子弹类

//初始化函数
function Bullet(){
	
	//子弹对象为空
	this.bullet = null;
	//子弹对象速度为30
	this.speed = 30;
	//********************//
	this.outside = false;
	//子弹威力
	this.power = 1;
	//子弹方向
	this.direction = null;
	//子弹起始点坐标
	this.startPos = {x:0,y:0};
	//子弹定时器
	this.timer = null;
	//********************//
	this.domClass = "";
	
}

//子弹销毁
Bullet.prototype.die = function () {
	
	var _this = this;
	document.getElementById("container").removeChild(_this.bullet);
	_this.outside = true;
	
}

//子弹发射
Bullet.prototype.fire = function () {
	
	var _this = this;
	//创建子弹元素
	_this.bullet = document.createElement("i");
	_this.bullet.className = _this.domClass;
	document.getElementById("container").appendChild(_this.bullet);
	_this.bullet.style.left = _this.startPos.x + "px";
	_this.bullet.style.top = _this.startPos.y + "px";
	_this.bullet.style.top = _this.bullet.offsetTop - _this.speed + "px";
	
}
