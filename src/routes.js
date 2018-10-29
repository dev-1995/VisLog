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
