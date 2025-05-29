import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'supersecret';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, password } = req.body;

  // Hardcoded (solo para MVP, luego deberías validar contra una DB)
  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  res.status(401).json({ message: 'Credenciales inválidas' });
}