import User from "../../models/user.js";

const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await User.destroy(id);
  
      if (!result) {
        return res.status(404).json({ message: `User with id:${id} not found` });
      }
  
      res.status(200).json({ succefull: true, result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export default deleteUser;