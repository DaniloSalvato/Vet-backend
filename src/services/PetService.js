import Pet from "../models/Pet.js";

class PetService {
  static async getAllPets() {
    try {
      return Pet.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getPetById(id) {
    try {
      const pet = await Pet.findById(id);
      if (!pet) {
        throw new Error("Pet not found.");
      }
      
      return pet;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createPet(petData) {
    try {
      const pet = await Pet.create(petData);
      if (!pet) {
        throw new Error("Pet not found.");
      }
      return pet
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updatePet(id, petData) {
    try {
      const pet = await Pet.findByIdAndUpdate(id, petData);
      if (!pet) {
        throw new Error("Pet not found.");
      }
      return pet
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deletePet(id) {
    try {
    await Pet.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default PetService;