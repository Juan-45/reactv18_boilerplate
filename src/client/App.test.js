import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("App test", () => {
  it("should contains welcome text", () => {
    render(<App />);
    const heading = screen.getByText(/Welcome to React Boilerplate App/i);
    expect(heading).toBeInTheDocument();
  });
});
