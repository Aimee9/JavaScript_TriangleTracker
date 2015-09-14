describe('triangletracker', function() {
  it("is true if one side is equal or less than the sum of the length of the other two sides", function() {
    expect(triangletracker(2, 2, 2)).to.equal(true);
  });
});

  describe('kindoftriangle', function() {
    it("all sides of the triangle are equal it is an equilateral triangle", function() {
      expect(kindoftriangle(5,5,5)).to.equal('equilateral');
    });

    it("two sides of the triangle are equal it is an isosceles triangle", function() {
      expect(kindoftriangle(5,5,4)).to.equal('isosceles');
    });

    it("no sides of the triangle are equal it is a scalene triangle", function() {
      expect(kindoftriangle(5,3,4)).to.equal('scalene');
    });

});
    // it("is false for most years divisible by 100", function() {
    //   expect(leapYear(1900)).to.equal(false);
    // });
    //
    // it("is true for most years divisible by 400", function() {
    //   expect(leapYear(1600)).to.equal(true);
    // });
    //});



    //
