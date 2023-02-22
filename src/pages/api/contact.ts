import type { NextApiRequest, NextApiResponse } from 'next';

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (message.length < 10) {
    return res.status(400).json({ error: 'Message too short' });
  }

  return res.status(200).json({ message: 'Message received' });
};

export default contact;
