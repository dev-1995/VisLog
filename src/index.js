import Hapi from "hapi";
import Routes from "./routes";
import { load as loadEnv } from "dotenv";
import FormatJoi from "joi-error-formatter";
import Boom from "boom";
import "./DB";
import "babel-polyfill";
loadEnv();
const Server = Hapi.Server({
  port: process.env.PORT || 9000,
  // host: "localhost",
  routes: {
    validate: {
      options: { abortEarly: false },
      failAction: async (request, h, err) => {
        if (process.env.NODE_ENV === "production") {
          // In prod, log a limited error message and throw the default Bad Request error.
          console.error("ValidationError:", err.message); // Better to use an actual logger here.
          throw Boom.badRequest(`Invalid request payload input`);
        } else {
          // During development, log and respond with the full error.
          console.log("Error");
          const error = FormatJoi(err);
          console.log(error);
          // return new Error("Error");
          throw Boom.badRequest(error);
        }
      }
    }
  }
});

const init = async () => {
  await Server.start();
  Server.route(Routes);
  console.log(`Running at ${Server.info.uri}`);
};
init();
