import Owner from "../models/Owner.js";

class OwnerService {
  static async getAllOwners() {
    try {
      return await Owner.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getOwnerById(id) {
    try {
      const owner = await Owner.findById(id);
      if (!owner) {
        throw new Error("Owner not found.");
      }
      
      return owner;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createOwner(ownerData) {
    try {
      const owner = await Owner.create(ownerData);
      if (!owner) {
        throw new Error("Owner not found.");
      }
      
      return owner;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateOwner(id, ownerData) {
    try {
      const owner = await Owner.findByIdAndUpdate(id, ownerData);
      if (!owner) {
        throw new Error("Object not found.");
      }
      
      return owner;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteOwner(id) {
    try {
      return await Owner.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default OwnerService;
