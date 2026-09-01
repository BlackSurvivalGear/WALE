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
- **Join** — founding-community interest form (prototype only; no submissions are persisted yet)
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

The Phase Two preview deliberately uses browser `localStorage` only. It does **not** provide production authentication or server-side account storage. A real identity and data service will be introduced as the next infrastructure step.

See [`PHASE_TWO.md`](PHASE_TWO.md) for the detailed scope and persistence boundary.

### First Return

The initial physical activation is being shaped around **Abeokuta, Nigeria**, the **Lisabi Festival** and **Olumo Rock** in March 2027.

### Stack

- Semantic HTML
- CSS with responsive breakpoints and the WÁLÉ visual system
- Vanilla JavaScript for lightweight interactions
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
