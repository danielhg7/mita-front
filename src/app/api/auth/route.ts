import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'supersecret';

export async function POST(req: NextRequest) {

  const { username, password } = await req.json();

  // Hardcoded (solo para MVP, luego deberías validar contra una DB)
  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return NextResponse.json({ message: "Login exitoso", token }, { status: 200 });
  }

  return NextResponse.json({ message: "Credenciales inválidas" }, { status: 401 });
}