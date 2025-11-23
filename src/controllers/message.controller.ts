
export const sendMessage = async (req, res) => {
  res.json({ message: 'sent', data: req.body });
};
