
const modal = document.getElementById('modalLogin');
const btn = document.getElementById('btnAbrirLogin'); // Seu botão de Login
const span = document.getElementsByClassName('fechar')[0]; // O botão de fechar (X)

// 1. Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// 2. Quando o usuário clica no (x), fecha o modal
span.onclick = function() {
  modal.style.display = 'none';
}

// 3. Quando o usuário clica em qualquer lugar fora do modal, fecha ele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
