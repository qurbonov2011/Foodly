// ===== FOODLY — SEARCH =====

const Search = (() => {
  const modal = () => document.getElementById('searchModal');
  const input = () => document.getElementById('searchInput');
  const results = () => document.getElementById('searchResults');
  const clearBtn = () => document.getElementById('clearSearch');

  function open() {
    modal().classList.add('active');
    setTimeout(() => input().focus(), 100);
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal().classList.remove('active');
    document.body.style.overflow = '';
  }

  function normalize(s) {
    return String(s).toLowerCase().trim();
  }

  function search(q) {
    const query = normalize(q);
    if (!query) return [];
    return RECIPES.filter(r => {
      return (
        normalize(r.title).includes(query) ||
        normalize(r.desc).includes(query) ||
        normalize(Recipes.getCategoryName(r.category)).includes(query) ||
        r.ingredients.some(ing => normalize(ing.name).includes(query))
      );
    }).slice(0, 12);
  }

  function render(query) {
    const list = search(query);
    const r = results();
    if (!query.trim()) {
      r.innerHTML = '';
      return;
    }
    if (!list.length) {
      r.innerHTML = `<div class="search-empty">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>"${Recipes.escapeHtml(query)}" bo'yicha natija topilmadi</p>
      </div>`;
      return;
    }
    r.innerHTML = list.map(item => `
      <div class="search-item" data-id="${item.id}">
        <img src="${item.image}" alt="${Recipes.escapeHtml(item.title)}" />
        <div class="search-item-info">
          <strong>${Recipes.escapeHtml(item.title)}</strong>
          <span>${Recipes.escapeHtml(Recipes.getCategoryName(item.category))} · ${item.time} daq · ⭐ ${item.rating}</span>
        </div>
      </div>
    `).join('');
  }

  function init() {
    const toggle = document.getElementById('searchToggle');
    if (toggle) toggle.addEventListener('click', open);

    modal().addEventListener('click', e => {
      if (e.target === modal()) close();
    });

    input().addEventListener('input', e => {
      clearBtn().classList.toggle('active', !!e.target.value);
      render(e.target.value);
    });

    clearBtn().addEventListener('click', () => {
      input().value = '';
      clearBtn().classList.remove('active');
      render('');
      input().focus();
    });

    results().addEventListener('click', e => {
      const item = e.target.closest('.search-item');
      if (item) {
        close();
        Modal.open(Number(item.dataset.id));
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        open();
      }
    });
  }

  return { init, open, close };
})();

document.addEventListener('DOMContentLoaded', Search.init);