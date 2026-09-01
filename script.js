const form = document.querySelector('#join-form');
const success = document.querySelector('#form-success');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  if (!email) return;
  success.hidden = false;
  form.querySelector('input').value = '';
  form.querySelector('button').textContent = 'Joined ✓';
});

const header = document.querySelector('.site-header');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  if (!header) return;
  header.style.background = currentY > 24 ? 'linear-gradient(180deg, rgba(8,7,6,.96), rgba(8,7,6,.78), transparent)' : 'transparent';
  header.style.backdropFilter = currentY > 24 ? 'blur(10px)' : 'none';
  header.style.transition = 'background .25s ease, backdrop-filter .25s ease';
  lastY = currentY;
}, { passive: true });
