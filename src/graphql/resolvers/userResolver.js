import User from "../../models/user.js";

const userResolver = {
  Query: {
    users: async () => await User.findAll(),
  }
};

export default userResolver;
