# WÁLÉ

## Find Your Way Home

WÁLÉ is a community platform for the African diaspora to discover, reconnect with, experience and explore a deeper relationship with Africa.

## Phase One — Community Foundation

Phase One turns the original brand landing page into a small, connected public platform while keeping the site framework-free and GitHub Pages friendly.

### Public experience

- **Home** — brand proposition, platform pillars and First Return introduction
- **Discover** — destination discovery with Nigeria as the launch country
- **Connect** — founding-community concept and preview of the future member experience
- **Return** — The First Return: Abeokuta, Lisabi Festival and Olumo Rock, March 2027
- **Join** — founding-community entry point
- **About** — mission and operating principles

### Platform direction

The long-term WÁLÉ experience is organised around:

- **Discover** — countries, cities, culture and heritage
- **Connect** — community, groups and shared interests
- **Return** — curated cultural journeys and events
- **Live** — extended stays, retirement, relocation and future opportunities
- **Build** — future business, investment and partnership opportunities

## Phase Two — Member Experience Foundation

Phase Two introduces the first member-facing application experience through **My WÁLÉ**.

- Personal member overview and WÁLÉ path
- First Return status
- Saved places
- Community group discovery
- Member interests
- Profile fields
- Responsive member dashboard

The Phase Two preview originally used browser `localStorage` only. Phase Three begins replacing that temporary boundary with authenticated account storage.

## Phase Three — Authentication Foundation

Phase Three connects WÁLÉ to the dedicated Firebase project `wale-5bbdd` while keeping GitHub Pages as the production web host.

- Firebase Web SDK loaded directly from Google's CDN
- Email/password registration and sign-in
- Google sign-in
- Protected My WÁLÉ access
- Firestore-backed `users/{uid}` member profiles
- Firestore security rules source in `firestore.rules`
- Join flow connected to real account creation
- Existing Phase Two member interactions retained during migration

### Firebase deployment requirements

Before releasing authenticated membership to production:

1. Add `wale.africa` under Firebase Authentication → Settings → Authorized domains.
2. Deploy `firestore.rules` to the WÁLÉ Firebase project's `(default)` database.
3. Confirm Email/Password and Google providers remain enabled.
4. Test registration, sign-in, sign-out and profile persistence on `https://wale.africa`.

Firebase Hosting is intentionally **not** used. GitHub Pages remains the production host for `wale.africa`.

### First Return

The initial physical activation is being shaped around **Abeokuta, Nigeria**, the **Lisabi Festival** and **Olumo Rock** in March 2027.

### Stack

- Semantic HTML
- CSS with responsive breakpoints and the WÁLÉ visual system
- Vanilla JavaScript
- Firebase Authentication
- Cloud Firestore
- GitHub Pages deployment via GitHub Actions
- No build step or framework dependency

### Local preview

Serve the repository root with any static HTTP server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

### Assets

- `WALE LOGO.png` — primary brand asset
- `favi.png` — browser favicon / Apple touch icon
