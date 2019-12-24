let expect = require('chai').expect;
// let Counter = require('../components/Counter');
// let shallowMount = require('@vue/test-utils').shallowMount;
// import expect from 'chai';
import Counter from '../components/Counter';
import { mount } from "@vue/test-utils";

describe('Counter.vue', () => {
    it('should increments count when button is clicked', (done) => {
        const wrapper = mount(Counter);
        wrapper.find('button').trigger('click');
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.count).to.equal(1);
            done();
        })
    });
});
