import {
  Layers,
  Frame,
  Wind,
  Thermometer,
  SlidersHorizontal,
  Umbrella,
  Lock,
  Filter,
  ArrowLeftRight,
  Droplets,
  LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  shortDescription: string;
  longDescription: string[];
  features: string[];
  metaDescription: string;
  gradient: string;
  accentColor: string;
}

export const services: Service[] = [
  {
    slug: "cam-balkon-sistemleri",
    title: "Cam Balkon Sistemleri",
    subtitle: "Isıcam & Tek Cam Seçenekleri",
    icon: Layers,
    shortDescription:
      "Isıcam ve tek cam seçenekleriyle estetik ve dayanıklı cam balkon çözümleri sunan sistemlerimizle balkonunuzu dört mevsim yaşam alanına dönüştürün.",
    longDescription: [
      "Cam balkon sistemleri, balkonlarınızı kış soğuğuna, yaz sıcağına ve dış gürültüye karşı koruyan modern çözümlerdir. DHS olarak sunduğumuz ısıcam ve tek cam seçenekleri, evinizin mimarisine tam uyum sağlayacak şekilde özel ölçüde üretilmektedir. Yüksek kaliteli alüminyum profiller ve temperli güvenlik camlarıyla üretilen sistemlerimiz, uzun yıllar boyunca sağlamlığını korur.",
      "Cam balkon sistemlerimiz çift yönlü sürgülü mekanizmalarla donatılmış olup açma-kapama işlemleri son derece kolay ve sessizdir. Profil yapımızda ısı yalıtım köprüsü kullanılarak enerji kaybı minimuma indirilmiş, hem kış aylarında ısınma maliyeti hem de yaz aylarında serinletme maliyeti önemli ölçüde azaltılmıştır. Her türlü balkon şekil ve boyutuna uygulanabilecek esnek montaj seçenekleri sunulmaktadır.",
      "Sistemlerimiz TSE ve CE belgelidir; tüm profil ve aksesuarlar 10 yıl garantiyle teslim edilmekte, montaj işçiliği ise 2 yıl garantimiz kapsamındadır. İstanbul genelinde ücretsiz keşif hizmetimizden yararlanmak için hemen iletişime geçebilirsiniz.",
    ],
    features: [
      "Isıcam ve tek cam seçenekleri",
      "Çift yönlü sürgülü açılır sistem",
      "10 yıl profil garantisi",
      "Ses ve ısı yalıtımı",
      "Özel ölçüye üretim",
      "Kolay temizleme mekanizması",
    ],
    metaDescription:
      "DHS Cam Balkon Sistemleri — İstanbul'da ısıcam ve tek cam seçenekleriyle balkonunuzu dört mevsim yaşam alanına dönüştürün. Ücretsiz keşif için arayın.",
    gradient: "from-[#1a2d5a] to-[#243f7d]",
    accentColor: "#5aaccc",
  },
  {
    slug: "aluminyum-hbsb-sistemleri",
    title: "Alüminyum HBŞB Sistemleri",
    subtitle: "Hava · Su · Bozulma · Ses Bariyeri",
    icon: Frame,
    shortDescription:
      "Hava, su, bozulma ve ses geçişini engelleyen yüksek performanslı alüminyum HBŞB sistemleriyle yapınızı dış etkenlere karşı en üst düzeyde koruyun.",
    longDescription: [
      "HBŞB (Hava, Su, Bozulma ve Ses Bariyeri) sistemleri, yapıların en kritik koruma katmanını oluşturan alüminyum doğrama çözümleridir. DHS olarak uyguladığımız bu sistemler, yağmur, rüzgar ve nem gibi olumsuz çevre koşullarına karşı üstün bir direnç sergilerken aynı zamanda dış gürültüyü iç mekâna aktarmaz. Yüksek mukavemetli alüminyum alaşımlı profiller ve çok kademeli sızdırmazlık fitilleriyle üretilen sistemlerimiz, uluslararası standartlara uygunluğuyla öne çıkmaktadır.",
      "Sistemlerin performans testleri EN 12207 (hava geçirgenliği), EN 12208 (su sızdırmazlığı) ve EN 12210 (rüzgar yükü direnci) standartlarına göre yapılmaktadır. Yüksek katlı yapılardan endüstriyel tesislere kadar geniş bir kullanım alanı bulan HBŞB doğrama sistemlerimiz, mimarların önerdiği profil renk ve boyutlarıyla üretilmektedir. İçten açılan veya dıştan açılan kanatlarla her türlü cephe tasarımına uyum sağlar.",
      "Ses yalıtımı açısından ise 45 dB'e kadar gürültü azaltma kapasitesine sahip profil ve cam kombinasyonları sunmaktayız. Şehir içi gürültüye maruz kalan konutlar, ofisler ve oteller için ideal olan bu sistemler, sakin ve konforlu iç mekânlar yaratmanın en etkili yoludur.",
    ],
    features: [
      "EN 12207/12208/12210 sertifikalı",
      "45 dB'e kadar ses yalıtımı",
      "Çok kademeli su ve hava sızdırmazlığı",
      "Yüksek rüzgar yükü direnci",
      "Geniş profil renk seçenekleri (RAL)",
      "İçten ve dıştan açılan kanat seçenekleri",
    ],
    metaDescription:
      "Alüminyum HBŞB sistemleri — DHS ile yapınızı hava, su, bozulma ve ses geçişine karşı koruyun. İstanbul genelinde profesyonel montaj.",
    gradient: "from-[#1a2d5a] to-[#0d1b36]",
    accentColor: "#e87722",
  },
  {
    slug: "pvc-kapi-pencere-sistemleri",
    title: "PVC Kapı ve Pencere Sistemleri",
    subtitle: "Isı & Ses Yalıtımlı",
    icon: Wind,
    shortDescription:
      "Enerji tasarruflu PVC kapı ve pencere sistemleriyle evinizi dört mevsim konforlu hale getirin; ısı ve ses yalıtımında sektörün en ileri teknolojisini yaşayın.",
    longDescription: [
      "PVC kapı ve pencere sistemleri, düşük ısı iletkenliği sayesinde enerji tasarrufunun en etkili araçlarından biridir. DHS olarak kullandığımız 5 ve 6 odalı PVC profil sistemleri, A++ enerji sınıfına uygun ısıcam kombinasyonlarıyla birleştiğinde bina enerji tüketimini %40'a kadar düşürebilmektedir. Isıtma ve soğutma maliyetlerinizden önemli ölçüde tasarruf ederken karbon ayak izinizi de azaltmış olursunuz.",
      "Korozyon ve paslanmaya karşı doğal direnci sayesinde deniz kıyısı yapıları ve yüksek nemli ortamlar için özellikle tercih edilen PVC sistemler, bakım gerektirmeyen yapısıyla uzun ömürlü bir yatırım sunar. Sistemlerimizde kullandığımız Alman ve Türk menşeli profiller, geri dönüştürülebilir malzemeden üretilmekte ve çevre dostu yapısıyla yeşil bina standartlarına katkı sağlamaktadır. Beyaz, ahşap desenli ve antrasit gri gibi geniş renk yelpazesiyle her mimariye uyum sağlar.",
      "İçe açılan, dışa açılan veya devirmeli (tilt&turn) kanat seçeneklerimizle her mekânın ihtiyacına özel çözümler üretiriz. Çocuk güvenlik kilitli donanımlar, güvenlik camı seçenekleri ve çoklu kilitleme sistemleriyle üretilen kapı ve pencerelerimiz hem güvenli hem de estetiktir.",
    ],
    features: [
      "5 ve 6 odalı PVC profil seçenekleri",
      "A++ enerji sınıfı uyumlu",
      "İçe açılan / devirmeli (tilt&turn) kanatlar",
      "Korozyon ve nemden etkilenmez",
      "Çocuk güvenlik kilidi seçeneği",
      "Geniş renk ve desen seçenekleri",
    ],
    metaDescription:
      "PVC Kapı ve Pencere Sistemleri — DHS ile enerji tasarruflu, ses ve ısı yalıtımlı PVC çözümleri. İstanbul'da ücretsiz keşif.",
    gradient: "from-[#0f6b8a] to-[#1a2d5a]",
    accentColor: "#5aaccc",
  },
  {
    slug: "isi-yalitim-aluminyum-sistemleri",
    title: "Isı Yalıtım Alüminyum Sistemleri",
    subtitle: "Enerji Tasarruflu Alüminyum",
    icon: Thermometer,
    shortDescription:
      "Isı köprüsü kesilmiş alüminyum profil teknolojisiyle üretilen sistemlerimiz, yapınızın enerji verimliliğini maksimuma çıkarır ve yıllık ısıtma/soğutma giderlerini belirgin biçimde düşürür.",
    longDescription: [
      "Isı yalıtım alüminyum sistemleri, iç ve dış profil bölmeleri arasına yerleştirilen yüksek dayanımlı poliamid bariyerleriyle ısı köprüsünü keserek yapının ısıl performansını büyük ölçüde artırır. Bu teknoloji sayesinde alüminyumun metal yapısından kaynaklanan ısı iletkenliği sorunu ortadan kalkar ve profil yüzeyinde yoğuşma oluşmaz. Islanma ve nem problemi yaşamak istemeyenler için ideal çözüm olan bu sistemler, özellikle kış aylarında iç mekân konforunu hissedilir biçimde iyileştirir.",
      "DHS olarak sunduğumuz ısı yalıtım alüminyum sistemleri; sürgülü ve devirmeli pencerelerden katlanır kapılara, giyotin cephe sistemlerinden sabit cam yüzeylere kadar geniş bir uygulama alanına sahiptir. Profil derinlikleri 45 mm'den 86 mm'ye kadar çıkan geniş ürün ailemiz, hem konut hem de ticari yapıların farklı mimari ihtiyaçlarını karşılamaktadır. Yüzey kaplamaları elektrostatik toz boya veya anodik oksidasyon işlemiyle gerçekleştirilmekte; 200'ün üzerinde RAL renk seçeneği sunulmaktadır.",
      "BREEAM ve LEED yeşil bina sertifikası süreçlerinde aktif olarak kullanılan bu sistemler, enerji kimlik belgesi hesaplamalarında yapınızın sınıfını olumlu yönde etkiler. Uzun vadede hem çevresel sürdürülebilirliğe katkı sağlar hem de yatırımınızın değerini korur.",
    ],
    features: [
      "Poliamid ısı köprüsü kesici bariyer",
      "45–86 mm profil derinliği seçenekleri",
      "Yoğuşma önleyici iç yüzey",
      "200+ RAL renk seçeneği",
      "LEED/BREEAM uyumlu",
      "Elektrostatik toz boya kaplama",
    ],
    metaDescription:
      "Isı Yalıtım Alüminyum Sistemleri — DHS ile enerji verimliliğinizi artırın, ısıtma maliyetlerinizi düşürün. İstanbul genelinde montaj.",
    gradient: "from-[#7a3d10] to-[#1a2d5a]",
    accentColor: "#e87722",
  },
  {
    slug: "giyotin-cam-sistemleri",
    title: "Giyotin Cam Sistemleri",
    subtitle: "Çerçevesiz Sürgülü Cam",
    icon: SlidersHorizontal,
    shortDescription:
      "Çerçevesiz tasarımıyla minimalist bir görünüm sunan giyotin cam sistemleri, balkon ve teraslarınızı geniş cam yüzeyleriyle açık havayı içeri taşıyan şık bir yaşam alanına dönüştürür.",
    longDescription: [
      "Giyotin cam sistemleri, birbirinin üzerine kayarak açılan çerçevesiz cam panellerden oluşur ve balkon ile teras gibi açık alanları minimum görsel engelle kapatmanın en estetik yoludur. Camların yukarı kaldırılarak tamamen açılabildiği bu sistemde rüzgâr ve yağmura karşı tam koruma sağlanırken manzara engellenmez. Şehir manzarası veya deniz manzarası olan konutlar için özellikle tercih edilen bu sistem, iç ve dış mekânı birbirine bağlayan panoramik bir his yaratır.",
      "DHS giyotin cam sistemlerinde 10 mm veya 12 mm temperli güvenlik camı kullanılmakta; cam kenarları bantlı fitil ile sızdırmaz hale getirilmektedir. Alüminyum kızak ve yörüngeler oksidasyona dayanıklı özel alaşımlardan üretilmekte ve sessiz, hafif bir sürgü hareketi sağlamaktadır. Sistemimiz hem yatay hem de dikey uygulamalara elverişli olup köşeli veya kavisli balkon tasarımlarına da özel çözümler sunulmaktadır.",
      "Bakım açısından son derece pratik olan giyotin cam sistemleri, herhangi bir özel temizlik maddesi gerektirmeksizin nemli bir bezle kolaylıkla temizlenebilir. Camların kolayca sökülebilir tasarımı sayesinde kapsamlı temizlik işlemleri de zahmetsizce gerçekleştirilebilir.",
    ],
    features: [
      "Çerçevesiz minimalist tasarım",
      "10 mm ve 12 mm temperli cam seçenekleri",
      "Tam panoramik açılır sistem",
      "Köşe ve kavisli balkon uygulamaları",
      "Sessiz ve hafif sürgü mekanizması",
      "Kolay sökülebilir temizlik avantajı",
    ],
    metaDescription:
      "Giyotin Cam Sistemleri — DHS ile çerçevesiz, panoramik cam balkon çözümleri. İstanbul'da ücretsiz keşif ve profesyonel montaj.",
    gradient: "from-[#1a2d5a] to-[#2d4a8a]",
    accentColor: "#5aaccc",
  },
  {
    slug: "pergole-sistemleri",
    title: "Pergole Sistemleri",
    subtitle: "Teras & Bahçe Çözümleri",
    icon: Umbrella,
    shortDescription:
      "Alüminyum pergole sistemlerimizle teras ve bahçenizi her mevsim kullanılabilir, korunaklı ve şık bir dış mekâna dönüştürün; güneş, yağmur ve rüzgâra karşı tam kontrol sizde.",
    longDescription: [
      "Pergole sistemleri, açık yaşam alanlarını işlevsel ve estetik bir çözümle kapatmanın en popüler yöntemidir. DHS olarak sunduğumuz alüminyum pergoleler; sabit çatılı, motorlu hareketli kanatlı ve bioklimatik (lamelli) olmak üzere üç ana grupta incelenmektedir. Motorlu versiyonlarda uzaktan kumanda veya akıllı telefon uygulaması üzerinden kanat açma-kapama işlemi yapılabilmekte; yağmur ve rüzgâr sensörleriyle sistem otomatik olarak kapanabilmektedir.",
      "Bioklimatik pergolelerimizde lamel açıları 0° ile 135° arasında ayarlanabilmekte; bu sayede gün içindeki farklı güneş konumlarına göre optimum gölge ve havalandırma dengesi kurulmaktadır. Entegre yağmur oluğu sistemi sayesinde yağmur suyu pergole çatısından binaya zarar vermeden uzaklaştırılır. İsteğe bağlı LED aydınlatma, yan panel ve cam yan duvar seçenekleriyle kışın da kullanılabilir kapalı terasa dönüştürülebilir.",
      "Tüm pergole profilleri deniz korozyon direncine sahip özel alüminyum alaşımından üretilmekte ve elektrostatik toz boya ile kaplanmaktadır. 100'den fazla RAL rengi ile bahçenizin ve dış cephenizin estetiğine mükemmel uyum sağlar. Montaj sonrası yapı statik hesabı belgesi tarafımızca sunulmaktadır.",
    ],
    features: [
      "Sabit, motorlu ve bioklimatik seçenekler",
      "0°–135° ayarlanabilir lamel açısı",
      "Yağmur ve rüzgâr sensörü",
      "Entegre LED aydınlatma seçeneği",
      "100+ RAL renk seçeneği",
      "Yan panel ve cam duvar eklentisi",
    ],
    metaDescription:
      "Pergole Sistemleri — DHS ile teras ve bahçeniz için alüminyum pergole ve bioklimatik çözümler. İstanbul genelinde montaj.",
    gradient: "from-[#1a4a2a] to-[#1a2d5a]",
    accentColor: "#4caf73",
  },
  {
    slug: "panjur-kepenk-sistemleri",
    title: "Panjur ve Kepenk Sistemleri",
    subtitle: "Güvenlik & Gölgeleme",
    icon: Lock,
    shortDescription:
      "Elektrikli ve mekanik panjur ile kepenk sistemlerimizle evinizin ve işyerinizin güvenliğini ve gizliliğini en üst düzeyde sağlayın; gün ışığını tam kontrol altına alın.",
    longDescription: [
      "Panjur ve kepenk sistemleri, hem konutlarda hem de ticari mekânlarda güvenlik, mahremiyet ve gölgeleme işlevlerini bir arada yerine getiren çok amaçlı yapı elemanlarıdır. DHS olarak sunduğumuz sistemler arasında dıştan rulolu güneşlikler, içten rulolu perdeler, içten ve dıştan panjurlar ile ticari kullanıma yönelik profilli çelik kepenkler yer almaktadır. Her ürün, uygulandığı yapının statik yükleri ve iklim koşullarına göre hesaplanarak üretilmektedir.",
      "Elektrikli sistemlerde akıllı ev entegrasyonu (KNX, Z-Wave, Zigbee protokolleri) sağlanmaktadır; gün ışığı sensörü, rüzgâr sensörü ve zamanlayıcı entegrasyonlarıyla sistemlerinizi tamamen otomatik çalıştırabilirsiniz. Akıllı telefon uygulaması üzerinden uzaktan kontrol, ev sahibine evden ayrıldığında bile tam kontrol imkânı sunar. Güvenlik kepenklerimiz ise çelik profil yapısı ve kilitli kapasite sayesinde kırılmaya ve zorlamaya karşı yüksek direnç göstermektedir.",
      "Isı yalıtım özellikli dolu bantlı panjurlar ve delikli desenli güneş kırıcılar gibi özel ürünlerimiz sayesinde yazın aşırı güneş ısınmasına maruz kalan cephelerde sıcaklık artışının önüne geçilmektedir. Bu da iç mekânın serin kalmasına ve klima kullanımının azalmasına doğrudan katkı sağlar.",
    ],
    features: [
      "Elektrikli ve mekanik seçenekler",
      "Akıllı ev (KNX/Zigbee) entegrasyonu",
      "Gün ışığı ve rüzgâr sensörü desteği",
      "Çelik profil güvenlik kepençleri",
      "Isı yalıtımlı dolu bantlı panjur",
      "Delikli güneş kırıcı desen seçenekleri",
    ],
    metaDescription:
      "Panjur ve Kepenk Sistemleri — DHS ile elektrikli ve mekanik panjur çözümleri. İstanbul'da güvenlik ve gölgeleme için profesyonel montaj.",
    gradient: "from-[#2d2d2d] to-[#1a2d5a]",
    accentColor: "#e87722",
  },
  {
    slug: "sineklik-sistemleri",
    title: "Sineklik Sistemleri",
    subtitle: "Plise · Rulo · Sabit",
    icon: Filter,
    shortDescription:
      "Plise, rulo ve sabit sineklik sistemlerimizle pencere ve kapılarınızı böceklerden korurken taze havayı içeri almaya devam edin; şık tasarımları evinizin estetiğini bozmaz.",
    longDescription: [
      "Sineklik sistemleri, özellikle yaz aylarında yaşam kalitesini doğrudan etkileyen ve vazgeçilmez bir ev konforu öğesidir. DHS olarak sunduğumuz plise sineklik sistemleri, yatay ve dikey olarak katlanır şerit yapısıyla dar çerçeveli pencerelere bile mükemmel uyum sağlar; kapandığında görsel etkiyi minimuma indirir. Rulo sineklik sistemlerimiz ise kasetteki yaylar sayesinde tek el hareketiyle kolayca açılıp kapanabilen pratik yapısıyla özellikle kapı uygulamalarında tercih edilmektedir.",
      "Sabit sineklikler, bütçe dostu bir çözüm arayanlar için statik çerçeveli yapısıyla ideal bir seçenektir; yoğun kullanım gerektirmeyen arka balkon ve pencereler için uygundur. Alüminyum çerçevelerimizin dayanıklı boyalı yüzeyleri zamanla solarken fiberglas sineklik ağları uzun süre beyazlığını ve şeklini korumaktadır. İsteğe bağlı olarak anti-polensiz (alerjik) ağ seçeneği de sunulmakta; bu sayede bahar aylarında polenlerden rahatsız olan bireyler için ekstra koruma sağlanmaktadır.",
      "Tüm sineklik sistemlerimiz pencere ve kapı kasanıza delme gerektirmeden vidalama veya mıknatıslı montaj seçenekleriyle uygulanabilmektedir. Kiracılar için de ideal olan bu özellik, çıkarma sırasında kasada hasar oluşmamasını garanti eder.",
    ],
    features: [
      "Plise, rulo ve sabit çeşit seçenekleri",
      "Anti-polensiz ağ seçeneği",
      "Delme gerektirmez montaj",
      "Kapı sinekliği ve sürgülü seçenekler",
      "Dayanıklı alüminyum çerçeve",
      "Geniş renk ve ağ tipi seçenekleri",
    ],
    metaDescription:
      "Sineklik Sistemleri — DHS ile plise, rulo ve sabit sineklik çözümleri. İstanbul'da ölçüye göre üretim ve montaj.",
    gradient: "from-[#1a5a3a] to-[#1a2d5a]",
    accentColor: "#4caf73",
  },
  {
    slug: "wolkswagen-surme-sistemleri",
    title: "Volkswagen Sürme Sistemleri",
    subtitle: "Sessiz & Şık Sürgülü Cam",
    icon: ArrowLeftRight,
    shortDescription:
      "Volkswagen tipi sürgülü cam sistemleri; sessiz sürgü mekanizması, şık görünümü ve geniş panel boyutlarıyla balkon ve teraslarınız için en sofistike çözümü sunar.",
    longDescription: [
      "Volkswagen sürme sistemleri, cam panellerin birbirinin önünde sessizce kayarak açıldığı özel bir alt ve üst kızak mekanizmasına sahiptir. Geniş panel ölçülerine olanak tanıyan bu sistem, diğer sürgülü cam sistemlerine kıyasla çok daha az profil görüntüsü sunar ve maksimum cam yüzeyi elde edilir. Bu özellik, geniş açıklık gerektiren otel terasları, restaurant cepheleri ve lüks konut balkonları için özellikle uygundur.",
      "Sistemin kalbi olan kızak ve rulmanlı taşıyıcı mekanizması, yüksek kaliteli çelik malzemeden üretilmekte ve yıllarca sıkışmadan, gıcırdamadan çalışmaktadır. Paneller arası sızdırmazlık ise yüksek yoğunluklu fırça fitiller ile sağlanmakta; bu sayede havanın panel aralarından geçişi en aza indirilmektedir. İleri kilitleme sistemi ise birden fazla kilitleme noktasıyla ekstra güvenlik sağlar.",
      "DHS Volkswagen sürme sistemleri; 6 mm, 8 mm ve 10 mm temperli cam seçenekleriyle üretilmekte ve standart ölçülerin yanı sıra özel boyutlara göre de fabrikada imal edilmektedir. Renkli cam, buzlu cam veya yansıtmalı cam kombinasyonlarıyla gizlilik ve estetik birlikte elde edilebilmektedir.",
    ],
    features: [
      "Sessiz rulmanlı kızak mekanizması",
      "Maksimum cam, minimum profil görüntüsü",
      "6–10 mm temperli cam seçenekleri",
      "Çok noktalı ileri kilitleme",
      "Renkli, buzlu ve yansıtmalı cam seçenekleri",
      "Geniş panel boyutu kapasitesi",
    ],
    metaDescription:
      "Volkswagen Sürme Cam Sistemleri — DHS ile sessiz, şık ve geniş panel sürgülü cam çözümleri. İstanbul'da profesyonel montaj.",
    gradient: "from-[#1a2d5a] to-[#3a1a5a]",
    accentColor: "#a78bfa",
  },
  {
    slug: "dusakabin-sistemleri",
    title: "Duşakabin Sistemleri",
    subtitle: "Modern Banyo Çözümleri",
    icon: Droplets,
    shortDescription:
      "Banyonuzu modern ve şık bir spa alanına dönüştüren duşakabin sistemlerimiz; temperli güvenlik camı, paslanmaz çelik aksesuarlar ve özel ölçüye üretimle yaşam kalitenizi yükseltir.",
    longDescription: [
      "Duşakabin sistemleri, banyolarınıza işlevsellik ve estetik kazandıran modern çözümlerdir. DHS olarak sunduğumuz duşakabin sistemleri; kayar kapılı, menteşeli kapılı, köşe girişli ve walk-in (tamamen açık) olmak üzere farklı tasarımlarda mevcuttur. Her sistem ölçüye özel üretildiğinden standart dışı zemin boyutlarında da mükemmel uyum sağlanır.",
      "Sistemlerimizde 8 mm veya 10 mm temperli güvenlik camı kullanılmakta; camlar üzerindeki nano kaplama sayesinde su ve kireç lekelerine karşı doğal bir bariyer oluşturulmaktadır. Bu özel kaplama, camların uzun süre şeffaflığını korumasını sağlar ve günlük temizliği büyük ölçüde kolaylaştırır. Menteşe, kol ve diğer tüm aksesuarlar ise paslanmaz 304 çelik veya mat siyah kaplama seçenekleriyle sunulmaktadır.",
      "Özelleştirilmiş eskitme cam, desen baskılı cam veya renkli buzlu cam seçenekleriyle banyonuza özgün bir karakter kazandırabilirsiniz. Duş kanalı ve drenaj sistemiyle entegre zemin planlaması da talep üzerine tarafımızca yapılabilmektedir. Tüm sistemler TSE belgeli üreticilerden temin edilen malzemelerle üretilmektedir.",
    ],
    features: [
      "Kayar, menteşeli ve walk-in seçenekler",
      "8–10 mm temperli güvenlik camı",
      "Nano su ve kireç önleyici kaplama",
      "Paslanmaz çelik veya mat siyah aksesuar",
      "Desen baskılı ve renkli cam seçenekleri",
      "Özel ölçüye üretim",
    ],
    metaDescription:
      "Duşakabin Sistemleri — DHS ile modern ve şık duşakabin çözümleri. İstanbul'da ölçüye özel üretim ve profesyonel montaj.",
    gradient: "from-[#0f4a6a] to-[#1a2d5a]",
    accentColor: "#5aaccc",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): Service[] {
  return services.filter((s) => s.slug !== currentSlug);
}
