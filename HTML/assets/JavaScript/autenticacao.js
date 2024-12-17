document
  .getElementById("formularioLogin")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // Pegar os valores dos inputs:

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
      // Enviando os dados para a API de login
      const response = await fetch("http://localhost:3232/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
        }),
      });

      // Tratar erro da API
      if (response.ok === false) {
        alert(
          "E-mai ou Senha inválidos, por favor verifique suas credenciais e tente novamente."
        );
        return;
      }

      alert("Login Feito com Sucesso!");

      // Redirecionar para a página autenticado
      window.location.href = "./home.html";
    } catch (error) {
      console.log("erro: ", error);

      alert("Ops! Algo inesperado aconteceu. Tente novamente mais tarde");
    }
  });
