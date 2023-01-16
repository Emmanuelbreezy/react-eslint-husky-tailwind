import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

it("should render default button", () => {
  const { getByTestId } = render(<Button text="Save" />);
  expect(getByTestId("button-id")).toBeInTheDocument();
});
