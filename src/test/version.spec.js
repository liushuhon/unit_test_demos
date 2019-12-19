let expect = require('chai').expect;

describe('格式为X.Y.Z，且都为数字', function() {
    const reg = /^\d+(?:\.\d+){2}$/;
    it('X.Y.Z should false', function() {
        expect(reg.test('X.Y.Z')).to.be.false;
    });
    it('1.X.Z should false', function() {
        expect(reg.test('1.X.Z')).to.be.false;
    });
    it('1.1.1 should true', function() {
        expect(reg.test('1.1.1')).to.be.true;
    });
});
