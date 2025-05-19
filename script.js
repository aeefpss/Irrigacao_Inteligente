const toggleBtn = document.getElementById('toggleMore');
const moreInfo = document.getElementById('moreInfo');

toggleBtn.addEventListener('click', () => {
  const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
  if (isExpanded) {
    moreInfo.hidden = true;
    toggleBtn.textContent = 'Saiba mais';
  } else {
    moreInfo.hidden = false;
    toggleBtn.textContent = 'Mostrar menos';
  }
});
