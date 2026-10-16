# QA — Logistik Lab

Geprüft am 16. Oktober 2026. Die Prüfung bezieht sich auf die hier gespeicherte Ausgabe. Die Website ist ein didaktisch aufbereiteter Selbstlernkurs; sie ist keine offizielle Prüfungsfreigabe.

## Inhalt

Die Kernbegriffe wurden mit den neun originalen Foliensätzen abgeglichen. Seitenangaben beziehen sich auf die PDF-Seitenfolge. Fragenkatalog, Mitschrift und Zusammenfassungen wurden für Struktur, Beispiele und Problemstellen herangezogen. Beispiele, Filme, Quizfragen und Transferaufgaben sind für den Lernraum formuliert.

Besonders geprüft und in „Quellen & Korrekturen“ erklärt:

- EOQ mit Quadratwurzel über dem gesamten Bruch und konsistenten Jahreseinheiten
- Frage 57: Bestellkosten aus Einkaufspersonalkosten, ausdrücklich angenommene Arbeitstage und Kostenverteilung
- Frage 58: Nettopreisannahme, Klammern und Bestellhäufigkeit
- Frage 52.1: fehlende EURIBOR- und Eigenkapitalangaben nicht stillschweigend als null behandelt
- Frage 52.2: FK-Zins 3,315 %, EK-Rendite 10 %, Monatskosten 1.205,01 €
- Frage 52.3: 52,13 € Monatskosten, 288 Kartons nur unter benannter Höhen- und Geometrieannahme
- ABC versus XYZ; Grenzen 0,15 und 0,30 wie im Foliensatz
- Direkter/indirekter Fluss versus zentrale/dezentrale Bestände
- FIFO versus Platzvergabe; Regallager nicht auf Kleinteile reduziert
- Prozent versus Promille; Servicewerte aus der Mitschrift nicht als allgemeingültige Ziele verwendet
- Lieferantenperspektive bei Konsignation; VMI gesondert erläutert
- Historische und missverständliche Angaben nicht als aktuelle Fakten präsentiert

## Automatisierte Prüfungen

`node verify.mjs`: **187 Prüfungen bestanden**. Dazu zählen Rechenwerte, EOQ-Kostenminimum, Meldebestand, Durchschnittsbestand, Kapitalbindung, Palettengeometrie, XYZ-Grenzen und Nullmittelwert sowie konsistente Modul-, Karten-, Quellen- und Fragenzuordnung.

Referenzwerte:

- EOQ bei D=12.000, S=150 €, C=20 €, h=20 %: 948,6833 Stück
- Bestell- und Zyklus-Lagerhaltungskosten am Optimum: je 1.897,3666 €/Jahr
- Meldebestand bei d=20, L=5, SB=40: 140 Stück
- Ø Bestand bei Q=400, SB=40: 240 Stück
- Gewichtete Kapitalkosten bei 75 % FK zu 3 % und 25 % EK zu 7 %: 4 %
- XYZ: [85;115] → X bei VK=0,15; [70;130] → Z bei VK=0,30; [0;0] → nicht definiert
- Palettengeometrie mit toleranter Behandlung binärer Gleitkommazahlen: 20 beziehungsweise 288 Kartons

Build: AES-GCM-Roundtrip mit korrektem Passwort bestanden; falsches Passwort wurde abgelehnt. JavaScript-Syntaxprüfungen bestanden. Veröffentlicht werden ausschließlich Zugriffsschale, verschlüsseltes Bundle und Dokumentation, keine Originalunterlagen oder Klartext-Lerninhalte.

## Browserprüfung

Microsoft Edge, Desktop und 390 × 844 Pixel:

- Falsches Passwort: Fehlermeldung; richtiges Passwort: vollständiger Lernraum
- 12 Module und die passenden Erklärbausteine erreichbar
- Fortschrittsmarkierung und Transfernotiz nach vollständigem Neuladen erhalten
- Flashcard-Flip, Antwortseite, Bewertung und Kartenwechsel funktionieren
- Globale Suche und Glossarfilter liefern passende Treffer
- EOQ-Eingaben und Optimumübernahme funktionieren; Nullwerte werden abgewiesen
- XYZ-Grenzen sowie Nullmittelwert korrekt dargestellt
- FIFO wählt Charge 1; LIFO Charge 8; Entnahme aktualisiert die Plätze und Folgeempfehlung
- Pick-Auftrag 2×A, 1×B, 1×C wird korrekt bestätigt
- Training zeigt richtige und falsche Antworten mit Erklärung; Gesamtscore stimmt mit den Antworten überein
- Probetest startet mit 20 Fragen und 20 Minuten; bei vorzeitigem Ende zählen unbeantwortete Fragen als falsch
- Mobile Startseite und EOQ-Labor ohne Überbreite des Inhalts; die Navigation ist horizontal scrollbar
- Browserkonsole während der geprüften Wege ohne Fehler oder Warnungen
- Video-Metadaten und echte Wiedergabe geprüft: 960×540, 32 Sekunden, kein Medienfehler

Die sechs Filmdateien wurden mit ffprobe geprüft; repräsentative Frames aller Filme wurden visuell kontrolliert. Sie enthalten animierte Diagramme und eingeblendete deutsche Erklärungen, keinen Ton. Optionales Vorlesen hängt von einer verfügbaren deutschen Browserstimme ab. Schrift-Fallbacks sind vorhanden. Reduzierte Animationen werden per Systemeinstellung oder Website-Schalter unterstützt.

## Grenzen

Export/Import ist implementiert und validiert Dateiformat und Werte, wurde jedoch nicht mit einem echten Browser-Dateiimport durchgespielt. Der vollständige 20-Minuten-Timer wurde nicht bis zum Ablauf abgewartet. Weitere Browser und echte Mobilgeräte wurden nicht separat geprüft. Inhaltliche Prüfung und Stichproben können keine vollständige Fehlerfreiheit oder Abdeckung der tatsächlichen Prüfung garantieren.

Der statische Passwortschutz verschlüsselt den Inhalt, bietet aber weder serverseitige Anmeldung noch eine Begrenzung von Offline-Passwortversuchen. Ein kurzes Passwort schützt entsprechend weniger stark. Originaldateien bleiben lokal. Browser-Lernstand ist geräteabhängig und benötigt für einen Gerätewechsel Export und Import.
