let expect = require('chai').expect;

describe('大陆11位数，1+3|4|5|6|7|8|9+9位任意数', function() {
    const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    it('199343439 should false', function() {
        expect(reg.test('199343439')).to.be.false;
    });
    it('199343434341 should false', function() {
        expect(reg.test('199343434341')).to.be.false;
    });
    it('19934343434 should true', function() {
        expect(reg.test('19934343434')).to.be.true;
    });
    it('12934343434 should false', function() {
        expect(reg.test('12934343434')).to.be.false;
    });
    it('+8619934343434 should true', function() {
        expect(reg.test('+8619934343434')).to.be.true;
    });
    it('-8619822228837 should false', function() {
        expect(reg.test('-008619822228837')).to.be.false;
    });
    it('008519822228837 should false', function() {
        expect(reg.test('008519822228837')).to.be.false;
    });
});
