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
  const profileForm = document.querySelector('#profile-form');
  if (profileForm) {
    const name = document.querySelector('#profile-name');
    const location = document.querySelector('#profile-location');
    const goal = document.querySelector('#profile-goal');
    name.value = state.profile.name || '';
    location.value = state.profile.location || '';
    goal.value = state.profile.goal || goal.options[0].value;
    profileForm.addEventListener('submit', event => {
      event.preventDefault();
      state.profile = { name: name.value.trim(), location: location.value.trim(), goal: goal.value };
      save();
      document.querySelector('#profile-success').hidden = false;
    });
  }
  count(); renderSaved();
})();

// Phase Three authentication is loaded separately so the existing preview
// interactions remain intact while authenticated persistence is introduced.
import('./member-auth.js').catch(() => {});
