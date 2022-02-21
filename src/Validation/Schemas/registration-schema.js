import * as yup from "yup";

const registrationSchema = yup.object().shape({
  name: yup
    .string("Campo inválido")
    .min(2, "Nome deve conter no mínimo 2 caracteres")
    .required("Campo obrigatório"),
  email: yup
    .string("Campo inválido")
    .email("Insira um email válido")
    .required("Campo obrigatório"),
  password: yup
    .string("Campo inválido")
    .min(6, "Senha deve conter no mínimo 6 dígitos")
    .max(40, "Senha deve conter no máximo 40 dígitos")
    .required("Campo obrigatório"),
  confPassword: yup
    .string("Campo inválido")
    .required("Campo obrigatório")
    .oneOf([yup.ref("password"), null]),
});

export default registrationSchema;
