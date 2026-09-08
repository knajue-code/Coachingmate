# CoachingMate

Statische Website für Jürgen Knappich, basierend auf dem bestätigten CoachingMate-Design mit Anton, Epilogue, Dunkelgrün, Aqua und Violett.

## Veröffentlichung auf Netlify

- Produktionsbranch: `main`
- Publish-Verzeichnis: `public`
- Kein Build-Kommando und keine Paketinstallation erforderlich.
- `netlify.toml` enthält die Veröffentlichungs-Einstellungen.
- Interne Seiten verwenden die bisherigen Pfade. `/coaching-home` leitet zur Startseite weiter.

## Inhalte bearbeiten

Die HTML-Dateien in `public/` sind die Seitenquellen. Jede Unterseite liegt als `index.html` in ihrem zugehörigen Ordner. Die gemeinsame CSS-Datei liegt unmittelbar in `public/`. Änderungen an Dateien committen und pushen; bei aktivierter Git-Anbindung veröffentlicht Netlify den aktuellen Stand automatisch.

Der Blog umfasst 17 vorhandene Artikel und 12 Themenansichten (die bisher getrennten Schreibweisen Coaching/coaching sind zusammengeführt). Er ist statisch: Neue Artikel müssen als HTML ergänzt und auf der Blogübersicht sowie gegebenenfalls in den Themenansichten verlinkt werden. Es besteht keine automatische Synchronisation mit Squarespace.

## Externe Dienste und bestehende Domain

- Alle 29 verwendeten Bilder sind unverändert in `public/assets/images/` gesichert und werden von Netlify ausgeliefert. `image-manifest.json` dokumentiert Herkunft, Dateigröße und SHA-256-Prüfsumme. Die Website benötigt das Squarespace-CDN nicht mehr.
- Anton und Epilogue werden über Google Fonts geladen.
- Der bestehende Calendly-Kalender ist auf `/termin/` eingebettet; ein direkter Link steht als Alternative bereit.
- Es sind keine Zugangsdaten oder lokalen Arbeitsreferenzen enthalten.
- Die aktive Hauptdomain ist `https://coachingmate.de`; `www.coachingmate.de` leitet dorthin weiter. Canonicals und Sitemap verwenden die Hauptdomain.
- SEO-Freigabe durch Jürgen Knappich am 08.09.2026: 31 Inhaltsseiten sind indexierbar. Die 12 Tag-Filter und die 404-Seite bleiben noindex. Die Sitemap enthält die 31 Inhaltsseiten einschließlich Startseite.
- Impressum, Datenschutz und die ursprünglichen Blogtexte stammen aus der bestehenden Website. Kurze Artikel-Einleitungen, Bildbeschreibungen und praktische FAQ wurden ergänzt. Rechtstexte müssen vor dem Umzug zum tatsächlichen Hosting passen.

## Prüfung

Der dokumentierte Stand zum Domainwechsel steht in [DOMAINWECHSEL.md](DOMAINWECHSEL.md). Tag-Filter bleiben dauerhaft noindex; ein normaler Inhalts-Commit aktiviert keine Suchmaschinenfreigabe.

Die veröffentlichten HTML-Dateien sind maßgeblich. Der frühere lokale Squarespace-Generator ist ein archivierter Entwurfsstand und darf diese Dateien nicht ungeprüft überschreiben.

Alle lokalen Seitenlinks, Sprungziele, eindeutige IDs und die H1-Struktur wurden vor Veröffentlichung geprüft. Der bestehende Buchungsablauf wurde nicht durch eine Testbuchung ausgelöst.
