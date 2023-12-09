import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardTitle from "./card-title";

describe("CardTitle Component", () => {
  test("renders with default props", () => {
    render(<CardTitle />);

    // expect(cardTitle).toBeInTheDocument();
  });
});
