import 'dotenv/config'
import Express from "express";
import Routes from "./routes/index.js";
import Connection from "../config/Database.js"

const PORT = 3000
const app = Express();
Routes(app);

app.listen(PORT, () => {
  console.log("Servidor Iniciado");
});

await Connection(); 




