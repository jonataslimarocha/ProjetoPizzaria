const acrescenta = document.getElementById('btacrecenta');
const diminui = document.getElementById('diminui');
const quantidadeInput = document.querySelector('.seletor-quantidade input');

let quantidade = 0;

acrescenta.onclick = function() {
  quantidade++;
  quantidadeInput.value = quantidade;
}
diminui.onclick = function() {
  if (quantidade > 0) {
    quantidade--;
    quantidadeInput.value = quantidade;
  }
}
