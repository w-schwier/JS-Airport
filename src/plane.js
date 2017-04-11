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
  if ( this.isFlying == false ) {
    throw "Plane already landed";
  };
  this.isFlying = false;
};
