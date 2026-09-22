// Daily CMO site — shared behaviour (draft). No frameworks.
// Forms here only simulate success so the pages can be reviewed.
// Live build: swap each form for the GHL form embed and its redirect.
(function () {
  // Mobile nav
  var t = document.getElementById('navToggle'), l = document.getElementById('navLinks');
  if (t && l) {
    t.addEventListener('click', function () {
      var open = l.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
      t.textContent = open ? 'Close' : 'Menu';
    });
    l.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { l.classList.remove('open'); t.setAttribute('aria-expanded', 'false'); t.textContent = 'Menu'; }
    });
  }

  var emailOk = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); };

  // Guide opt-in on the homepage → previews page 2 (thank-you)
  var gf = document.getElementById('guideForm');
  if (gf) {
    gf.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('leadName').value.trim();
      var email = document.getElementById('leadEmail').value.trim();
      var err = document.getElementById('formError');
      var ok = name.length > 1 && emailOk(email);
      if (err) err.hidden = ok;
      if (!ok) return;
      // Live: GHL handles the redirect. Here we go to the thank-you page with the email in the hash.
      window.location.href = 'thank-you.html#' + encodeURIComponent(email);
    });
  }

  // Thank-you page: show the email if passed
  var te = document.getElementById('thanksEmail');
  if (te && window.location.hash.length > 1) {
    try { te.textContent = decodeURIComponent(window.location.hash.slice(1)); } catch (x) {}
  }

  // Generic "simulate submit" forms: data-sim="idOfThanksBlock"
  document.querySelectorAll('form[data-sim]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailField = f.querySelector('input[type="email"]');
      if (emailField && !emailOk(emailField.value.trim())) { emailField.focus(); return; }
      var required = f.querySelectorAll('[required]');
      for (var i = 0; i < required.length; i++) { if (!required[i].value.trim()) { required[i].focus(); return; } }
      f.hidden = true;
      var th = document.getElementById(f.getAttribute('data-sim'));
      if (th) { th.hidden = false; th.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    });
  });
})();
