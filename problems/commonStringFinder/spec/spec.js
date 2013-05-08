describe('commonStringFinder', function() {
  var string1, string2, result;

  before(function() {
    string1 = 'i have made a huge mistake';
    string2 = 'have any of you ever even seen a chicken';
    result = commonStringFinder(string1, string2);
  });

  it('should be a function', function() {
    expect(commonStringFinder).to.be.a('function');
  });

  it('should return a string', function() {
    expect(typeof result).to.be('string');
  });

  it('should return a string containing all the letters found in both strings, in the order that they appeared in the first string', function() {
    expect(result).to.eql('ihaveusk');
  });

});
