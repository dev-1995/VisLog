import createLog from "./Controller/Logs/CreateLog";
import Joi from "joi";
import OutLog from "./Controller/Logs/OutLog";
import GetAllLogs from "./Controller/Logs/GetAllLogs";
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
    path: "/createlog",
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
          contact: Joi.string()
            .min(10)
            .max(11)
            .required(),
          gender: Joi.string().required(),
          location: Joi.string().required(),
          vehicleNo: Joi.string().required(),
          vehicleType: Joi.string().required(),
          image: Joi.required()
        }
      }
    },
    handler: createLog
  },
  {
    method: "POST",
    path: "/outlog",
    config: {
      validate: {
        payload: {
          OID: Joi.string().required()
        }
      }
    },
    handler: OutLog
  },

  {
    method: "GET",
    path: "/getpending",
    handler: GetAllLogs
  }
];
