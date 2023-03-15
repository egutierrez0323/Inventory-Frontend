import { config } from "dotenv";
// import {
//   BASE_URL_BACKEND,
// } from './configGuard';
config();

// console.log(process.env.NICKNAME);

export default {
  //Entorno del proyecto
  url_backend: process.env.BASE_URL_BACKEND || "",
};
