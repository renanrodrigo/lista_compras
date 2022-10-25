const botaoAdicionar = document.getElementById("botao_add");
const lista = document.getElementById("lista");
const total = document.getElementById("total");

botaoAdicionar.onclick = function(event){
    let item = document.getElementById("input_item").value;
    let quantidade = Number(document.getElementById("input_qtd").value);
    let preco = Number(document.getElementById("input_preco").value);

    if(quantidade <= 0 || preco <= 0){
        alert("Quantidade e preço devem ser valores positivos");
        return
    }

    precoTotal = (preco * quantidade);

    novoItem = document.createElement("li");
    novoItem.innerText = item + "\t" + quantidade + "\t" + preco + "\t" + precoTotal;

    lista.appendChild(novoItem);

    total.innerText = Number(total.innerText) + precoTotal;
}
