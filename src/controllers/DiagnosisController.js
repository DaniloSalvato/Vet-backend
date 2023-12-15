import DiagnosisService from "../services/DiagnosisService.js";

class DiagnosisController {
  static async getAllDiagnosis(req, res) {
    try {
      const Diagnosis = await DiagnosisService.getAllDiagnosis();
      res.status(201).json(Diagnosis);
    } catch (error) {
      console.error(`DIAGNOSIS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async getDiagnosisById(req, res) {
    const id = req.params.id;
    try {
      const Diagnosis = await DiagnosisService.getDiagnosisById(id);
      res.status(201).json(Diagnosis);
    } catch (error) {
      console.error(`DIAGNOSIS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async createDiagnosis(req, res) {
    const diagnosisData = req.body;
    try {
      const newDiagnosis = await DiagnosisService.createDiagnosis(
        diagnosisData
      );
      res.status(201).json(newDiagnosis);
    } catch (error) {
      console.error(`DIAGNOSIS CONTROLLER: ${error}`);
      res.status(400).json({ error: error.message });
    }
  }

  static async updateDiagnosis(req, res) {
    const id = req.params.id;
    const DiagnosisData = req.body;
    try {
      await DiagnosisService.updateDiagnosis(id, DiagnosisData);
      res.status(201).send({ message: "Successfully updated." });
    } catch (error) {
      console.error(`DIAGNOSIS CONTROLLER: ${error}`);
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteDiagnosis(req, res) {
    const { id } = req.params;
    try {
      await DiagnosisService.deleteDiagnosis(id);
      res.json({ message: "Successfully deleted" });
    } catch (error) {
      console.error(`DIAGNOSIS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }
}

export default DiagnosisController;
