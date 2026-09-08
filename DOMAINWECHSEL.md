# Domainwechsel und SEO-Freigabe

Stand: 08.09.2026. SEO-Freigabe ausdrücklich durch Jürgen Knappich erteilt.

- Aktive Hauptdomain: https://coachingmate.de. www leitet per 301 auf die Hauptdomain weiter; HTTPS wurde für beide Hosts erfolgreich geprüft.
- Alle 29 verwendeten Bilder liegen unter public/assets/images/. Das Herkunftsmanifest bleibt erhalten.
- 31 Inhaltsseiten sind indexierbar. 12 Tag-Seiten bleiben noindex,follow; die 404-Seite bleibt noindex,nofollow.
- robots.txt erlaubt das Crawling, auch der Tag-Seiten, damit Google deren noindex lesen kann.
- Canonicals und sitemap.xml verwenden https://coachingmate.de mit abschließendem Schrägstrich. Die Sitemap enthält 31 URLs einschließlich Startseite, ohne Tags und Fehlerseite.
- Die bestehenden Weiterleitungen von /coaching-home bleiben erhalten; der ursprüngliche Blogpfad business-caoching bleibt unverändert.

## Nach Veröffentlichung prüfen

- Erfolgreichen Netlify-Deploy und ausgelieferte Indexierungsregeln kontrollieren.
- https://coachingmate.de/sitemap.xml in Google Search Console einreichen und Startseite sowie wichtige Angebotsseiten per URL-Prüfung kontrollieren.
- Search-Console-Verifizierung, 404-Berichte und Crawling beobachten. Bei unveränderter Domain ist kein Website-Adresswechsel nötig.
- Datenschutzerklärung auf den tatsächlichen Betrieb mit Netlify, Google Fonts und Calendly prüfen lassen.
- Noch benötigte Squarespace-Inhalte außerhalb der veröffentlichten Website separat archivieren.

DNS und E-Mail-Einträge bei IONOS werden durch Inhalts-Deployments nicht geändert.
