# QA — Logistik Lab

Geprüft am 16. Oktober 2026. Die Prüfung bezieht sich auf die hier gespeicherte Ausgabe. Die Website ist ein didaktisch aufbereiteter Selbstlernkurs; sie ist keine offizielle Prüfungsfreigabe.

## Relaxing / Hub Runner

Der neue achte Navigationstab enthält einen eigenständigen Endless Runner mit ursprünglichen Canvas-Grafiken im Design der Lernseite. Die laufende Spielrunde ist von Lernnotizen, Moduswahl und Prüfungsfortschritt getrennt.

`node verify-runner.mjs`: **31 Spielprüfungen bestanden**, zusätzlich zu den 315 Kursprüfungen. Geprüft werden Start, Spurgrenzen, Spurwechsel, Sprung- und Duckdauer, passend überwindbare Hindernisse, nicht überspringbare Gabelstapler, verfehlte und einmalig eingesammelte Pakete, Schutzzeit nach Treffern, Spielende, Pause/Fortsetzung, ungültige Zeitwerte und Kollisionen bei langsamen Frames. 2.000 generierte Hindernisreihen enthalten stets mindestens eine hindernisfreie Spur und eine passende Paketspur. Zwei Läufe über je fünf simulierte Minuten prüfen beide Modi bei steigender Geschwindigkeit auf Spielbarkeit, begrenzte Objektanzahl und eingehaltene Maximalgeschwindigkeit.

Browserprüfung im Chromium-basierten In-App-Browser:

- Der Relaxing-Tab und die direkte Route `#relax` öffnen das Spiel hinter dem vorhandenen Passwortzugang.
- Echtes Spielen: Distanz steigt, Pakete werden eingesammelt, Treffer ziehen Schutzpunkte ab. Eine Testschicht endet mit 880 Punkten, vier Paketen und rund 290 Metern. Die Punktzahl ergibt sich aus `floor(2 × Distanz + 75 × Pakete)`.
- Pause hält die angezeigte Distanz bei 187 m; Fortsetzen führt dieselbe Runde weiter. Tastatur und sichtbare Bildschirmtasten lösen Spielaktionen aus. P pausiert. Suche über `/` pausiert automatisch; Schließen der Suche lässt die Pause bestehen.
- Fokusmodus zeigt das vollständige Spiel mit HUD und den vier Steuertasten. Vollbild lässt sich wieder verlassen.
- Entspannt hat drei Schutzpunkte; Express einen. Nach Moduswechsel wird die jeweils eigene Bestleistung angezeigt. 880 Punkte bleiben nach vollständigem Neuladen und erneuter Entsperrung erhalten.
- Ton kann über den ausdrücklich betätigten Schalter ein- und ausgeschaltet werden. Der Schalter meldet den Zustand über `aria-pressed`.
- Menü und Steuerelemente bei 320, 390, 768, 1024 und 1440 px: keine horizontale Seitenüberbreite, keine gemessene Textüberbreite; Startmenü vollständig innerhalb des Spielfelds.
- Rückkehr zum Lernpfad funktioniert und erhält die gespeicherte Kompaktwahl. Während der geprüften Wege keine Fehler oder Warnungen in der Browserkonsole.

Grenzen: Wischgesten sind implementiert, wurden aber nicht auf einem physischen Touchgerät geprüft. Die Prüfung deckt keinen Browser mit Screenreader-Spielsteuerung oder jede Mobilbrowser-Vollbildvariante ab. Bestleistungen sind lokal und nicht Teil des Kursfortschrittexports.

## Überarbeitung nach allgemeiner QA

- Überbreite langer Wörter wie „Logistikdienstleister“ bei 320 px behoben; Kopfzeile, Raster, Kennzahlen, Schaltflächen und Quellenangaben passen sich schmalen Ansichten an.
- Lernpfad mit Ausführlich/Kompakt für alle 92 Bausteine. Kompakt nutzt eigens formulierte Zusammenfassungen; vollständige Erklärung und Beispiel lassen sich einzeln öffnen. Moduswechsel und Neuladen erhalten Notizen und Fortschritt.
- Lernkarten wachsen mit der Antwort, behalten ihre Flip-Animation und schneiden lange Texte nicht ab.
- Videosteuerung unterhalb des Bildes, vier Kapitel zum Anspringen, große synchronisierte Erklärung und vollständiges Transkript. Alle sechs Filme neu gerendert; Textband und Diagramme getrennt, Formeln und Kurvenbeschriftungen versetzt.
- Laufende Trainings und Probetests lassen sich innerhalb derselben geöffneten Sitzung nach Navigation fortsetzen. Die ursprüngliche Prüfungsfrist läuft weiter; ein Seitenneuladen speichert keine laufende Testsession.
- EOQ-Diagrammbereich berücksichtigt auch kleine eingegebene Bestellmengen; Achsenwerte werden kompakt formatiert. Wegeempfehlung im Lager berücksichtigt drei beziehungsweise sechs sichtbare Spalten. Nicht endliche Rechenergebnisse werden abgewiesen.
- Fortschrittsimport prüft bekannte IDs, Datentypen, Termine und Wertebereiche; alte Sicherungen erhalten den ausführlichen Standardmodus.

## Zusätzlicher Fach- und Aktualitätscheck

Die folgenden Primärquellen wurden am 16.10.2026 geprüft und im Lernraum unter „Quellen & Korrekturen“ sowie in passenden Modulen verlinkt:

- [CSCMP: Definitionen von SCM und Logistik](https://cscmp.org/CSCMP/cscmp/educate/scm_definitions_and_glossary_of_terms.aspx): SCM umfasst auch Beschaffung, Umwandlung und Partnerkoordination; Logistik ist ein Teil davon.
- [MIT OpenCourseWare: Inventory / EOQ](https://ocw.mit.edu/courses/15-760b-introduction-to-operations-management-spring-2004/a6608e17a8ec8957ab797240629d9d6a_lec6_invntry.pdf): klassische EOQ-Formel, Kostenminimum und Modellannahmen. Eine ältere mathematische Lehrquelle ist keine Quelle für aktuelle Marktpreise.
- [EPAL: Europalette EPAL 1](https://www.epal-pallets.org/eu-de/ladungstraeger/epal-europalette): 1.200 × 800 × 144 mm. Die 150 mm einzelner Kursaufgaben bleiben ausdrücklich eine gerundete Rechenannahme. Geometrische Passung ist keine Tragfähigkeits- oder Stapelsicherheitsprüfung.
- [NIST: Measures of Scale](https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm): Standardabweichung aus quadrierten Abweichungen. Das Labor behandelt die eingegebene Periodenreihe als Grundgesamtheit mit Division durch n; eine Stichprobenschätzung mit n−1 ist davon zu unterscheiden.
- [DHL: 3PL vs. 4PL](https://www.dhl.com/global-en/delivered/global-trade/3pl-vs-4pl-whats-the-difference-and-whats-right-for-you.html): operative Leistungen und übergreifende Koordination. Keine eigenen Anlagen ist die Kursmodell-Annahme für 4PL, kein ausnahmsloses Eigentumskriterium realer Anbieter.

Preise, EURIBOR, Steuerannahmen und Jahresbezüge der Rechenaufgaben bleiben als historische Übungsdaten gekennzeichnet. XYZ-Grenzen sind Kursbeispiele. Der Fachcheck ist datiert und aktualisiert sich nicht automatisch.

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

`node verify.mjs`: **315 Prüfungen bestanden**. Dazu zählen Rechenwerte, EOQ-Kostenminimum, Meldebestand, Durchschnittsbestand, Kapitalbindung, Palettengeometrie, XYZ-Grenzen und Nullmittelwert sowie konsistente Modul-, Karten-, Quellen- und Fragenzuordnung. Zusätzlich geprüft: vollständige Zuordnung aller 92 Kompaktfassungen, Abwärtskompatibilität und JSON-Rundlauf des Lernstands, ungültige Importwerte, Fristberechnung einschließlich Ablauf, EOQ-Diagrammgrenzen und Lagerwege bei unterschiedlicher Spaltenzahl.

Referenzwerte:

- EOQ bei D=12.000, S=150 €, C=20 €, h=20 %: 948,6833 Stück
- Bestell- und Zyklus-Lagerhaltungskosten am Optimum: je 1.897,3666 €/Jahr
- Meldebestand bei d=20, L=5, SB=40: 140 Stück
- Ø Bestand bei Q=400, SB=40: 240 Stück
- Gewichtete Kapitalkosten bei 75 % FK zu 3 % und 25 % EK zu 7 %: 4 %
- XYZ: [85;115] → X bei VK=0,15; [70;130] → Z bei VK=0,30; [0;0] → nicht definiert
- Palettengeometrie mit toleranter Behandlung binärer Gleitkommazahlen: 20 beziehungsweise 288 Kartons

Build: AES-GCM-Roundtrip mit korrektem Passwort bestanden; falsches Passwort wurde abgelehnt. JavaScript-Syntaxprüfungen bestanden. Veröffentlicht werden ausschließlich Zugriffsschale, verschlüsseltes Bundle und Dokumentation, keine Originalunterlagen oder Klartext-Lerninhalte.

## Browserprüfung der Überarbeitung

Im Chromium-basierten In-App-Browser:

- 35 Ansichten: sieben Hauptbereiche bei 320, 390, 768, 1024 und 1440 px Breite ohne horizontale Seitenüberbreite oder gemessene Textüberbreite.
- Alle zwölf Modulansichten bei 320 px und alle acht Labore bei 320 sowie 768 px ohne horizontale Seitenüberbreite; zusammen 63 geprüfte responsive Ansichten.
- Ausführlich/Kompakt schaltet vollständige Erklärungen beziehungsweise Zusammenfassungen um. Aufklappen funktioniert. Dieselbe Transfernotiz bleibt in beiden Modi und nach vollständigem Neuladen mit erneuter Entsperrung erhalten.
- Lange Paletten-Lernkartenantwort bei 320 px: Vorder- und Rückseite ohne internen Textüberlauf, Flip und Bewertungsanzeige funktionieren.
- Video-Kapitel springt auf Sekunde 24 und aktualisiert die Erklärung. Wiedergabe schreitet tatsächlich fort; Neustart funktioniert. Video 960 × 540, 32 Sekunden, kein Medienfehler. Eingebettete native Steuerelemente sind deaktiviert; die eigene Steuerung liegt geometrisch unterhalb des Bildes.
- Probetest: eine richtige Antwort ausgewählt, zum Glossar und zurück navigiert, Session fortgesetzt. Frage und Antwort bleiben erhalten; Countdown läuft von 20:00 auf 19:52 weiter. Vorzeitige Auswertung ergibt 1/20, die 19 unbeantworteten Fragen zählen als falsch.
- Der datierte Fachcheck mit fünf Primärquellen wird angezeigt. Keine Fehler oder Warnungen in der Konsole während dieser geprüften Wege.

Alle 24 Filmszenen wurden anhand repräsentativer Frames visuell kontrolliert. Zwei dabei gefundene Kollisionen zwischen Formel beziehungsweise Beschriftung und Diagramm wurden versetzt und erneut visuell geprüft.

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

Export/Import ist implementiert und durch automatisierte Prüfungen für Datenbereinigung und JSON-Rundlauf abgesichert, wurde jedoch nicht mit einem echten Browser-Dateiimport durchgespielt. Der vollständige 20-Minuten-Timer wurde nicht bis zum Ablauf abgewartet; die Fristberechnung und der Ablaufzustand sind automatisiert geprüft. Weitere Browser und echte Mobilgeräte wurden für diese Überarbeitung nicht separat geprüft. Inhaltliche Prüfung und Stichproben können keine vollständige Fehlerfreiheit oder Abdeckung der tatsächlichen Prüfung garantieren.

Der statische Passwortschutz verschlüsselt den Inhalt, bietet aber weder serverseitige Anmeldung noch eine Begrenzung von Offline-Passwortversuchen. Ein kurzes Passwort schützt entsprechend weniger stark. Originaldateien bleiben lokal. Browser-Lernstand ist geräteabhängig und benötigt für einen Gerätewechsel Export und Import.
