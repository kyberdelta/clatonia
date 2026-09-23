# Clatonia Web

Zdrojové kódy pro webové stránky šermířského a divadelního spolku Clatonia. Web funguje jako generovaná statická stránka (SSG) vytvořená v Astru. Obsah je spravován přes integrované Sanity CMS.

## Stack
- **Framework:** Astro
- **CMS:** Sanity (běží přímo v projektu na `/admin`)
- **Styly:** Čisté CSS
- **Hosting:** GitHub Pages

## Lokální spuštění

Pro běh na vlastním počítači je potřeba Node.js.

1. **Instalace závislostí:**
   ```bash
   npm install
   ```

2. **Proměnné prostředí:**
   V kořenu projektu vytvořte soubor `.env` a nastavte ID vašeho Sanity projektu:
   ```env
   PUBLIC_SANITY_PROJECT_ID=dopln_svoje_id
   PUBLIC_SANITY_DATASET=production
   ```

3. **Start vývojového serveru:**
   ```bash
   npm run dev
   ```

Web poběží na `http://localhost:4321`.
Administrace (Sanity Studio) je dostupná na `http://localhost:4321/admin`.

## Struktura projektu

Základní adresáře v `src/`:
- `/pages` - Hlavní stránky webu (např. `index.astro`)
- `/components` - Samostatné bloky rozhraní (Hero, Kalendář, Kontakt)
- `/layouts` - Základní HTML kostra a hlavička
- `/styles` - CSS styly včetně globálních proměnných
- `/lib` - Komunikace se Sanity API

Složka `schemaTypes/` v kořenu obsahuje definice datových struktur pro administraci Sanity.

## Nasazení (Deployment)

Projekt je hostovaný na GitHub Pages a využívá GitHub Actions. 
Znovusestavení webu se spouští dvěma způsoby:
1. Pushnutím změn do `main` větve repozitáře.
2. Externím Webhookem přímo ze Sanity CMS (při publikování nového obsahu nebo změně akce v kalendáři).
