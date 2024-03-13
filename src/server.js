import express from "express";
import morgan from "morgan";
import router from "./routes";
import cors from "cors";
import cookieParser from "cookie-parser";

export const initServer = () => {
  const app = express();

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT"],
    credentials: true,
  }));
  app.use(router);
  

  return app;
};
