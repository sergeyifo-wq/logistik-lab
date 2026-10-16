# Logistik Lab

Visueller Selbstlernkurs für **Grundlagen der Logistik / BLTM1 GLOG**. Die Gestaltung greift industrielle Typografie und Raster von [Brass Hands](https://brasshands.com/) auf und verbindet sie mit dunklen Flächen, Orange, Cyan und Lime. Alle Grafiken sind eigens erstellt.

- 12 geführte Module, 92 Erklärbausteine und Glossarbegriffe
- 92 animierte Lernkarten mit lokaler Wiederholungsplanung
- 6 animierte MP4-Erklärfilme à 32 Sekunden mit eingeblendeten Erklärungen, ohne Ton; optionales browserbasiertes Vorlesen
- 51 Testfragen mit Begründungen und Quellverweisen
- Training und 20-Fragen-Probetest mit 20-Minuten-Timer
- 8 Labore: Netzwerke, Bestände, EOQ, ABC/XYZ, Lager, Kommissionieren, Kapital und Rechenfälle
- Transferfragen, lokale Notizen, Fortschrittsexport und -import

## Inhalt und Quellen

Grundlage sind neun GLOG-Foliensätze, der Fragenkatalog, die Mitschrift, drei Zusammenfassungen und ein Bonusheft: 15 Dateien mit insgesamt 355 PDF-Seiten plus zwei Word-Dokumenten. Die Lehrinhalte sind neu formuliert. Im Lernraum sind Originaldateinamen, relevante PDF-Seiten und ausdrücklich korrigierte beziehungsweise annahmenabhängige Stellen ausgewiesen. Originaldokumente sind nicht im öffentlichen Repository enthalten.

## Veröffentlichung und Zugang

Die öffentliche GitHub-Pages-Ausgabe besteht aus `index.html`, `vault.json`, `.nojekyll` und Dokumentation. `vault.json` enthält den gesamten Kurs einschließlich Anwendungscode und Videos, gzip-komprimiert und mit AES-256-GCM verschlüsselt. Der Schlüssel wird mit PBKDF2-SHA256, 600.000 Iterationen und einem zufälligen Salt aus dem eingegebenen Passwort abgeleitet. Das Passwort wird nicht im Repository gespeichert. Entschlüsselung erfolgt im Browser über HTTPS; localhost ist für die Entwicklung ebenfalls geeignet.

Dies ist ein statischer Passwortschutz, keine serverseitige Anmeldung. Jeder kann die verschlüsselte Datei herunterladen und offline Passwörter ausprobieren. Die Sicherheit hängt deshalb von der Stärke des gewählten Passworts ab. Der Lernstand wird lokal gespeichert; beim Sperren wird der Lernraum neu geladen. Es gibt kein dauerhaft gespeichertes Entschlüsselungspasswort und keine serverseitige Synchronisierung. Google Fonts werden für die Darstellung geladen; bei fehlender Verbindung werden Systemschriften verwendet.

## Lokaler Quellcode

Die vollständige bearbeitbare Sicherung enthält `course.js`, `questions.js`, `videos.js`, `math.js`, `labs.js`, `app.js`, `styles.css`, `gate.html`, `media/`, `build.mjs` und `verify.mjs`. Diese unverschlüsselten Kursquellen bleiben in der persönlichen lokalen Sicherung und werden nicht in das öffentliche Repository geladen.

Mit Node.js 20 oder neuer:

```powershell
node verify.mjs
$env:STUDY_PASSWORD = Read-Host 'Passwort für den neuen Build'
node build.mjs
Remove-Item Env:STUDY_PASSWORD
```

Das Build schreibt die veröffentlichbaren Dateien nach `site/` und prüft korrekte Entschlüsselung sowie die Ablehnung eines falschen Passworts. Nur der Inhalt von `site/` gehört auf GitHub Pages. Unverschlüsselte Quelldateien und gegebenenfalls lokal entschlüsseltes HTML dürfen nicht in das öffentliche Repository hochgeladen werden. Das öffentliche Hilfsskript `decrypt.mjs` kann den vollständigen Anwendungscode mit dem bekannten Passwort lokal als `decrypted.html` wiederherstellen; `.gitignore` schließt diese Datei aus.

GitHub Pages: **Deploy from a branch → main → /(root)**. Bei Veröffentlichung der `site/`-Dateien im Repository-Stamm ist kein Framework-Build notwendig.

## Überprüfung

Siehe `QA.md` für geprüfte Rechenwerte, Browserinteraktionen und Grenzen der Prüfung. Die Inhalte dienen dem selbstständigen Lernen und ersetzen keine offizielle Angabe zum Prüfungsumfang.
