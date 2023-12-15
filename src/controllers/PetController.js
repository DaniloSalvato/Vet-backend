import PetService from "../services/PetService.js";

class PetController {
  static async getAllPets(req, res) {
    try {
      const pets = await PetService.getAllPets();
      res.status(201).json(pets);
    } catch (error) {
      console.error(`PET CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async getPetById(req, res) {
    const id = req.params.id;
    try {
      const pet = await PetService.getPetById(id);
      res.status(201).json(pet);
    } catch (error) {
      console.error(`PET CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async createPet(req, res) {
    const petData = req.body;
    try {
      const newPet = await PetService.createPet(petData);
      res.status(201).json(newPet);
    } catch (error) {
      console.error(`PET CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async updatePet(req, res) {
    const id = req.params.id;
    const petData = req.body;
    try {
      await PetService.updatePet(id, petData);
      res.status(201).send({ message: "Successfully updated." });
    } catch (error) {
      console.error(`PET CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async deletePet(req, res) {
    const id = req.params.id;
    try {
      await PetService.deletePet(id);
      res.json({ message: "Successfully deleted." });
    } catch (error) {
      console.error(`PET CONTROLLER: ${error}`);
      res.status(500).json({ error: `${error.message} - Deletion failed.` });
    }
  }
}

export default PetController;
