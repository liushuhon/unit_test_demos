let expect = require('chai').expect;
import Counter from '../components/Counter';
import { mount } from "@vue/test-utils";
import flushPromise from 'flush-promises';
require('babel-polyfill');


describe('Counter.vue', () => {
    it('should increments count when button is clicked', async () => {
        const wrapper = mount(Counter);
        wrapper.find('button').trigger('click');
        await flushPromise();
        expect(wrapper.vm.count).to.equal(1);
        wrapper.find('button').trigger('click');
        await flushPromise();
        expect(wrapper.vm.count).to.equal(1);
    });
});
