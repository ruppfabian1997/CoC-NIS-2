# 📘 Kodex – Business Continuity Management (BCM)

## 1. Ziel des Abschnitts  
Ziel dieses Kodex ist es, die **Verfügbarkeit, Integrität und Vertraulichkeit** kritischer Informationen und Systeme während Störungen, Notfällen und Krisen aufrechtzuerhalten. Dazu werden Maßnahmen zu Business Continuity, Datensicherung, Redundanz sowie zum Notfall- und Krisenmanagement festgelegt.

---

## Verhaltensregeln

- Kritische Geschäftsprozesse und IT-Dienste müssen bei jeder Art von Störung fortgeführt oder binnen definierter Fristen (RTO/RPO) wiederhergestellt werden können.
- Backups und Redundanzlösungen sind so zu betreiben, dass sie jederzeit einsatzbereit und geprüft sind.
- Notfall- und Krisenpläne inklusive Rollen, Eskalationsstufen und Kommunikationswegen sind bekannt und regelmäßig geprobt.
- Informationssicherheitsmaßnahmen sind auch unter Krisenbedingungen aktiv zu managen oder durch Ersatzlösungen zu realisieren.
- Alle BCM-Prozesse, Backup-Strategien und Krisenübungen sind zu dokumentieren, zu testen und kontinuierlich zu verbessern.

---

## Empfohlene Maßnahmen

### A. BCM-Maßnahmen  
- Erstellung eines Business-Continuity-Plans (BCP), der Informationssicherheit bei Störungen aktiv berücksichtigt.
  - > Ein BCP ist Plan der beschreibt, was zu tun ist, wenn etwas schiefgeht ( z. B. bei Cyberangriffen, Stromausfällen etc.)
- Durchführung einer Business Impact Analyse (BIA) zur Identifikation priorisierter Geschäftsaktivitäten und IT-Ressourcen.
  - > Eine BIA ist wie ein Lagebericht: Sie analysiert, welche Bereiche und Prozesse besonders wichtig sind und was passiert, wenn sie ausfallen. Als kleines Beispiel: Was kostet es das Unternehmen, wenn deine Website für 2 Stunden nicht funktioniert?
- Festlegung von RTO (Recovery Time Objective) und RPO (Recovery Point Objective) für alle kritischen Informationssysteme und Datenbestände.
  - > RTO - Maximale Zeit, die ein System oder Prozess ausfallen darf, bevor es wieder laufen muss. & RPO - beschreibt, wie viel Datenverlust akzeptiert wird nach einem Crash oder Angriff.
- Regelmäßige Übungen, Simulationen und Managementfreigaben für BCM- und IT-Wiederherstellungsprozesse.
- Einsatz geeigneter Monitoring- und Frühwarnsysteme, um mögliche Störungen frühzeitig zu erkennen.

### B. Backup-Strategie-Maßnahmen  
- Implementierung einer Datensicherungsrichtlinie mit vollständigen Aufzeichnungen, gesicherten externen Speicherorten, Verschlüsselung und periodischen Wiederherstellungstests.
- Sicherstellungdes Betriebs durch Redundanzen (z.B. in der Systemarchitektur)

### C. Notfall- und Krisenmanagement-Maßnahmen  
- **Notfall- und Krisenplan**  
  Erstellen eines Plans mit Rollenbeschreibung, Melde- und Eskalationsprozessen, Kommunikationsmatrix und behördlicher Anbindung (z. B. CSIRT).
- **Krisenteam & Übungen**  
  Benennung eines Krisen-Teams, regelmäßige Simulationen von IT-Ausfällen und Multi-Incident-Szenarien, Lessons-Learned-Workshops.
- **Kommunikation & Reporting**  
  Einrichtung eines zentralen Meldesystems, Standard-Templates für Erstmeldung und Abschlussbericht, Integration in das BCP-Dokument.

---

## Mögliche beteiligte Rollen

- BCM-Verantwortliche Person
- CISO
- Incident-Response-Team
- Krisenstab
- System- und Netzwerkadministration  
- Geschäftsbereichsleitung
- Externe Dienstleister (z. B. Backup-Provider, Cloud-Anbieter)

---

## Empfohlene Nachweisdokumente

- Business-Continuity-Plan mit IKT-Kontinuitäts- und Notfall-Krisenmanagement-Modulen  
- Dokumentierte Business Impact Analyse (BIA) mit RTO/RPO  
- Datensicherungsrichtlinie und Nachweise zu Wiederherstellungstests  
- Redundanz-Belege (In Architektur oder für Lieferanten, etc.)
- Protokolle von Krisenübungen und Lessons Learned  
- Verträge mit externen Anbietern für Backup, Hosting und Cloud-Kontinuität

---
