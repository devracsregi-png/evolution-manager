
export const createInstance = async (req, res) => {
  res.json({ instance: 'created', data: req.body });
};
