import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import TimerBtn from "./TimerBtn"

describe('TimerButton', () => {
  let container : ShallowWrapper;
  
  beforeEach(() => (container = shallow(
  <TimerBtn 
    fcn={jest.fn()}
    State={false}
    value={""}
    notVal={""}
    cl={""}
  />
  )))

  it("Should render a div", () => {
      expect(container.find('button').length).toBeGreaterThanOrEqual(1)
  })
})