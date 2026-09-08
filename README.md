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

- Bilder werden von den bisherigen Squarespace-CDN-Adressen geladen. Die dortigen Dateien müssen verfügbar bleiben.
- Anton und Epilogue werden über Google Fonts geladen.
- Der bestehende Calendly-Kalender ist auf `/termin/` eingebettet; ein direkter Link steht als Alternative bereit.
- Es sind keine Zugangsdaten oder lokalen Arbeitsreferenzen enthalten.
- Die Domain `www.coachingmate.de` wird durch dieses Deployment nicht umgestellt.
- Die zusätzliche Netlify-Veröffentlichung bleibt vorerst mit `noindex,nofollow` und `robots.txt` von Suchmaschinen ausgeschlossen; kanonische URLs zeigen auf die vorhandene Coachingmate-Domain. Vor einem endgültigen Domainwechsel Indexierung bewusst aktivieren und die kanonischen URLs überprüfen.
- Impressum, Datenschutz und die ursprünglichen Blogtexte stammen aus der bestehenden Website. Kurze Artikel-Einleitungen, Bildbeschreibungen und praktische FAQ wurden ergänzt. Rechtstexte müssen vor dem Umzug zum tatsächlichen Hosting passen.

## Prüfung

Der verbindliche Ablauf für den späteren Domainwechsel steht in [DOMAINWECHSEL.md](DOMAINWECHSEL.md). Tag-Filter bleiben dauerhaft noindex; ein normaler Inhalts-Commit aktiviert keine Suchmaschinenfreigabe.

Die veröffentlichten HTML-Dateien sind maßgeblich. Der frühere lokale Squarespace-Generator ist ein archivierter Entwurfsstand und darf diese Dateien nicht ungeprüft überschreiben.

Alle lokalen Seitenlinks, Sprungziele, eindeutige IDs und die H1-Struktur wurden vor Veröffentlichung geprüft. Der bestehende Buchungsablauf wurde nicht durch eine Testbuchung ausgelöst.
