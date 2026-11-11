# Gümüşhacıköy Hafızası

Gümüşhacıköy için Hugo tabanlı yerleşim, kültürel miras ve fotoğraf arşivi. Projenin kapsamı [yol haritasında](YOL-HARITASI.md).

## Yerel çalışma

Hugo 0.169.0 ve Node.js 22 ile çalıştırın.

```sh
npm ci
npm run build
python3 -m http.server 1313 --bind 127.0.0.1 --directory public
```

Önizleme adresi `http://localhost:1313/`. İçerik düzenlerken otomatik yenileme için `npm run dev` kullanılabilir. Arama indeksini görmek için yeniden `npm run build` çalıştırın.

## İçerik

Yerleşimler `content/yerlesimler`, yapılar `content/miras`, arşiv kayıtları `content/arsiv` altında yer alır. Yapı veya arşiv kaydındaki `yerlesim` alanı, ilgili Markdown sayfasının Hugo yoludur. Örnek olarak `/yerlesimler/gumus` kullanılabilir. Yeni fotoğraf için `content/arsiv/gumushacikoy-2016/` kaydındaki dosya yapısını ve künye alanlarını izleyin. Arşiv kaydının üç sınıflandırma alanı `yerler`, `donemler` ve `konular`.

İlk fotoğraf Wikimedia Commons’taki Emreozgul68 kaydından CC BY-SA 4.0 ile alınmıştır. Lisans, üretici ve kaynak bağlantısı künyede yer alır. Özel orijinalleri ve izin belgelerini Git deposunun dışında tutun.

## GitHub Pages

`main` dalına yapılan her push, GitHub Actions ile Hugo ve Pagefind’i derleyip siteyi yayımlar. Depo ayarlarında **Pages → Source → GitHub Actions** seçilir. Derleme, GitHub Pages’in verdiği adresi kullanır. Proje alt adresi Hugo bağlantılarına ve arama sonuçlarına uygulanır.

## Cloudflare Pages

GitHub deposunu bir Pages projesine bağlayın. Üretim dalı `main`, derleme komutu `npm run build`, çıktı klasörü `public`. Cloudflare ortamında `HUGO_VERSION` değerini `0.169.0` olarak ayarlayın. Üretim için özel alan adı bağlandığında `SITE_URL` değerini tam HTTPS adresi olarak girin. Önizlemelerde derleme Cloudflare’ın verdiği URL’yi kullanır. `pages.dev` adresleri arama motorlarında indekslenmesin diye HTTP başlığı eklenir.

Özel alan adı ve katkı e-postası belirlendiğinde katkı sayfasına gerçek iletişim bilgisi ekleyin.
