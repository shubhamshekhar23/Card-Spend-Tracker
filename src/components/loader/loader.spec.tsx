import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./loader";

describe("Loader Component", () => {
  test("renders with default props", () => {
    render(<Loader />);

    // expect(loader).toBeInTheDocument();
  });
});
