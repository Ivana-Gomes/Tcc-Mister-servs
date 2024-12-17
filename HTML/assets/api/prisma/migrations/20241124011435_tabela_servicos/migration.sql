-- CreateTable
CREATE TABLE "servicos" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "nome_servico" TEXT NOT NULL,
    "descricao_servico" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "servicos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "servicos_id_key" ON "servicos"("id");

-- AddForeignKey
ALTER TABLE "servicos" ADD CONSTRAINT "servicos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
