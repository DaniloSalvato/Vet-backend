import OwnerService from "../services/OwnerService.js";

class OwnerController {
  static async getAllOwners(req, res) {
    try {
      const owners = await OwnerService.getAllOwners();
      res.json(owners);
    } catch (error) {
      console.error(`OWNER CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async getOwnerById(req, res) {
    const { id } = req.params;
    try {
      const owner = await OwnerService.getOwnerById(id);
      if (!owner) {
        return res
          .status(404)
          .json({ message: "Proprietário não encontrado." });
      }
      res.json(owner);
    } catch (error) {
      console.error(`OWNER CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllOwnersAndPets(req, res) {
    try {
      const ownersWithPets = await OwnerService.getAllOwnersAndPets();
      res.status(200).json({ owners: ownersWithPets });
    } catch (error) {
      console.error(`OWNER CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async createOwner(req, res) {
    const ownerData = req.body;
    try {
      const newOwner = await OwnerService.createOwner(ownerData);
      res.status(201).json(newOwner);
    } catch (error) {
      console.error(`OWNER CONTROLLER: ${error}`);
      res.status(400).json({ error: error.message });
    }
  }

  static async updateOwner(req, res) {
    const { id } = req.params;
    const ownerData = req.body;
    try {
      const updatedOwner = await OwnerService.updateOwner(id, ownerData);
      res.json(updatedOwner);
    } catch (error) {
      console.error(`OWNER CONTROLLER: ${error}`);
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteOwner(req, res) {
    const { id } = req.params;
    try {
      await OwnerService.deleteOwner(id);
      res.json({ message: "Proprietário removido com sucesso." });
    } catch (error) {
      console.error(`OWNER CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }
}

export default OwnerController;
