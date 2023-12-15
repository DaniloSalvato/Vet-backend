import express from "express";
import DiagnosisController from "../controllers/DiagnosisController.js";

const router = express.Router();

router.get(
  "/diagnosis",
  DiagnosisController.getAllDiagnosis
);
router.get(
  "/diagnosis/:id",
  DiagnosisController.getDiagnosisById
);
router.post(
  "/diagnosis",
  DiagnosisController.createDiagnosis
);
router.put(
  "/diagnosis/:id",
  DiagnosisController.updateDiagnosis
);
router.delete(
  "/diagnosis/:id",
  DiagnosisController.deleteDiagnosis
);

export default router;
