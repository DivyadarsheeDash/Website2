(function(){
  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Highlight active link by current pathname
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path){ a.classList.add('active'); }
  });

  // Copy obfuscated email
  const copyBtn = document.getElementById('copyEmail');
  const emailObf = document.getElementById('emailObf');
  if(copyBtn && emailObf){
    copyBtn.addEventListener('click', async () => {
      // Reconstruct the real email safely
      const email = 'dash00592@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = 'Copied!';
        setTimeout(()=> copyBtn.textContent = 'Copy', 1500);
      } catch (e) {
        alert('Email: ' + email);
      }
    });
  }
})();
