// ===== FOODLY — THEME =====

const ThemeManager = (() => {
  const STORAGE_KEY = 'foodly-theme';

  function getSaved() {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.querySelector('#themeToggle i');
    if (icon) icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }

  function toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
    if (window.Toast) Toast.show(next === 'dark' ? 'Tungi rejim yoqildi' : 'Kunduzgi rejim yoqildi');
  }

  function init() {
    const saved = getSaved();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(saved || (prefersDark ? 'dark' : 'light'));

    const btn = document.getElementById('themeToggle');
    if (btn) btn.addEventListener('click', toggle);
  }

  return { init, toggle };
})();

document.addEventListener('DOMContentLoaded', ThemeManager.init);