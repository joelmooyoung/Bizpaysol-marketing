function toggleChat() {
  const el = document.getElementById('chat-window');
  const btn = document.getElementById('chat-toggle');
  if (!el || !btn) return;
  const hidden = el.classList.contains('hidden');
  if (hidden) {
    el.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    el.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  }
}

function init() {
  const toggle = document.getElementById('chat-toggle');
  const close = document.getElementById('chat-close');
  if (toggle) toggle.addEventListener('click', toggleChat);
  if (close) close.addEventListener('click', toggleChat);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
