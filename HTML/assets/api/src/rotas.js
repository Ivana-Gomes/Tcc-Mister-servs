import { autenticacaoController } from "./controllers/autenticacao-controller.js";
import { criarServicoController, listarServicosUsuario } from "./controllers/servicos-controller.js";
import { cadastrarUsuarioController, listarUsuarioPorIdController, listarUsuariosController } from "./controllers/usuarios-controller.js";

async function usuariosRotas(app) {
  app.post('/usuarios/cadastro', cadastrarUsuarioController);
  
  app.get('/usuarios', listarUsuariosController);
  app.get('/usuarios/:usuarioId', listarUsuarioPorIdController);
}

async function autenticacaoRotas(app) {
  app.post('/login', autenticacaoController);
}


async function servicosRotas(app) {
  app.post('/servicos', criarServicoController);
  
  app.get('/servicos/:usuarioId', listarServicosUsuario);
}

export async function rotas(app) {
  app.register(usuariosRotas);
  app.register(autenticacaoRotas);
  app.register(servicosRotas);
}

