let expect = require('chai').expect;

describe(' 三位区号-八位号码 或者 四位区号-七位号码', function() {
    const reg = /^\d{3}-\d{8}$|^\d{4}-\d{7}$/;
    it('0234-522572 should false', function() {
        expect(reg.test('0234-522572')).to.be.false;
    });
    it('0234-52257222 should false', function() {
        expect(reg.test('0234-52257222')).to.be.false;
    });
    it('02-522572 should false', function() {
        expect(reg.test('02-522572')).to.be.false;
    });
    it('02345-522555572 should false', function() {
        expect(reg.test('02345-522555572')).to.be.false;
    });
    it('023-52257278 should true', function() {
        expect(reg.test('023-52257278')).to.be.true;
    });
    it('0234-5225727 should true', function() {
        expect(reg.test('023-52257278')).to.be.true;
    });
});
