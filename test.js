var expect = require('chai').expect
  , d3 = global.d3 = require('d3')
  , from = require('./')

describe('from', function() {
  
  it('should resolve from object', function() {
    var o = { foo: 'bar' }
    expect(from(o)('foo')).to.be.eql('bar')
  })

  it('should resolve from parent data', function() {
    var o = { parentNode: { __data__: { foo: 'bar' } } }
    expect(from.parent.call(o, 'foo')).to.be.eql('bar')
  })

})
