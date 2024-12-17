import bcrypt from 'bcryptjs';
import { prismaDb } from "../db.js";

export async function autenticacaoController(request, reply) {
  const dadosRequisicao = request.body;
    
    //Verificar se o usuário existe no BD
  
    const usuario = await prismaDb.usuario.findUnique({
      where: {
        email: dadosRequisicao.email
      }
    })
  
    if (usuario === null) {
      return reply.status(401).send({
        mensagem: 'Credenciais inválidas'
      });
    }
  
    const senhaValida = await bcrypt.compare(dadosRequisicao.senha, usuario.senha);
  
    if(senhaValida === false) {
      return reply.status(401).send({
        mensagem: 'Credenciais inválidas'
      });
    }
  
    return reply.status(204).send();
}