const botaoAdicionar = document.getElementById("botao_add");
const lista = document.getElementById("lista");
const total = document.getElementById("total");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

let row_1 = document.createElement("tr");
let head1 = document.createElement("th");
head1.innerHTML = "Qtde";
let head2 = document.createElement("th");
head2.innerHTML = "Item";
let head3 = document.createElement("th");
head3.innerHTML = "Valor unitário";
let head4 = document.createElement("th");
head4.innerHTML = "Valor total";

row_1.appendChild(head1);
row_1.appendChild(head2);
row_1.appendChild(head3);
row_1.appendChild(head4);
thead.appendChild(row_1);

botaoAdicionar.onclick = function (event) {
  let item = document.getElementById("input_item").value;
  let quantidade = Number(document.getElementById("input_qtd").value);
  let preco = Number(document.getElementById("input_preco").value);

  if (quantidade <= 0 || preco <= 0) {
    alert("Quantidade e preço devem ser valores positivos");
    return;
  }

  precoTotal = preco * quantidade;

  let row_2 = document.createElement("tr");
  let data_1 = document.createElement("td");
  data_1.innerHTML = quantidade;
  let data_2 = document.createElement("td");
  data_2.innerHTML = item;
  let data_3 = document.createElement("td");
  data_3.innerHTML = preco;
  let data_4 = document.createElement("td");
  data_4.innerHTML = "R$ " + precoTotal;

  row_2.appendChild(data_1);
  row_2.appendChild(data_2);
  row_2.appendChild(data_3);
  row_2.appendChild(data_4);
  tbody.appendChild(row_2);

  lista.appendChild(table);

  total.innerText = Number(total.innerText) + precoTotal;
};
