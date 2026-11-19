// ===== FOODLY — MAIN APP =====

// ===== TOAST =====
const Toast = (() => {
  function show(message, type = 'success') {
    const wrap = document.getElementById('toastWrap');
    if (!wrap) return;
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `<i class="fa-solid fa-${type === 'error' ? 'circle-exclamation' : 'circle-check'}"></i><span>${message}</span>`;
    wrap.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(120%)';
      setTimeout(() => el.remove(), 400);
    }, 3000);
  }
  return { show };
})();
window.Toast = Toast;

// ===== MODAL (RECIPE DETAIL) =====
const Modal = (() => {
  let currentRecipe = null;
  let portions = 1;
  let timerInterval = null;
  let timerSeconds = 0;

  function open(id) {
    const r = RECIPES.find(x => x.id === id);
    if (!r) return;
    currentRecipe = r;
    portions = r.servings;
    render();
    document.getElementById('recipeModal').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    document.getElementById('recipeModal').classList.remove('active');
    document.body.style.overflow = '';
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 0;
  }

  function scaledAmount(amount, baseServings) {
    return Math.round((amount * portions / baseServings) * 100) / 100;
  }

  function render() {
    const r = currentRecipe;
    const isFav = Favorites.has(r.id);
    const content = document.getElementById('modalContent');

    content.innerHTML = `
      <button class="modal-close" id="modalClose" aria-label="Yopish">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="modal-hero">
        <img src="${r.image}" alt="${Recipes.escapeHtml(r.title)}" />
        <div class="modal-hero-title">
          <h2>${Recipes.escapeHtml(r.title)}</h2>
          <p>${Recipes.escapeHtml(r.desc)}</p>
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-stats">
          <div class="mstat"><i class="fa-regular fa-clock"></i><strong>${r.time} daq</strong><span>Tayyorlash</span></div>
          <div class="mstat"><i class="fa-solid fa-fire"></i><strong>${r.cookTime} daq</strong><span>Pishirish</span></div>
          <div class="mstat"><i class="fa-solid fa-users"></i><strong>${portions} kishi</strong><span>Porsiya</span></div>
          <div class="mstat"><i class="fa-solid fa-star"></i><strong>${r.rating}</strong><span>Reyting</span></div>
        </div>

        <div class="modal-section">
          <h3><i class="fa-solid fa-sliders"></i> Tayyorlash vaqti</h3>
          <div class="timer-box">
            <div class="timer-display" id="timerDisplay">00:00</div>
            <div class="timer-btns">
              <button id="timerStart"><i class="fa-solid fa-play"></i> Boshlash</button>
              <button id="timerReset" class="secondary"><i class="fa-solid fa-rotate"></i> Tozalash</button>
            </div>
          </div>
        </div>

        <div class="modal-section">
          <h3><i class="fa-solid fa-basket-shopping"></i> Masalliqlar</h3>
          <div class="portions-control">
            <span>Porsiya:</span>
            <button id="portMinus"><i class="fa-solid fa-minus"></i></button>
            <span class="num" id="portNum">${portions}</span>
            <button id="portPlus"><i class="fa-solid fa-plus"></i></button>
          </div>
          <div id="ingredientsList">
            ${r.ingredients.map((ing, i) => `
              <label class="ingredient-row" data-idx="${i}">
                <input type="checkbox" />
                <span class="ing-name">${Recipes.escapeHtml(ing.name)}</span>
                <span class="ingredient-amount">${scaledAmount(ing.amount, r.servings)} ${ing.unit}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <div class="modal-section">
          <h3><i class="fa-solid fa-list-ol"></i> Tayyorlash bosqichlari</h3>
          <ol class="steps-list">
            ${r.steps.map((s, i) => `
              <li class="step-item">
                <span class="step-num">${i + 1}</span>
                <span class="step-text">${Recipes.escapeHtml(s)}</span>
              </li>
            `).join('')}
          </ol>
        </div>

        <div class="modal-section">
          <h3><i class="fa-solid fa-lightbulb"></i> Foydali maslahat</h3>
          <div class="tips-box">${Recipes.escapeHtml(r.tips)}</div>
        </div>

        <div class="modal-actions">
          <button class="btn btn-primary" id="modalFav">
            <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
            ${isFav ? 'Sevimlilardan olib tashlash' : 'Sevimlilarga qo\'shish'}
          </button>
          <button class="btn btn-outline" id="modalPrint">
            <i class="fa-solid fa-print"></i> Chop etish
          </button>
          <button class="btn btn-outline" id="modalShare">
            <i class="fa-solid fa-share-nodes"></i> Ulashish
          </button>
        </div>
      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    const content = document.getElementById('modalContent');

    content.querySelector('#modalClose').addEventListener('click', close);

    document.getElementById('recipeModal').addEventListener('click', e => {
      if (e.target.id === 'recipeModal') close();
    });

    const portPlus = content.querySelector('#portPlus');
    const portMinus = content.querySelector('#portMinus');

    portPlus.addEventListener('click', () => {
      portions++;
      updatePortions();
    });
    portMinus.addEventListener('click', () => {
      if (portions > 1) { portions--; updatePortions(); }
    });

    // Ingredient check
    content.querySelectorAll('.ingredient-row').forEach(row => {
      const cb = row.querySelector('input[type="checkbox"]');
      cb.addEventListener('change', () => {
        row.classList.toggle('checked', cb.checked);
      });
    });

    // Timer
    const startBtn = content.querySelector('#timerStart');
    const resetBtn = content.querySelector('#timerReset');
    startBtn.addEventListener('click', () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        startBtn.innerHTML = '<i class="fa-solid fa-play"></i> Boshlash';
      } else {
        timerInterval = setInterval(() => {
          timerSeconds++;
          updateTimerDisplay();
        }, 1000);
        startBtn.innerHTML = '<i class="fa-solid fa-pause"></i> To\'xtatish';
      }
    });
    resetBtn.addEventListener('click', () => {
      clearInterval(timerInterval);
      timerInterval = null;
      timerSeconds = 0;
      updateTimerDisplay();
      startBtn.innerHTML = '<i class="fa-solid fa-play"></i> Boshlash';
    });

    // Favorite
    content.querySelector('#modalFav').addEventListener('click', () => {
      Favorites.toggle(currentRecipe.id, currentRecipe.title);
      render();
    });

    // Print
    content.querySelector('#modalPrint').addEventListener('click', () => {
      window.print();
    });

    // Share
    content.querySelector('#modalShare').addEventListener('click', async () => {
      const shareData = {
        title: `Foodly — ${currentRecipe.title}`,
        text: currentRecipe.desc,
        url: window.location.href
      };
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
          Toast.show('Havola nusxalandi!', 'success');
        }
      } catch (err) {
        Toast.show('Ulashib bo\'lmadi', 'error');
      }
    });
  }

  function updatePortions() {
    document.getElementById('portNum').textContent = portions;
    const r = currentRecipe;
    document.querySelectorAll('#ingredientsList .ingredient-row').forEach((row, i) => {
      const ing = r.ingredients[i];
      row.querySelector('.ingredient-amount').textContent =
        `${scaledAmount(ing.amount, r.servings)} ${ing.unit}`;
    });
  }

  function updateTimerDisplay() {
    const d = document.getElementById('timerDisplay');
    if (!d) return;
    const m = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    const s = String(timerSeconds % 60).padStart(2, '0');
    d.textContent = `${m}:${s}`;
  }

  return { open, close };
})();
window.Modal = Modal;

// ===== MAIN APP =====
document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Active link
  const links = document.querySelectorAll('.nav-link');
  const sections = [...links].map(l => l.getAttribute('href')).map(h => document.querySelector(h)).filter(Boolean);
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${en.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => io.observe(s));

  // Scroll top
  const st = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    st.classList.toggle('active', window.scrollY > 400);
  });
  st.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        revealIO.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(r => revealIO.observe(r));

  // Categories render
  const catGrid = document.getElementById('categoriesGrid');
  catGrid.innerHTML = CATEGORIES.map(c => `
    <button class="category-card ${c.id === 'all' ? 'active' : ''}" data-cat="${c.id}">
      <span class="cat-emoji">${c.emoji}</span>
      <span class="cat-name">${c.name}</span>
    </button>
  `).join('');

  catGrid.addEventListener('click', e => {
    const card = e.target.closest('[data-cat]');
    if (!card) return;
    catGrid.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    Recipes.setCategory(card.dataset.cat);
    document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
  });

  // Counter animation
  const counters = document.querySelectorAll('[data-target]');
  const counterIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const el = en.target;
        const target = Number(el.dataset.target);
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const timer = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(timer); }
          el.textContent = cur >= 1000 ? (cur / 1000).toFixed(1) + 'K' : cur;
        }, 30);
        counterIO.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterIO.observe(c));

  // Parallax hero visual
  const heroVisual = document.querySelector('.hero-visual');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroVisual && !prefersReduced) {
    window.addEventListener('scroll', () => {
      if (window.innerWidth < 768) return;
      const y = window.scrollY;
      if (y < 800) heroVisual.style.transform = `translateY(${y * 0.08}px)`;
    });
  }
});