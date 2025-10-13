document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Contact form (mailto fallback). Replace MAILTO_EMAIL with your real email.
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const company = data.get('company') || '';
    const message = data.get('message') || '';
    const subject = encodeURIComponent('Rememra Solutions — Pilot/Contact');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    );
    const to = 'hello@rememra.com'; // TODO: set your preferred email
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
