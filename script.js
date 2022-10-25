const botaoAdicionar = document.getElementById("botao_add");
const lista = document.getElementById("lista");

botaoAdicionar.onclick = function(event){
    let item = document.getElementById("input_item").value;
    let quantidade = document.getElementById("input_qtd").value;
    let preco = document.getElementById("input_preco").value;

    novoItem = document.createElement("li");
    novoItem.innerText = item + "\t" + quantidade + "\t" + preco

    lista.appendChild(novoItem);
}
