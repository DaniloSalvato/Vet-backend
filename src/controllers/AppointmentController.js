import AppointmentService from "../services/AppointmentsService.js";

class AppointmentController {
  static async getAllAppointments(req, res) {
    try {
      const appointments = await AppointmentService.getAllAppointments();
      res.status(201).json(appointments);
    } catch (error) {
      console.error(`APPOINTMENTS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async getAppointmentById(req, res) {
    const id = req.params.id;
    try {
      const appointment = await AppointmentService.getAppointmentById(id);
      res.status(201).json(appointment);
    } catch (error) {
      console.error(`APPOINTMENTS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async createAppointment(req, res) {
    const appointmentData = req.body;
    try {
      const newAppointment = await AppointmentService.createAppointment(appointmentData);
      res.status(201).json(newAppointment);
    } catch (error) {
      console.error(`APPOINTMENTS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async updateAppointment(req, res) {
    const { id } = req.params;
    const appointmentData = req.body;
    try {
      await AppointmentService.updateAppointment(id,appointmentData);
      res.status(201).send({ message: "Successfully updated." });
    } catch (error) {
      console.error(`APPOINTMENTS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteAppointment(req, res) {
    const { id } = req.params;
    try {
      await AppointmentService.deleteAppointment(id);
      res.json({ message: "Consulta removida com sucesso." });
    } catch (error) {
      console.error(`APPOINTMENTS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }
}

export default AppointmentController;
