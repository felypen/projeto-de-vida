const botoes = document.querySelectorAll(".botao");
console.log(botoes);
for (let i = 0; i < botoes.lengt;i++) {
   console.log(i);
    
}
botoes[i].onclick = function () {
    botoes[i].classList.add("ativo");

    }
