const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('inquiry-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form).entries());
  const subject = `MIS Care Transportation Inquiry - ${values.name}`;
  const body = [
    'Hello MIS Care,', '',
    'I would like to inquire about medical transportation.', '',
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Requested date: ${values.date || 'To be discussed'}`,
    `Trip type: ${values.type || 'General inquiry'}`, '',
    'Trip details:', values.details, '',
    'Please contact me to discuss availability and arrangements.', '',
    'Thank you.'
  ].join('\n');
  const url = `mailto:ibrahim_eg76@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('form-status').textContent = 'Your email app should open with a prepared message. Please send it from there. If nothing opens, email ibrahim_eg76@yahoo.com directly.';
  window.location.href = url;
});
