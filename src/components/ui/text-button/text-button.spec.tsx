// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import TextButton from "./text-button";
// import { expect } from '@jest/globals';

// describe("TextButton Component", () => {
//   test("renders with default props", () => {
//     render(<TextButton>I am</TextButton>);
//     const buttonElement = screen.getByRole("button");

//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement).toHaveClass("text_button");
//     expect(buttonElement).toHaveAttribute("type", "button");
//   });

//   test("renders with custom button type", () => {
//     render(<TextButton btnType="primary" />);
//     const buttonElement = screen.getByRole("button");

//     expect(buttonElement).toHaveClass("text_button");
//     expect(buttonElement).toHaveClass("btn_primary");
//   });

//   test("renders with custom text and handles click", () => {
//     const onClickMock = jest.fn();
//     render(<TextButton onClick={onClickMock}>Click me</TextButton>);
//     const buttonElement = screen.getByRole("button");

//     expect(buttonElement).toHaveTextContent("Click me");
//     fireEvent.click(buttonElement);
//     expect(onClickMock).toHaveBeenCalled();
//   });

//   test("renders with transparent button type", () => {
//     render(<TextButton btnType="transparent" />);
//     const buttonElement = screen.getByRole("button");

//     expect(buttonElement).toHaveClass("text_button");
//     expect(buttonElement).toHaveClass("btn_transparent");
//   });
// });
