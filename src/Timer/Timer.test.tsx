import React from "react";
import { shallow,ShallowWrapper } from 'enzyme';
import Timer from "./Timer"
import TimerBtn from "../TimerBtn/TimerBtn";


describe('Timer',()=>{
    let wrapper : ShallowWrapper;
    beforeEach(()=>{
        wrapper = shallow(<Timer/>)
    })

    test("should render more than 2 div",()=>{
        expect(wrapper.find("div").length).toBeGreaterThanOrEqual(1)
    })

    test('should render 2 Timerbtn',()=>{
        expect(wrapper.find("TimerBtn").length).toEqual(2)
    })
})