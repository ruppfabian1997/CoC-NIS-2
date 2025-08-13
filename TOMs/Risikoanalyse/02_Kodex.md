# 📘 Kodex – Verhaltensregeln und Maßnahmen zur Risikoanalyse

## 1. Ziel des Abschnitts

Ziel dieses Abschnitts ist es, sicherzustellen, dass Risiken für die Informationssicherheit systematisch identifiziert, bewertet und behandelt werden.

> **Hinweis:** Die NIS-2-Richtlinie (Art. 21) sowie §30 des UmsuCG stellen das Risikomanagement ins Zentrum der Sicherheitsverantwortung. Die Risikoanalyse ist dabei ein zentrales Teilmodul. Alle weiteren Kapitel dieses CoC stützen sich auf sie.  

---

## Verhaltensregeln

- Risiken für Vertraulichkeit, Integrität und Verfügbarkeit von Informationen und allen Maßnahmen müssen **regelmäßig bewertet** werden.
- Jede Maßnahme zur Informationssicherheit muss auf ein oder mehrere identifizierte Risiken zurückführbar sein.
- **Änderungen** an Prozessen, IT-Systemen oder der Bedrohungslage erfordern eine neue Risikoanalyse.
- Die Ergebnisse der Risikoanalyse müssen **dokumentiert** und vom Risikoverantwortlichen freigegeben werden.
- Die Risikoanalyse muss **objektiv, nachvollziehbar und konsistent** durchgeführt werden.
- Es sind geeignete Methoden zur Überwachung, Messung und Analyse der Wirksamkeit zu definieren (z. B. KPIs, Audit-Checklisten).
- Die Bewertung muss zu festgelegten Zeitpunkten erfolgen (z. B. jährlich)

---

## Empfohlene Maßnahmen

### Organisatorisch

- Einführung eines dokumentierten **Risikoanalyseprozesses** (z. B. gemäß ISO/IEC 27001:2022, 6.1.2).
- Festlegung von **Bewertungskriterien** (Eintrittswahrscheinlichkeit, Schadenshöhe).
- Zuordnung von **Risikoeigentümer:innen**.
- Regelmäßige Reviews und **Aktualisierung** bei Änderungen.
- Risikobehandlung mit Auswahl aus **Akzeptieren / Reduzieren / Transferieren / Vermeiden**.
- EInführing der Wirksamkeitsbewertung von Maßnahmen als KPIs und Einbindung in das Management Review

### Technologisch

- Nutzung unterstützender **Risikomanagement-Tools** oder Tabellenvorlagen (Excel reicht aus).
- Verknüpfung mit Asset- und Prozessinventaren.
- Risikoanalyse als Basis für Maßnahmen bei Backups, Zugriffskontrollen etc.
- Regelmäßige technische Prüfungen (z. B. Schwachstellenscans, PenTests) als Input für die Bewertung.
- Wirksamkeitsbewertung: Einsatz von Monitoring-Tools zur automatisierten Erfassung von Security-Kennzahlen.

---

## Sehr vereinfachte exemplarische Risikoanalyse

| Risiko-ID| Bedrohung                | Asset            | Auswirkung       | Eintritt | Risiko | Maßnahme             | Status     |
|----------|--------------------------|------------------|------------------|----------|--------|----------------------|------------|
| R-001    | Ransomware               | Dateiserver      | Datenverlust     | Hoch     | Hoch   | Reduzieren     | Umgesetzt  |
| R-002    | Missbrauch Adminrechte   | Active Directory | Zugriff verletzt | Mittel   | Hoch   | Reduzieren       | In Planung |
| R-003    | Verlust Dienstlaptop     | Mobiles Gerät    | Vertraulichkeit  | Niedrig  | Mittel | Vermeiden  | Umgesetzt  |

---

---

## 📊 Beispielhafte KPIs zur Bewertung der Wirksamkeit von Risikomanagementmaßnahmen

### KPI: Anteil umgesetzter Risikobehandlungsmaßnahmen

- **Definition**: Anteil der Risiken, die bereits durch Maßnahmen behandelt wurden.
- **Formel**:  
  `KPI = (Anzahl umgesetzter Maßnahmen / Gesamtzahl identifizierter Risiken) × 100`
- **Zielwert**: ≥ 90 %
- **Interpretation**: Ein hoher Wert zeigt, dass Risiken nicht nur erkannt, sondern auch aktiv behandelt werden.

---

## Mögliche beteiligte Rollen

- CISO 
- Geschäftsfürhung (Einbezieheung in die Bewertung und Akzeptanz) 
- Risikoeigner (Verantwortliche in Fachbereichen)

---

## Empfohlene Nachweisdokumente

- Risikorichtlinie / Methodikbeschreibung 
- Risikoanalyse-Doku 
- Auszug und ganze Datei der Risikoanalyse (z.B in Excel) 
- Maßnahmenkatalog
- Management-Freigaben & Protokolle bei Risikoakzeptanz


