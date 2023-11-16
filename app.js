import Express from "express";
import Routes from "./routes/index.js";
import sequelize from "./config/Database.js";

sequelize.sync().then(() => console.log("Database connection successfully"));

const app = Express();
Routes(app);

app.listen(3000, () => {
  console.log("Servidor Iniciado");
});
