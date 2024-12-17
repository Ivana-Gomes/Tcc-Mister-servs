import fastify from "fastify";
import cors from '@fastify/cors';
import { rotas } from "./rotas.js";

export const app = fastify();

app.register(cors, {
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  origin: '*'
});

app.register(rotas, {prefix: '/api'})