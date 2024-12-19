import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../index";
import React from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { name: "Hastings Castle", latitude: 50.8559, longitude: 0.58506 },
        { name: "Hastingleigh", latitude: 51.16524, longitude: 0.99581 },
      ]),
  })
) as jest.Mock;

describe("Search Form", () => {
  it("renders the search input", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(/Search here.../i);
    expect(input).toBeInTheDocument();
  });

  it("displays results when typing a valid query", async () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(/Search here.../i);

    fireEvent.change(input, { target: { value: "hastin" } });

    await waitFor(() =>
      expect(screen.getByText("Hastings Castle")).toBeInTheDocument()
    );

    expect(screen.getByText("Hastingleigh")).toBeInTheDocument();
  });

  it("clears results for invalid query", async () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(/Search here.../i);

    fireEvent.change(input, { target: { value: "h" } });

    await waitFor(() =>
      expect(screen.queryByText("Hastings Castle")).not.toBeInTheDocument()
    );
  });
});
