import Appointment from "../models/Appointment.js";
import ConsultationResult from "../models/ConsultationResult.js";

class AppointmentService {
  static async getAllAppointments() {
    try {
      const appointmentComplete = await Appointment.findAll({
        include: ConsultationResult,
      });

      return appointmentComplete;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAppointmentById(id) {
    try {
      return Appointment.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createAppointment(appointmentData) {
    try {
      return Appointment.create(appointmentData);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateAppointment(id, appointmentData) {
    try {
      const appointment = await Appointment.findById(id);
      if (!appointment) {
        throw new Error("Consulta não encontrada.");
      }
      await appointment.update(appointmentData);
      return appointment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteAppointment(id) {
    try {
      const appointment = await Appointment.findById(id);
      if (!appointment) {
        throw new Error("Consulta não encontrada.");
      }
      await appointment.destroy();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default AppointmentService;
