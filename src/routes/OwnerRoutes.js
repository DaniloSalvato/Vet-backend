// ownerRoutes.js
import express from "express";
import OwnerController from "../controllers/OwnerController.js";

const router = express.Router();

router.get("/owners", OwnerController.getAllOwners);
router.get("/owners/:id", OwnerController.getOwnerById);
router.post("/owners", OwnerController.createOwner);
router.put("/owners/:id", OwnerController.updateOwner);
router.delete("/owners/:id", OwnerController.deleteOwner);

export default router;
