import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SlideNav from "./slide-nav";

describe("SlideNav Component", () => {
  test("renders with default props", () => {
    render(<SlideNav />);

    // expect(slideNav).toBeInTheDocument();
  });
});
