import * as yup from "yup";

export const registerErrMgs = {
  required: "Campo obrigatório",
  invalidType: "Campo inválido",
  nameMin: "Nome deve conter no mínimo 2 caracteres",
  invalidEmail: "Insira um email válido",
  minPassword: "Senha deve conter no mínimo 6 dígitos",
  maxPassword: "Senha deve conter no máximo 40 dígitos",
  matchingPassword: "Senhas não conferem",
};

const registrationSchema = yup.object().shape({
  name: yup
    .string(registerErrMgs.invalidType)
    .min(2, registerErrMgs.nameMin)
    .required(registerErrMgs.required),
  email: yup
    .string(registerErrMgs.invalidType)
    .email(registerErrMgs.invalidEmail)
    .required(registerErrMgs.required),
  password: yup
    .string(registerErrMgs.invalidType)
    .min(6, registerErrMgs.minPassword)
    .max(40, registerErrMgs.maxPassword)
    .required(registerErrMgs.required),
  confPassword: yup
    .string(registerErrMgs.invalidType)
    .required(registerErrMgs.required)
    .oneOf([yup.ref("password"), null], registerErrMgs.matchingPassword),
});

export default registrationSchema;
