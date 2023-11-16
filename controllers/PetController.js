import PetService from "../services/PetService.js";

class PetController {
  static async getAllPets(req, res) {
    try {
      const pets = await PetService.getAllPets();
      res.json(pets);
    } catch (error) {
      console.error(`APPOINTMENTS CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async getPetById(req, res) {
    const { id } = req.params;
    try {
      const pet = await PetService.getPetById(id);
      if (!pet) {
        return res
          .status(404)
          .json({ message: "Animal de estimação não encontrado." });
      }
      res.json(pet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createPet(req, res) {
    const petData = req.body;
    try {
      const newPet = await PetService.createPet(petData);
      res.status(201).json(newPet);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updatePet(req, res) {
    const { id } = req.params;
    const petData = req.body;
    try {
      const updatedPet = await PetService.updatePet(id, petData);
      res.json(updatedPet);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deletePet(req, res) {
    const { id } = req.params;
    try {
      await PetService.deletePet(id);
      res.json({ message: "Animal de estimação removido com sucesso." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default PetController;
