Vec3 = function(x,y,z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}

Vec3.prototype.min = function()
{
	if(this.x < this.y && this.x < this.z){
	return this.x;
	}

	if(this.y < this.x && this.y < this.z){
	return this.y;
	}

	if(this.z < this.x && this.z < this.y){
	return this.z;
	}
}

Vec3.prototype.max = function()
{
	if(this.x > this.y && this.x > this.z){
	return this.x;
	}

	if(this.y > this.x && this.y > this.z){
	return this.y;
	}

	if(this.z > this.x && this.z > this.y){
	return this.z;
	}
}

Vec3.prototype.mid = function()
{
	if(this.x > this.y && this.x < this.z){
	return this.x;
	}
	if(this.x > this.z && this.x < this.y){
	return this.x;
	}

	if(this.y > this.x && this.y < this.z){
	return this.y;
	}
	if(this.y > this.z && this.y < this.x){
	return this.y;
	}

	if(this.z > this.x && this.z < this.y){
	return this.z;
	}
	if(this.z > this.y && this.z < this.x){
	return this.z;
	}
}