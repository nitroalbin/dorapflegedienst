
# Ambulanter Pflegedienst Dora GmbH - Webauftritt

Ein hochmoderner, barrierefreier und performanter Webauftritt für den ambulanten Pflegedienst Dora GmbH in Frankfurt am Main. Entwickelt mit Next.js, Tailwind CSS und Fokus auf DSGVO-Konformität.

## 🚀 Quick Start

### 1. Installation
Installieren Sie die Abhängigkeiten mit npm:
```bash
npm install
```

### 2. Konfiguration
Erstellen Sie eine `.env.local` Datei im Projektstamm und fügen Sie Ihren Web3Forms Access Key hinzu:
```bash
cp .env.local.example .env.local
# Bearbeiten Sie die .env.local und fügen Sie Ihren Key ein
```

### 3. Entwicklung
Starten Sie den Entwicklungsserver:
```bash
npm run dev
```

### 4. Build & Export
Erstellen Sie die statische Version für das Deployment:
```bash
npm run build
```
Die fertigen Dateien befinden sich im Ordner `/out`.

## 🛡️ Sicherheits- & Qualitätsmerkmale
- **DSGVO-Konform:** Integrierter Cookie-Banner, rechtssicheres Impressum und Datenschutzerklärung.
- **Barrierefreiheit:** Einhaltung von WCAG-Standards (ARIA-Labels, semantisches HTML, Skip-Links).
- **Performance:** Optimierte Ladezeiten durch Bildkompression (Unsplash-Parameter) und statischen Export.
- **Sicher:** Server-seitige Validierung der Kontaktanfragen und Schutz vor XSS/Injection.

## 🛠️ Technologien
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Kontaktformulare:** Web3Forms (API-Integration)
- **Deployment:** Netlify (Ready for Auto-Deployment)

## 📞 Kontakt
Für inhaltliche Fragen wenden Sie sich bitte an die Dora GmbH unter info@pd-dora.de.
