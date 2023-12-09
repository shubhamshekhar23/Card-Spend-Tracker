import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SquareButton from "./square-button";

describe("SquareButton Component", () => {
  test("renders with default props", () => {
    render(<SquareButton />);

    // expect(squareButton).toBeInTheDocument();
  });
});
