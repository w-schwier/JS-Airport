function Plane() {
   this.isFlying = false
}



Plane.prototype.takeOff = function () {
  if ( this.isFlying == true ) {
    throw "Plane already flying";
  };
  this.isFlying = true;
};

Plane.prototype.land = function () {
  this.isFlying = false;
};
