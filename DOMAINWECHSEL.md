# Umzug zu www.coachingmate.de – noch nicht ausgeführt

Status: Vorbereitung. Termin: noch nicht festgelegt. Freigabe: Jürgen Knappich.
Ein normaler Inhalts-Commit darf die Indexierung nicht aktivieren.

## Vor dem Umzug

- [ ] Termin und ausdrückliche Freigabe für den Domainwechsel festhalten.
- [x] Alle 29 auf der neuen Website verwendeten Bilder unverändert in `public/assets/images/` gesichert; sämtliche Bildverweise auf lokale Pfade umgestellt. Herkunft und Prüfsummen stehen in `image-manifest.json`.
- [ ] Weitere, nur auf Squarespace gespeicherte Inhalte und ungenutzte Medien bei Bedarf separat archivieren.
- [ ] Datenschutzerklärung auf den tatsächlichen Betrieb mit Netlify, Google Fonts und Calendly prüfen lassen.
- [ ] Domain in Netlify vorbereiten, HTTPS-Zertifikat und DNS-Zugang prüfen. E-Mail-DNS-Einträge erhalten.
- [ ] Search-Console-Verifizierung übernehmen und aktuelle URLs/Weiterleitungen dokumentieren.
- [ ] Alle Seiten, Bilder, mobile Navigation und Terminbuchung prüfen.

## Am freigegebenen Termin – als zusammenhängender Vorgang

- [ ] `www.coachingmate.de` als primäre HTTPS-Domain verwenden. Canonicals bleiben auf `https://www.coachingmate.de` mit den bisherigen Pfaden. Nicht auf netlify.app umstellen.
- [ ] Direkt vor der DNS-Umschaltung temporäre Indexierungssperren entfernen: auf Kernseiten und Artikeln `noindex,nofollow` durch `index,follow` ersetzen; 404-Seite bleibt `noindex,nofollow`, alle `/coaching-blog/tag/*` bleiben `noindex,follow` (zusätzlich durch den dauerhaften HTTP-Header abgesichert).
- [ ] `public/robots.txt` auf `User-agent: *` und `Allow: /` umstellen; `Sitemap: https://www.coachingmate.de/sitemap.xml` ergänzen. Tag-Seiten nicht per robots.txt sperren, damit ihr noindex gelesen werden kann.
- [ ] Sitemap aus den kanonischen Kernseiten und Artikeln erzeugen; keine Tags, Fehlerseiten oder Weiterleitungsquellen aufnehmen.
- [ ] Änderung veröffentlichen und DNS auf Netlify umstellen. HTTPS und die neue Website unter der finalen Domain prüfen.
- [ ] Netlify-Subdomain und Domain ohne www auf die primäre Domain weiterleiten; Pfad und Parameter erhalten.
- [ ] Indexierungsfreigabe, Canonicals, HTTP-Header und Sitemap über die finale Domain prüfen. `/coaching-home`, `/coaching-home/` und `/coaching-home/index.html` müssen mit 301 zu `/` führen. Bestehender Blogpfad `business-caoching` bleibt erhalten.

## Nach dem Umzug

- [ ] Sitemap in Search Console einreichen und wichtige URLs prüfen. Bei identischer Domain ist kein Domain-Adresswechsel in Search Console nötig.
- [ ] 404-Fehler, Crawling und DNS-Verteilung beobachten.
- [ ] Squarespace erst stilllegen, wenn die neue Seite inklusive aller Bilder unabhängig funktioniert und der Verkehr vollständig umgestellt ist.
- [ ] Bei Problemen DNS auf den gesicherten Ausgangsstand zurücksetzen und die Netlify-Kopie erneut von der Indexierung ausschließen.

Grundlage: https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes
