var code = require('./../app.js');

describe('changeToUpper', function() {
  it('returns uppercase items in array', function() {
    expect(code.changeToUpper(['a','b'])).toEqual(['A','B']);
  });
});

describe('getColors', function() {
  it('should give the color value', function() {
    var stuff = [ { name: 'Ted', color: 'Red' }, { name: 'Rob', color: 'Blue' } ];
    expect(code.getColors(stuff)).toEqual('Red');
  });
});
