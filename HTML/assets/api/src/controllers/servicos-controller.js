import { prismaDb } from "../db.js";


export async function criarServicoController(request, reply) {
  const dados = request.body;

  const user = await prismaDb.usuario.findUnique({
    where: {
      id: dados.usuarioId,
    }
  });

  if (user === null) {
    return reply.status(404).send({
      mensagem: 'Usuário não encontrado'
    });
  }


  const servico = await prismaDb.servico.create({
    data: {
      usuarioId: user.id,
      nomeServico: dados.nomeServico,
      descricaoServico: dados.descricaoServico,
    }
  })

  return reply.status(200).send({
    mensagem: 'Serviço foi criado com sucesso',
    servico,
  });
}

export async function listarServicosUsuario(request, reply) {
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

  const servicos = await prismaDb.servico.findMany({
    where: {
      usuarioId: usuarioId,
    }
  })

  return reply.status(200).send(servicos);
}