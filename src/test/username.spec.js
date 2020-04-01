let expect = require('chai').expect;
let randomString = require('randomstring');

describe('字母开头，允许5-16字节，允许字母数字下划线组合', function () {
    const reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    it('segma should true', function () {
        expect(reg.test('segma')).to.be.true;
    });
    it('segma11 should true', function () {
        expect(reg.test('segma11')).to.be.true;
    });
    it('segma_301 should true', function () {
        expect(reg.test('segma_301')).to.be.true;
    });
    it('segma_301@ should false', function () {
        expect(reg.test('segma_301@')).to.be.false;
    });
    it('17 length should false', function () {
        expect(reg.test(randomString.generate(17))).to.be.false;
    });
    it('16 length should true', function () {
        expect(reg.test('abcdwosjdi12345_')).to.be.true;
    });
    it('5 length should true', function () {
        expect(reg.test(randomString.generate(5))).to.be.true;
    });
    it('4 length should false', function () {
        expect(reg.test(randomString.generate(4))).to.be.false;
    });
});