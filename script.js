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

const submit = form.querySelector('button[type=submit]');
const originalText = submit.textContent;
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  submit.disabled = true;
  submit.textContent = 'Sending your request…';
  status.textContent = 'Sending securely through our form delivery service…';
  status.className = 'form-note status-message';
  try {
    const data = new FormData(form);
    const response = await fetch('https://formsubmit.co/ajax/ibrahim_eg76@yahoo.com', {
      method: 'POST', body: data, headers: { 'Accept': 'application/json' }
    });
    const result = await response.json();
    if (!response.ok || result.success === false || result.success === 'false')
      throw new Error(result.message || 'Submission could not be processed.');
    form.reset();
    status.textContent = 'Request submitted! Please note: email delivery requires the MIS Care inbox to have activated FormSubmit. A team member will contact you after reviewing the request. For urgent questions, please call us.';
    status.className = 'form-note status-message status-success';
    submit.textContent = '✓ Request submitted';
    setTimeout(() => {submit.textContent = originalText;}, 5500);
  } catch (error) {
    status.textContent = 'We could not submit your request. Please call +1 (551) 263-4257 or email ibrahim_eg76@yahoo.com directly. (' + (error.message || 'Network error') + ')';
    status.className = 'form-note status-message status-error';
    submit.textContent = originalText;
  } finally {submit.disabled = false;}
});
