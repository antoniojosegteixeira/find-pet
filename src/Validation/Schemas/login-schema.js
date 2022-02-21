import * as yup from "yup";

export const loginErrMgs = {
  required: "Campo obrigatório",
  invalidType: "Campo inválido",
  invalidEmail: "Insira um email válido",
  minPassword: "Senha deve conter no mínimo 6 dígitos",
  maxPassword: "Senha deve conter no máximo 40 dígitos",
};

const loginSchema = yup.object().shape({
  email: yup
    .string(loginErrMgs.invalidType)
    .email(loginErrMgs.invalidEmail)
    .required(loginErrMgs.required),
  password: yup
    .string(loginErrMgs.invalidType)
    .min(6, loginErrMgs.minPassword)
    .max(40, loginErrMgs.maxPassword)
    .required(loginErrMgs.required),
});

export default loginSchema;
