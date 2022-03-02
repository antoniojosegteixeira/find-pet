import * as yup from "yup";

export const createPostErrMsgs = {
  required: "Campo obrigatório",
  invalidType: "Campo inválido",
  date: "Insira uma data válida",
};

const createPostSchema = yup.object().shape({
  animalName: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
  breed: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
  age: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
  description: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
  city: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
  state: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
  date: yup.date(createPostErrMsgs.date).required(createPostErrMsgs.required),
});

export default createPostSchema;
