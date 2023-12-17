import {Diagnosis} from "../models/Diagnosis.js";

class DiagnosisService {
  static async getAllDiagnosis() {
    try {
      return Diagnosis.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getDiagnosisById(id) {
    try {
      const diagnosis = await Diagnosis.findById(id);
      if (!diagnosis) {
        throw new Error("Diagnosis not found.");
      }
      
      return diagnosis;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createDiagnosis(DiagnosisData) {
    try {
      const diagnosis = await Diagnosis.create(DiagnosisData);
      if (!diagnosis) {
        throw new Error("Diagnosis not found.");
      }
      
      return diagnosis;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateDiagnosis(id, DiagnosisData) {
    try {
      const diagnosis = await Diagnosis.findByIdAndUpdate(id, DiagnosisData);
      if (!diagnosis) {
        throw new Error("Diagnosis not found.");
      }

      return diagnosis;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteDiagnosis(id) {
    try {
      await Diagnosis.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default DiagnosisService;
