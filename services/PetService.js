import Pet from "../models/Pet.js";

class PetService {
  static async getAllPets() {
    try {
      return Pet.findAll();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getPetById(id) {
    try {
      return Pet.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createPet(petData) {
    try {
      return Pet.create(petData);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updatePet(id, petData) {
    try {
      const pet = await Pet.findById(id);
      if (!pet) {
        throw new Error("Animal de estimação não encontrado.");
      }
      await pet.update(petData);
      return pet;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deletePet(id) {
    try {
      const pet = await Pet.findById(id);
      if (!pet) {
        throw new Error("Animal de estimação não encontrado.");
      }
      await pet.destroy();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default PetService;
