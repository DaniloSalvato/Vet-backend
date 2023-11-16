import Owner from "../models/Owner.js";
import Pet from "../models/Pet.js";

class OwnerService {
  static async getAllOwners() {
    try {
      return Owner.findAll();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getOwnerById(id) {
    try {
      return Owner.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAllOwnersAndPets() {
    try {
      const ownersWithPets = await Owner.findAll({
        include: Pet,
      });
      return ownersWithPets;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createOwner(ownerData) {
    try {
      return Owner.create(ownerData);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateOwner(id, ownerData) {
    try {
      const owner = await Owner.findById(id);
      if (!owner) {
        throw new Error("Proprietário não encontrado.");
      }
      await owner.update(ownerData);
      return owner;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteOwner(id) {
    try {
      const owner = await Owner.findById(id);
      if (!owner) {
        throw new Error("Proprietário não encontrado.");
      }
      await owner.destroy();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default OwnerService;
