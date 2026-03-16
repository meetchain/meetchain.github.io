function scrollTo(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.btn-pay').forEach(btn => {
  btn.addEventListener('click', () => {
    const amount = btn.dataset.amount;
    const modal = document.getElementById('payModal');
    const amountEl = document.getElementById('modalAmount');

    if (amount === 'custom') {
      amountEl.textContent = '请扫码联系我们';
    } else {
      amountEl.textContent = '¥' + Number(amount).toLocaleString();
    }

    modal.classList.add('active');
    switchTab('wechat');
  });
});

document.querySelectorAll('.pay-tab').forEach(tab => {
  tab.addEventListener('click', () => switchTab(tab.dataset.method));
});

function switchTab(method) {
  document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.pay-tab[data-method="${method}"]`).classList.add('active');
  document.getElementById('qrWechat').classList.toggle('hidden', method !== 'wechat');
  document.getElementById('qrAlipay').classList.toggle('hidden', method !== 'alipay');
}

function closeModal() {
  document.getElementById('payModal').classList.remove('active');
}

document.getElementById('payModal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.borderBottomColor = window.scrollY > 50 ? 'rgba(42,42,62,1)' : 'rgba(42,42,62,0.5)';
});