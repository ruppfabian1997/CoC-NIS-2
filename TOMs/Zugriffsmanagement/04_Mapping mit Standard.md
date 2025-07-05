# 🔐 Mapping – Zugriffsmanagement und Authentifizierung NIS-2 zur ISO/IEC 27001:2022

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
Passwörter, Tokens und Zertifikate gehören zu den sensibelsten Elementen in der Zugriffskontrolle. Die ISO und NIS-2 fordern Sicherheitsstandards in der Authentisierung, ebenso wie ein Bewusstsein für sicheren Umgang damit [Siehe auch Schulungen und Cyberhygiene](/TOMs/Schulungen-und-Cyberhygiene/01_Überblick.md).

---

## ✅ Control 5.18 – **Zugangsrechte**

> *„Zugangsrechte zu Informationen und Systemen müssen gemäß der Richtlinien zugewiesen, regelmäßig überprüft und bei Bedarf angepasst oder entfernt werden.“*

**📌 Bezug zur NIS-2:**  
Zugriffsrechte sollten nach dem Prinzip „Need-to-know“ vergeben werden. Es sollten daher alle Berechtigungen dokumentiert, überprüft und bei Rollenwechsel sofort angepasst werden. Dies schließt auch Notfall- oder temporäre Zugänge mit ein.

---




technologische maßnahmen
8.2
8.3
8.4
8.5
