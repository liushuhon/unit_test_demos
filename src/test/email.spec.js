let expect = require('chai').expect;

describe('常见的邮箱格式，支持四级域名', function() {
    const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[.])+[A-Za-z\d]{2,4}$/;
    it('segma@ should false', function() {
        expect(reg.test('segma@')).to.be.false;
    });
    it('segma@sina should false', function() {
        expect(reg.test('segma@sina')).to.be.false;
    });
    it('segma@sina. should false', function() {
        expect(reg.test('segma@sina.')).to.be.false;
    });
    it('segma@qq.com should true', function() {
        expect(reg.test('segma@qq.com')).to.be.true;
    });
    it('segma@cisdi.com.cn should true', function() {
        expect(reg.test('segma@cisdi.com.cn')).to.be.true;
    });

});
