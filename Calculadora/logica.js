function adicinar (valor) {
    let telaCalculadora = document.getElementById("telaCalculadora")
    telaCalculadora.value = telaCalculadora.value + valor;
}

function calcular(){
let telaCalculadora = document.getElementById("telaCalculadora")
let resultado = eval(telaCalculadora.value);
telaCalculadora.value = resultado;
}

function limpar() {
document.getElementById("telaCalculadora").value = " ";

}