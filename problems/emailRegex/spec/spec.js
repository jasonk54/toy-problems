describe('emailValidator', function() {

  it('should be a function', function() {
    expect(emailValidator).to.be.a('function');
  });

  it('should return true when a valid email is run through it', function() {
    expect(validEmails.every(function(address) {
      return emailValidator(address);
    })).to.be(true);
  });

  it('should return false when an invalid email is run through it', function() {
    expect(invalidEmails.every(function(address) {
      return emailValidator(address);
    })).to.be(false);
  });

  xit('should return true even when a really weird, invalid-looking email is run through it', function() {
    expect(hellMode.every(function(address) {
      return emailValidator(address);
    })).to.be(true);
  });

});
