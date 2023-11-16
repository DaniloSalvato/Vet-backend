import express from "express";
import ConsultationResultController from "../controllers/ConsultationResultController.js";

const router = express.Router();

router.get(
  "/consultation-results",
  ConsultationResultController.getAllConsultationResults
);
router.get(
  "/consultation-results/:id",
  ConsultationResultController.getConsultationResultById
);
router.post(
  "/consultation-results",
  ConsultationResultController.createConsultationResult
);
router.put(
  "/consultation-results/:id",
  ConsultationResultController.updateConsultationResult
);
router.delete(
  "/consultation-results/:id",
  ConsultationResultController.deleteConsultationResult
);

export default router;
