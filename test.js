var expect = require('chai').expect
  , d3 = global.d3 = mock()
  , from = require('./')

describe('from', function() {
  
  it('should resolve from object', function() {
    var o = { foo: 'bar' }
    expect(from(o)('foo')).to.be.eql('bar')
  })

  it('should resolve from parent data', function() {
    expect(from.parent.call({}, 'foo')).to.be.eql('bar')
  })

})

function mock() {
  return { select: select }

  function select() {
    return { datum: datum }
  }

  function datum() {
    return { foo: 'bar' }
  }
}