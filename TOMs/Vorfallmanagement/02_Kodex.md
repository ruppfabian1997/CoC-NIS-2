# 📘 Kodex – Verhaltensregeln und Maßnahmen zum Vorfallmanagement

## 1. Ziel des Abschnitts

Ziel dieses Abschnitts ist es, sicherzustellen, dass alle Informationssicherheitsvorfälle erkannt, gemeldet, bewertet, behandelt und dokumentiert werden – und dass daraus kontinuierlich gelernt wird. So können Auswirkungen reduziert und Wiederholungen vermieden werden.

> **Abgrenzung:** Das Vorfallmanagement wird in diesem Kodex getrennt vom Notfall- und Krisenmanagement behandelt. Während Vorfallmanagement operative Sicherheitsstörungen behandelt, greift das Notfallmanagement bei existenzbedrohenden Ausfällen (z. B. Totalverlust von Systemen, Daten oder Standorten). Da Vorfälle aktiv gemeldet werden, existiert außerdem eine Schnittstelle zur Meldepflicht.

---

## Verhaltensregeln

- Informationssicherheitsvorfälle müssen **unverzüglich gemeldet** werden (Auch schon bei Verdacht).
- Die Meldung erfolgt über die zentral definierte **Kontaktstelle oder ein Meldesystem**.
- **Niemand** darf auf eigene Faust Maßnahmen ergreifen, die Beweise vernichten oder den Vorfall verschärfen könnten.
- Mitarbeitende müssen die **Anweisungen des Incident-Response-Teams** befolgen.
- Aus Vorfällen werden systematisch **Lessons Learned** abgeleitet und Verbesserungsmaßnahmen initiiert.
- Die **Vertraulichkeit** und **Integrität** der Meldungen sowie der identifizierten Beweise ist zu jeder Zeit sicherzustellen.

---

## Empfohlene Maßnahmen

### Organisatorisch

- Einführung eines dokumentierten **Incident-Management-Prozesses** mit klaren Rollen und Zuständigkeiten.
- Definition von **Kriterien zur Einstufung** von Ereignissen als Vorfall.
- Aufbau eines **Incident-Response-Teams** mit geschultem Personal.
- Erfassung und **strukturierte Dokumentation** von Vorfällen (z. B. via Ticketsystem).
- Festlegung von **Kommunikationswegen** für interne und externe Meldungen ([Siehe auch Meldepflicht](https://github.com/ruppfabian1997/CoC-NIS-2/tree/main/TOMs/Notfall-%20und%20Krisenmanagement)).
- Integration in das Notfallmanagement ([Siehe Notfallmanagement](https://github.com/ruppfabian1997/CoC-NIS-2/tree/main/TOMs/Notfall-%20und%20Krisenmanagement)).

### Technologisch

- Implementierung eines **SIEM-Systems** oder vergleichbarer Lösung zur Erkennung und Korrelation von Ereignissen.
- Einrichtung von **Monitoring- und Logging-Funktionen** gemäß Anforderungen (vgl. ISO/IEC 27001:2024, A.8.15 / A.8.16).
- Einsatz von automatisierten **Alarmierungen** bei erkannten Anomalien.
- Sicherstellung der **Beweissicherung** nach forensischen Standards (siehe Control 5.28).
- Aufbau sicherer Schnittstellen zur Meldung durch Dritte (z. B. externe Partner, Dienstleister).

---

## Mögliche beteiligte Rollen

- Incident-Response-Team  
- IT-Administration  
- Informationssicherheitsbeauftragte:r (CISO)  
- Geschäftsführung (z. B. bei Eskalationen oder Meldepflichten)  
- Datenschutzbeauftragte:r   
- Mitarbeitende (als Meldepflichtige)  
- ggf. externe Forensik- oder IT-Dienstleister

---

## Nachweisdokumente

- Richtlinie zum Umgang mit Informationssicherheitsvorfällen  
- Incident-Management-Prozessbeschreibung  
- Rollenbeschreibung des Incident-Response-Teams  
- Liste geschulter Mitarbeitender  
- Vorfall-Dokumentationen (z. B. im Ticketsystem)  
- Protokolle zu Beweissicherung und Analyse  
- Lessons-Learned-Berichte / Maßnahmenkataloge  
- Monitoring-Protokolle  

