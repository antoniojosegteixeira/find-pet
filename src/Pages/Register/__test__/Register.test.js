import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../../../Redux/Store/store";
import faker from "@faker-js/faker";
import { Provider } from "react-redux";
import { registerErrMgs } from "../../../Validation/Schemas/registration-schema";

import Register from "../Register";

describe("register page", () => {
  const RegisterComponent = () => (
    <Provider store={store}>
      <Register />
    </Provider>
  );

  test("should render component", () => {
    render(<RegisterComponent />);
    const registerWrapper = screen.getByTestId("register-wrapper");
    expect(registerWrapper).toBeInTheDocument();
  });

  test("should have email input", () => {
    render(<RegisterComponent />);
    const registerEmailInput = screen.getByTestId("register-email-input");
    expect(registerEmailInput).toBeInTheDocument();
  });

  test("should write text on email input", () => {
    render(<RegisterComponent />);
    const emailText = faker.internet.email();
    const registerEmailInput = screen.getByTestId("register-email-input");
    fireEvent.change(registerEmailInput, { target: { value: emailText } });
    expect(registerEmailInput.value).toBe(emailText);
  });

  test("should show error on incorrect email", async () => {
    render(<RegisterComponent />);
    const incorrectEmailText = "random";
    const registerEmailInput = screen.getByTestId("register-email-input");
    fireEvent.change(registerEmailInput, {
      target: { value: incorrectEmailText },
    });

    // Submitting
    const submitButton = screen.getByTestId("register-submit-button");
    fireEvent.click(submitButton);

    // Getting error field
    expect(
      await screen.findByText(registerErrMgs.invalidEmail)
    ).toBeInTheDocument();
  });

  test("should have name input", () => {
    render(<RegisterComponent />);
    const registerNameInput = screen.getByTestId("register-name-input");
    expect(registerNameInput).toBeInTheDocument();
  });

  test("should write text on name input", () => {
    render(<RegisterComponent />);
    const nameText = faker.name.findName();
    const registerNameInput = screen.getByTestId("register-name-input");
    fireEvent.change(registerNameInput, { target: { value: nameText } });
    expect(registerNameInput.value).toBe(nameText);
  });

  test("should show error on short name", async () => {
    render(<RegisterComponent />);
    const incorrectEmailText = "r";
    const registerEmailInput = screen.getByTestId("register-email-input");
    fireEvent.change(registerEmailInput, {
      target: { value: incorrectEmailText },
    });

    // Submitting
    const submitButton = screen.getByTestId("register-submit-button");
    fireEvent.click(submitButton);

    // Getting error field
    expect(await screen.findByText(registerErrMgs.nameMin)).toBeInTheDocument();
  });

  test("should have password input", () => {
    render(<RegisterComponent />);
    const registerPasswordInput = screen.getByTestId("register-password-input");
    expect(registerPasswordInput).toBeInTheDocument();
  });

  test("should write text on password input", () => {
    render(<RegisterComponent />);
    const passwordText = faker.internet.password();
    const registerPasswordInput = screen.getByTestId("register-password-input");
    fireEvent.change(registerPasswordInput, {
      target: { value: passwordText },
    });
    expect(registerPasswordInput.value).toBe(passwordText);
  });

  test("should show error on short password", async () => {
    render(<RegisterComponent />);
    const shortPasswordText = "123";
    const registerPasswordInput = screen.getByTestId("register-password-input");
    fireEvent.change(registerPasswordInput, {
      target: { value: shortPasswordText },
    });

    // Submitting
    const submitButton = screen.getByTestId("register-submit-button");
    fireEvent.click(submitButton);

    // Getting error field
    expect(
      await screen.findByText(registerErrMgs.minPassword)
    ).toBeInTheDocument();
  });

  test("should show error on long password", async () => {
    render(<RegisterComponent />);
    const longPasswordText = new Array(50).join("#");
    const registerPasswordInput = screen.getByTestId("register-password-input");
    fireEvent.change(registerPasswordInput, {
      target: { value: longPasswordText },
    });

    // Submitting
    const submitButton = screen.getByTestId("register-submit-button");
    fireEvent.click(submitButton);

    // Getting error field
    expect(
      await screen.findByText(registerErrMgs.maxPassword)
    ).toBeInTheDocument();
  });

  test("should have confirm password input", () => {
    render(<RegisterComponent />);
    const registerConfirmPasswordInput = screen.getByTestId(
      "register-confpassword-input"
    );
    expect(registerConfirmPasswordInput).toBeInTheDocument();
  });

  test("should write text on confirm password input", () => {
    render(<RegisterComponent />);
    const passwordText = faker.internet.password();
    const registerConfirmPasswordInput = screen.getByTestId(
      "register-confpassword-input"
    );
    fireEvent.change(registerConfirmPasswordInput, {
      target: { value: passwordText },
    });
    expect(registerConfirmPasswordInput.value).toBe(passwordText);
  });

  test("should show error on unmatching passwords", async () => {
    render(<RegisterComponent />);

    const registerPasswordInput = screen.getByTestId("register-password-input");
    fireEvent.change(registerPasswordInput, {
      target: { value: "12332password" },
    });

    const registerConfirmPasswordInput = screen.getByTestId(
      "register-confpassword-input"
    );
    fireEvent.change(registerConfirmPasswordInput, {
      target: { value: "anotherpassword12321" },
    });

    // Submitting
    const submitButton = screen.getByTestId("register-submit-button");
    fireEvent.click(submitButton);

    // Getting error field
    expect(
      await screen.findByText(registerErrMgs.matchingPassword)
    ).toBeInTheDocument();
  });
});
