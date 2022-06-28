import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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

  userEvent.click(termCheckbox);
  expect(orderBtn).toBeEnabled();

  userEvent.click(termCheckbox);
  expect(orderBtn).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termAndConditions);

  const popover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
