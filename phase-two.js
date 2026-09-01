const WaleMember = (() => {
  const storageKey = 'wale-member-preview-v1';
  const defaults = { saved: ['Abeokuta', 'Lagos', 'Accra'], interests: [], profile: {} };
  const load = () => { try { return { ...defaults, ...JSON.parse(localStorage.getItem(storageKey) || '{}') }; } catch { return { ...defaults }; } };
  let state = load();
  const save = () => localStorage.setItem(storageKey, JSON.stringify(state));
  const count = () => document.querySelector('#saved-count')?.replaceChildren(document.createTextNode(state.saved.length));
  const renderSaved = () => {
    document.querySelectorAll('[data-remove]').forEach(button => {
      const place = button.dataset.remove;
      button.disabled = !state.saved.includes(place);
      button.textContent = state.saved.includes(place) ? 'Remove from saved' : 'Not saved';
      button.onclick = () => { state.saved = state.saved.filter(item => item !== place); save(); count(); renderSaved(); };
    });
  };
  const showView = view => {
    document.querySelectorAll('.member-nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === view));
    document.querySelectorAll('.member-view').forEach(item => item.classList.toggle('active', item.id === `view-${view}`));
  };
  document.querySelectorAll('[data-view]').forEach(item => item.addEventListener('click', () => showView(item.dataset.view)));
  document.querySelectorAll('[data-view-target]').forEach(item => item.addEventListener('click', () => showView(item.dataset.viewTarget)));
  document.querySelectorAll('[data-interest]').forEach(button => {
    if (state.interests.includes(button.dataset.interest)) button.classList.add('selected');
    button.addEventListener('click', () => { button.classList.toggle('selected'); state.interests = [...document.querySelectorAll('[data-interest].selected')].map(item => item.dataset.interest); save(); });
  });
  document.querySelectorAll('.saved-place').forEach(button => button.addEventListener('click', () => {
    const place = button.dataset.place;
    state.saved = state.saved.includes(place) ? state.saved.filter(item => item !== place) : [...state.saved, place];
    save(); count(); renderSaved();
  }));

  // Profile data is owned by Firebase/Firestore through member-auth.js.
  // Do not read or write profile fields from the shared preview localStorage
  // key, otherwise different authenticated accounts in the same browser can
  // inherit one another's profile data.

  count(); renderSaved();
})();

// Phase Three authentication is loaded separately so the existing preview
// interactions remain intact while authenticated persistence is introduced.
import('./member-auth.js').catch(() => {});
