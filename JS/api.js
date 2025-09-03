// === Configurações ===
// Coloque aqui a URL do Web App do Apps Script (termina em /exec)
const API_BASE = "https://script.google.com/macros/s/AKfycbxMFYs2POWJWJ3kQt08f-4Mtf5VBGOQxKvt9NSoUoFWct_LE1AVOp2nEZ3Y7Gyp0oPoAQ/exec";
                    
// Coloque aqui a URL pública do seu checkout.html no GitHub Pages
// (ex: https://seuusuario.github.io/seurepo/checkout.html)
const CHECKOUT_BASE = "https://permagnani.github.io/Proto-separacao/";

// === Funções para falar com o backend ===

// Cria um pedido e salva no Google Sheets
async function createOrder(payload) {
  const body = { action: "create", checkoutBase: CHECKOUT_BASE, ...payload };
  const r = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return r.json();
}

// Pega os itens de um pedido específico pelo orderId
async function getOrder(orderId) {
  const url = `${API_BASE}?id=${encodeURIComponent(orderId)}`;
  const r = await fetch(url);
  return r.json();
}

// Salva o resultado do checkout (quando alguém confere item a item)
async function submitCheckout(payload) {
  const body = { action: "checkout", ...payload };
  const r = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return r.json();
}

