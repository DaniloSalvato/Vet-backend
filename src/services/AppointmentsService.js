import {Appointment} from "../models/Appointment.js";

class AppointmentService {
  static async getAllAppointments() {
    try {
      return await Appointment.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAppointmentById(id) {
    try {
      const appointment = Appointment.findById(id);
      if (!appointment) {
        throw new Error("Appointment not found.");
      }
      
      return appointment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createAppointment(appointmentData) {
    try {
      const appointment = Appointment.create(appointmentData);
      if (!appointment) {
        throw new Error("Appointment not found.");
      }
      return appointment
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateAppointment(id, appointmentData) {
    try {
      const appointment = await Appointment.findByIdAndUpdate(id, appointmentData);
      if (!appointment) {
        throw new Error("Appointment not found.");
      }
  
      return appointment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteAppointment(id) {
    try {
    await Appointment.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default AppointmentService;