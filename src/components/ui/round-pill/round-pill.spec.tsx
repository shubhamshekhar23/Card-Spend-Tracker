import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RoundPill from "./round-pill";

describe("RoundPill Component", () => {
  test("renders with default props", () => {
    render(<RoundPill />);

    // expect(roundPill).toBeInTheDocument();
  });
});
