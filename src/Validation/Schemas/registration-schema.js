import * as yup from "yup";

export const registerErrMgs = {
  required: "Campo obrigatório",
  invalidType: "Campo inválido",
  nameMin: "Nome deve conter no mínimo 4 caracteres",
  cityMin: "Nome da cidade deve conter no mínimo 3 caracteres",
  invalidEmail: "Insira um email válido",
  minPassword: "Senha deve conter no mínimo 6 dígitos",
  maxPassword: "Senha deve conter no máximo 40 dígitos",
  matchingPassword: "Senhas não conferem",
};

const registrationSchema = yup.object().shape({
  fullName: yup
    .string(registerErrMgs.invalidType)
    .min(4, registerErrMgs.nameMin)
    .required(registerErrMgs.required),
  email: yup
    .string(registerErrMgs.invalidType)
    .email(registerErrMgs.invalidEmail)
    .required(registerErrMgs.required),
  city: yup
    .string(registerErrMgs.invalidType)
    .min(3, registerErrMgs.cityMin)
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
