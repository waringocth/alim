export interface District {
  slug: string;
  name: string;
  description: string;
  intro: string;
  neighborhoods: string[];
}

export const districts: District[] = [
  {
    slug: "adalar",
    name: "Adalar",
    description: "İstanbul'un Prens Adaları — Büyükada, Heybeliada, Burgazada ve Kınalıada'da hizmet veriyoruz.",
    intro: "Adalar ilçesi, İstanbul'un tarihi Prens Adaları'nı kapsayan eşsiz bir yaşam alanıdır. Ada evleri ve yazlık konutların yoğun olduğu bölgede cam balkon ve alüminyum doğrama ihtiyacı her geçen yıl artmaktadır. DHS olarak feribot güzergâhlarını kullanarak Adalar'daki tüm konut ve işyerlerine hizmet sunmaktayız.",
    neighborhoods: ["Büyükada", "Heybeliada", "Burgazada", "Kınalıada"],
  },
  {
    slug: "arnavutkoy",
    name: "Arnavutköy",
    description: "İstanbul'un hızla büyüyen ilçesi Arnavutköy'de modern yapılara özel cam ve doğrama çözümleri.",
    intro: "Arnavutköy, İstanbul'un hızla gelişen Avrupa Yakası ilçelerinden biridir. İstanbul Havalimanı'na yakın konumuyla stratejik öneme sahip olan ilçede yeni konut projeleri ve sanayi tesisleri yoğun biçimde inşa edilmektedir. DHS olarak Arnavutköy'deki konut ve ticari yapılara cam balkon, PVC pencere ve alüminyum doğrama sistemleri kurulumunda deneyimli ekibimizle yanınızdayız.",
    neighborhoods: ["Hadımköy", "Bolluca", "Haraççı", "Nallıhan", "Dursunköy"],
  },
  {
    slug: "atasehir",
    name: "Ataşehir",
    description: "İstanbul'un finans merkezi Ataşehir'de yüksek katlı konut ve ofislere premium cam sistemi çözümleri.",
    intro: "Ataşehir, İstanbul'un Anadolu yakasının en modern ve prestijli ilçelerinden biridir. Finans merkezi olarak konumlanan ilçede çok sayıda yüksek katlı rezidans, plaza ve AVM yer almaktadır. DHS olarak Ataşehir'deki tüm konut sitelerinde ve ticari yapılarda cam balkon, alüminyum cephe sistemi ve PVC doğrama çözümleri sunmaktayız.",
    neighborhoods: ["Barbaros", "Yenisahra", "İçerenköy", "Küçükbakkalköy", "Ferhatpaşa"],
  },
  {
    slug: "avcilar",
    name: "Avcılar",
    description: "Marmara kıyısındaki Avcılar'da üniversite çevresi ve sahil konutlarına özel cam balkon ve pencere sistemleri.",
    intro: "Marmara Denizi kıyısında konumlanan Avcılar, İstanbul Üniversitesi'nin de yer aldığı genç ve dinamik bir ilçedir. Sahil boyunca uzanan konut blokları ile üniversite çevresindeki apartmanlar, cam balkon ve pencere yenileme açısından yoğun talep barındırmaktadır. DHS olarak Avcılar'daki tüm konut tiplerinde ücretsiz keşif ve profesyonel montaj hizmeti sunuyoruz.",
    neighborhoods: ["Firuzköy", "Cihangir", "Mustafakemalpaşa", "Denizköşkler", "Ambarlı"],
  },
  {
    slug: "bagcilar",
    name: "Bağcılar",
    description: "İstanbul'un en kalabalık ilçesi Bağcılar'da tüm konut ve işyerlerine hızlı cam sistemi montajı.",
    intro: "Bağcılar, İstanbul'un en yüksek nüfus yoğunluğuna sahip ilçelerinden biridir. Yoğun konut dokusu, çok katlı apartman blokları ve aktif ticari yaşamıyla Bağcılar'da cam balkon, PVC pencere ve alüminyum doğrama talebi her dönem yüksek seyretmektedir. DHS ekiplerimiz Bağcılar'ın tüm mahallelerinde aynı gün keşif yaparak hızlı montaj gerçekleştirmektedir.",
    neighborhoods: ["Bağlar", "Güneşli", "Kirazlı", "Yenimahalle", "Hürriyet"],
  },
  {
    slug: "bahcelievler",
    name: "Bahçelievler",
    description: "Merkezi konumuyla öne çıkan Bahçelievler'de her türlü yapıya cam balkon ve doğrama çözümleri.",
    intro: "Bahçelievler, İstanbul'un Avrupa yakasının merkezi konumlarından birinde yer alan köklü ve yoğun bir yerleşim ilçesidir. Yenibosna ve çevresindeki sanayi bölgelerinin yanı sıra yoğun konut alanlarıyla farklı müşteri profillerine ev sahipliği yapan Bahçelievler'de cam balkon ve doğrama yenileme projeleri için deneyimli DHS ekibimizle hizmetinizdeyiz.",
    neighborhoods: ["Yenibosna", "Çobançeşme", "Hürriyet", "Cumhuriyet", "Kocasinan"],
  },
  {
    slug: "bakirkoy",
    name: "Bakırköy",
    description: "Marmara kıyısındaki prestijli Bakırköy'de Ataköy gibi seçkin semtlerde cam balkon ve sistem kurulumu.",
    intro: "Bakırköy, İstanbul'un Marmara kıyısındaki en prestijli ve köklü ilçelerinden biridir. Ataköy'deki modern site yapıları, Zeytinlik ve çevresindeki nitelikli konutlar ile havalimanı yakınındaki ticari yapılar, cam balkon ve alüminyum doğrama konusunda yoğun hizmet talebi yaratmaktadır. DHS olarak Bakırköy'ün tüm mahallelerinde kaliteli ve hızlı montaj hizmeti sunuyoruz.",
    neighborhoods: ["Ataköy", "Zeytinlik", "Kartaltepe", "Sakızağacı", "Zuhuratbaba"],
  },
  {
    slug: "basaksehir",
    name: "Başakşehir",
    description: "Modern planıyla tasarlanmış Başakşehir'de Bahçeşehir ve Kayabaşı konutlarına özel cam sistemi.",
    intro: "Başakşehir, İstanbul'un en planlı ve yeni yapılaşmış ilçelerinden biridir. Bahçeşehir, Kayabaşı ve İkitelli gibi modern semtleri kapsayan ilçede geniş konut siteleri ve yüksek standartlı rezidanslar yoğun biçimde yer almaktadır. DHS olarak Başakşehir'deki tüm konut sitelerine cam balkon, ısı yalıtım alüminyum ve PVC pencere sistemleri kurulumu yapıyoruz.",
    neighborhoods: ["Kayabaşı", "Bahçeşehir", "İkitelli", "Güvercintepe", "Şahintepe"],
  },
  {
    slug: "bayrampasa",
    name: "Bayrampaşa",
    description: "Merkezi ulaşım ağıyla öne çıkan Bayrampaşa'da sanayi ve konut yapılarına hızlı cam sistem hizmeti.",
    intro: "Bayrampaşa, İstanbul'un merkezi metro ve çevre yolu ağına doğrudan bağlantılı bir ilçesidir. Sanayi tesisleri, konut blokları ve ticari yapıların iç içe geçtiği bu ilçede cam balkon, panjur ve doğrama sistemlerinin yenilenmesi talebi güçlü bir seyir izlemektedir. DHS ekiplerimiz Bayrampaşa'nın tüm mahallelerinde aynı gün hizmet verebilmektedir.",
    neighborhoods: ["Yıldırım", "Muratpaşa", "Kartaltepe", "Orta", "Vatan"],
  },
  {
    slug: "besiktas",
    name: "Beşiktaş",
    description: "Bebek ve Ortaköy gibi prestijli semtleriyle Beşiktaş'ta lüks konutlara özel cam balkon ve doğrama.",
    intro: "Beşiktaş, İstanbul'un en prestijli ilçelerinden biri olup Boğaz kıyısındaki eşsiz manzarasıyla konut değerlerinin en yüksek olduğu bölgeler arasında yer almaktadır. Bebek, Ortaköy ve Levent gibi gözde semtlerdeki lüks apartmanlar ve villalar için cam balkon, çerçevesiz giyotin sistemleri ve Volkswagen sürme cam sistemleri konusunda DHS'nin deneyimli ekibi yanınızdadır.",
    neighborhoods: ["Bebek", "Ortaköy", "Arnavutköy", "Levent", "Etiler"],
  },
  {
    slug: "beykoz",
    name: "Beykoz",
    description: "Boğaz kıyısının doğal güzelliklerini koruyan Beykoz'da lüks sit ve villa projelerine cam sistem çözümleri.",
    intro: "Beykoz, İstanbul Boğazı'nın Anadolu yakasında ormanlar ve su kenarıyla kuşatılmış benzersiz bir ilçedir. Anadoluhisarı, Paşabahçe ve Kavacık gibi semtlerdeki lüks villalar ve kapalı konut siteleri, cam balkon ve doğrama sistemleri için seçici ve kalite odaklı bir talep profili oluşturmaktadır. DHS olarak Beykoz'da yalnızca premium malzeme ve işçilikle hizmet veriyoruz.",
    neighborhoods: ["Anadoluhisarı", "Paşabahçe", "Çubuklu", "Kavacık", "Poyrazköy"],
  },
  {
    slug: "beylikduzu",
    name: "Beylikdüzü",
    description: "Hızla büyüyen Beylikdüzü'nde planlı konut sitelerine cam balkon, PVC ve alüminyum sistem kurulumu.",
    intro: "Beylikdüzü, İstanbul'un batı yakasında son yıllarda en hızlı büyüyen ilçelerinden biridir. Modern altyapısı ve planlı kentsel yapısıyla dikkat çeken ilçede geniş konut siteleri ve toplu yapılar için cam balkon ve doğrama çözümlerine olan talep her yıl artmaktadır. DHS olarak Beylikdüzü'ndeki site yönetimleriyle toplu proje anlaşmaları yaparak uygun fiyatlı montaj hizmeti sunuyoruz.",
    neighborhoods: ["Cumhuriyet", "Büyükşehir", "Gürpınar", "Barış", "Adnan Kahveci"],
  },
  {
    slug: "beyoglu",
    name: "Beyoğlu",
    description: "Tarihi İstiklal Caddesi'nden Galata'ya kadar Beyoğlu'nun tarihi konutlarına modern cam sistemi çözümleri.",
    intro: "Beyoğlu, İstanbul'un kültürel ve sanatsal merkezi olarak Taksim, Cihangir, Karaköy ve Galata gibi dünyaca tanınan semtleri bünyesinde barındırmaktadır. Tarihi binalardan dönüştürülen apart daireler ve modern konutlar için cam balkon, duşakabin ve alüminyum doğrama sistemleri konusunda DHS'nin uzman ekibi, mevcut yapı karakterini koruyarak en uygun çözümü sunar.",
    neighborhoods: ["Taksim", "Cihangir", "Karaköy", "Galata", "Kasımpaşa"],
  },
  {
    slug: "buyukcekmece",
    name: "Büyükçekmece",
    description: "DHS'nin merkez ilçesi Büyükçekmece'de en hızlı keşif ve montaj hizmetiyle yanınızdayız.",
    intro: "Büyükçekmece, DHS Alüminyum & Cam Balkon Sistemleri'nin merkez ilçesidir. Ulus Mahallesi'ndeki ofisimizden tüm hizmetlerimizi koordine ettiğimiz Büyükçekmece'de en hızlı keşif, en kısa montaj süresi ve en kapsamlı satış sonrası destek imkânı sunuyoruz. Marmara kıyısındaki sitelerden Kumburgaz'daki tatil konutlarına kadar her türlü yapıya hizmet veriyoruz.",
    neighborhoods: ["Ulus", "Karaağaç", "Kumburgaz", "Mimarsinan", "Büyükçekmece Merkez"],
  },
  {
    slug: "catalca",
    name: "Çatalca",
    description: "İstanbul'un en geniş yüzölçümlü ilçesi Çatalca'nın çiftlik evleri ve köy konutlarına doğrama çözümleri.",
    intro: "Çatalca, İstanbul'un en büyük yüzölçümlüne sahip ilçesi olarak kırsal dokusu ve doğal yaşam alanlarıyla farklı bir kimlik taşımaktadır. Çiftlik evleri, yazlık konutlar ve köy yapıları başta olmak üzere Çatalca'daki her türlü konut tipine uygun cam balkon, PVC pencere ve alüminyum doğrama sistemleri DHS tarafından temin ve monte edilmektedir.",
    neighborhoods: ["Ferhatpaşa", "Çiftlikköy", "İnceğiz", "Karacaköy", "Nakkaş"],
  },
  {
    slug: "cekmekoy",
    name: "Çekmeköy",
    description: "Ormanlık alanlarla çevrili Çekmeköy'de sakin yaşam arayanlara özel kaliteli cam ve doğrama sistemleri.",
    intro: "Çekmeköy, İstanbul'un Anadolu yakasında ormanlık alanlarla çevrili, sakin ve yaşam kalitesi yüksek bir ilçesidir. Son yıllarda nitelikli konut projelerinin yoğunlaştığı ilçede cam balkon, ısı yalıtımlı alüminyum sistemler ve sineklik çözümlerine olan talep artış göstermektedir. DHS olarak Çekmeköy'deki tüm projelere uzman ekibimizle hizmet veriyoruz.",
    neighborhoods: ["Alemdar", "Hamidiye", "Mehmet Akif", "Reşadiye", "Taşdelen"],
  },
  {
    slug: "esenler",
    name: "Esenler",
    description: "Yoğun konut dokusuyla Esenler'de apartman ve konut yenileme projelerine hızlı cam sistem montajı.",
    intro: "Esenler, İstanbul'un Avrupa yakasında yoğun apartman bloklarıyla öne çıkan bir ilçesidir. Kentsel dönüşüm projelerinin aktif olarak uygulandığı Esenler'de yeni ve yenilenen yapılara cam balkon, PVC pencere ve alüminyum doğrama sistemleri kurulumu için DHS'nin deneyimli ekibine ulaşabilirsiniz.",
    neighborhoods: ["Oruçreis", "Turgut Reis", "Piri Reis", "Birlik", "Atışalanı"],
  },
  {
    slug: "esenyurt",
    name: "Esenyurt",
    description: "İstanbul'un en kalabalık ilçelerinden Esenyurt'ta kitlesel konut projelerine toplu cam sistem kurulumu.",
    intro: "Esenyurt, İstanbul'un nüfus yoğunluğu açısından öne çıkan ilçelerinden biridir. Kitlesel konut projeleri ve hızlı kentleşmesiyle Esenyurt'ta cam balkon ve alüminyum doğrama sistemlerine olan talep sürekli artış göstermektedir. DHS olarak Esenyurt'taki site yönetimleri ve bireysel müşterilere toplu proje fiyatları ve hızlı montaj süreleriyle hizmet sunuyoruz.",
    neighborhoods: ["Mehterçeşme", "Saadetdere", "Pınar", "Yeşilkent", "Kapadokya"],
  },
  {
    slug: "eyupsultan",
    name: "Eyüpsultan",
    description: "Pierre Loti ve Göktürk gibi semtleriyle Eyüpsultan'da tarihi ve modern yapılara cam sistemi çözümleri.",
    intro: "Eyüpsultan, İstanbul'un tarihi ve kültürel değerleriyle zengin ilçelerinden biri olup Pierre Loti tepesinden Göktürk'ün modern konutlarına kadar geniş bir yapı yelpazesini kapsamaktadır. Göktürk ve Kemerburgaz gibi semtlerdeki villa projeleri ve geniş bahçeli evler için pergole, cam balkon ve alüminyum doğrama çözümleri konusunda DHS deneyimle hizmetinizdedir.",
    neighborhoods: ["Pierre Loti", "Alibeyköy", "Göktürk", "Kemerburgaz", "Rami"],
  },
  {
    slug: "fatih",
    name: "Fatih",
    description: "Tarihi yarımadadaki Fatih'te köklü binalara saygılı, modern cam balkon ve doğrama sistemleri.",
    intro: "Fatih, İstanbul'un tarihi yarımadasını kapsayan, dünyaca tanınan tarihi ve kültürel mirasıyla öne çıkan bir ilçedir. Süleymaniye, Cankurtaran ve Aksaray gibi semtlerdeki tarihi yapılar ve dönüşüm projelerinde cam balkon, PVC pencere ve alüminyum doğrama sistemleri için DHS uzmanları, mevcut yapı dokusunu koruyarak en uygun çözümleri sunar.",
    neighborhoods: ["Süleymaniye", "Cankurtaran", "Aksaray", "Zeyrek", "Koca Mustafapaşa"],
  },
  {
    slug: "gaziosmanpasa",
    name: "Gaziosmanpaşa",
    description: "Kentsel dönüşümün hız kazandığı Gaziosmanpaşa'da yeni ve eski yapılara modern cam sistem kurulumu.",
    intro: "Gaziosmanpaşa, İstanbul'un Avrupa yakasında kentsel dönüşüm projelerinin yoğun biçimde uygulandığı bir ilçesidir. Yenilenen yapılar ve yeni inşaatlarda cam balkon, ısı yalıtım alüminyum ve PVC pencere sistemlerine olan talep güçlü bir şekilde devam etmektedir. DHS olarak Gaziosmanpaşa'daki müşterilerimize hızlı keşif ve uygun fiyat garantisiyle hizmet veriyoruz.",
    neighborhoods: ["Bağlarbaşı", "Karadeniz", "Yenidoğan", "Mevlana", "Sarıgöl"],
  },
  {
    slug: "gungoren",
    name: "Güngören",
    description: "Merkezi konumuyla öne çıkan Güngören'de yoğun apartman stoğuna cam balkon ve pencere yenileme hizmeti.",
    intro: "Güngören, İstanbul'un en küçük ilçelerinden biri olmakla birlikte yüksek nüfus yoğunluğu ve yoğun konut dokusuna sahiptir. Apartman binalarının yoğun olduğu ilçede cam balkon sistemleri, PVC pencere yenileme ve panjur sistemleri için DHS'nin deneyimli ekibi kısa sürede keşif ve montaj yapabilmektedir.",
    neighborhoods: ["Güngören", "Günbağı", "Tozkoparan", "Akıncılar", "Mehmet Nesih Özmen"],
  },
  {
    slug: "kadikoy",
    name: "Kadıköy",
    description: "Kültürel merkez Kadıköy'de Moda ve Bağdat Caddesi'ndeki nitelikli konutlara premium cam sistemi.",
    intro: "Kadıköy, İstanbul'un kültürel ve sosyal yaşamının merkezlerinden biri olup Moda, Fenerbahçe ve Bağdat Caddesi gibi prestijli semtleri barındırmaktadır. Yüksek gelir grubunun yaşadığı bu ilçede cam balkon, giyotin cam sistemleri ve Volkswagen sürme cam sistemleri gibi premium ürünlere olan talep yüksektir. DHS olarak Kadıköy'deki müşterilerimize en seçkin malzeme ve işçilikle hizmet sunuyoruz.",
    neighborhoods: ["Moda", "Fenerbahçe", "Bostancı", "Suadiye", "Caferağa"],
  },
  {
    slug: "kagithane",
    name: "Kağıthane",
    description: "Dönüşen Kağıthane'de modern plaza ve konut projelerine cam cephe ve alüminyum doğrama çözümleri.",
    intro: "Kağıthane, sanayi bölgesinden modern konut ve ofis alanlarına dönüşen İstanbul'un yükselen ilçelerinden biridir. Seyrantepe ve Hamidiye gibi semtlerdeki yeni yapılarda cam balkon, alüminyum HBŞB sistemleri ve PVC pencere çözümleri için DHS deneyimli ekibimizle hazır beklemektedir.",
    neighborhoods: ["Gültepe", "Nurtepe", "Hamidiye", "Seyrantepe", "Çağlayan"],
  },
  {
    slug: "kartal",
    name: "Kartal",
    description: "Anadolu yakasının köklü ilçesi Kartal'da konut ve sanayi yapılarına alüminyum ve cam sistem kurulumu.",
    intro: "Kartal, İstanbul'un Anadolu yakasındaki köklü ilçelerinden olup sanayi bölgesi, konut alanları ve ticari yapıların bir arada yer aldığı aktif bir ilçedir. Sahil boyunca uzanan konut projelerinden iç kesimlerdeki apartman bloklarına kadar Kartal'ın her mahallesinde cam balkon ve doğrama sistemi kurulumu için DHS'nin deneyimli ekibi hazırdır.",
    neighborhoods: ["Cevizli", "Uğur Mumcu", "Kordonboyu", "Yakacık", "Petrol"],
  },
  {
    slug: "kucukcekmece",
    name: "Küçükçekmece",
    description: "Göl kıyısındaki Küçükçekmece'de yoğun konut ve alışveriş alanlarına kapsamlı cam ve doğrama hizmeti.",
    intro: "Küçükçekmece, İstanbul'un Avrupa yakasında Küçükçekmece Gölü kıyısında konumlanan, yoğun konut ve ticari yapı dokusuyla dikkat çeken bir ilçedir. Halkalı ve Atakent gibi büyük konut projelerinin yer aldığı ilçede cam balkon, PVC pencere ve alüminyum doğrama sistemleri kurulumu için DHS deneyimle hizmetinizdedir.",
    neighborhoods: ["Halkalı", "Atakent", "İnönü", "Cennet", "Tevfikbey"],
  },
  {
    slug: "maltepe",
    name: "Maltepe",
    description: "Boğaz manzaralı sahiliyle Maltepe'de Küçükyalı ve Bağlarbaşı konutlarına özel cam balkon sistemleri.",
    intro: "Maltepe, İstanbul'un Anadolu yakasında deniz manzarası ve sakin yaşam imkânıyla öne çıkan köklü bir ilçesidir. Küçükyalı sahil kesimi ile iç bölgelerdeki apartmanlar için cam balkon, giyotin cam sistemleri ve alüminyum doğrama kurulumunda DHS'nin uzman ekibi aynı gün keşif yaparak en hızlı hizmeti sunmaktadır.",
    neighborhoods: ["Bağlarbaşı", "Küçükyalı", "Altayçeşme", "Fındıklı", "Başıbüyük"],
  },
  {
    slug: "pendik",
    name: "Pendik",
    description: "Havalimanına yakın Pendik'te hızla büyüyen konut siteleri ve ticari yapılara alüminyum ve cam çözümleri.",
    intro: "Pendik, İstanbul Havalimanı'na yakın konumu ve sahil bandıyla İstanbul'un en hızlı büyüyen ilçelerinden biridir. Kurtköy ve Kaynarca gibi büyük konut projelerinin yoğunlaştığı ilçede cam balkon, PVC pencere ve ısı yalıtım alüminyum sistemleri için DHS güçlü ekibiyle hazırdır.",
    neighborhoods: ["Kurtköy", "Kaynarca", "Batı", "Sapanbağları", "Yayalar"],
  },
  {
    slug: "sancaktepe",
    name: "Sancaktepe",
    description: "Hızla gelişen Sancaktepe'deki yeni konut projelerine cam balkon ve alüminyum doğrama sistem kurulumu.",
    intro: "Sancaktepe, İstanbul'un Anadolu yakasında son yıllarda en hızlı büyüyen ilçelerinden biridir. Yeni konut projeleri ve genişleyen altyapısıyla dikkat çeken ilçede cam balkon, alüminyum HBŞB sistemleri ve PVC doğrama kurulumu için DHS profesyonel ekibimizle her an hazırdır.",
    neighborhoods: ["Sarıgazi", "Emek", "Yenidoğan", "Abdurrahmangazi", "Eyüp Sultan"],
  },
  {
    slug: "sariyer",
    name: "Sarıyer",
    description: "Tarabya ve Yeniköy gibi seçkin Boğaz semtlerinde Sarıyer'in lüks konutlarına premium cam sistem.",
    intro: "Sarıyer, İstanbul Boğazı kıyısındaki Tarabya, Yeniköy ve Rumelihisarı gibi prestijli semtleriyle lüks konut piyasasının önemli bir parçasıdır. Bu bölgedeki villa ve rezidanslar için Volkswagen sürme cam sistemleri, giyotin cam ve premium alüminyum doğrama çözümleri konusunda DHS'nin uzman ekibi yalnızca birinci sınıf malzeme kullanarak hizmet vermektedir.",
    neighborhoods: ["Tarabya", "Yeniköy", "Rumelihisarı", "Kireçburnu", "İstinye"],
  },
  {
    slug: "silivri",
    name: "Silivri",
    description: "Marmara kıyısındaki Silivri'de yazlık ve kalıcı konutlara dört mevsim cam balkon ve doğrama kurulumu.",
    intro: "Silivri, İstanbul'un Marmara kıyısındaki en gözde tatil ve yazlık ilçelerinden biridir. Son yıllarda kalıcı konutların da belirgin biçimde arttığı Silivri'de cam balkon, PVC pencere ve pergole sistemleri için dört mevsim hizmet talebi güçlü seyreder. DHS olarak Silivri ve çevresindeki tüm yapılara ücretsiz keşif ve montaj hizmeti sunuyoruz.",
    neighborhoods: ["Selimpaşa", "Alibey", "Ortaköy", "Seymen", "Silivri Merkez"],
  },
  {
    slug: "sile",
    name: "Şile",
    description: "Karadeniz kıyısındaki Şile'de yazlık konutlara ve bungalov tipi yapılara cam ve doğrama çözümleri.",
    intro: "Şile, İstanbul'un Karadeniz kıyısındaki nefes kesen doğasıyla öne çıkan eşsiz bir ilçesidir. Yazlık konutlar, bungalovlar ve sahil evleri için cam balkon, pergole ve PVC pencere sistemleri kurulumunda DHS'nin deneyimli ekibi uzak bölgeye rağmen kaliteli ve zamanında hizmet sunmaktadır.",
    neighborhoods: ["Merkez", "Çayırbaşı", "Kurfallı", "Balıklı", "Ağva"],
  },
  {
    slug: "sisli",
    name: "Şişli",
    description: "Nişantaşı ve Mecidiyeköy ile Şişli'nin prestijli konut ve iş merkezlerine özel cam sistemi çözümleri.",
    intro: "Şişli, İstanbul'un ticaret ve iş dünyasının önemli merkezlerinden biridir. Nişantaşı'nın lüks alışveriş caddeleri, Mecidiyeköy'ün yüksek katlı ofis kuleleri ve Bomonti'nin dönüşen konut dokusu; cam balkon, alüminyum cephe sistemleri ve duşakabin çözümleri için geniş bir talep havuzu oluşturmaktadır. DHS olarak Şişli'nin her mahallesinde kaliteli hizmet sunuyoruz.",
    neighborhoods: ["Nişantaşı", "Mecidiyeköy", "Bomonti", "Fulya", "Harbiye"],
  },
  {
    slug: "sultanbeyli",
    name: "Sultanbeyli",
    description: "Hızla büyüyen Sultanbeyli'de kentsel dönüşüm içindeki konut projelerine cam ve doğrama sistem kurulumu.",
    intro: "Sultanbeyli, İstanbul'un Anadolu yakasındaki yoğun ve hızla büyüyen ilçelerinden biridir. Kentsel dönüşüm projeleri kapsamında yenilenen ve inşa edilen konutlarda cam balkon, PVC pencere ve alüminyum doğrama sistemleri için DHS deneyimli ekibi hazır beklemektedir.",
    neighborhoods: ["Fatih", "Hasanpaşa", "Mehmet Akif", "Turgut Özal", "Yavuz Selim"],
  },
  {
    slug: "sultangazi",
    name: "Sultangazi",
    description: "Kuzey İstanbul'un yüksek yoğunluklu ilçesi Sultangazi'de konut bloklarına hızlı cam sistem montajı.",
    intro: "Sultangazi, İstanbul'un kuzey kesiminde yer alan, büyük konut blokları ve yüksek nüfus yoğunluğuyla öne çıkan bir ilçesidir. Bu kalabalık ilçede cam balkon, panjur-kepenk ve PVC pencere yenileme talebine DHS'nin deneyimli ekibi en kısa sürede yanıt vermektedir.",
    neighborhoods: ["Ziyapaşa", "Cebeci", "Uğur Mumcu", "Habipler", "Gazi"],
  },
  {
    slug: "tuzla",
    name: "Tuzla",
    description: "Tersane ve sanayi bölgesiyle birlikte İçmeler gibi gözde sahil semtlerinde Tuzla'ya cam ve doğrama.",
    intro: "Tuzla, İstanbul'un en doğusundaki ilçe olup tersane bölgesi ve sanayi tesislerinin yanı sıra İçmeler ve Şifa gibi gözde sahil semtlerine de ev sahipliği yapmaktadır. Bu bölgedeki tatil siteleri ve kalıcı konutlarda cam balkon, pergole ve alüminyum doğrama çözümleri için DHS'nin uzman ekibi zamanında hizmet verir.",
    neighborhoods: ["Aydınlı", "Postane", "İçmeler", "Şifa", "Mimar Sinan"],
  },
  {
    slug: "umraniye",
    name: "Ümraniye",
    description: "İstanbul'un en hızlı büyüyen ilçelerinden Ümraniye'de yüksek katlı konut projelerine cam sistemi kurulumu.",
    intro: "Ümraniye, İstanbul'un Anadolu yakasında en hızlı büyüyen ve dönüşen ilçelerinden biridir. Yüksek katlı rezidanslar ve büyük konut siteleriyle dikkat çeken Ümraniye'de cam balkon, ısı yalıtım alüminyum ve PVC pencere sistemlerine olan talep her geçen yıl artmaktadır. DHS olarak Ümraniye'deki tüm projelere deneyimli ekibimizle hizmet veriyoruz.",
    neighborhoods: ["Atatürk", "Çakmak", "Esenevler", "İnkılap", "Site"],
  },
  {
    slug: "uskudar",
    name: "Üsküdar",
    description: "Tarihi ve sakin Üsküdar'da Boğaz kıyısındaki nitelikli konutlara premium cam balkon ve doğrama.",
    intro: "Üsküdar, İstanbul'un tarihi Boğaz semtlerinden olan Kuzguncuk, Beylerbeyi ve Çengelköy'ü kapsayan, kültürel mirası ve sakin yaşam kalitesiyle öne çıkan bir ilçesidir. Boğaz manzaralı konutlar ve tarihi yapılar için cam balkon, Volkswagen sürme cam sistemleri ve alüminyum doğrama çözümleri konusunda DHS'nin deneyimli ekibine güvenebilirsiniz.",
    neighborhoods: ["Kuzguncuk", "Beylerbeyi", "Çengelköy", "Bağlarbaşı", "Altunizade"],
  },
  {
    slug: "zeytinburnu",
    name: "Zeytinburnu",
    description: "Tarihi dokusu ve aktif iş yaşamıyla Zeytinburnu'ndaki konut ve ticari yapılara cam sistemi çözümleri.",
    intro: "Zeytinburnu, İstanbul'un tarihi dokusu ve aktif ticari yaşamıyla öne çıkan bir ilçesidir. Deri, tekstil ve perakende sektörlerinin güçlü olduğu ilçede konut yenileme ve iş yeri cam sistemi projeleri için DHS profesyonel ekibimizle hazırdır. Kazlıçeşme kıyısından Veliefendi hipodromuna kadar Zeytinburnu'nun her köşesine hizmet veriyoruz.",
    neighborhoods: ["Kazlıçeşme", "Veliefendi", "Yeşiltepe", "Seyitnizam", "Merkezefendi"],
  },
];

export function getDistrictBySlug(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}

export function getSortedDistricts(): District[] {
  return [...districts].sort((a, b) =>
    a.name.localeCompare(b.name, "tr", { sensitivity: "base" })
  );
}
