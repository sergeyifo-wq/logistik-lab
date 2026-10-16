# Logistik Lab

Visueller Selbstlernkurs für **Grundlagen der Logistik / BLTM1 GLOG**. Die Gestaltung greift industrielle Typografie und Raster von [Brass Hands](https://brasshands.com/) auf und verbindet sie mit dunklen Flächen, Orange, Cyan und Lime. Alle Grafiken sind eigens erstellt.

- 12 geführte Module, 92 Erklärbausteine und Glossarbegriffe
- Lernpfad wahlweise ausführlich oder kompakt: alle 92 Themen, gemeinsame Notizen und Fortschrittsmarkierungen, gespeicherte Moduswahl
- 92 animierte Lernkarten mit lokaler Wiederholungsplanung
- 6 animierte MP4-Erklärfilme à 32 Sekunden mit eingeblendeten Erklärungen, ohne Ton; Kapitelwahl, getrennte Steuerung, große synchronisierte Erklärung und optionales browserbasiertes Vorlesen
- 51 Testfragen mit Begründungen und Quellverweisen
- Training und 20-Fragen-Probetest mit 20-Minuten-Timer; während derselben geöffneten Sitzung nach Navigation fortsetzbar, ohne Neustart der Frist
- 8 Labore: Netzwerke, Bestände, EOQ, ABC/XYZ, Lager, Kommissionieren, Kapital und Rechenfälle
- Transferfragen, lokale Notizen, Fortschrittsexport und -import
- Relaxing-Tab mit **Hub Runner**: original gestalteter Logistik-Endless-Runner in einer Neon-Lagerhalle. Drei Spuren, Pakete, Paletten, Scannerbrücken und Gabelstapler; Entspannt/Express, Tastatur und Wischgesten, Bildschirmtasten, Pause, Fokusmodus, optionaler Synthesizer-Ton und lokale Bestleistungen je Modus.

## Inhalt und Quellen

Grundlage sind neun GLOG-Foliensätze, der Fragenkatalog, die Mitschrift, drei Zusammenfassungen und ein Bonusheft: 15 Dateien mit insgesamt 355 PDF-Seiten plus zwei Word-Dokumenten. Die Lehrinhalte sind neu formuliert. Im Lernraum sind Originaldateinamen, relevante PDF-Seiten und ausdrücklich korrigierte beziehungsweise annahmenabhängige Stellen ausgewiesen. Originaldokumente sind nicht im öffentlichen Repository enthalten.

## Veröffentlichung und Zugang

Die öffentliche GitHub-Pages-Ausgabe besteht aus `index.html`, `vault.json`, `.nojekyll` und Dokumentation. `vault.json` enthält den gesamten Kurs einschließlich Anwendungscode und Videos, gzip-komprimiert und mit AES-256-GCM verschlüsselt. Der Schlüssel wird mit PBKDF2-SHA256, 600.000 Iterationen und einem zufälligen Salt aus dem eingegebenen Passwort abgeleitet. Das Passwort wird nicht im Repository gespeichert. Entschlüsselung erfolgt im Browser über HTTPS; localhost ist für die Entwicklung ebenfalls geeignet.

Dies ist ein statischer Passwortschutz, keine serverseitige Anmeldung. Jeder kann die verschlüsselte Datei herunterladen und offline Passwörter ausprobieren. Die Sicherheit hängt deshalb von der Stärke des gewählten Passworts ab. Der Lernstand wird lokal gespeichert; beim Sperren wird der Lernraum neu geladen. Es gibt kein dauerhaft gespeichertes Entschlüsselungspasswort und keine serverseitige Synchronisierung. Google Fonts werden für die Darstellung geladen; bei fehlender Verbindung werden Systemschriften verwendet.

## Lokaler Quellcode

Die vollständige bearbeitbare Sicherung enthält `course.js`, `questions.js`, `learning.js`, `experience.js`, `videos.js`, `math.js`, `labs.js`, `app.js`, `styles.css`, `runner-engine.js`, `runner.js`, `runner.css`, `gate.html`, `media/`, `build.mjs`, `verify.mjs` und `verify-runner.mjs`. Diese unverschlüsselten Kursquellen bleiben in der persönlichen lokalen Sicherung und werden nicht in das öffentliche Repository geladen.

Mit Node.js 20 oder neuer:

```powershell
node verify.mjs
node verify-runner.mjs
$env:STUDY_PASSWORD = Read-Host 'Passwort für den neuen Build'
node build.mjs
Remove-Item Env:STUDY_PASSWORD
```

Das Build schreibt die veröffentlichbaren Dateien nach `site/` und prüft korrekte Entschlüsselung sowie die Ablehnung eines falschen Passworts. Nur der Inhalt von `site/` gehört auf GitHub Pages. Unverschlüsselte Quelldateien und gegebenenfalls lokal entschlüsseltes HTML dürfen nicht in das öffentliche Repository hochgeladen werden. Das öffentliche Hilfsskript `decrypt.mjs` kann den vollständigen Anwendungscode mit dem bekannten Passwort lokal als `decrypted.html` wiederherstellen; `.gitignore` schließt diese Datei aus.

GitHub Pages: **Deploy from a branch → main → /(root)**. Bei Veröffentlichung der `site/`-Dateien im Repository-Stamm ist kein Framework-Build notwendig.

## Überprüfung

Siehe `QA.md` für geprüfte Rechenwerte, Browserinteraktionen und Grenzen der Prüfung. Die Inhalte dienen dem selbstständigen Lernen und ersetzen keine offizielle Angabe zum Prüfungsumfang.

## Hub Runner

`←`/`→` oder A/D wechselt die Spur, `↑`/W/Leertaste springt, `↓`/S duckt sich. P/Esc und die Pausentaste halten die Runde an. Auf Touchgeräten werden Wischgesten und Antippen unterstützt; alternativ gibt es vier große Steuertasten. Fokus öffnet das gesamte Spielfeld mit Steuerung im Vollbild, sofern der Browser es unterstützt. Ton ist zunächst ausgeschaltet.

Entspannt startet langsamer und mit drei Schutzpunkten, Express schneller mit einem. Jede Hindernisreihe lässt mindestens eine Spur vollständig frei. Pakete markieren eine sichere Spur durch die jeweilige Reihe. Bestleistungen werden unabhängig vom Lernfortschritt unter `logistik-lab-runner-v1` im Browser gespeichert. Sie sind nicht Teil des Lernstandexports. Ein Seitenwechsel beendet die aktuelle Spielrunde und sichert die Bestleistung; Pausieren hält die Runde in derselben geöffneten Ansicht. Beim Öffnen der Suche, Wechseln in einen anderen Browsertab oder Verlust des Fensterfokus pausiert das Spiel automatisch.

Grafiken, Figuren, Animationen und kurze synthetische Töne sind eigens in Canvas/Web Audio erstellt. Das Spiel lädt keine Spielebibliothek, externen Spieleassets oder Werbeinhalte. Reduzierte Animationen schalten Partikel und zusätzliche Blitze aus; die Spielbewegung selbst bleibt erhalten.
