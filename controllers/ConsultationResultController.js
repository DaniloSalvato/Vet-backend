import ConsultationResultService from "../services/ConsultationResultService.js";

class ConsultationResultController {
  static async getAllConsultationResults(req, res) {
    try {
      const consultationResults =
        await ConsultationResultService.getAllConsultationResults();
      res.json(consultationResults);
    } catch (error) {
      console.error(`CONSULTATATIONRESULTS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async getConsultationResultById(req, res) {
    const { id } = req.params;
    try {
      const consultationResult =
        await ConsultationResultService.getConsultationResultById(id);
      if (!consultationResult) {
        return res
          .status(404)
          .json({ message: "Resultado da consulta não encontrado." });
      }
      res.json(consultationResult);
    } catch (error) {
      console.error(`CONSULTATATIONRESULTS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async createConsultationResult(req, res) {
    const consultationResultData = req.body;
    try {
      const newConsultationResult =
        await ConsultationResultService.createConsultationResult(
          consultationResultData
        );
      res.status(201).json(newConsultationResult);
    } catch (error) {
      console.error(`CONSULTATATIONRESULTS CONTROLLER: ${error}`);
      res.status(400).json({ error: error.message });
    }
  }

  static async updateConsultationResult(req, res) {
    const { id } = req.params;
    const consultationResultData = req.body;
    try {
      const updatedConsultationResult =
        await ConsultationResultService.updateConsultationResult(
          id,
          consultationResultData
        );
      res.json(updatedConsultationResult);
    } catch (error) {
      console.error(`CONSULTATATIONRESULTS CONTROLLER: ${error}`);
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteConsultationResult(req, res) {
    const { id } = req.params;
    try {
      await ConsultationResultService.deleteConsultationResult(id);
      res.json({ message: "Resultado da consulta removido com sucesso." });
    } catch (error) {
      console.error(`CONSULTATATIONRESULTS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }
}

export default ConsultationResultController;
