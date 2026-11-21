/* RAHBAR – lightweight site script (no dependencies) */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var header = document.querySelector('.site-header');
  var btn = document.getElementById('menu-btn');
  var links = document.getElementById('nav-links');

  /* Mobile menu */
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Header shadow on scroll */
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Reveal on scroll */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* Count-up numbers */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, end = parseInt(el.getAttribute('data-count'), 10), t0 = null;
        function tick(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / 1100, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        co.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* Footer year */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Contact / demo form */
  var form = document.getElementById('contact-form');
  if (form) {
    var msg = document.getElementById('form-msg');
    var submit = form.querySelector('button[type="submit"]');
    var FALLBACK_EMAIL = form.getAttribute('data-fallback-email') || '';

    function show(type, text) {
      msg.className = 'form-msg ' + type;
      msg.textContent = text;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.querySelector('.hp input').value) return; /* honeypot */
      var data = new FormData(form);
      var action = form.getAttribute('action') || '';

      /* Until a Formspree ID is added, fall back to the visitor's mail app */
      if (!action || action.indexOf('YOUR_FORM_ID') !== -1) {
        var body = 'Full Name: ' + data.get('name') + '\nEmail: ' + data.get('email') +
          '\nPhone: ' + (data.get('phone') || 'N/A') + '\nOrganization: ' + (data.get('organization') || 'N/A') +
          '\n\nMessage:\n' + data.get('message');
        window.location.href = 'mailto:' + FALLBACK_EMAIL + '?subject=' +
          encodeURIComponent('RAHBAR Demo Inquiry from ' + data.get('name')) + '&body=' + encodeURIComponent(body);
        show('ok', 'Your email app should open with the request ready to send. Thank you!');
        return;
      }

      submit.disabled = true;
      var label = submit.querySelector('span');
      var old = label.textContent;
      label.textContent = 'Sending…';
      fetch(action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('bad');
          form.reset();
          show('ok', 'Thank you! Your request was sent. The RAHBAR team will get back to you shortly.');
        })
        .catch(function () {
          show('err', 'Sorry, something went wrong. Please email us at ' + FALLBACK_EMAIL + '.');
        })
        .finally(function () { submit.disabled = false; label.textContent = old; });
    });
  }
})();
