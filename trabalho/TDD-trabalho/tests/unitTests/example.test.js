const { expect } = require('chai');
const { describe, it } = require('mocha');

describe("#Example" , () => {
  it("should be return a lower number" , () => {
    expect(21).to.be.lessThan(20  )
  })
})