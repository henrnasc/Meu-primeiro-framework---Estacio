import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from "../../../classes/controle/ControleEditora";

export const controleEditora = new ControleEditora();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const editoras = await controleEditora.getEditoras();
        res.status(200).json(editoras);
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
