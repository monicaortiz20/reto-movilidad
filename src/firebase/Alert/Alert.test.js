import React from "react";
import { shallow } from "enzyme";
import Alert from "./Alert";

describe("Alert", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper).toMatchSnapshot();
  });
});
