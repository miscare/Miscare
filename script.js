const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Lightweight progressive enhancements: the site still works without JS.
const sections = document.querySelectorAll('.intro-grid, .section-heading, .service-card, .step, .contact-left, .contact-form-card');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  sections.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
  }), { threshold: .12, rootMargin: '0px 0px -25px 0px' });
  sections.forEach(el => observer.observe(el));
}
const progress = document.querySelector('.scroll-progress');
let ticking = false;
function onScroll(){
 if(ticking)return;
 ticking = true;
 requestAnimationFrame(() => {
   const max = document.documentElement.scrollHeight - window.innerHeight;
   progress.style.transform = `scaleX(${max>0 ? Math.min(1,scrollY/max) : 0})`;
   document.querySelector('.site-header')?.classList.toggle('scrolled', scrollY > 45);
   ticking=false;
 });
}
addEventListener('scroll', onScroll, {passive:true}); onScroll();

// Clicking a service card can preselect the related inquiry topic.
const form = document.getElementById('inquiry-form');
const status = document.getElementById('form-status');
const tripType = form.elements.namedItem('type');
const options = ['Medical appointment','Ongoing care visits','Other transportation inquiry'];
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  tripType.value = options[Number(link.dataset.service)] || 'General inquiry';
  form.closest('.contact-form-card')?.classList.add('form-highlight');
  setTimeout(() => form.closest('.contact-form-card')?.classList.remove('form-highlight'), 950);
}));

// The inbox owner must approve FormSubmit once; a GitHub Pages site cannot do this itself.
const RECIPIENT = 'miscare97@gmail.com';
const PUBLIC_EMAIL = 'ibrahim_eg76@yahoo.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT}`;
const submit = form.querySelector('button[type=submit]');
const originalText = submit.textContent;
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  submit.disabled = true;
  submit.textContent = 'Sending your request…';
  status.textContent = 'Sending your request…';
  status.className = 'form-note status-message';
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST', body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    const result = await response.json();
    const message = String(result.message || '');
    const approved = response.ok && (result.success === true || result.success === 'true');
    const needsActivation = /activat|confirm|verif/i.test(message);
    if (!approved || needsActivation) {
      if (needsActivation) throw new Error('activation_required');
      throw new Error(message || 'The form service did not accept the request.');
    }
    form.reset();
    status.textContent = 'Your inquiry was accepted for email delivery. This is not a confirmed ride or appointment. If you do not hear back, call +1 (551) 263-4257.';
    status.className = 'form-note status-message status-success';
    submit.textContent = '✓ Request sent';
    setTimeout(() => { submit.textContent = originalText; }, 5000);
  } catch (error) {
    const activation = error.message === 'activation_required';
    status.textContent = activation
      ? `Request not sent: the MIS Care team must activate this form. Please contact MIS Care by phone at +1 (551) 263-4257 or email ${PUBLIC_EMAIL} directly while the request form is being activated.`
      : `We couldn't send your request. Please call +1 (551) 263-4257 or email ${PUBLIC_EMAIL} directly. ${error.message === 'Failed to fetch' ? 'Please check your connection.' : ''}`;
    status.className = 'form-note status-message status-error';
    submit.textContent = originalText;
  } finally {
    submit.disabled = false;
  }
});
