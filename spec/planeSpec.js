describe ('Plane', function() { 
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });
  describe('take off', function() {
      it ('', function() {
        spyOn(plane, 'takeOff')
        expect(plane.takeOff).toHaveBeenCalled();
      });
  });
});
