import { Password } from "@mui/icons-material";
import config from "../config";
import { UserCredentials } from "../models/Login/userCredentials.model";

// const options: any = 


export const LoginUser = (user: string, passsword: string) => {
  const credentials: UserCredentials = new UserCredentials(user, passsword);
  fetch('http://localhost:3000/auth/login', {
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log("credeciales",credentials);
  // console.log(config.url_backend);
};
