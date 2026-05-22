(function () {
  'use strict';

  var cfg = window.siteConfig;

  if (!cfg) {
    document.getElementById('app').innerHTML =
      '<p style="padding:2rem;font-family:sans-serif;color:red">Error: config.js not loaded before main.js</p>';
    return;
  }

  /* ── WhatsApp helpers ──────────────────────────────── */
  var WA = cfg.business.whatsapp;
  function waLink(msg) {
    return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
  }
  var WA_GENERAL = waLink('Hi Briez Kitchen! I would like to place an order');
  function waItemLink(name, price) {
    var msg = 'Hi Briez Kitchen! I\'d like to order: ' + name;
    if (price) msg += ' (' + price + ')';
    return waLink(msg);
  }

  /* ── SVG Icons ─────────────────────────────────────── */
  var SVG_WA =
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15' +
    '-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475' +
    '-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52' +
    '.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207' +
    '-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372' +
    '-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2' +
    ' 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118' +
    '.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>' +
    '<path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.54 5.873L.054 23.454a.75.75 0 0 0' +
    ' .917.957l5.744-1.505A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22' +
    'c-1.88 0-3.63-.502-5.143-1.381l-.37-.218-3.813 1 .972-3.7-.24-.382A9.96 9.96 0 0 1 2 12' +
    'C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>';

  var SVG_WA_SM =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15' +
    '-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475' +
    '-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52' +
    '.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207' +
    '-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372' +
    '-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2' +
    ' 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118' +
    '.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>' +
    '<path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.54 5.873L.054 23.454a.75.75 0 0 0' +
    ' .917.957l5.744-1.505A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22' +
    'c-1.88 0-3.63-.502-5.143-1.381l-.37-.218-3.813 1 .972-3.7-.24-.382A9.96 9.96 0 0 1 2 12' +
    'C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>';

  var SVG_IG =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919' +
    '.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849' +
    '-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07' +
    '-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92' +
    '-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849' +
    '.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z' +
    'm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98' +
    '-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948' +
    '.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24' +
    'c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98' +
    '.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947' +
    '-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z' +
    'm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324z' +
    'm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>' +
    '</svg>';

  var SVG_FB =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954' +
    ' 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669' +
    ' 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328' +
    'l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';

  /* ── Color injection ───────────────────────────────── */
  function applyColors() {
    var root = document.documentElement;
    var c = cfg.colors;
    if (!c) return;
    if (c.red)       root.style.setProperty('--red',       c.red);
    if (c.redDark)   root.style.setProperty('--red-dark',  c.redDark);
    if (c.gold)      root.style.setProperty('--gold',      c.gold);
    if (c.cream)     root.style.setProperty('--cream',     c.cream);
    if (c.creamDim)  root.style.setProperty('--cream-dim', c.creamDim);
    if (c.bg)        root.style.setProperty('--bg',        c.bg);
    if (c.bg2)       root.style.setProperty('--bg-2',      c.bg2);
    if (c.bg3)       root.style.setProperty('--bg-3',      c.bg3);
    if (c.bgFooter)  root.style.setProperty('--bg-footer', c.bgFooter);
  }

  /* ── Nav ───────────────────────────────────────────── */
  function renderNav() {
    return [
      '<nav class="nav" id="nav">',
      '  <div class="nav__inner container">',
      '    <a href="#hero" class="nav__logo"><img src="assets/images/briez.png" alt="Briez Kitchen logo" class="nav__logo-img">Briez <span>Kitchen</span></a>',
      '    <ul class="nav__links" role="list">',
      '      <li><a href="#menu">Menu</a></li>',
      '      <li><a href="#about">About</a></li>',
      '      <li><a href="#reviews">Reviews</a></li>',
      '      <li><a href="' + WA_GENERAL + '" class="nav__order-btn" target="_blank" rel="noopener">Order Now</a></li>',
      '    </ul>',
      '    <button class="nav__hamburger" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">',
      '      <span></span><span></span><span></span>',
      '    </button>',
      '  </div>',
      '  <div class="nav__mobile" id="nav-mobile" aria-hidden="true">',
      '    <ul>',
      '      <li><a href="#menu" class="nav__mobile-link">Menu</a></li>',
      '      <li><a href="#about" class="nav__mobile-link">About</a></li>',
      '      <li><a href="#reviews" class="nav__mobile-link">Reviews</a></li>',
      '      <li>',
      '        <a href="' + WA_GENERAL + '" class="nav__mobile-link nav__mobile-cta" target="_blank" rel="noopener">',
      '          ' + SVG_WA_SM + ' Order on WhatsApp',
      '        </a>',
      '      </li>',
      '    </ul>',
      '  </div>',
      '</nav>'
    ].join('\n');
  }

  /* ── Hero ─────────────────────────────────────────── */
  function renderHero() {
    var h = cfg.hero;
    var bgEl = h.bgImage
      ? '<img src="' + h.bgImage + '" alt="" class="hero__bg-img" aria-hidden="true" loading="eager">'
      : '<div class="hero__bg-ph" aria-hidden="true"><span class="hero__bg-ph-label">Hero background · food photography placeholder</span></div>';
    return [
      '<section class="hero" id="hero">',
      '  ' + bgEl,
      '  <div class="hero__content">',
      '    <span class="hero__badge">🍲 ' + cfg.business.category + ' · ' + cfg.business.location + '</span>',
      '    <h1>' + h.headline + '</h1>',
      '    <p class="hero__sub">' + h.subheadline + '</p>',
      '    <div class="hero__actions">',
      '      <a href="' + WA_GENERAL + '" class="btn btn--red" target="_blank" rel="noopener">',
      '        ' + SVG_WA + ' Order on WhatsApp',
      '      </a>',
      '      <a href="#menu" class="btn btn--ghost">See Our Menu</a>',
      '    </div>',
      '    <div class="hero__meta">',
      '      <span>📍 ' + cfg.business.location + '</span>',
      '      <span>🕐 Fresh Daily</span>',
      '    </div>',
      '  </div>',
      '  <div class="hero__fade" aria-hidden="true"></div>',
      '</section>'
    ].join('\n');
  }

  /* ── Signature Dishes ──────────────────────────────── */
  function renderSignatureDishes() {
    var cards = cfg.signatureDishes.map(function (d, i) {
      var imgEl = d.image
        ? '<img src="' + d.image + '" alt="' + d.name + '" loading="lazy">'
        : d.name + '<br>photo placeholder';
      return [
        '<div class="sig-card reveal reveal-delay-' + (i + 1) + '">',
        '  <div class="sig-card__img">' + imgEl + '</div>',
        '  <div class="sig-card__body">',
        '    <h3 class="sig-card__name">' + d.name + '</h3>',
        '    <p class="sig-card__desc">' + d.description + '</p>',
        '    <a href="' + waItemLink(d.name) + '" class="btn btn--outline-red" target="_blank" rel="noopener">Order →</a>',
        '  </div>',
        '</div>'
      ].join('\n');
    }).join('\n');

    return [
      '<section class="signature" id="signature">',
      '  <div class="container">',
      '    <div class="section-header reveal">',
      '      <span class="section-label">Our Signatures</span>',
      '      <h2 class="section-title">Cooked the Way It Should Be</h2>',
      '    </div>',
      '    <div class="signature__cards">' + cards + '</div>',
      '  </div>',
      '</section>'
    ].join('\n');
  }

  /* ── Menu (tabbed) ─────────────────────────────────── */
  function renderMenu() {
    var m = cfg.menu;

    var tabsHtml = m.categories.map(function (cat, i) {
      return '<button class="tab-btn' + (i === 0 ? ' active' : '') +
        '" role="tab" id="tab-btn-' + i + '" aria-selected="' + (i === 0 ? 'true' : 'false') +
        '" aria-controls="tab-pane-' + i + '" data-tab="' + i + '" type="button">' + cat + '</button>';
    }).join('\n      ');

    var panesHtml = m.categories.map(function (cat, i) {
      var items = m.items.filter(function (item) { return item.category === cat; });
      var cardsHtml = items.map(function (item) {
        var imgEl = item.image
          ? '<img src="' + item.image + '" alt="' + item.name + '" loading="lazy">'
          : item.name + ' photo';
        return [
          '<div class="menu-card">',
          '  <div class="menu-card__img">' + imgEl + '</div>',
          '  <div class="menu-card__body">',
          '    <h3 class="menu-card__name">' + item.name + '</h3>',
          '    <p class="menu-card__desc">' + item.description + '</p>',
          '    <div class="menu-card__footer">',
          '      <span class="menu-card__price">' + item.price + '</span>',
          '      <a href="' + waItemLink(item.name, item.price) + '" class="menu-card__order" target="_blank" rel="noopener">Order</a>',
          '    </div>',
          '  </div>',
          '</div>'
        ].join('\n');
      }).join('\n');

      return [
        '<div class="tab-pane' + (i === 0 ? ' active' : '') + '" id="tab-pane-' + i + '" role="tabpanel" aria-labelledby="tab-btn-' + i + '">',
        '  <div class="menu-grid">' + cardsHtml + '</div>',
        '</div>'
      ].join('\n');
    }).join('\n');

    return [
      '<section class="menu-section" id="menu">',
      '  <div class="container">',
      '    <div class="section-header reveal">',
      '      <span class="section-label">Full Menu</span>',
      '      <h2 class="section-title">What Are You Craving Today?</h2>',
      '    </div>',
      '    <div class="tab-bar" role="tablist">',
      '      ' + tabsHtml,
      '    </div>',
      '    <div class="tab-content">' + panesHtml + '</div>',
      '  </div>',
      '</section>'
    ].join('\n');
  }

  /* ── About ─────────────────────────────────────────── */
  function renderAbout() {
    var a = cfg.about;
    return [
      '<section class="about" id="about">',
      '  <div class="container">',
      '    <div class="about__inner reveal">',
      '      <div class="about__text">',
      '        <span class="section-label">Our Story</span>',
      '        <h2 class="section-title">' + a.headline + '</h2>',
      '        <p class="about__story">' + a.body + '</p>',
      '        <a href="' + WA_GENERAL + '" class="btn btn--red" target="_blank" rel="noopener">',
      '          ' + SVG_WA_SM + ' Order Now on WhatsApp',
      '        </a>',
      '      </div>',
      '      <div class="about__img-wrap">' + (a.image ? '<img src="' + a.image + '" alt="Our kitchen story" loading="lazy">' : 'About / story image placeholder') + '</div>',
      '    </div>',
      '  </div>',
      '</section>'
    ].join('\n');
  }

  /* ── Reviews ───────────────────────────────────────── */
  function renderReviews() {
    var cards = cfg.testimonials.map(function (t) {
      var stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
      return [
        '<div class="review-card reveal">',
        '  <div class="review-card__stars">' + stars + '</div>',
        '  <blockquote class="review-card__quote">"' + t.quote + '"</blockquote>',
        '  <cite class="review-card__author">— ' + t.name + ', ' + t.location + '</cite>',
        '</div>'
      ].join('\n');
    }).join('\n');

    return [
      '<section class="reviews" id="reviews">',
      '  <div class="container">',
      '    <div class="section-header reveal">',
      '      <span class="section-label">Testimonials</span>',
      '      <h2 class="section-title">What Our Customers Say</h2>',
      '    </div>',
      '    <div class="reviews__grid">' + cards + '</div>',
      '  </div>',
      '</section>'
    ].join('\n');
  }

  /* ── Footer ────────────────────────────────────────── */
  function renderFooter() {
    var s = cfg.business.social || {};
    var igLink = s.instagram || '#';
    var fbLink = s.facebook  || '#';

    return [
      '<footer class="footer" id="footer">',
      '  <div class="container">',
      '    <div class="footer__grid">',
      '      <div class="footer__brand">',
      '        <div class="footer__logo">' + cfg.business.name + '</div>',
      '        <div class="footer__tagline">' + cfg.business.tagline + '</div>',
      '        <div class="footer__socials">',
      '          <a href="' + igLink + '" class="footer__social" target="_blank" rel="noopener" aria-label="Instagram">' + SVG_IG + '</a>',
      '          <a href="' + fbLink + '" class="footer__social" target="_blank" rel="noopener" aria-label="Facebook">' + SVG_FB + '</a>',
      '          <a href="' + WA_GENERAL + '" class="footer__social" target="_blank" rel="noopener" aria-label="WhatsApp">' + SVG_WA_SM + '</a>',
      '        </div>',
      '      </div>',
      '      <div class="footer__info">',
      '        <h4>Find Us</h4>',
      '        <ul>',
      '          <li>📍 ' + cfg.business.location + '</li>',
      '          <li>💬 <a href="' + WA_GENERAL + '" target="_blank" rel="noopener">Order on WhatsApp</a></li>',
      '        </ul>',
      '      </div>',
      '    </div>',
      '    <div class="footer__bottom">',
      '      <span>© ' + new Date().getFullYear() + ' ' + cfg.business.name + '. All rights reserved.</span>',
      '      <span class="footer__credit">Website by <a href="https://basilstudio.netlify.app" target="_blank" rel="noopener">Basil Studio</a></span>',
      '    </div>',
      '  </div>',
      '</footer>'
    ].join('\n');
  }

  /* ── WA Float ──────────────────────────────────────── */
  function renderWaFloat() {
    return [
      '<a href="' + WA_GENERAL + '" class="wa-float" target="_blank" rel="noopener" aria-label="Order on WhatsApp">',
      '  <div class="wa-float__ring" aria-hidden="true"></div>',
      '  ' + SVG_WA,
      '</a>'
    ].join('\n');
  }

  /* ── Render all sections ───────────────────────────── */
  document.getElementById('app').innerHTML = [
    renderNav(),
    renderHero(),
    renderSignatureDishes(),
    renderMenu(),
    renderAbout(),
    renderReviews(),
    renderFooter(),
    renderWaFloat()
  ].join('\n');

  /* ── Init ──────────────────────────────────────────── */
  applyColors();
  initNav();
  initMenuTabs();
  initScrollReveal();

  function initNav() {
    var nav        = document.getElementById('nav');
    var toggle     = document.getElementById('nav-toggle');
    var mobileMenu = document.getElementById('nav-mobile');

    window.addEventListener('scroll', function () {
      nav.classList.toggle('nav--scrolled', window.scrollY > 50);
    }, { passive: true });
    if (window.scrollY > 50) nav.classList.add('nav--scrolled');

    toggle.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  function initMenuTabs() {
    var buttons = document.querySelectorAll('.tab-btn');
    var panes   = document.querySelectorAll('.tab-pane');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = btn.dataset.tab;
        buttons.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        panes.forEach(function (p)   { p.classList.remove('active'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        document.getElementById('tab-pane-' + idx).classList.add('active');
      });
    });
  }

  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

})();
