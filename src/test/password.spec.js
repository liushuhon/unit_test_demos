let expect = require('chai').expect;
let randomString = require('randomstring');

describe('密码(宽松)：密码位数6-20位', function() {
    const reg = /^.{6,20}$/;
    it('五位应该是false', function() {
        expect(reg.test(randomString.generate(5))).to.be.false;
    });
    it('21位应该是false', function() {
        expect(reg.test(randomString.generate(21))).to.be.false;
    });
    it('6位应该是true', function() {
        expect(reg.test(randomString.generate(6))).to.be.true;
    });
    it('20位应该是true', function() {
        expect(reg.test(randomString.generate(20))).to.be.true;
    });
});

describe('密码(强度)：最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符。', function() {
    const reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).*$/;
    it('5位false', function() {
        expect(reg.test(randomString.generate(5))).to.be.false;
    });
    it('segmaA should false', function() {
        expect(reg.test('segmaA')).to.be.false;
    });
    it('segma1 should false', function() {
        expect(reg.test('segma@')).to.be.false;
    });
    it('segma$ should false', function() {
        expect(reg.test('segma$')).to.be.false;
    });
    it('segma$1A should true', function() {
        expect(reg.test('segma$1A')).to.be.true;
    });
    it('segma@A11 should true', function() {
        expect(reg.test('segma$1A')).to.be.true;
    });
});
