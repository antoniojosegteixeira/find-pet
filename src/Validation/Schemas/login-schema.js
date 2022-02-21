import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string("Campo inválido")
    .email("Insira um email válido")
    .required("Campo obrigatório"),
  password: yup
    .string("Campo inválido")
    .min(6, "Senha deve conter no mínimo 6 dígitos")
    .max(40, "Senha deve conter no máximo 40 dígitos")
    .required("Campo obrigatório"),
});

export default loginSchema;
