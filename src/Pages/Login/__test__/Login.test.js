import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "../Login";

describe("Login page", () => {
  test("should render component", () => {
    render(<Login />);
    const loginWrapper = screen.getByTestId("login-wrapper");
    expect(loginWrapper).toBeInTheDocument();
  });

  test("should have email input", () => {
    render(<Login />);
    const loginEmailInput = screen.getByTestId("login-email-input");
    expect(loginEmailInput).toBeInTheDocument();
  });

  test("should write text on email input", () => {
    render(<Login />);
    const loginEmailInput = screen.getByTestId("login-email-input");
    fireEvent.change(loginEmailInput, { target: { value: "any@mail.com" } });
    expect(loginEmailInput.value).toBe("any@mail.com");
  });

  test("should have password input", () => {
    render(<Login />);
    const loginPasswordInput = screen.getByTestId("login-password-input");
    expect(loginPasswordInput).toBeInTheDocument();
  });

  test("should write text on password input", () => {
    render(<Login />);
    const loginPasswordInput = screen.getByTestId("login-password-input");
    fireEvent.change(loginPasswordInput, { target: { value: "11d$%891dsa8" } });
    expect(loginPasswordInput.value).toBe("11d$%891dsa8");
  });
});
