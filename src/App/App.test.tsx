import React from 'react';
import { shallow,ShallowWrapper } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';

/*
describe('App', () => {
	it('should render a <div />', () => {
		const container = shallow(<App />);
		expect(container.find('div').length).toBeGreaterThanOrEqual(1);
});
});
*/

describe('App',()=>{
	let container : ShallowWrapper;
	
	beforeEach(()=>{
		container = shallow(<App/>)
	});
	
	test('should render a div',()=>{
		expect(container.find("div").length).toBeGreaterThanOrEqual(1);
	})

	test('App',() =>{
		expect(container.find('h2').text()).toContain('Timer by Muhammad Ibad');
	})

	test('find Timer',()=>{
		expect(container.containsMatchingElement(<Timer/>)).toEqual(true);
	})
})


