// ===== FOODLY — FAVORITES =====

const Favorites = (() => {
  const KEY = 'foodly-favorites';
  let set = new Set();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      set = new Set(raw ? JSON.parse(raw) : []);
    } catch { set = new Set(); }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify([...set])); } catch {}
  }

  function has(id) { return set.has(id); }
  function list() { return [...set]; }

  function toggle(id, title) {
    if (set.has(id)) {
      set.delete(id);
      if (window.Toast) Toast.show(`"${title}" sevimlilardan olib tashlandi`, 'error');
    } else {
      set.add(id);
      if (window.Toast) Toast.show(`"${title}" sevimlilarga qo'shildi`, 'success');
    }
    save();
    updateBadge();
    document.dispatchEvent(new CustomEvent('favorites:changed'));
    return set.has(id);
  }

  function updateBadge() {
    const badge = document.getElementById('favCount');
    if (badge) badge.textContent = set.size;
  }

  function init() {
    load();
    updateBadge();
  }

  return { init, has, list, toggle, updateBadge };
})();

document.addEventListener('DOMContentLoaded', Favorites.init);