document.getElementById("btnProximo").addEventListener("click", function (e) {
  e.preventDefault();

  const formNome = document.getElementById("formNome");
  const formEmail = document.getElementById("formEmail");
  const btnVoltar = document.getElementById("btnVoltar");
  const btnSalvar = document.getElementById("btnSalvar");
  const btnProximo = document.getElementById("btnProximo");


  // Esconder o campo de nome
  formNome.classList.add("opacity-0", "-translate-y-20", "pointer-events-none");
  btnVoltar.classList.add("opacity-100");
  btnSalvar.classList.add("block");
  btnSalvar.classList.remove("hidden");
  btnProximo.classList.add("hidden");


  // Mostrar o campo de email
  formEmail.classList.remove("opacity-0", "translate-y-20", "pointer-events-none");
  formEmail.classList.add("opacity-100", "translate-y-0");
});

document.getElementById("btnVoltar").addEventListener("click", function (e) {
  e.preventDefault();

  const formNome = document.getElementById("formNome");
  const formEmail = document.getElementById("formEmail");
  const btnVoltar = document.getElementById("btnVoltar");
  const btnSalvar = document.getElementById("btnSalvar");
  const btnProximo = document.getElementById("btnProximo");
  
  
  // Esconder o campo de nome
  formNome.classList.remove("opacity-0", "-translate-y-20", "pointer-events-none");
  btnVoltar.classList.remove("opacity-100");
  btnSalvar.classList.remove("block");
  btnSalvar.classList.add("hidden");
  btnProximo.classList.remove("hidden");

  // Mostrar o campo de email
  formEmail.classList.add("opacity-0", "translate-y-20", "pointer-events-none");
  formEmail.classList.remove("opacity-100", "translate-y-0");
});
