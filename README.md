# Clatonia Web & Studio

Zdrojové kódy pro webové stránky a redakční systém šermířského a divadelního spolku Clatonia.
Projekt je rozdělen do dvou nezávislých částí: rychlý frontend (Astro) a oddělená správa obsahu (Sanity Studio).

## Stack

- **Frontend:** Astro (Generovaná statická stránka - SSG), Čisté CSS
- **Backend / CMS:** Sanity Studio
- **Hosting:** GitHub Pages / Netlify / Vercel

## Struktura projektu

Projekt se skládá ze dvou hlavních složek:

- `web/` - Zdrojové kódy samotné webové stránky.
- `studio/` - Zdrojové kódy pro redakční systém.

## Lokální spuštění

Pro běh na vlastním počítači je potřeba Node.js. Otevřete si dva terminály.

### 1. Spuštění administrace (Sanity)

V prvním terminálu přejděte do složky Studia a spusťte jej:

```bash
cd studio
npm install
npm run dev
```

Administrace bude dostupná na `http://localhost:3333`.

### 2. Spuštění webu (Astro)

Ve druhém terminálu přejděte do složky webu:

```bash
cd web
npm install
```

Vytvořte soubor `.env` ve složce `web` a vložte vaše ID:

```env
PUBLIC_SANITY_PROJECT_ID=dopln_svoje_id
PUBLIC_SANITY_DATASET=production
```

Spusťte vývojový server:

```bash
npm run dev
```

Web poběží na `http://localhost:4321`, `http://localhost:4321/admin` obsahuje přesměrování na `http://localhost:3333`.
