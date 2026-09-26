// Cavably case study (/[locale]/projects/cavably), AZ. Ported from Atlas `src/i18n/az/cases/cavably.ts`; typed with the EN type source.
import type { CavablyCopy } from './en';

const az: CavablyCopy = {
  seo: {
    title: 'Cavably: WhatsApp CRM, AI CRM və salon proqramı',
    description:
      'Cavably — xidmət biznesləri üçün AI CRM-imiz: müştəri yazışmalarını bir yerdə toplayan WhatsApp CRM, AI köməkçi, randevular, borc xatırlatmaları və ssenarilər.',
  },
  h1: 'Salon, klinika və kurslar üçün AI CRM: müştəri yazışmaları bir yerdə',
  hero: {
    eyebrow: 'CRM · AI SaaS',
    title: 'Beş kanal. Bir pəncərə. Gecə-gündüz cavab.',
    accent: 'Gecə-gündüz cavab.',
    lead: 'Cavably salonlar, klinikalar, kurslar və digər xidmət biznesləri üçün öz AI əsaslı CRM-imizdir. Onu biz layihələndirib qurmuşuq və özümüz idarə edirik. Bütün kanallardan gələn mesajlar bir pəncərəyə düşür, AI köməkçi biznesin öz bilik bazasına əsasən cavab verir, yazışma isə ekrandan çıxmadan randevuya, ödənişə və ya sövdələşməyə çevrilir.',
    primaryCta: 'Oxşar layihəni müzakirə edək',
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
    eyebrow: 'Problem',
    title: 'Müştəri gecə yarısı yazır. Qəbul masası isə saat onda açılır.',
    accent: 'Qəbul masası isə saat onda açılır.',
    lead: 'Xidmət biznesi messencerlərdə yaşayır. Suallar, randevu istəkləri və ödəniş vədləri WhatsApp, Instagram, Telegram və saytdan gəlir — istənilən saatda və bir neçə telefona. Kiminsə cavab verməsi isə hansı telefonun kimin əlində olmasından asılıdır.',
    clock: {
      ariaLabel:
        'Nümunə qrafik: beş kanal üzrə bir günün mesajları; onların çoxu axşam və gecə, iş saatlarından kənar gəlir və səhərə qədər gözləyir',
      title: 'Nümunə studiyada bir günün mesajları',
      hours: 'İş saatları',
      answered: 'İş vaxtı cavab verilir',
      waiting: 'Səhərə qədər gözləyir',
      highlight: 'Nərmin · 23:40',
    },
    pains: [
      {
        title: 'Heç kimin görmədiyi mesaj',
        text: 'Randevu istəyi Instagram-a saat 23:40-da gəlir. Studiya açılana qədər müştəri artıq cavab verən başqa yerə yazılıb.',
      },
      {
        title: 'Bir vaxt, iki vəd',
        text: 'Administrator WhatsApp-da 15:00-ı təsdiqləyir, həmkarı isə eyni vaxtı zəng edən müştəriyə verir. Hər iki müştəri gəlir.',
      },
      {
        title: 'Dəftərdə qalan borclar',
        text: 'Kimin beh verdiyi, kimin keçən gəlişdən borclu qaldığı kiminsə yaddaşında, dəftərdə və ya heç kimin yeniləmədiyi cədvəldə qalır.',
      },
      {
        title: 'Qiymət barədə əllinci sual',
        text: 'Qiymətlər, ünvan, parkinq və iş saatları bütün gün əl ilə yazılır — özü də müştəriyə xidmət göstərməli olan insanlar tərəfindən.',
      },
      {
        title: 'Nəyin işlədiyi bilinmir',
        text: 'Müştərini hansı paylaşımın, reklamın və ya linkin gətirdiyi yazışma yuxarı sürüşən kimi unudulur.',
      },
    ],
  },

  inbox: {
    id: 'inbox',
    km: '23:40',
    eyebrow: 'Vahid mesaj pəncərəsi',
    title: 'Bütün kanallar bir pəncərədə',
    accent: 'bir pəncərədə',
    lead: 'WhatsApp, Instagram, Messenger, Telegram və saytdakı veb-çat komandanın ortaq pəncərəsinə düşür. Hər yazışmanın məsul şəxsi, tam tarixçəsi və müştəri profili var, komanda isə kimin hansı yazışmaya cavab verdiyini real vaxtda görür.',
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
        title: 'İş yükünə görə bölüşdürmə',
        text: 'Qaydalar hər yeni yazışmanı uyğun operatora verir. Limitinə çatmış operator nəzərə alınmır: biri yazışmalarda boğulanda digəri boş oturmur.',
      },
      {
        title: 'İkiqat cavab olmur',
        text: 'Həmkar eyni yazışmanı açan kimi «yazır» və «artıq cavab yazır» siqnalları görünür.',
      },
      {
        title: '«/» ilə hazır cavablar',
        text: 'Saxlanmış cavablar «/» işarəsi ilə yazışmaya əlavə olunur, dəyişənlər isə müştərinin öz məlumatları ilə dolur.',
      },
      {
        title: 'Avtomatik göndərilən xatırlatmalar',
        text: 'Cavabsız qalan yazışmaya xatırlatma gedir: WhatsApp-ın 24 saatlıq müddəti daxilində sərbəst mətn, ondan sonra isə təsdiqlənmiş şablon.',
      },
      {
        title: 'Şərhdən yazışmaya',
        text: 'Instagram paylaşımının altında açar söz yazılanda şərhə açıq cavab verilir, ətraflı məlumat isə şəxsi mesajla göndərilir.',
      },
      {
        title: 'Hər müraciət mənbəyi ilə',
        text: 'İzlənən linklər, QR kodlar və click-to-WhatsApp reklamları hər yeni yazışmanın haradan gəldiyini qeyd edir.',
      },
    ],
  },

  ai: {
    id: 'ai',
    km: '23:41',
    eyebrow: 'AI köməkçi',
    title: 'Qiymətləri bilən, harada dayanacağını da bilən köməkçi',
    accent: 'harada dayanacağını da bilən',
    lead: 'AI köməkçi Azərbaycan, rus və ya ingilis dilində dərhal cavab verir. Yalnız biznesin ona öyrətdiklərinə əsaslanır, səsli mesajları və şəkilləri anlayır, lazım olan anda isə yazışmanı insana ötürür.',
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
        title: 'Biznesin öz biliyinə əsaslanan cavablar',
        text: 'Komanda tez-tez verilən sualları, sərbəst mətni və saytının səhifələrini əlavə edir. Cavably onları avtomatik hissələrə bölüb indeksləyir, köməkçi isə hər cavabını bu mənbələrə əsaslandırır.',
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
        title: 'Səsli mesajları eşidir',
        text: 'Müştərilər çox vaxt yazmaq əvəzinə səsli mesaj göndərir. Köməkçi səsli mesajı mətnə çevirir, mətni yazışmada göstərir və cavab verir. Cavabını səsli mesajla da göndərə bilir.',
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
        title: 'Şəkilləri anlayır',
        text: 'Müştəri skrinşot göndərir və ya Story-yə cavab yazır. Köməkçi şəkildə nə olduğunu tanıyır və biznesin kataloqunda ona ən yaxın variantı tapır.',
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
        title: 'Lazım olan anda insana ötürür',
        text: 'Bilik bazası suala əminliklə cavab vermirsə — məsələn, şikayət və ya tibbi narahatlıq olduqda — yazışma bütün tarixçəsi ilə insana keçir. Köməkçinin yazışmanı nə qədər asanlıqla ötürəcəyini biznes özü müəyyən edir.',
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
    eyebrow: 'Randevular və ödənişlər',
    title: 'Yazışma randevuya çevrilir. Randevu ödənilir.',
    accent: 'Randevu ödənilir.',
    lead: 'Yazışmada razılaşdırılan vaxt birbaşa uyğun mütəxəssisin təqviminə düşür. Vaxt toqquşmaları baş vermədən aşkarlanır, təsdiq və xatırlatmalar özü gedir, borclar isə randevunun yanında izlənir.',
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
        title: 'İkiqat randevu olmur',
        text: 'Hər mütəxəssisin öz təqvimi var. Artıq tutulmuş vaxt hələ kimsə təsdiqləməmiş rədd edilir.',
      },
      {
        title: 'Təsdiq və xatırlatmalar',
        text: 'Randevu yazılan kimi müştəriyə avtomatik təsdiq, gəlişdən əvvəl isə xatırlatma gedir.',
      },
      {
        title: 'Pul randevunun yanında',
        text: 'Ödənişlər və balanslar müştərinin adına qeyd olunur, administrator müştəri gəlməzdən əvvəl kimin nə qədər borclu olduğunu görür.',
      },
      {
        title: 'Son tarixdə borc xatırlatması',
        text: 'Ödəniş son tarixlə əlavə edilir və həmin gün heç kimin yadına salmasına ehtiyac olmadan nəzakətli xatırlatma gedir.',
      },
    ],
  },

  growth: {
    id: 'growth',
    km: '60-cı gün',
    eyebrow: 'Satış hunisi, kampaniyalar və loyallıq',
    title: 'Yazışmalar sövdələşməyə çevrilir. Müştərilər yenidən gəlir.',
    accent: 'Müştərilər yenidən gəlir.',
    lead: 'Kurs, prosedur paketi və ya korporativ sifariş kimi böyük satışlar yazışmanın özündən başlayan satış hunisi ilə irəliləyir. Daimi müştərilər bal toplayır, bir müddətdir görünməyən müştəriyə isə unudulmaq əvəzinə vaxtında mesaj gedir.',
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
        title: 'Yazışmada doğulan satış hunisi',
        text: 'Sövdələşmə yazışmadan yaradılır və ona bağlı qalır. Mərhələlər, qazanma və itirmə səbəbləri, huninin dəyəri və proqnoz bir klik uzaqlıqdadır.',
      },
      {
        title: 'Razılığa hörmət edən kampaniyalar',
        text: 'Toplu mesajlar yalnız razılıq verən müştərilərə, təsdiqlənmiş WhatsApp şablonları ilə gedir; STOP yazan hər kəs siyahıdan avtomatik çıxarılır.',
      },
      {
        title: 'Loyallıq balları və müştərini geri qaytarma',
        text: 'Hər gəliş üçün bal, daimi müştəri görünməyəndə isə avtomatik geri qaytarma mesajları.',
      },
    ],
  },

  flows: {
    id: 'flows',
    km: '23:41',
    eyebrow: 'Kodsuz ssenari konstruktoru',
    title: 'Ssenarilər kod yazılmadan çəkilir',
    accent: 'kod yazılmadan çəkilir',
    lead: 'Sahibkar və menecerlər yazışma məntiqini vizual lövhədə özləri qurur: triggerlər, suallar, şərtlər, gözləmələr, AI addımları və insana ötürmə. Daxili simulyator ssenari yayımlanmazdan əvvəl nümunə mesajı onun üzərindən keçirir.',
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
        title: 'Bütün lazımi bloklar',
        text: 'Mətn və düymələr, media, siyahılar, WhatsApp şablonları, cavabı dəyişənə yazan suallar, if/else, A/B bölgülər, gözləmələr və iş saatına görə budaqlar.',
      },
      {
        title: 'Ssenarinin içində AI',
        text: 'AI addımı müştərinin nə istədiyini müəyyən edib budağı seçir, bilik bazasından cavab verir və ya yazışmanı köməkçidə saxlayır.',
      },
      {
        title: 'Digər alətlərlə bağlı',
        text: 'CRM əməliyyatları, operatora ötürmə, HTTP sorğuları, Google Sheets sətirləri, e-poçt və digər ssenarilər eyni lövhədə ayrı-ayrı bloklardır.',
      },
    ],
  },

  analytics: {
    id: 'analytics',
    km: 'B.e. 09:00',
    eyebrow: 'Analitika',
    title: 'Bazar ertəsi səhəri bütün həftə bir ekranda',
    accent: 'bir ekranda',
    lead: 'Sahibkar yazışmaların necə randevuya və pula çevrildiyini görür: müraciət hunisini, gəlirin dinamikasını, hansı kanalın hansı müştəriləri gətirdiyini, komandanın nə qədər tez cavab verdiyini və hər yazışmadan sonra müştərilərin nə dərəcədə razı qaldığını.',
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
        title: 'Mesajdan pula qədər',
        text: 'Huni hər müraciəti ilk mesajdan randevuya və ödənişə qədər izləyir.',
      },
      {
        title: 'Hər yazışmadan sonra məmnuniyyət',
        text: 'Yazışma bağlananda qısa qiymətləndirmə sorğusu gedir. Aşağı bal barədə menecerə bildiriş gedir, yazışma isə yenidən açılır.',
      },
      {
        title: 'Kanalların və mənbələrin müqayisəsi',
        text: 'Hansı kanalın, linkin, QR kodun və ya reklamın yazışma gətirdiyi və hər birinə nə qədər tez cavab verildiyi bir baxışda görünür.',
      },
    ],
  },

  engineering: {
    id: 'engineering',
    eyebrow: 'Mühəndislik və təhlükəsizlik',
    title: 'Kiçik biznes CRM-inin içində korporativ nəzarət',
    accent: 'korporativ nəzarət',
    lead: 'Cavably həm salon sahibini, həm də şirkətin İT komandasını qane etmək üçün qurulmuş multi-tenant SaaS-dır. Vahid giriş (SSO), dəyişdirilə bilməyən audit jurnalı, SLA siyasətləri və fərdi rollar elə mesaj pəncərəsinin yanındadır.',
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
    principlesTitle: 'Necə qurulub',
    principles: [
      {
        label: 'Ayrı iş sahələri',
        text: 'Bir platforma, çox biznes: hər şirkət öz ayrıca iş sahəsində işləyir, datası isə digərlərindən izolyasiya olunub.',
      },
      {
        label: 'Real vaxt',
        text: 'Yeni mesajlar, «yazır» və «artıq cavab yazır» siqnalları və kimin onlayn olduğu baş verdiyi anda hər operatorun ekranına çatır.',
      },
      {
        label: 'Mənbəyə əsaslanan AI',
        text: 'Hər biznesin öz mənbələri üzrə axtarış (RAG), biznesin özünün təyin etdiyi ötürmə həddi və aylıq AI istifadə limiti.',
      },
      {
        label: 'Təhlükəsizlik',
        text: 'Rollara əsaslanan icazələr, Google ilə giriş, SAML 2.0 və OIDC ilə vahid giriş, dəyişdirilə bilməyən audit jurnalı və şifrələnmiş şəkildə saxlanan kanal açarları.',
      },
      {
        label: 'Açıq platforma',
        text: 'Webhook-lar, məhdud icazəli açarlarla açıq API və Google Sheets kimi hazır konnektorlar.',
      },
      {
        label: 'Üç dil',
        text: 'İnterfeys və AI Azərbaycan, rus və ingilis dillərində işləyir; hər biznes öz dilini, saat qurşağını və iş saatlarını təyin edir.',
      },
    ],
    hub: {
      title: 'Qoşulan kanallar və sistemlər',
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
        title: 'Məhsul və UX',
        text: 'Cavably-ni salonun, klinikanın və kursun iş günü ətrafında qurduq: əvvəlcə mesaj pəncərəsi, randevu, ödəniş və sövdələşmələr isə yazışmadan bir klik aralıda.',
      },
      {
        title: 'AI mühəndisliyi',
        text: 'Hər biznesin bilik bazası üzrə axtarış, niyyətə görə yönləndirmə, səsli mesajların mətnə çevrilməsi və səsli cavablar, şəkil tanıma və etibarlılıq həddinə görə insana ötürmə.',
      },
      {
        title: 'Kanal inteqrasiyaları',
        text: 'WhatsApp, Instagram, Messenger, Telegram və sayta yerləşdirilən veb-çat — şablonlar, toplu mesajlar, abunədən çıxma və şərhi şəxsi mesaja çevirən qaydalarla.',
      },
      {
        title: 'Platforma mühəndisliyi',
        text: 'Mesaj pəncərəsi, randevular, ödənişlər, satış hunisi, kampaniyalar, ssenari konstruktoru və analitikanın eyni data modelindən istifadə etdiyi, real vaxt rejimində işləyən multi-tenant SaaS.',
      },
      {
        title: 'Korporativ təhlükəsizlik',
        text: 'SAML 2.0 və OIDC ilə vahid giriş, dəyişdirilə bilməyən audit jurnalı, SLA siyasətləri və detallı icazələri olan fərdi rollar.',
      },
      {
        title: 'İşə salma və istismar',
        text: 'Məhsulu və onun AI köməkçisini üç dilə uyğunlaşdırdıq, cavably.com ünvanında işə saldıq və öz platformamız kimi idarə edirik.',
      },
    ],
  },
  stack: {
    eyebrow: 'Texnologiyalar',
    title: 'Cavably hansı texnologiyalar üzərində işləyir',
    groups: [
      { label: 'Frontend', items: ['TypeScript', 'React', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'NestJS', 'WebSockets'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis'] },
      { label: 'AI', items: ['LLM API', 'RAG', 'Speech-to-text'] },
    ],
  },
  faq: {
    title: 'Cavably barədə ən çox verilən suallar',
    items: [
      {
        q: 'Cavably bu gün açıb baxa biləcəyimiz real məhsuldurmu?',
        a: 'Bəli. Cavably bizim öz platformamızdır və cavably.com ünvanında işləyir. AI köməkçidən və kanal inteqrasiyalarından korporativ nəzarət alətlərinə qədər hamısını biz layihələndirib qurmuşuq və özümüz idarə edirik.',
      },
      {
        q: 'AI cavab uydurmasın deyə nə edilib?',
        a: 'Köməkçi yalnız biznesin əlavə etdiyi mənbələrə — FAQ-lara, mətnlərə və sayt səhifələrinə əsaslanır. Cavab bu mənbələrdə əminliklə tapılmayanda və ya müştəri insanla danışmaq istəyəndə yazışma bütün tarixçə ilə operatora keçir. Bunun nə qədər tez baş verəcəyini biznes özü təyin edir.',
      },
      {
        q: 'Hansı kanal və sistemlərə qoşulur?',
        a: 'WhatsApp, Instagram, Messenger, Telegram və biznesin saytındakı veb-çat, üstəlik click-to-WhatsApp reklamları, Google Sheets, webhook-lar, açıq API, Google ilə giriş və SAML 2.0 və ya OIDC ilə vahid giriş.',
      },
      {
        q: 'Azərbaycan dilində işləyir?',
        a: 'Bəli. Azərbaycan dili əsas dildir; interfeys və AI köməkçi tam şəkildə rus və ingilis dillərində də işləyir.',
      },
      {
        q: 'Şirkətimiz üçün belə AI köməkçi və ya WhatsApp CRM hazırlayırsınız?',
        a: 'Bəli. Eyni hissələri digər bizneslər üçün də qururuq: yazışmanı insana ötürə bilən, bilik bazasına əsaslanan AI, səs və şəkil tanıma, WhatsApp və Instagram inteqrasiyaları, randevular, satış hunisi və kodsuz avtomatlaşdırma — mövcud sisteminizin içində və ya yeni məhsul kimi.',
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
  sampleDataNote: 'Ekranlardakı adlar və rəqəmlər nümunə kimi verilib.',
  mockupAriaLabel: 'Nümunə məlumatlarla Cavably ekranının təsviri',
};

export default az;
