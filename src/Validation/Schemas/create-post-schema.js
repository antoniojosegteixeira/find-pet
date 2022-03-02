import * as yup from "yup";

export const createPostErrMsgs = {
  required: "Campo obrigatório",
  invalidType: "Campo inválido",
};

const createPostSchema = yup.object().shape({
  animalName: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
  breed: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
  description: yup.string(createPostErrMsgs.invalidType),
  city: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
});

export default createPostSchema;
