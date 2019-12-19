let expect = require('chai').expect;
const reg = /^.{6,20}$/;
describe('密码(宽松)：密码位数6-20位', function() {
    it('五位应该是false', function() {
        expect(reg.test('segma')).to.be.false;
    });

    it('21位应该是false', function() {
        expect(reg.test('segmasegmasegmasegma1')).to.be.false;
    });

    it('6位应该是true', function() {
        expect(reg.test('segma1')).to.be.true;
    });

    it('20位应该是true', function() {
        expect(reg.test('segmasegmasegmasegma')).to.be.true;
    });
});
