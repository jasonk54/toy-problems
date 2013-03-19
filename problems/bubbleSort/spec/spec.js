describe('bubbleSort', function() {
  var bubbleSort;

  before(function() {
    bubbleSort = createBubbleSort();
  });

  it('should be a function', function() {
    expect(bubbleSort).to.be.a('function');
  });

  it('should throw an error if a non-array is passed in', function() {
    expect(function() { bubbleSort('teehee'); }).to.throwException();
    expect(function() { bubbleSort(1234); }).to.throwException();
    expect(function() { bubbleSort(false); }).to.throwException();
    expect(function() { bubbleSort(undefined); }).to.throwException();
  });

  // Note: Any comparison here needs to use eql. Otherwise Mocha will test for
  // exact equality (identity)

  it('should sort an array numerically', function() {
    expect(bubbleSort([1, 2, 43, 100, 100, 21, 21])).to.eql([1, 2, 21, 21, 43, 100, 100]);
    expect(bubbleSort([24.7, 24.3, 23, 9, 3, 3, 100, 25, 100])).to.eql([3, 3, 9, 23, 24.3, 24.7, 25, 100, 100]);
  });

  it('should handle presorted arrays', function() {
    expect(bubbleSort([5, 4, 3, 2, 1])).to.eql([1, 2, 3, 4, 5]);
    expect(bubbleSort([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5]);
  });

  it('should handle negative numbers', function() {
    expect(bubbleSort([20, -10, -10.1, 2, 4, 299])).to.eql([-10.1, -10, 2, 4, 20, 299]);
  });

  // If you add helper functions, add your tests for them here.

});
