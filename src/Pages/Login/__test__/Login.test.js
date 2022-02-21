import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../../../Redux/Store/store";
import faker from "@faker-js/faker";
import { Provider } from "react-redux";
import { loginErrMgs } from "../../../Validation/Schemas/login-schema";

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

  test("should show error on incorrect email", async () => {
    render(<LoginComponent />);
    const incorrectEmailText = "random";
    const loginEmailInput = screen.getByTestId("login-email-input");
    fireEvent.change(loginEmailInput, {
      target: { value: incorrectEmailText },
    });

    // Submitting
    const submitButton = screen.getByTestId("login-submit-button");
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(loginErrMgs.invalidEmail)
    ).toBeInTheDocument();
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

  test("should show error on short password", async () => {
    render(<LoginComponent />);

    // Filling the password field with incorrect info
    const shortPasswordText = "123";
    const loginPasswordInput = screen.getByTestId("login-password-input");
    fireEvent.change(loginPasswordInput, {
      target: { value: shortPasswordText },
    });

    // Submitting
    const submitButton = screen.getByTestId("login-submit-button");
    fireEvent.click(submitButton);

    // Getting error field
    expect(
      await screen.findByText(loginErrMgs.minPassword)
    ).toBeInTheDocument();
  });

  test("should show error on long password", async () => {
    render(<LoginComponent />);

    // Filling password with 50 characters
    const longPasswordText = new Array(50).join("#");
    const loginPasswordInput = screen.getByTestId("login-password-input");
    fireEvent.change(loginPasswordInput, {
      target: { value: longPasswordText },
    });

    // Submitting
    const submitButton = screen.getByTestId("login-submit-button");
    fireEvent.click(submitButton);

    // Getting error field
    expect(
      await screen.findByText(loginErrMgs.maxPassword)
    ).toBeInTheDocument();
  });
});
