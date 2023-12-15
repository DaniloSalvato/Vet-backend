import OwnerService from "../services/OwnerService.js";

class OwnerController {
  static async getAllOwners(req, res) {
    try {
      const owners = await OwnerService.getAllOwners();
      res.status(201).json(owners);
    } catch (error) {
      console.error(`OWNER CONTROLLER: ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async getOwnerById(req, res) {
    const id = req.params.id;
    try {
      const owner = await OwnerService.getOwnerById(id);
      res.status(201).json(owner);
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
    const id = req.params.id;
    const ownerData = req.body;
    try {
      await OwnerService.updateOwner(id, ownerData);
      res.status(201).send("Owner updated successfully.");
    } catch (error) {
      console.error(`OWNER CONTROLLER: ${error}`);
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteOwner(req, res) {
    const { id } = req.params;
    try {
      await OwnerService.deleteOwner(id);
      res.status(201).json({ message: "Successfully deleted." });
    } catch (error) {
      console.error(`OWNER CONTROLLER: ${error}`);
      res.status(500).json({ error: `${error.message} - Deletion failed.` });
    }
  }
}

export default OwnerController;
