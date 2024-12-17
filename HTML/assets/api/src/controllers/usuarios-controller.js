import bcrypt from 'bcryptjs';
import { prismaDb } from "../db.js";


export async function cadastrarUsuarioController(request, reply) {
  const dados = request.body;

  const senhaHash = await bcrypt.hash(dados.senha, 6);

  const usuario = await prismaDb.usuario.create({
    data: {
      nome: dados.nome,
      email: dados.email,
      senha: senhaHash,
      telefone: dados.telefone,
      cep: dados.cep,
      cidade: dados.cidade,
    }
  });

  return reply.status(200).send({
    mensagem: 'Usuário cadastrado com sucesso',
    usuario_id: usuario.id,
  });
}

export async function listarUsuariosController(request, reply) {
  const usuarios = await prismaDb.usuario.findMany()

  return reply.status(200).send(usuarios);
}

export async function listarUsuarioPorIdController(request, reply) {
  const { usuarioId } = request.params;

  const user = await prismaDb.usuario.findUnique({
    where: {
      id: usuarioId,
    }
  });

  if (user === null) {
    return reply.status(404).send({
      mensagem: 'Usuário não encontrado'
    });
  }

  return reply.status(200).send(user);
}