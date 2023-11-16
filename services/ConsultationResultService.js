import ConsultationResult from "../models/ConsultationResult.js";

class ConsultationResultService {
  static async getAllConsultationResults() {
    try {
      return ConsultationResult.findAll();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getConsultationResultById(id) {
    try {
      return ConsultationResult.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createConsultationResult(consultationResultData) {
    try {
      return ConsultationResult.create(consultationResultData);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateConsultationResult(id, consultationResultData) {
    try {
      const consultationResult = await ConsultationResult.findById(id);
      if (!consultationResult) {
        throw new Error("Resultado da consulta não encontrado.");
      }
      await consultationResult.update(consultationResultData);
      return consultationResult;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteConsultationResult(id) {
    try {
      const consultationResult = await ConsultationResult.findById(id);
      if (!consultationResult) {
        throw new Error("Resultado da consulta não encontrado.");
      }
      await consultationResult.destroy();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ConsultationResultService;
