// ===== FOODLY — RECIPES RENDER =====

const Recipes = (() => {
  const state = {
    category: 'all',
    difficulty: 'all',
    sort: 'default',
    page: 1,
    perPage: 9,
    filtered: []
  };

  const grid = () => document.getElementById('recipesGrid');
  const favGrid = () => document.getElementById('favoritesGrid');
  const loadMoreBtn = () => document.getElementById('loadMoreBtn');

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function cardHTML(r) {
    const isFav = Favorites.has(r.id);
    return `
      <article class="recipe-card" data-id="${r.id}">
        <div class="recipe-img-wrap">
          <img src="${r.image}" alt="${escapeHtml(r.title)}" loading="lazy" />
          <span class="recipe-cat-badge">${escapeHtml(getCategoryName(r.category))}</span>
          <button class="fav-btn ${isFav ? 'active' : ''}" data-fav="${r.id}" aria-label="Sevimlilarga">
            <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>
        <div class="recipe-body">
          <div class="recipe-meta-top">
            <span><i class="fa-regular fa-clock"></i> ${r.time} daq</span>
            <span><i class="fa-solid fa-users"></i> ${r.servings} kishi</span>
          </div>
          <h3 class="recipe-title">${escapeHtml(r.title)}</h3>
          <p class="recipe-desc">${escapeHtml(r.desc)}</p>
          <div class="recipe-footer">
            <span class="recipe-rating"><i class="fa-solid fa-star"></i> ${r.rating}</span>
            <span class="recipe-difficulty">${escapeHtml(r.difficulty)}</span>
          </div>
        </div>
      </article>
    `;
  }

  function getCategoryName(id) {
    const c = CATEGORIES.find(c => c.id === id);
    return c ? c.name : id;
  }

  function applyFilters() {
    let list = [...RECIPES];
    if (state.category !== 'all') list = list.filter(r => r.category === state.category);
    if (state.difficulty !== 'all') list = list.filter(r => r.difficulty === state.difficulty);

    switch (state.sort) {
      case 'rating': list.sort((a, b) => b.rating - a.rating); break;
      case 'time': list.sort((a, b) => a.time - b.time); break;
      case 'az': list.sort((a, b) => a.title.localeCompare(b.title, 'uz')); break;
    }
    state.filtered = list;
  }

  function render() {
    const g = grid();
    if (!g) return;
    applyFilters();
    const visible = state.filtered.slice(0, state.page * state.perPage);

    if (!visible.length) {
      g.innerHTML = emptyState("Retsept topilmadi", "Filtrlarni o'zgartirib ko'ring.");
      if (loadMoreBtn()) loadMoreBtn().style.display = 'none';
      return;
    }

    g.innerHTML = visible.map(cardHTML).join('');
    if (loadMoreBtn()) loadMoreBtn().style.display = visible.length < state.filtered.length ? 'inline-flex' : 'none';
  }

  function emptyState(title, text) {
    return `<div class="empty-state">
      <i class="fa-solid fa-utensils"></i>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </div>`;
  }

  function renderFavorites() {
    const g = favGrid();
    if (!g) return;
    const ids = Favorites.list();
    const list = ids.map(id => RECIPES.find(r => r.id === id)).filter(Boolean);
    if (!list.length) {
      g.innerHTML = `<div class="empty-state">
        <i class="fa-regular fa-heart"></i>
        <h3>Sevimlilar bo'sh</h3>
        <p>Yoqtirgan retseptlaringizni yurakcha tugmasi bilan saqlang.</p>
      </div>`;
      return;
    }
    g.innerHTML = list.map(cardHTML).join('');
  }

  function setCategory(cat) {
    state.category = cat;
    state.page = 1;
    render();
  }
  function setDifficulty(d) {
    state.difficulty = d;
    state.page = 1;
    render();
  }
  function setSort(s) {
    state.sort = s;
    state.page = 1;
    render();
  }
  function loadMore() {
    state.page++;
    render();
  }

  function initEvents() {
    const g = grid();
    if (g) {
      g.addEventListener('click', e => {
        const favBtn = e.target.closest('[data-fav]');
        if (favBtn) {
          e.stopPropagation();
          const id = Number(favBtn.dataset.fav);
          const recipe = RECIPES.find(r => r.id === id);
          Favorites.toggle(id, recipe.title);
          favBtn.classList.toggle('active');
          favBtn.innerHTML = `<i class="fa-${favBtn.classList.contains('active') ? 'solid' : 'regular'} fa-heart"></i>`;
          renderFavorites();
          return;
        }
        const card = e.target.closest('.recipe-card');
        if (card) Modal.open(Number(card.dataset.id));
      });
    }

    const fg = favGrid();
    if (fg) {
      fg.addEventListener('click', e => {
        const favBtn = e.target.closest('[data-fav]');
        if (favBtn) {
          e.stopPropagation();
          const id = Number(favBtn.dataset.fav);
          const recipe = RECIPES.find(r => r.id === id);
          Favorites.toggle(id, recipe.title);
          renderFavorites();
          render();
          return;
        }
        const card = e.target.closest('.recipe-card');
        if (card) Modal.open(Number(card.dataset.id));
      });
    }

    document.addEventListener('favorites:changed', () => {
      renderFavorites();
      render();
    });

    const lb = loadMoreBtn();
    if (lb) lb.addEventListener('click', loadMore);

    const df = document.getElementById('difficultyFilter');
    if (df) df.addEventListener('change', e => setDifficulty(e.target.value));
    const ss = document.getElementById('sortSelect');
    if (ss) ss.addEventListener('change', e => setSort(e.target.value));
  }

  function init() {
    render();
    renderFavorites();
    initEvents();
  }

  return { init, render, renderFavorites, setCategory, state, escapeHtml, getCategoryName };
})();

document.addEventListener('DOMContentLoaded', Recipes.init);