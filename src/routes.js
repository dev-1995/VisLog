import createLog from "./Controller/Logs/CreateLog";
import Joi from "joi";
import OutLog from "./Controller/Logs/OutLog";
import GetAllLogs from "./Controller/Logs/GetAllLogs";
import path from "path";
export default [
  {
    method: "GET",
    path: "/",
    config: {
      auth: false
    },
    handler: (req, h) => {
      return h.file("client/build/index.html");
    }
  },
  {
    method: "GET",
    path: "/static/{param*}",
    config: {
      auth: false
    },
    handler: {
      directory: {
        path: "client/build/static"
      }
    }
  },
  {
    method: "GET",
    path: "/uploads/{file*}",
    config: {
      auth: false
    },
    handler: (req, h) => {
      console.log(req);
      console.log(path.resolve() + "src/Uploads/" + req.params.file);
      return h.file(path.resolve() + "/src/Uploads/" + req.params.file);

      // return { ok: "ok" };
    }
  },
  {
    method: "GET",
    path: "/{p*}",
    handler: (req, h) => {
      return h.redirect("/");
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
          image: Joi.required(),
          noimage: Joi.bool().required()
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
