import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const id = parseInt(req.query.id);

  if (req.method === 'DELETE') {
    await prisma.user.delete({ where: { id } });
    res.status(204).end();
  }
}
