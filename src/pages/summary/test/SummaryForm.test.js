import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("initial terms and condition checkbox and order button", () => {
  render(<SummaryForm />);

  const termCheckbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const orderBtn = screen.getByRole("button", { name: "Confirm order" });

  expect(termCheckbox).not.toBeChecked();
  expect(orderBtn).toBeDisabled();
});

test("click checkbox enables order button and re-click disables order button", () => {
  render(<SummaryForm />);

  const termCheckbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const orderBtn = screen.getByRole("button", { name: "Confirm order" });

  fireEvent.click(termCheckbox);
  expect(orderBtn).toBeEnabled();

  fireEvent.click(termCheckbox);
  expect(orderBtn).toBeDisabled();
});
