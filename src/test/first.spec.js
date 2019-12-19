let expect = require('chai').expect;

describe('my first describe', function() {
    it('true is true', function() {
        expect(true).to.be.true;
    });

    it('false is false',function() {
        expect(false).to.be.true;
    })
})
