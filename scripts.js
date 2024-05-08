const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");
const servicos = document.querySelector(".falar")

function mostrarForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}

function esconderForm(){
  form.style.left = "-300px";
  form.style.transform = "translateX(0)";
  mascara.style.visibility = "hidden";
}

function falarConoscoAparecer() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}
