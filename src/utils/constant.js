import { config } from "dotenv";

config();
// export let password=process.env.EMAIL;
// export let email=process.env.PASSWORD;
export let secretKey=process.env.SECRET_KEY;
export let port=process.env.PORT;
export let dbUrl=process.env.DB_URL; 