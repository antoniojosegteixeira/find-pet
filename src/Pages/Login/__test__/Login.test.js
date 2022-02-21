import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../../../Redux/Store/store";
import { Provider } from "react-redux";

import Login from "../Login";

describe("Login page", () => {
  const LoginComponent = () => (
    <Provider store={store}>
      <Login />
    </Provider>
  );

  test("should render component", () => {
    render(<LoginComponent />);
    const loginWrapper = screen.getByTestId("login-wrapper");
    expect(loginWrapper).toBeInTheDocument();
  });

  test("should have email input", () => {
    render(<LoginComponent />);
    const loginEmailInput = screen.getByTestId("login-email-input");
    expect(loginEmailInput).toBeInTheDocument();
  });

  test("should write text on email input", () => {
    render(<LoginComponent />);
    const loginEmailInput = screen.getByTestId("login-email-input");
    fireEvent.change(loginEmailInput, { target: { value: "any@mail.com" } });
    expect(loginEmailInput.value).toBe("any@mail.com");
  });

  test("should have password input", () => {
    render(<LoginComponent />);
    const loginPasswordInput = screen.getByTestId("login-password-input");
    expect(loginPasswordInput).toBeInTheDocument();
  });

  test("should write text on password input", () => {
    render(<LoginComponent />);
    const loginPasswordInput = screen.getByTestId("login-password-input");
    fireEvent.change(loginPasswordInput, { target: { value: "11d$%891dsa8" } });
    expect(loginPasswordInput.value).toBe("11d$%891dsa8");
  });
});
