// Shopping cart logic

// Initialize with empty cart
window.onload = function() {
  carrinho = [];
  atualizarCarrinho();
};


// Add product to cart
function adicionar() {
  let select = document.getElementById('produto');
  let inputQtd = document.getElementById('quantidade');
  let produtoSelecionado = select.value;
  let [nome, precoStr] = produtoSelecionado.split(' - R$');
  let preco = Number(precoStr);
  let quantidade = Number(inputQtd.value);

  if (!quantidade || quantidade < 1) {
    alert('Informe uma quantidade válida!');
    return;
  }

  // Check if product already in cart
  const existente = carrinho.find(item => item.nome === nome);
  if (existente) {
    existente.quantidade += quantidade;
  } else {
    carrinho.push({ nome, preco, quantidade });
  }

  atualizarCarrinho();
  inputQtd.value = '';
}


// Clear cart
function limpar() {
  carrinho = [];
  atualizarCarrinho();
}


// Cart array to store products
let carrinho = [];

// Product options with prices
const produtos = {
  "Fone de ouvido": 100,
  "Celular": 1400,
  "Oculus VR": 5000
};


// Helper to update cart display
function atualizarCarrinho() {
  const lista = document.getElementById('lista-produtos');
  const valorTotal = document.getElementById('valor-total');
  lista.innerHTML = '';

  let total = 0;

  carrinho.forEach(item => {
    const section = document.createElement('section');
    section.className = 'carrinho__produtos__produto';
    section.innerHTML = `<span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">R$${item.preco * item.quantidade}</span>`;
    lista.appendChild(section);
    total += item.preco * item.quantidade;
  });

  valorTotal.textContent = `R$${total}`;
}
