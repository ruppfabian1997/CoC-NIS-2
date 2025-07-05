# Mapping – Zugriffsmanagement und Authentifizierung NIS-2 zur ISO/IEC 27001:2022

> ⚠️ **Hinweis:** Die NIS-2-Richtlinie nennt im Artikel 21(2)(i) ausdrücklich die *„Zugriffskontrolle“* in Verbindung mit Personalsicherheit und dem Management von IKT-Systemen. Im deutschen Umsetzungsentwurf (§ 30 Abs. 2 Nr. 9) ist dies ebenfalls verankert.  
> **Im Code of Conduct wird Zugriffsmanagement getrennt von der Personalsicherheit betrachtet**, da es über reine Personalmaßnahmen hinausgeht und sehr technische wie organisatorische Aspekte umfasst.  
> Der Punkt der Multi-Faktor-Authentifizierung aus Art. 21(2)(j) wird ebenfalls in diesem CoC-Baustein betrachtet.
> In der ISO27001 existiert ein Control "Zugriffskontroll" (A.5.15). Das ist die zentrale Maßnahme zur NIS-Anforderung. Allerdings ist die Zugrifsskontrolle ein komplexeres Kontrukt aus mehreren weiteren Controls.

---
## Organisatorische Maßnahmen im Bereich Zugriffskontrolle

## ✅ Control 5.15 – **Zugangssteuerung**

> *„Regeln zur Steuerung des physischen und logischen Zugriffs auf Informationen und andere Werte müssen auf Grundlage von Geschäfts- und Sicherheitsanforderungen aufgestellt und umgesetzt werden.“*

**📌 Bezug zur NIS-2:**  
Dieses Control bildet das Fundament des Zugriffsmanagements. Es verlangt eine klare Abgrenzung von Zugriffsmöglichkeiten (physisch, z. B. Serverräume und digital, z. B. Anwendungen, Netzwerke. Die NIS-2 fordert solche Mechanismen, spezifiziert aber nicht einzelne Konzepte zur Zugriffskontrolle.

---

## ✅ Control 5.16 – **Identitätsmanagement**

> *„Der gesamte Lebenszyklus von Identitäten muss verwaltet werden.“*

**📌 Bezug zur NIS-2:**  
Zugriffsmanagement beginnt Identitätsmanagement. Wessen Identität geprüft und mit sinnvollen Rechten ausgestattet ist, darf auf Systeme zugreifen. NIS-2 verlangt nicht explizit ein aktives Identitätsmanagement, ist jedoch implizit zur Zugriffskontrolle zu interpretieren.

---

## ✅ Control 5.17 – **Authentisierungsinformationen**

> *„Die Verwaltung von Authentisierungsinformationen muss durch geeignete Prozesse erfolgen, inklusive Schulung des Personals über den sicheren Umgang.“*

**📌 Bezug zur NIS-2:**  
Passwörter, Tokens und Zertifikate gehören zu den sensibelsten Elementen in der Zugriffskontrolle. Die ISO und NIS-2 fordern Sicherheitsstandards in der Authentisierung, ebenso wie ein Bewusstsein für sicheren Umgang damit ([Siehe auch Schulungen und Cyberhygiene](https://github.com/ruppfabian1997/CoC-NIS-2/blob/main/TOMs/Schulungen%20und%20Cyberhygiene/01_Überblick.md)).

---

## ✅ Control 5.18 – **Zugangsrechte**

> *„Zugangsrechte zu Informationen und Systemen müssen gemäß der Richtlinien zugewiesen, regelmäßig überprüft und bei Bedarf angepasst oder entfernt werden.“*

**📌 Bezug zur NIS-2:**  
Zugriffsrechte sollten nach dem Prinzip „Need-to-know“ vergeben werden. Es sollten daher alle Berechtigungen dokumentiert, überprüft und bei Rollenwechsel sofort angepasst werden. Dies schließt auch Notfall- oder temporäre Zugänge mit ein.

---

## ✅ A.8.2 – Privilegierte Zugangsrechte

> **Maßnahme:**  
> Zuteilung und Gebrauch von privilegierten Zugangsrechten müssen eingeschränkt und verwaltet werden.

**📌 Bezug zur NIS-2:**  
Privilegierte Zugangsrechte sind ebenfall ein Teil der Konzeption in der Zugriffskontrolle. In NIS-2 ist der Punkt nicht explizit erwähnt. Er ist dennoch wichtig, da nur autorisierte und ausgewählte Nutzer mit solchen Zugangsrechte ausgestattet sein sollen.

---

## ✅ A.8.3 – Informationszugangsbeschränkung

> **Maßnahme:**  
> Der Zugang zu Informationen und anderen damit verbundenen Werten muss in Übereinstimmung mit der festgelegten themenspezifischen Richtlinie zur Zugangssteuerung eingeschränkt werden.

**📌 Bezug zur NIS-2:**  
Die Informationszugangsbeschränkung ist durch die Richtlinie zur Zugangssteuerung geregelt. Diese ist ein essentielles Dokument in der Konzeption der Zugriffskontrolle.

---

## ✅ A.8.4 – Zugriff auf Quellcode

> **Maßnahme:**  
> Lese- und Schreibzugriff auf den Quellcode, die Entwicklungswerkzeuge und die Softwarebibliotheken müssen angemessen verwaltet werden.

**📌 Bezug zur NIS-2:**  
Quellcode ist ein besonders schützenswerter Vermögenswert, da er den Kern der eingesetzten Software bildet. Ein Unkontrollierter Zugriff kann zur Ausnutzung von Schwachstellen, zum Einschleusen von Backdoors oder zu ungewollten Änderungen führen. Die Maßnahme damit ein wichtiger Teil der Zugriffskontrolle, ist allerdings nur für Unternehmen relevant, die mit Quellcode arbeiten (z.B. Softwareanbeieter).

---

## ✅ A.8.4 – Sichere Authentisierung

> **Maßnahme:**  
> Sichere Authentisierungstechnologien und -verfahren müssen auf der Grundlage von Informationszugangsbeschränkungen und der themenspezifischen Richtlinie zur Zugangssteuerung implementiert werden.

**📌 Bezug zur NIS-2:**  
Die sichere Authentisierung baut auf der grundlegende Informationssicherheitszugangsbeschränkung auf. Hierfür sollten sinnvolle Technologien und Verfahren eingesetzt werden. NIS-2 fordert diese Technologien hier auch nur implizit über den Punkt der Zugriffskontrolle.

