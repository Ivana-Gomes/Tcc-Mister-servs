let boxBuscar = document.querySelector(".pesquisa");

let lupa = document.querySelector(".lupa-buscar");

let x = document.querySelector(".btn-fechar");

lupa.addEventListener("click", () => {
  boxBuscar.classList.add("ativar");
});

x.addEventListener("click", () => {
  boxBuscar.classList.remove("ativar");
});
