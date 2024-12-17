document
  .getElementById("formCad")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value;
    const cep = document.getElementById("cep").value;
    const cidade = document.getElementById("cidade").value;

    try {
      const response = await fetch(
        "http://localhost:3232/api/usuarios/cadastro",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            telefone: telefone,
            cep: cep,
            cidade: cidade,
          }),
        }
      );

      console.log("response: ", response);

      // Tratar erro da API
      if (response.ok === false) {
        alert("Houve um erro durante o processo de cadastro.");
        return;
      }

      alert("Cadastro feito com sucesso!");

      // Redirecionar para a página autenticado
      window.location.href = "/acessar.html";
    } catch (error) {
      console.log("erro: ", error);

      alert("Ops! Algo inesperado aconteceu. Tente novamente mais tarde");
    }
  });
