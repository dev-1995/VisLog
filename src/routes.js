import createLog from "./Controller/Logs/CreateLog";
import Joi from "joi";
export default [
  {
    method: "GET",
    path: "/home",
    handler: (req, h) => {
      return h.response({ message: "Welcome Home!" });
    }
  },
  {
    method: "GET",
    path: "/{p*}",
    handler: (req, h) => {
      return h.redirect("/home");
    }
  },
  {
    method: "POST",
    path: "/api/v1/getotp",
    config: {
      auth: false,
      payload: {
        maxBytes: 1048576 * 5,
        output: "stream",
        allow: "multipart/form-data" // important
      },
      validate: {
        payload: {
          name: Joi.string().required(),
          date: Joi.date().required(),
          email: Joi.string()
            .email()
            .required(),
          contact: Joi.string()
            .min(10)
            .max(10)
            .required(),
          doc: Joi.required(),
          slotTime: Joi.date().required(),
          fileName: Joi.string().required()
        }
      }
    },
    handler: createLog
  },
  {
    method: "POST",
    path: "/createLog",
    config: {
      auth: false,
      validate: {
        payload: {
          ok: Joi.string().required()
        }
      }
    },
    handler: createLog
  }
];
