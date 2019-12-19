let expect = require('chai').expect;
let randomString = require('randomstring');

describe('字段名仅能含有小写字母、数字和下划线，需以小写字母开头，且长度为1-30', function() {
    const reg = /^[a-z][a-z0-9_]{0,29}$/;
    it('a should true', function() {
        expect(reg.test('a')).to.be.true;
    });
    it('1 should false', function() {
        expect(reg.test('1')).to.be.false;
    });
    it('_ should false', function() {
        expect(reg.test('1')).to.be.false;
    });
    it('A should false', function() {
        expect(reg.test('A')).to.be.false;
    });
    it('SEGMA_001 should false', function() {
        expect(reg.test('SEGMA_001')).to.be.false;
    });
    it('Segma should false', function() {
        expect(reg.test('Segma')).to.be.false;
    });
    it('segma should true', function() {
        expect(reg.test('segma')).to.be.true;
    });
    it('se_g_ma should true', function() {
        expect(reg.test('se_g_ma')).to.be.true;
    });
    it('segma_302 should true', function() {
        expect(reg.test('segma_302')).to.be.true;
    });
    it('over 30 length should false', function() {
        expect(reg.test(randomString.generate(31))).to.be.false;
    });
});
