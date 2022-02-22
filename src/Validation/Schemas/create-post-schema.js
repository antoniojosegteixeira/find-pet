import * as yup from "yup";

export const createPostErrMsgs = {
  required: "Campo obrigatório",
  invalidType: "Campo inválido",
  date: "Insira uma data válida",
};

const createPostSchema = yup.object().shape({
  name: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
  species: yup
    .string(createPostErrMsgs.invalidType)
    .required(createPostErrMsgs.required),
  color: yup
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

/*




name: { type: String, required: true },
species: { type: String, required: true },
color: { type: String },
images: [{ type: String }],
description: { type: String, required: true },
city: { type: String, required: true },
state: { type: String, required: true },
date: { type: Date, required: true },
*/

export default createPostSchema;
