describe ('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('is flying', function() {
    it('set to false by default', function() {
      expect(plane.isFlying).toBe(false)
    });
  });
  describe('take off', function() {
    it ('should make plane fly', function() {
      plane.takeOff()
      expect(plane.isFlying).toBe(true);
    });
    it('should throw error if plane is already flying', function() {
      plane.takeOff();
      expect(function() {plane.takeOff()}).toThrow('Plane already flying');
    });
  });
  describe('land', function() {
    it('should make the plane land', function() {
      plane.land();
      expect(plane.isFlying).toBe(false);
    });
  });
});
