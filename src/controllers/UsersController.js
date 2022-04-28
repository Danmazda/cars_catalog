import User from '../models/Users.model.js';

export const login = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
