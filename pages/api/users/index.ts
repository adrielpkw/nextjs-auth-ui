import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.json(users);
  } else if (req.method === 'POST') {
    const { email, password } = req.body;
    const newUser = await prisma.user.create({
      data: { email, password },
    });
    res.status(201).json(newUser);
  }
}
