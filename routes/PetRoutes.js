import express from "express";
import PetController from "../controllers/PetController.js";

const routes = express.Router();

routes.get("/pets", PetController.getAllPets);
routes.get("/pets/:id", PetController.getPetById);
routes.post("/pets", PetController.createPet);
routes.put("/pets/:id", PetController.updatePet);
routes.delete("/pets/:id", PetController.deletePet);

export default routes;
