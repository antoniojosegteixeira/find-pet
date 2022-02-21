import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../../../Redux/Store/store";
import faker from "@faker-js/faker";
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
    const emailText = faker.internet.email();
    const loginEmailInput = screen.getByTestId("login-email-input");
    fireEvent.change(loginEmailInput, { target: { value: emailText } });
    expect(loginEmailInput.value).toBe(emailText);
  });

  test("should show error on incorrect email", () => {
    render(<LoginComponent />);
    const incorrectEmailText = "random";
    const loginEmailInput = screen.getByTestId("login-email-input");
    const emailError = screen.getByTestId("login-email-error");
    fireEvent.change(loginEmailInput, {
      target: { value: incorrectEmailText },
    });
    expect(emailError.value).not.toBe("");
  });

  test("should have password input", () => {
    render(<LoginComponent />);
    const loginPasswordInput = screen.getByTestId("login-password-input");
    expect(loginPasswordInput).toBeInTheDocument();
  });

  test("should write text on password input", () => {
    render(<LoginComponent />);
    const passwordText = faker.internet.password();
    const loginPasswordInput = screen.getByTestId("login-password-input");
    fireEvent.change(loginPasswordInput, { target: { value: passwordText } });
    expect(loginPasswordInput.value).toBe(passwordText);
  });

  test("should show error on short password", () => {
    render(<LoginComponent />);
    const shortPasswordText = "123";
    const loginEmailInput = screen.getByTestId("login-email-input");
    const passwordError = screen.getByTestId("login-email-error");
    fireEvent.change(loginEmailInput, {
      target: { value: shortPasswordText },
    });
    expect(passwordError.value).not.toBe("");
  });

  test("should show error on long password", () => {
    render(<LoginComponent />);
    const longPasswordText = new Array(40 + 1).join("#");
    const loginEmailInput = screen.getByTestId("login-email-input");
    const passwordError = screen.getByTestId("login-email-error");
    fireEvent.change(loginEmailInput, {
      target: { value: longPasswordText },
    });
    expect(passwordError.value).not.toBe("");
  });
});
