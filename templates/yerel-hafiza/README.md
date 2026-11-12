# Yerel Hafıza Hugo Şablonu

Bu klasörü yeni proje dizinine kopyalayın. `hugo.toml` içindeki `title`, `baseURL` ve açıklamayı düzenleyin. İçerik düzeni ve yayın öncesi liste [yayın kılavuzunda](YAYIN-KILAVUZU.md) yer alır.

Hugo 0.169.0 ile `hugo server` önizlemeyi açar. Örnek aile kaydı taslaktır. Taslakları görmek için `hugo server --buildDrafts` kullanın. Yeni aile sayfası için `hugo new content aileler/aile-adi.md` komutunu çalıştırın. Taslak metni kaynaklı içerikle tamamladıktan sonra `draft: false` yapın.

Ana sayfadaki yerleşim bilgilerini tarih ve kaynaklarıyla `content/_index.md` dosyasına ekleyin. Menü ve ana sayfa bağlantıları, menüye kaydedilen bölüm sayfalarından oluşur. Boş sayfaları yayına çıkarmadan önce doldurun veya taslağa alın. Katkı ve yayın ilkeleri sayfalarına arşivin iletişim bilgilerini ve uygulamalarını yazın.

Cloudflare Pages üzerinde üretim dalını seçin, derleme komutunu `hugo`, çıktı klasörünü `public` ve `HUGO_VERSION` değişkenini `0.169.0` olarak ayarlayın. Yayından önce `hugo --panicOnWarning` çalıştırın ve canlı bağlantıları kontrol edin.
