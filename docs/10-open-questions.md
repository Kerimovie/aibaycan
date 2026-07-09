# 10 — Open questions

Cavabsız strateji/texniki suallar (mövcud kod əsasında).

1. **Prod hosting seçilməyib.** Reverse-proxy, TLS və backup strategiyası hələ qərarlaşdırılmayıb — bax [11 — Backlog](./11-backlog.md) TODO və [14 — Deployment](./14-deployment.md).
2. **DB kontenti tək-dildə saxlanılır.** Çoxdilli kontent schema-sı hazırda YAGNI (bax [09](./09-decisions-log.md) #007 — i18n yalnız UI qatında). Gələcəkdə çoxdilli kontent lazım olarsa, schema qərarı yenidən nəzərdən keçirilməlidir.

> Bağlandı: ~~Login rate-limit~~ — tətbiq olundu (IP üzrə login 10/15dəq, leads 10/10dəq; bax [16](./16-security.md), decisions #019).
