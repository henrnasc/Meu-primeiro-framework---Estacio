import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '.';

export const controleEditora = new ControleEditora();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const codEditora = Number(req.query.codEditora);

  switch (req.method) {
    case 'GET':
      try {
        const nomeEditora = await controleEditora.getNomeEditora(codEditora);
        res.status(200).json({ nome: nomeEditora });
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Erro interno do servidor' });
      }
      break;
    default:
      res.status(405).json({ message: 'Método não permitido' });
      break;
  }
}
