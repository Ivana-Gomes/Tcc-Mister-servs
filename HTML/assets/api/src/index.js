import dotenv from 'dotenv';

import { app } from './app.js'

dotenv.config();

app.listen({host: 'localhost', port: 3232}).then(() => {

  console.log('Servidor está rodando e escutando na porta 3232');
});