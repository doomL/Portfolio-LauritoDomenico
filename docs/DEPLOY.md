# Deploy su portfolio.lauritodomenico.com (FTP)

Il sito è un export statico Next.js (`npm run build` → cartella **`out/`**), con la stessa struttura che vedi sull’hosting (`index.html`, `404.html`, `_next/`, `projects/`, ecc.).

## GitHub Actions

Workflow: [`.github/workflows/deploy-portfolio-ftp.yml`](../.github/workflows/deploy-portfolio-ftp.yml)

- **Push su `main`**: build + upload FTP
- **Manuale**: tab *Actions* → *Deploy portfolio (static FTP)* → *Run workflow*

## Secrets da configurare

In **GitHub → Repository → Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Valore (esempio) |
|--------|------------------|
| `FTP_SERVER` | `ftp.lauritodomenico.com` |
| `FTP_PORT` | `21` |
| `FTP_USERNAME` | `git@lauritodomenico.com` |
| `FTP_PASSWORD` | *(password FTP — **non** committare nel repo)* |
| `FTP_DIRECTORY` | `/portfolio.lauritodomenico.com/` |

`FTP_DIRECTORY` deve essere la cartella remota dove oggi risiedono `index.html` e `_next` (come nel file manager).

## Sicurezza

- Non inserire la password FTP in file versionati o nel workflow.
- Se la password è stata esposta in chat o in un commit, **cambiala dal pannello hosting** e aggiorna il secret `FTP_PASSWORD`.

## Build locale (controllo)

```bash
npm ci
npm run build
# Contenuto da caricare: ./out/
```

## `.htaccess` sul server

Se sul hosting hai già un `.htaccess` (rewrite, 404, ecc.), il deploy **non lo rimuove** finché non lo aggiungi in `public/` (viene copiato in `out/` al build). Puoi lasciarlo solo sul server se preferisci.
