# Yerel Hafıza Yayın Kılavuzu

## Site haritası

| Bölüm | İçerik | Hugo yolu |
| --- | --- | --- |
| Ana sayfa | Kısa tanıtım, yerleşim bilgileri, bölüm bağlantıları, son yazılar ve katkı çağrısı | `/` |
| Yerleşim | Resmî ad, eski adlar, idari bağlılık, tarihli nüfus ve konum | `/yerlesim/` |
| Tarih | Tarihli olaylar, ad değişiklikleri, göç ve iskân | `/tarih/` |
| Yerler | Harita, köyler, mahalleler, yapılar ve ziyaret noktaları | `/yerler/` |
| Aileler | Aile dizini ve aile başına bir sayfa | `/aileler/<aile>/` |
| Kişiler | Kaynağı bulunan kişi profilleri | `/kisiler/<kisi>/` |
| Arşiv | Künyeli fotoğraf, belge, ses ve video kayıtları | `/arsiv/<kayit>/` |
| Yazılar | Tarihli araştırma yazıları ve site güncellemeleri | `/yazilar/<yazi>/` |
| Kaynakça | Arşiv, yayın ve anlatı künyeleri | `/kaynakca/` |
| Katkıda bulun | Belge, fotoğraf, anlatı ve düzeltme iletişimi | `/katki/` |
| Yayın ilkeleri | Kaynak kullanımı, yayın izni, düzeltme ve kaldırma | `/yayin-ilkeleri/` |

Yerel malzeme varsa **İnanç ve Kültür**, **Defterler**, **Sözlü Tarih**, **Mübadele**, **Nasıl Gidilir** veya **Fotoğraflar ve Videolar** ayrı sayfa olabilir. Şablondaki yollar yeni siteler içindir. Mevcut sitelerde yayımlanmış yollar korunur veya taşındığında yönlendirilir.

Ana sayfadaki nüfus, rakım, mesafe ve tarih gibi değerlerin yanında kaynak ve gerektiğinde ölçüm kapsamı gösterilir. Yerleşim adı ve belediye adı farklıysa kapsam belirtilir. Döneme ait resmî ad ve yerel ad, dayanaklarıyla yazılır.

## Aile ve şecere kayıtları

- Aile dizininde her aileye bir başlık, kısa açıklama ve kendi sayfasına bağlantı ver. Aynı aileye ait farklı soyadlarını veya lakapları, ilişki kaynakta açıkça gösteriliyorsa aynı kayıtta belirt.
- Aile sayfasında adları, bilinen kuşak bağlarını, varsa yer ve tarihleri, eksik halkaları ve kaynakları göster. Birkaç kişi için tablo yeterlidir. Geniş bir şecere yayımlanıyorsa kuşak ve kol yapısını okunur bir liste veya ağaçla göster.
- Evlilik veya akrabalık gibi aileler arası bağları ilgili kayıtlarda karşılıklı bağlantı ve kaynakla göster. Aynı adı taşıyan kişileri belgeye dayanmadan eşleştirme. Göç ve iskân iddiasını hane veya kişi kaydıyla ilişkilendir.
- Aile ağacı, sözlü anlatı ve resmî belgenin kaynağını kendi adıyla belirt. Bilinmeyen kuşak, yer veya tarih açıkça belirtilir. Yayımlanacak özel aile belgeleri ve kişisel bilgiler için paylaşım iznini kayda geçir.

## Yayımlamadan önce

- [ ] İçerik yukarıdaki bölümlerden birine ve mevcut Hugo sayfa yapısına yerleştirildi.
- [ ] Tarih, kişi, yer ve aile bağı ilgili kaynağa bağlandı. Belge numarası, sayfa ve tarih biliniyorsa künye bunları içeriyor.
- [ ] Arşiv malzemesinin üreticisi, yeri, tarihi ve kullanım koşulları künyede. Eksik bilgiler işaretli.
- [ ] İzin durumu belli. Görselin açıklaması, video bağlantısı ve düzeltme iletişimi kullanılabilir.
- [ ] Liste ve detay bağlantıları çalışıyor. Taşınan bağlantı yönlendirmesi ve Hugo derlemesi kontrol edildi.
