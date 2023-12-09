import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChildButtons from "./child-buttons";

describe("ChildButtons Component", () => {
  test("renders with default props", () => {
    render(<ChildButtons />);

    // expect(childButtons).toBeInTheDocument();
  });
});
