// Cavably case study (/[locale]/projects/cavably), AZ. Ported from Atlas `src/i18n/az/cases/cavably.ts`; typed with the EN type source.
import type { CavablyCopy } from './en';

const az: CavablyCopy = {
  seo: {
    title: 'Cavably: salon və klinika üçün AI köməkçili WhatsApp CRM',
    description:
      'Cavably — xidmət sahəsi üçün qurduğumuz AI CRM: WhatsApp, Instagram, Messenger və Telegram bir paneldə, AI cavablar, onlayn randevu və borc xatırlatması.',
  },
  h1: 'Xidmət biznesi üçün AI CRM: WhatsApp və Instagram yazışmaları bir paneldə',
  hero: {
    eyebrow: 'CRM · AI SaaS',
    title: 'Beş kanal, bir ekran, gecə yarısı da cavab.',
    accent: 'gecə yarısı da cavab.',
    lead: 'Cavably-ni salonlar, klinikalar, kurslar və bu kimi xidmət biznesləri üçün AI əsaslı CRM kimi özümüz düşünüb hazırlamışıq və bu gün də özümüz idarə edirik. Müştəri hansı kanaldan yazırsa yazsın, mesaj vahid pəncərəyə gəlir; AI köməkçi biznesin ona öyrətdiyi məlumatla cavab verir, elə həmin ekranda da yazışma randevuya, ödənişə və ya sövdələşməyə çevrilir.',
    primaryCta: 'Belə bir layihəyə başlayaq',
  },
  facts: { platforms: 'Veb-tətbiq · Veb-çat · WhatsApp · Instagram · Messenger · Telegram', languages: 'AZ · EN · RU' },

  channels: {
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    messenger: 'Messenger',
    telegram: 'Telegram',
    web: 'Veb-çat',
  },
  states: {
    ai: 'AI cavab verdi',
    human: 'Leyla ilə',
    new: 'Yeni',
    overdue: 'Gecikir',
    typing: 'AI yazır',
  },

  heroInbox: {
    ariaLabel:
      'Cavably-nin nümunə mesaj pəncərəsi: WhatsApp, Instagram, Messenger, Telegram və veb-çatdan gələn mesajlar bir siyahıya düşür, AI köməkçi cavab verir',
    business: 'Demo Gözəllik Studiyası',
    inbox: 'Inbox',
    online: '5 kanal qoşulub',
    conversations: [
      { name: 'Nərmin', channel: 'instagram', text: 'Şənbə günü boş vaxt var?', time: '23:40', state: 'ai' },
      { name: 'Tural', channel: 'whatsapp', text: 'Kişi saç kəsimi neçəyədir?', time: '23:37', state: 'ai' },
      { name: 'Sevinc', channel: 'telegram', text: 'Qalanını kartla ödəyə bilərəm?', time: '23:31', state: 'human' },
      { name: 'Sayt ziyarətçisi', channel: 'web', text: 'Bazar günü işləyirsiniz?', time: '23:24', state: 'ai' },
      { name: 'Kamran', channel: 'messenger', text: 'Randevumu 16:00-a keçirmək olar?', time: '23:18', state: 'ai' },
      { name: 'Ləman', channel: 'whatsapp', text: 'Səsli mesaj · 0:12', time: '23:09', state: 'ai' },
    ],
    reply: {
      from: 'AI köməkçi',
      text: 'Salam, Nərmin! Şənbə günü Nigarın 11:00 və 15:30-da boş vaxtı var. Hansı sizə uyğundur?',
      source: 'Bilik bazası · İş saatları',
    },
  },

  challenge: {
    id: 'challenge',
    km: '23:40',
    eyebrow: 'Çətinlik',
    title: 'Mesaj 23:40-da gəlir. Administrator isə saat onda.',
    accent: 'Administrator isə saat onda.',
    lead: 'Xidmət biznesinin vitrini messencerlərdir. Suallar, randevu xahişləri və «sabah ödəyərəm» vədləri WhatsApp, Instagram, Telegram və saytdan gecə-gündüz, üstəlik bir neçə telefona səpələnmiş halda gəlir. Müştərinin cavab alıb-almaması isə təsadüfdən — telefonun o an kimdə olmasından asılı qalır.',
    clock: {
      ariaLabel:
        'Nümunə qrafik: beş kanal üzrə bir günün mesajları; onların çoxu axşam və gecə, iş saatlarından kənar gəlir və səhərə qədər gözləyir',
      title: 'Nümunə studiya: bir gündə gələn mesajlar',
      hours: 'İş saatları',
      answered: 'İş vaxtı cavab verilir',
      waiting: 'Səhərə qədər gözləyir',
      highlight: 'Nərmin · 23:40',
    },
    pains: [
      {
        title: 'Görünməyən mesaj',
        text: 'Saat 23:40-da Instagram-a randevu xahişi düşür. Səhər studiya açılanda müştəri artıq ona cavab verən başqa salona yazılmış olur.',
      },
      {
        title: 'Bir saata iki müştəri',
        text: 'WhatsApp-da administrator 15:00-ı təsdiqləyir, telefonda isə həmkarı həmin saatı başqasına verir. Nəticədə ikisi də gəlir.',
      },
      {
        title: 'Borclar kağız üzərində',
        text: 'Beh verənlər və keçən gəlişdən borcu qalanlar kiminsə yaddaşında, kağız dəftərdə və ya çoxdan yenilənməyən cədvəldə saxlanılır.',
      },
      {
        title: '«Neçəyədir?» — əllinci dəfə',
        text: 'Müştəriyə vaxt ayırmalı olan işçilər bütün günü qiymətləri, ünvanı, parkinq məlumatını və iş saatlarını təkrar-təkrar əllə yazır.',
      },
      {
        title: 'Reklamın nəticəsi görünmür',
        text: 'Yazışma ekrandan yuxarı çıxan kimi müştərini hansı paylaşım, reklam və ya linkin gətirdiyini artıq heç kim deyə bilmir.',
      },
    ],
  },

  inbox: {
    id: 'inbox',
    km: '23:40',
    eyebrow: 'Komanda üçün ortaq panel',
    title: 'Beş kanal, bir ortaq pəncərə',
    accent: 'bir ortaq pəncərə',
    lead: 'WhatsApp, Instagram, Messenger, Telegram və sayt vidjetindən gələn yazışmalar komandanın eyni pəncərəsinə toplanır. Hər yazışmanın təyin olunmuş məsulu, bütöv tarixçəsi və müştəri kartı olur; kimin hansı söhbəti apardığını isə hamı canlı izləyir.',
    screen: {
      ariaLabel:
        'Cavably-nin nümunə mesaj pəncərəsi: beş kanaldan gələn yazışmalar siyahısı, AI köməkçinin cavab verdiyi Instagram yazışması və növbəti randevunu və balansı göstərən müştəri profili',
      title: 'Inbox',
      search: 'Yazışmalarda axtar',
      tabs: [
        { label: 'Hamısı', count: '12' },
        { label: 'Mənimkilər', count: '4' },
        { label: 'Təyin edilməyib', count: '3' },
      ],
      list: [
        { name: 'Nərmin', channel: 'instagram', text: '15:30 olsun. 20 AZN-i də ödəyə bilərəm?', time: '23:42', state: 'ai' },
        { name: 'Tural', channel: 'whatsapp', text: 'Kişi saç kəsimi neçəyədir?', time: '23:37', state: 'ai' },
        { name: 'Sevinc', channel: 'telegram', text: 'Qalanını kartla ödəyə bilərəm?', time: '23:31', state: 'human' },
        { name: 'Sayt ziyarətçisi', channel: 'web', text: 'Bazar günü işləyirsiniz?', time: '23:24', state: 'new' },
        { name: 'Kamran', channel: 'messenger', text: 'Randevumu 16:00-a keçirmək olar?', time: '23:18', state: 'ai' },
        { name: 'Orxan', channel: 'whatsapp', text: 'Hələ də cavab gözləyirəm…', time: '22:55', state: 'overdue' },
      ],
      thread: {
        name: 'Nərmin',
        meta: 'Instagram · Daimi müştəri',
        assign: 'Mənə təyin et',
        messages: [
          { from: 'customer', text: 'Salam! Şənbə günü gel manikür üçün boş vaxt var?', time: '23:40' },
          {
            from: 'ai',
            text: 'Salam, Nərmin! Şənbə günü Nigarın 11:00 və 15:30-da boş vaxtı var. Gel manikür təxminən bir saat çəkir. Hansı vaxt sizə uyğundur?',
            time: '23:40',
            name: 'AI köməkçi',
          },
          { from: 'customer', text: '15:30 olsun. Keçən dəfədən qalan 20 AZN-i də ödəyə bilərəm?', time: '23:42' },
          { from: 'system', text: 'Randevu yazıldı · Şənbə 15:30 · Nigar' },
        ],
        collision: 'Leyla artıq bu yazışmaya cavab yazır',
        composer: '/borc',
        quickReplies: [
          { key: '/borc', text: 'Açıq balansınız: {balance}' },
          { key: '/odenis', text: 'Ödəniş üsulları: kart, nağd və ya köçürmə' },
        ],
      },
      profile: {
        title: 'Müştəri',
        tags: ['Daimi', 'Manikür'],
        rows: [
          { label: 'Mərhələ', value: 'Daimi müştəri' },
          { label: 'Növbəti gəliş', value: 'Ş. 15:30 · Nigar' },
          { label: 'Balans', value: '−20 AZN' },
          { label: 'Mənbə', value: 'Instagram bio linki' },
          { label: 'Tarixçə', value: '14 yazışma · 9 gəliş' },
        ],
        note: 'Pastel çalarları sevir. Asetona allergiyası var.',
      },
    },
    features: [
      {
        title: 'Yükə görə bölgü',
        text: 'Təyinat qaydaları hər yeni yazışmanı münasib operatora yönləndirir, limitini doldurmuş əməkdaşı isə ötürüb keçir. Beləcə biri işin altında qalmır, digəri boş dayanmır.',
      },
      {
        title: 'Bir suala bir cavab',
        text: 'Həmkarınız eyni söhbəti açdığı anda onun yazdığını və ya artıq cavab verdiyini görürsünüz.',
      },
      {
        title: '«/» ilə saxlanmış cavablar',
        text: 'Slaş işarəsini yazan kimi hazır cavab əlavə olunur, içindəki dəyişənlər isə həmin müştərinin məlumatları ilə doldurulur.',
      },
      {
        title: 'Özü gedən xatırlatmalar',
        text: 'Yazışma cavabsız qalanda xatırlatma göndərilir: WhatsApp-ın 24 saatlıq pəncərəsi açıq olanda sərbəst mətn, bağlanandan sonra təsdiqlənmiş şablon.',
      },
      {
        title: 'Şərhdən şəxsi mesaja',
        text: 'Kimsə Instagram paylaşımının altında açar söz yazanda şərhə hamının görəcəyi cavab gedir, təfərrüatlar isə ona direktə çatır.',
      },
      {
        title: 'Hər müraciətin mənbəyi bəlli',
        text: 'Hər yeni yazışma gəldiyi mənbə ilə işarələnir: izlənən link, QR kod və ya click-to-WhatsApp reklamı.',
      },
    ],
  },

  ai: {
    id: 'ai',
    km: '23:41',
    eyebrow: 'AI köməkçi',
    title: 'Qiymətləri bilir, öz həddini də bilir',
    accent: 'öz həddini də bilir',
    lead: 'Cavab dərhal gəlir — Azərbaycan, rus və ya ingilis dilində. Köməkçi yalnız biznesin ona öyrətdiyi məlumatdan çıxış edir, səsli mesaj və şəkilləri başa düşür, vəziyyət tələb edəndə isə söhbətə canlı insanı qoşur.',
    chat: {
      business: 'Demo Gözəllik Studiyası',
      status: 'AI köməkçi',
      langs: 'AZ · RU · EN',
      composer: 'Mesaj',
    },
    steps: [
      {
        id: 'knowledge',
        label: 'Bilik bazası',
        title: 'Biznesin öz materialına söykənən cavablar',
        text: 'Komanda FAQ-ları, sərbəst qeydləri və saytından səhifələri yükləyir. Cavably bu materialı avtomatik fraqmentlərə ayırıb indeksləyir, köməkçinin verdiyi hər cavab da məhz ona söykənir.',
        ariaLabel: 'Nümunə yazışma: AI köməkçi qiymət sualına bilik bazasına əsasən cavab verir və mənbəyini göstərir',
        messages: [
          { from: 'customer', text: 'Gel manikür neçəyədir və nə qədər çəkir?', time: '23:40' },
          {
            from: 'ai',
            text: 'Gel manikür 35 AZN-dir və təxminən bir saat çəkir. Şənbə günü Nigarın 11:00 və 15:30-da boş vaxtı var. Sizi birinə yazımmı?',
            time: '23:40',
            source: 'Qiymət siyahısı · FAQ',
          },
        ],
        sources: ['FAQ · 24 cavab', 'Qiymət siyahısı', 'Sayt · Xidmətlər səhifəsi'],
      },
      {
        id: 'voice',
        label: 'Səsli mesajlar',
        title: 'Səsli mesajlara qulaq asır',
        text: 'Bir çox müştəri yazmaqdansa danışıb göndərməyi üstün tutur. Köməkçi səs yazısını mətnə çevirib söhbətdə göstərir və cavablandırır; lazım olsa, özü də səsli mesajla cavab verə bilir.',
        ariaLabel: 'Nümunə yazışma: müştəri səsli mesaj göndərir, transkript görünür və AI köməkçi cavab verir',
        messages: [
          {
            from: 'customer',
            voice: '0:14',
            text: 'Salam, bacımla şənbə saat dörddən sonra gələ bilərik? İki nəfər, saç kəsimi.',
            time: '23:41',
          },
          {
            from: 'ai',
            text: 'Şənbə 16:30 iki nəfər üçün uyğundur: Samir və Aytən həmin vaxt boşdur. Hər ikinizi yazımmı?',
            time: '23:41',
          },
        ],
        sources: [],
      },
      {
        id: 'photo',
        label: 'Şəkillər',
        title: 'Şəkli oxuyur',
        text: 'Müştəri skrinşot atanda və ya Story-yə cavab yazanda köməkçi təsvirdə nə olduğunu müəyyən edir və biznesin kataloqundan ona ən oxşar mövqeyi seçir.',
        ariaLabel: 'Nümunə yazışma: müştəri dırnaq rənginin şəklini göndərir, AI köməkçi kataloqda uyğun çaları tapır',
        messages: [
          { from: 'customer', photo: 'Şəkil', text: 'Bu rəngi edə bilərsiniz?', time: '23:42' },
          {
            from: 'ai',
            text: 'Bəli, bu, kataloqumuzdakı «Albalı qırmızısı» çalarına ən yaxındır. Bu çalarda gel manikür 35 AZN-dir.',
            time: '23:42',
            source: 'Kataloq',
          },
        ],
        sources: [],
      },
      {
        id: 'handoff',
        label: 'İnsana ötürmə',
        title: 'Nə vaxt kənara çəkiləcəyini bilir',
        text: 'Bilik bazasında etibarlı cavab yoxdursa — deyək ki, şikayət və ya sağlamlıqla bağlı narahatlıq var — söhbəti bütün tarixçəsi ilə canlı əməkdaş götürür. Köməkçinin nə qədər tez kənara çəkiləcəyini biznes özü tənzimləyir.',
        ariaLabel: 'Nümunə yazışma: müştəri şikayət edir, AI köməkçi yazışmanı insana ötürür və menecer cavab verir',
        messages: [
          { from: 'customer', text: 'Rəng bir həftəyə soldu. İstəyirəm ki, kimsə bunu düzəltsin.', time: '23:44' },
          { from: 'system', text: 'İnsana ötürüldü · Leyla' },
          {
            from: 'agent',
            name: 'Leyla',
            text: 'Salam, mən Leylayam. Bu hal üçün üzr istəyirik, ödənişsiz yenidən edəcəyik. Sabah saat 12:00 sizə uyğundur?',
            time: '09:58',
          },
        ],
        sources: [],
      },
    ],
    slider: { label: 'Ötürmə həssaslığı', less: 'Az ötürür', more: 'Çox ötürür' },
  },

  bookings: {
    id: 'bookings',
    km: '23:42',
    eyebrow: 'Randevu və ödəniş',
    title: 'Söhbətdən təqvimə, təqvimdən kassaya',
    accent: 'təqvimdən kassaya',
    lead: 'Söhbətdə razılaşılan saat dərhal lazımi mütəxəssisin təqviminə yazılır. Üst-üstə düşən randevuların qarşısı əvvəlcədən alınır, təsdiq və xatırlatmalar avtomatik göndərilir, borc isə elə randevunun yanında görünür.',
    calendar: {
      ariaLabel:
        'Üç mütəxəssis üçün nümunə randevu təqvimi: WhatsApp-dan gələn randevu 15:30-a düşür, ikinci randevu isə mütəxəssis məşğul olduğu üçün qəbul edilmir və boş həmkara keçir',
      day: 'Şənbə',
      today: 'Randevular',
      staff: ['Nigar', 'Samir', 'Aytən'],
      incoming: { channel: 'whatsapp', name: 'Nərmin', text: '15:30 olsun' },
      blocks: [
        { staff: 0, row: 0, span: 2, kind: 'brows', label: 'Qaş · Günay' },
        { staff: 0, row: 4, span: 3, kind: 'nails', label: 'Gel manikür · Aysu' },
        { staff: 0, row: 14, span: 2, kind: 'nails', label: 'Pedikür · Lalə' },
        { staff: 1, row: 1, span: 2, kind: 'hair', label: 'Saç kəsimi · Elvin' },
        { staff: 1, row: 6, span: 2, kind: 'hair', label: 'Saç kəsimi · Rauf' },
        { staff: 1, row: 13, span: 2, kind: 'hair', label: 'Saqqal · Orxan' },
        { staff: 2, row: 2, span: 4, kind: 'color', label: 'Boyama · Səbinə' },
        { staff: 2, row: 8, span: 2, kind: 'hair', label: 'Saç kəsimi · Fidan' },
      ],
      booking: { staff: 0, row: 11, span: 2, label: 'Gel manikür · Nərmin' },
      moved: { staff: 2, row: 12, span: 2, from: 0, label: 'Qaş · Zeynəb' },
      clash: 'Bu vaxt Nigar məşğuldur',
      confirmed: 'Təsdiqləndi · xatırlatma cümə günü gedəcək',
      movedNote: 'Boş olan Aytənə keçirildi',
    },
    debts: {
      ariaLabel:
        'Son tarixləri və xatırlatma statusları ilə nümunə ödəniş və borc siyahısı, avtomatik göndərilən WhatsApp xatırlatması',
      title: 'Ödənişlər və borclar',
      rows: [
        { name: 'Nərmin', item: 'Əvvəlki gəliş', amount: '20 AZN', due: 'Şənbə', status: 'Xatırlatma göndərildi', tone: 'ok' },
        { name: 'Kamran', item: 'Kurs · 2-ci hissə', amount: '120 AZN', due: '20 sent', status: 'Planlaşdırılıb', tone: 'info' },
        { name: 'Sevinc', item: 'Lazer paketi', amount: '90 AZN', due: '3 gün gecikir', status: 'Gecikir', tone: 'bad' },
      ],
      message: {
        channel: 'whatsapp',
        text: 'Salam, Kamran! Xatırladırıq ki, kurs haqqının ikinci hissəsinin (120 AZN) ödəniş tarixi 20 sentyabrdır. Sualınız olsa, elə buradan yazın.',
        meta: 'Son tarixdə avtomatik göndərilib',
      },
    },
    features: [
      {
        title: 'Toqquşma əvvəlcədən bloklanır',
        text: 'Hər mütəxəssisin ayrıca təqvimi olur və dolu saat kimsə onu təsdiqləməyə macal tapmamış rədd olunur.',
      },
      {
        title: 'Avtomatik təsdiq',
        text: 'Randevu yazıldığı anda müştəriyə təsdiq mesajı çatır, gəlişə az qalmış isə xatırlatma gəlir.',
      },
      {
        title: 'Ödəniş randevu ilə yanaşı',
        text: 'Ödənişlər və balans müştəri kartında saxlanılır, ona görə administrator gəliş başlamamış kimin nə qədər borcu olduğunu bilir.',
      },
      {
        title: 'Ödəniş günü xatırlatma',
        text: 'Ödənişi son tarixi ilə daxil edin: həmin gün nəzakətli xatırlatma öz-özünə gedəcək, bunu heç kim yadında saxlamalı olmayacaq.',
      },
    ],
  },

  growth: {
    id: 'growth',
    km: '60-cı gün',
    eyebrow: 'Sövdələşmələr, kampaniyalar, loyallıq',
    title: 'Yazışma satışa çevrilir. Müştəri geri dönür.',
    accent: 'Müştəri geri dönür.',
    lead: 'İri alışlar — kurs, prosedur paketi, korporativ sifariş — elə söhbətin içində başlayan satış hunisindən keçir. Daimi müştərilər bal qazanır, çoxdandır gəlməyənlər isə sakitcə unudulmur — onlara vaxtında mesaj yollanır.',
    pipeline: {
      ariaLabel:
        'Dörd mərhələli nümunə satış hunisi: kurs sövdələşməsi təklif mərhələsindən qazanılanlara keçir və açıq huninin dəyəri yenilənir',
      title: 'Sövdələşmələr',
      valueLabel: 'Açıq huni',
      wonLabel: 'Bu ay qazanılıb',
      stages: ['Yeni', 'Uyğun', 'Təklif', 'Qazanılıb'],
      deals: [
        { stage: 0, name: 'Lazer paketi', who: 'Sevinc', value: '450', channel: 'instagram' },
        { stage: 0, name: 'Gəlin makiyajı', who: 'Sabina', value: '320', channel: 'whatsapp' },
        { stage: 1, name: 'Korporativ hədiyyə kartları', who: 'Demo Group MMC', value: '1 200', channel: 'web' },
        { stage: 1, name: 'Dırnaq kursu', who: 'Fidan', value: '380', channel: 'telegram' },
        { stage: 2, name: 'Qaş kursu', who: 'Kamran', value: '480', channel: 'messenger' },
        { stage: 3, name: 'Pilinq paketi', who: 'Ləman', value: '260', channel: 'instagram' },
      ],
      mover: 4,
      currency: 'AZN',
      fromChat: 'Yazışmadan yaranıb',
      silent: '12 gündür səssizdir',
      lostTitle: 'Sövdələşmə niyə itirildi?',
      lostReasons: ['Qiymət yüksək gəldi', 'Vaxtı yox idi', 'Rəqibə getdi'],
    },
    campaign: {
      ariaLabel:
        'Son 60 gündə gəlməyən müştərilərə ad dəyişəni və abunədən çıxma sətri olan təsdiqlənmiş şablonla nümunə WhatsApp kampaniyası',
      title: 'Kampaniya',
      name: 'Darıxmışıq',
      segmentLabel: 'Auditoriya',
      segment: ['60 gündür gəlməyib', 'Razılıq verib'],
      templateLabel: 'Təsdiqlənmiş WhatsApp şablonu',
      message: 'Salam, {ad}! Çoxdandır görüşmürük. Bu həftə yazılın, qaş boyanması bizdən hədiyyə.',
      variable: '{ad}',
      stop: 'Abunədən çıxmaq üçün STOP yazın',
      send: 'Göndər',
      progress: 'Göndərilir',
      log: [
        { name: 'Günay', status: 'Oxudu' },
        { name: 'Elvin', status: 'Çatdırıldı' },
        { name: 'Rauf', status: 'STOP yazdı · abunədən çıxdı' },
      ],
    },
    loyalty: {
      ariaLabel: 'Nümunə loyallıq kartı: müştərinin növbəti hədiyyəyə qədər 500 baldan 340 balı var',
      title: 'Loyallıq',
      name: 'Nərmin',
      points: '340',
      goal: '500',
      pointsLabel: 'bal',
      reward: 'Növbəti hədiyyə: pulsuz qaş boyanması',
    },
    features: [
      {
        title: 'Söhbətdən başlayan sövdələşmə',
        text: 'Hər sövdələşmə yazışmadan açılır və onunla əlaqəli qalır. Mərhələlər, uduş və itki səbəbləri, huninin həcmi və proqnoz — hamısı bir klikdə.',
      },
      {
        title: 'Razılığa əsaslanan kampaniyalar',
        text: 'Kütləvi mesajları yalnız buna razı olan müştərilər alır, göndəriş təsdiqlənmiş WhatsApp şablonları ilə aparılır; STOP cavabı verən isə avtomatik siyahıdan silinir.',
      },
      {
        title: 'Bal və geri qaytarma',
        text: 'Hər gəlişə görə bal yığılır, daimi müştəri gəlməyi dayandıranda isə onu geri çağıran mesajlar avtomatik gedir.',
      },
    ],
  },

  flows: {
    id: 'flows',
    km: '23:41',
    eyebrow: 'Kodsuz avtomatlaşdırma',
    title: 'Ssenarini çəkin, kodu unudun',
    accent: 'kodu unudun',
    lead: 'Sahibkar və menecerlər söhbət məntiqini vizual lövhədə öz əlləri ilə düzür: triggerlər, suallar, şərtlər, fasilələr, AI addımları və canlı əməkdaşa ötürmə. Ssenari işə düşməzdən əvvəl daxili simulyator ondan test mesajı keçirir.',
    builder: {
      ariaLabel:
        'Vizual konstruktorda nümunə ssenari: yeni Instagram mesajı AI niyyət addımına düşür və randevu, qiymət sualı və digər budaqlara ayrılır, simulyator isə icra olunan addımları göstərir',
      title: 'Yeni müraciət · Instagram',
      status: 'Yayımlanıb',
      libraryTitle: 'Bloklar',
      library: [
        'Mətn və düymə göndər',
        'Sual ver',
        'Şərt (if / else)',
        'A/B bölgü',
        'Gözlə',
        'İş saatları',
        'CRM əməliyyatı',
        'AI-ya ötür',
        'Operatora təyin et',
        'HTTP sorğusu',
        'Google Sheets sətri',
        'E-poçt göndər',
      ],
      nodes: {
        trigger: { type: 'Tətikləyici', text: 'Instagram-da yeni mesaj' },
        intent: { type: 'AI niyyət', text: 'Müştəri nə istəyir?' },
        ask: { type: 'Sual ver', text: 'Hansı xidmət və gün?' },
        deal: { type: 'CRM əməliyyatı', text: 'Randevu sövdələşməsi yarat' },
        answer: { type: 'AI-ya ötür', text: 'Bilik bazasından cavab ver' },
        hours: { type: 'İş saatları', text: 'Studiya açıqdır?' },
        assign: { type: 'Operatora təyin et', text: 'Növbəti boş operator' },
      },
      branches: ['Randevu', 'Qiymət', 'Digər'],
      simulatorTitle: 'Simulyator',
      runs: [
        {
          message: 'Cümə günü qaş üçün yazılmaq istəyirəm',
          steps: ['Tətikləyici işə düşdü', 'Niyyət: randevu', 'Soruşuldu: xidmət və gün', 'Sövdələşmə yaradıldı'],
        },
        {
          message: 'Pedikür neçəyədir?',
          steps: ['Tətikləyici işə düşdü', 'Niyyət: qiymət', 'AI qiymət siyahısından cavab verdi'],
        },
        {
          message: 'Hədiyyə kartınız var?',
          steps: ['Tətikləyici işə düşdü', 'Niyyət: digər', 'Studiya açıqdır', 'Leylaya təyin edildi'],
        },
      ],
      templatesTitle: 'Hazır şablonlar',
      templates: ['FAQ cavabları', 'Müraciətin dəyərləndirilməsi', 'Geri qaytarma'],
    },
    features: [
      {
        title: 'Lazım olan hər blok',
        text: 'Düyməli mətn, media, siyahılar, WhatsApp şablonları, cavabı dəyişəndə saxlayan suallar, if/else məntiqi, A/B bölgülər, fasilələr və iş saatına görə budaqlanma.',
      },
      {
        title: 'Addım kimi AI',
        text: 'AI addımı müştərinin nə soruşduğunu anlayıb uyğun budağa yönləndirir, cavabı bilik bazasından götürür və ya söhbəti köməkçinin öhdəsinə buraxır.',
      },
      {
        title: 'Hər şeylə əlaqəli',
        text: 'Eyni lövhədə CRM əməliyyatları, HTTP sorğuları, Google Sheets-ə sətir əlavəsi, e-məktublar, operatora ötürmə və başqa ssenarilərə keçid də blok kimi yer alır.',
      },
    ],
  },

  analytics: {
    id: 'analytics',
    km: 'B.e. 09:00',
    eyebrow: 'Analitika',
    title: 'Keçən həftə bir baxışda — bazar ertəsi',
    accent: 'bir baxışda',
    lead: 'Sahibkar söhbətlərin randevuya və gəlirə necə çevrildiyini izləyir: müraciət hunisi, gəlirin gedişatı, hansı kanalın hansı müştərini gətirdiyi, komandanın cavab sürəti və söhbət bitəndən sonra müştərinin məmnunluğu.',
    dashboard: {
      ariaLabel:
        'Nümunə analitika paneli: müraciət hunisi, həftəlik gəlir dinamikası, kanallar üzrə yazışmalar, ilk cavab vaxtı və aşağı bal xəbərdarlığı ilə müştəri məmnuniyyəti',
      title: 'Analitika',
      range: 'Son 8 həftə',
      funnel: {
        title: 'Müraciət hunisi',
        stages: [
          { label: 'Yazışmalar', value: '486' },
          { label: 'Uyğun', value: '212' },
          { label: 'Randevu yazılıb', value: '131' },
          { label: 'Ödənilib', value: '117' },
        ],
      },
      revenue: {
        title: 'Gəlir dinamikası',
        total: '8 940 AZN',
        points: [620, 710, 680, 840, 790, 960, 1080, 1160],
        labels: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8'],
      },
      channels: {
        title: 'Kanallar üzrə yazışmalar',
        items: [
          { channel: 'instagram', value: 188 },
          { channel: 'whatsapp', value: 164 },
          { channel: 'telegram', value: 58 },
          { channel: 'web', value: 46 },
          { channel: 'messenger', value: 30 },
        ],
      },
      response: { title: 'İlk cavab', value: '1 dəq 12 san', note: 'AI və komanda birlikdə' },
      csat: {
        title: 'Müştəri məmnuniyyəti',
        value: '4,7',
        scale: '/ 5',
        bars: [2, 3, 9, 31, 55],
        alertTitle: 'Aşağı bal',
        alert: 'Sevinc 2 bal verdi. Menecerə bildiriş getdi, yazışma yenidən açıldı.',
      },
    },
    features: [
      {
        title: 'İlk mesajdan ödənişə',
        text: 'Huni hər müraciəti addım-addım izləyir: ilk mesaj, randevu, ödəniş.',
      },
      {
        title: 'Hər söhbətdən sonra qiymət',
        text: 'Söhbət bağlandıqda müştəriyə qısa qiymətləndirmə sorğusu göndərilir. Aşağı qiymət menecerə xəbər verir və yazışmanı təkrar açır.',
      },
      {
        title: 'Kanal və mənbə müqayisəsi',
        text: 'Söhbətləri hansı kanal, link, QR kod və ya reklamın gətirdiyini, hər birinə cavabın nə qədər tez verildiyini yan-yana görün.',
      },
    ],
  },

  engineering: {
    id: 'engineering',
    eyebrow: 'Arxitektura və təhlükəsizlik',
    title: 'Kiçik biznes üçün CRM, korporativ səviyyəli nəzarət',
    accent: 'korporativ səviyyəli nəzarət',
    lead: 'Cavably elə bir multi-tenant SaaS kimi qurulub ki, salon sahibi üçün rahat olsun və şirkətin İT şöbəsinin yoxlamasından da keçsin. Vahid giriş (SSO), yalnız əlavə olunan audit jurnalı, SLA siyasətləri və fərdi rollar mesaj pəncərəsi ilə yanaşı durur.',
    controls: {
      ariaLabel:
        'Nümunə korporativ ayarlar: SAML və OIDC ilə vahid giriş, dəyişdirilə bilməyən audit jurnalı, VIP müştərilər üçün SLA siyasəti və icazələri olan fərdi rol',
      sso: {
        title: 'Vahid giriş (SSO)',
        protocols: 'SAML 2.0 · OIDC',
        domain: '@demo-clinic.example',
        target: 'Şirkətin identifikasiya provayderi',
        role: 'Standart rol · Əməkdaş',
        status: 'Bağlantı uğurludur',
        fields: [
          { label: 'Girişin yönləndirilməsi', value: 'E-poçt domeninə görə' },
          { label: 'IdP sertifikatı', value: 'x509 · yüklənib' },
        ],
      },
      audit: {
        title: 'Audit jurnalı',
        note: 'Yalnız əlavə olunur · dəyişdirilə və silinə bilməz',
        rows: [
          { time: '09:42', who: 'Sahib', what: 'Samirin rolunu «Menecer» olaraq dəyişdi' },
          { time: '09:31', who: 'Leyla', what: 'Müştəri siyahısını ixrac etdi' },
          { time: '09:12', who: 'Aytən', what: 'SSO ilə daxil oldu' },
        ],
      },
      sla: {
        title: 'SLA siyasəti',
        policy: 'VIP müştərilər',
        rows: [
          { label: 'İlk cavab', value: '10 dəq' },
          { label: 'Həll', value: '4 saat' },
        ],
        hours: 'Yalnız iş saatları hesablanır',
        overdue: '2 gecikmiş',
      },
      roles: {
        title: 'Fərdi rol',
        role: 'Qəbul masası',
        permissions: [
          { label: 'Yazışmalara cavab vermək', on: true },
          { label: 'Hazır cavabları idarə etmək', on: true },
          { label: 'Müştəriləri ixrac etmək', on: false },
          { label: 'Ödəniş və tarif planı', on: false },
        ],
      },
    },
    principlesTitle: 'Daxildən necə işləyir',
    principles: [
      {
        label: 'Ayrı iş sahələri',
        text: 'Platformadan çoxlu biznes istifadə edir, lakin hər şirkətin öz ayrıca sahəsi var və onun datası başqalarınınkından təcrid olunmuş saxlanılır.',
      },
      {
        label: 'Real vaxt',
        text: 'Yeni mesajlar, «yazır» göstəricisi, onlayn status və «artıq cavab yazır» işarəsi hər operatorun ekranında dərhal görünür.',
      },
      {
        label: 'Mənbəyə əsaslanan AI',
        text: 'AI hər biznesin öz mənbələrindən axtarış edir (RAG); insana ötürmə həddini və aylıq AI istifadə limitini biznes özü müəyyənləşdirir.',
      },
      {
        label: 'Təhlükəsizlik',
        text: 'Rola görə icazələr, Google hesabı ilə daxil olma, SAML 2.0 və OIDC üzərindən vahid giriş, yalnız əlavə olunan audit jurnalı, kanal açarlarının şifrəli saxlanması.',
      },
      {
        label: 'Açıq platforma',
        text: 'Webhook-lar, icazə sahəsi məhdud açarlarla işləyən açıq API və Google Sheets tipli hazır konnektorlar.',
      },
      {
        label: 'Üç dil',
        text: 'İnterfeys də, AI da Azərbaycan, rus və ingilis dillərini bilir; dil, saat qurşağı və iş qrafiki hər biznesdə ayrıca qurulur.',
      },
    ],
    hub: {
      title: 'Qoşulduğu kanallar və sistemlər',
      channelsLabel: 'Mesajlaşma kanalları',
      systemsLabel: 'Sistemlər və giriş',
      core: ['Inbox', 'AI köməkçi', 'CRM'],
      systems: ['Click-to-WhatsApp reklamları', 'Google Sheets', 'Webhook-lar', 'Açıq API', 'E-poçt', 'Google ilə giriş', 'SAML 2.0 / OIDC'],
    },
  },

  role: {
    eyebrow: 'Rolumuz',
    title: 'Aibaycan nə etdi',
    items: [
      {
        title: 'Məhsul dizaynı və UX',
        text: 'Məhsulu salon, klinika və kursun gündəlik iş axınına uyğunlaşdırdıq: mərkəzdə mesaj pəncərəsi, randevu, ödəniş və sövdələşmə isə istənilən söhbətdən bir klik məsafədə.',
      },
      {
        title: 'AI mühəndisliyi',
        text: 'Hər biznesin biliyi üzərində axtarış, niyyətə əsasən marşrutlaşdırma, səs yazılarının transkripsiyası və səsli cavab, təsvirlərin anlaşılması, əminlik səviyyəsinə görə canlı əməkdaşa ötürmə.',
      },
      {
        title: 'Kanal inteqrasiyaları',
        text: 'WhatsApp, Instagram, Messenger, Telegram və istənilən sayta qoşulan veb-çat; üstəlik şablonlar, kütləvi göndərişlər, abunədən imtina və şərhləri mesaja çevirən qaydalar.',
      },
      {
        title: 'Platforma mühəndisliyi',
        text: 'Real vaxtda işləyən multi-tenant SaaS: mesaj pəncərəsi, randevular, ödənişlər, huni, kampaniyalar, ssenari konstruktoru və analitika vahid data modeli üzərində qurulub.',
      },
      {
        title: 'Korporativ səviyyəli təhlükəsizlik',
        text: 'SAML 2.0 və OIDC üzərindən vahid giriş, yalnız əlavə olunan audit jurnalı, SLA siyasətləri və incə tənzimlənən icazələrlə fərdi rollar.',
      },
      {
        title: 'İşə salma və dəstək',
        text: 'Məhsulu da, onun AI-ını da üç dilə lokallaşdırdıq, cavably.com-da istifadəyə verdik və öz platformamız kimi idarə etməyə davam edirik.',
      },
    ],
  },
  stack: {
    eyebrow: 'Texnologiyalar',
    title: 'Cavably-nin texnoloji bazası',
    groups: [
      { label: 'Frontend', items: ['TypeScript', 'React', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'NestJS', 'WebSockets'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis'] },
      { label: 'AI', items: ['LLM API', 'RAG', 'Speech-to-text'] },
    ],
  },
  faq: {
    title: 'Cavably haqqında suallar',
    items: [
      {
        q: 'Cavably-ni indi canlı görmək olar?',
        a: 'Bəli. Bu, bizim öz platformamızdır və cavably.com-da işləyir. AI köməkçi, kanal inteqrasiyaları, korporativ nəzarət alətləri — hər şeyi biz düşünüb hazırlamışıq, idarəsi də bizim əlimizdədir.',
      },
      {
        q: 'AI-ın cavab uydurmasının qarşısı necə alınır?',
        a: 'Köməkçi yalnız biznesin verdiyi materialdan istifadə edir: FAQ, mətnlər və sayt səhifələri. Etibarlı cavab tapmayanda və ya müştəri canlı insan istəyəndə söhbəti bütün tarixçə ilə operator götürür. Ötürmənin nə qədər tez baş verəcəyini biznes tənzimləyir.',
      },
      {
        q: 'Cavably nələrlə inteqrasiya olunur?',
        a: 'Mesajlaşma tərəfdən: WhatsApp, Instagram, Messenger, Telegram və biznesin saytı üçün veb-çat vidjeti. Bundan əlavə, Google Sheets, webhook-lar, açıq API və click-to-WhatsApp reklamları ilə işləyir, Google hesabı ilə daxil olmanı və SAML 2.0 və ya OIDC üzərindən vahid girişi dəstəkləyir.',
      },
      {
        q: 'Azərbaycan dili dəstəklənir?',
        a: 'Bəli, standart dil elə Azərbaycan dilidir. Bütün interfeys və AI köməkçi həm də rus və ingilis dillərində mövcuddur.',
      },
      {
        q: 'Bizim üçün də belə AI köməkçi və ya WhatsApp CRM qura bilərsiniz?',
        a: 'Bəli. Bu komponentləri başqa şirkətlər üçün də hazırlayırıq: canlı əməkdaşa ötürə bilən bilik bazalı AI, səsli mesaj və şəkil tanıma, Instagram və WhatsApp inteqrasiyası, randevu sistemi, satış hunisi və kodsuz avtomatlaşdırma — ya hazırkı sisteminizə əlavə kimi, ya da yeni məhsul şəklində.',
      },
    ],
  },
  railLabels: {
    challenge: 'Problem',
    inbox: 'Vahid pəncərə',
    ai: 'AI köməkçi',
    bookings: 'Randevular',
    growth: 'Satış və kampaniyalar',
    flows: 'Ssenarilər',
    analytics: 'Analitika',
    engineering: 'Mühəndislik',
  },
  sampleDataNote: 'Ekranlarda gördüyünüz ad və rəqəmlər nümunə məlumatlardır.',
  mockupAriaLabel: 'Nümunə məlumatlarla Cavably ekranının təsviri',
};

export default az;
