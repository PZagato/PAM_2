let contador = 0;
const botao = document.getElementById('meuBotao');
const contadorElemento = document.getElementById('contador');

botao.addEventListener('click', () => {
    contador++;
    contadorElemento.textContent = contador;
});
