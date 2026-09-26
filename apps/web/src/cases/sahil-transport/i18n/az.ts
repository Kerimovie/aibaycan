// Sahil Transport case study (/[locale]/projects/sahil-transport), AZ. Ported from Atlas
// `src/i18n/az/cases/sahil-transport.ts`, typed against the EN type source. Plates, names and figures are sample data.
import type { SahilTransportCopy } from './en';

const az: SahilTransportCopy = {
  seo: {
    title: 'Sahil Transport: avtopark monitorinqi, GPS yanacaq nəzarəti',
    description:
      'Bakı yük daşıma şirkəti üçün qurduğumuz proqram: avtopark monitorinqi, GPS yanacaq nəzarəti, CAN çəki sensorları, dayanmaların təsnifatı və gözləmə haqqı.',
  },
  h1: 'Yük daşıma şirkəti üçün proqram: avtopark monitorinqi və gözləmə haqqı',
  hero: {
    eyebrow: 'Logistika · Avtopark data platforması',
    title: 'GPS siqnalından hesab-faktura sətrinə',
    accent: 'hesab-faktura sətrinə',
    lead: 'Sahil Transport 180-ə yaxın maşını olan Bakı yük daşıma şirkətidir. Onun avtopark data platformasını biz qurduq: GPS, yanacaq və CAN çəki sensorlarının axınları bir yerdə birləşir, hər dayanmanın səbəbi müəyyən olunur, müştəri obyektlərində gözləmə vaxtı müqaviləyə əsasən qiymətləndirilir, sürücülərin qaimə şəkilləri isə AI ilə oxunur və reyslər, maliyyə qeydləri ilə tutuşdurulur.',
    primaryCta: 'Oxşar layihəni müzakirə edək',
  },
  facts: {
    platforms: 'Veb panel · Telegram botu · Excel hesabatları',
    languages: 'Azərbaycan dili',
  },

  console: {
    label:
      'Abşeron yarımadasının avtopark xəritəsi: maşınlar müştəri zonaları arasında hərəkət edir, biri zonada gözləyir, aşağıda isə bir maşının sürət, yanacaq və xalis çəki qrafikləri axır (nümunə məlumatlar)',
    title: 'Avtopark · Abşeron',
    realtime: 'Real vaxt',
    clock: '09:52',
    cities: {
      baku: 'Bakı',
      sumgayit: 'Sumqayıt',
      alat: 'Ələt',
      shamakhi: 'Şamaxı',
      siyazan: 'Siyəzən',
      hajigabul: 'Hacıqabul',
    },
    sea: 'Xəzər dənizi',
    legend: [
      { tone: 'moving', label: 'Hərəkətdə', value: '103' },
      { tone: 'waiting', label: 'Müştəri gözləməsi', value: '27' },
      { tone: 'operational', label: 'Əməliyyat dayanması', value: '37' },
      { tone: 'offline', label: 'Oflayn', value: '9' },
    ],
    truck: {
      plate: '10-XX-014',
      route: 'Bakı → Sumqayıt',
      status: 'Hərəkətdə',
      traces: [
        { tone: 'speed', label: 'Sürət', value: '62', unit: 'km/saat' },
        { tone: 'fuel', label: 'Yanacaq', value: '212', unit: 'L' },
        { tone: 'weight', label: 'Xalis çəki', value: '21,4', unit: 't' },
      ],
    },
  },

  challenge: {
    id: 'challenge',
    badge: 'Əvvəl',
    eyebrow: 'Problem',
    title: 'Hər maşın siqnal göndərir. Onları birləşdirən yoxdur.',
    accent: 'Onları birləşdirən yoxdur.',
    lead: 'Daşıyıcının bir günü minlərlə siqnal yaradır: bir neçə dəqiqədən bir mövqe, çəndəki yanacaq səviyyəsi, ox çəkiləri, kabinada çəkilmiş kağız qaimə şəkilləri. Sahil Transport-da bunlar bir-biri ilə əlaqəsi olmayan üç ayrı yerdə saxlanılırdı, pul isə məhz onların arasındakı boşluqlardan sızıb gedirdi.',
    scale: {
      value: '≈180',
      unit: 'maşın',
      text: 'Bütün avtopark üzrə GPS izləyiciləri, yanacaq çəni sensorları və CAN çəki sensorları ilə — hər biri bir neçə dəqiqədən bir məlumat ötürür.',
    },
    sourcesTitle: 'Məlumat harada saxlanılırdı',
    sources: [
      { name: 'Telematika portalı', detail: 'Mövqe, sürət, yanacaq, ox çəkisi', sample: '10-XX-027 · 0 km/saat · 148 L' },
      { name: 'Messencer qrupları', detail: 'Sürücülərin qaimə şəkilləri', sample: 'IMG_4417.jpg · IMG_4418.jpg' },
      { name: 'Maliyyə qeydləri', detail: 'Müştərilər, müqavilələr, ödənişlər', sample: 'FR-2291 · 412,00 ₼' },
    ],
    gap: 'Ortaq reys yoxdur. Ortaq həqiqət də yoxdur.',
    pains: [
      {
        title: 'Gözləmə vaxtı hesab-fakturaya düşmürdü',
        text: 'Maşınlar yükləmə məntəqələrində müqavilədəki pulsuz vaxtdan artıq növbədə dayanırdı, amma nə qədər gözlədiklərini heç kim göstərə bilmirdi.',
      },
      {
        title: 'Bütün dayanmalar eyni görünürdü',
        text: 'Xam GPS məlumatında müştəri obyektindəki növbə, yanacaq doldurma və tıxac eyni şeydir: sürət sıfırdır.',
      },
      {
        title: 'Qaimələr əl ilə yenidən yazılırdı',
        text: 'Sürücülər kağız qaimələrin şəklini çəkirdi, ofis isə onları gecikmə və səhvlərlə cədvələ köçürürdü.',
      },
      {
        title: 'Üç qeyd, üç fərqli həqiqət',
        text: 'Reyslər, qaimələr və maliyyə qeydləri nadir hallarda üst-üstə düşürdü, düzgününü tapmaq üçün isə sətir-sətir yoxlamaq lazım gəlirdi.',
      },
    ],
  },

  fleet: {
    id: 'fleet',
    badge: '06:00',
    eyebrow: 'Real vaxtda avtopark',
    title: 'Bütün avtopark bir ekranda',
    accent: 'bir ekranda',
    lead: 'Platforma hər maşının mövqeyini, sürətini, yanacağını və çəkisini Wialon-dan alır və dispetçer üçün aydın mənzərəyə çevirir: hansı maşın hərəkətdədir, hansı müştərinin yanında gözləyir, hansı öz işi üçün dayanıb və hansından siqnal gəlmir.',
    screen: {
      label:
        'Status göstəriciləri, sürət, yanacaq və xalis yükü göstərən maşın kartları, avtopark statusu diaqramı, mənbələr üzrə məlumatın təzəliyi və diqqət tələb edən maşınların siyahısı olan dispetçer paneli (nümunə məlumatlar)',
      title: 'Avtopark paneli · real vaxt',
      tiles: [
        { tone: 'moving', label: 'Hərəkətdə', value: '103' },
        { tone: 'waiting', label: 'Müştəri gözləməsi', value: '27' },
        { tone: 'operational', label: 'Əməliyyat dayanması', value: '37' },
        { tone: 'offline', label: 'Oflayn', value: '9' },
      ],
      cardLabels: { speed: 'Sürət', fuel: 'Yanacaq', load: 'Xalis yük' },
      cards: [
        {
          plate: '10-XX-014',
          driver: 'Sürücü A.',
          tone: 'moving',
          status: 'Hərəkətdə',
          place: 'Bakı → Sumqayıt yolu',
          speed: '62 km/saat',
          fuel: '212 L',
          load: '21,4 t',
        },
        {
          plate: '10-XX-027',
          driver: 'Sürücü B.',
          tone: 'waiting',
          status: 'Müştəri · 1:12',
          place: 'Demo Karxana zonası',
          speed: '0 km/saat',
          fuel: '148 L',
          load: '0,0 t',
        },
        {
          plate: '10-XX-041',
          driver: 'Sürücü E.',
          tone: 'moving',
          status: 'Hərəkətdə',
          place: 'Ələt → Bakı yolu, boş',
          speed: '74 km/saat',
          fuel: '188 L',
          load: '0,0 t',
        },
        {
          plate: '10-XX-033',
          driver: 'Sürücü C.',
          tone: 'operational',
          status: 'Əməliyyat',
          place: 'Ələt yolu, zonalardan kənarda',
          speed: '0 km/saat',
          fuel: '96 L',
          load: '18,7 t',
        },
        {
          plate: '10-XX-058',
          driver: 'Sürücü F.',
          tone: 'waiting',
          status: 'Müştəri · 0:34',
          place: 'Demo Terminal zonası',
          speed: '0 km/saat',
          fuel: '175 L',
          load: '24,3 t',
        },
        {
          plate: '10-XX-051',
          driver: 'Sürücü D.',
          tone: 'offline',
          status: 'Oflayn',
          place: 'Son dəfə Hacıqabul yaxınlığında',
          speed: '—',
          fuel: '—',
          load: '—',
        },
      ],
      ring: { title: 'Avtopark statusu', total: '176', unit: 'maşın' },
      freshness: {
        title: 'Məlumatın təzəliyi',
        items: [
          { source: 'GPS', value: '40 san əvvəl', tone: 'ok' },
          { source: 'Qaimələr', value: '3 dəq əvvəl', tone: 'ok' },
          { source: 'Maliyyə', value: 'bu gün 06:00', tone: 'warn' },
        ],
      },
      attention: {
        title: 'Diqqət tələb edir',
        items: [
          { plate: '10-XX-051', text: '34 dəqiqədir siqnal yoxdur', tone: 'bad' },
          { plate: '10-XX-062', text: 'Yanacaq 12%', tone: 'warn' },
          { plate: '10-XX-027', text: 'Pulsuz vaxt bitmək üzrədir', tone: 'warn' },
        ],
      },
    },
    features: [
      {
        title: 'Mənası olan dörd status',
        text: 'Hərəkətdə, müştəri gözləməsi, əməliyyat dayanması və oflayn — xəritədə, kartlarda, bildirişlərdə və hesabatlarda eyni rənglərlə.',
      },
      {
        title: 'Xam sensor göstəricisi deyil, xalis yük',
        text: 'Platforma hər maşının boş çəkisini öyrənir, buna görə CAN sensoru xam göstərici yerinə xalis yükü tonla göstərir.',
      },
      {
        title: 'Yanacaq litrlə, kilometrlə yanaşı',
        text: 'Çən sensorunun göstəriciləri qət edilən məsafə ilə yanaşı litr və faizlə saxlanılır — həm maşın kartında, həm də hər reys üzrə.',
      },
      {
        title: 'Nöqtələr yığını yox, diqqət siyahısı',
        text: 'Siqnalı kəsilən, yanacağı azalan və ya pulsuz vaxtı bitmək üzrə olan maşınlar siyahının yuxarısına çıxır.',
      },
      {
        title: 'Məlumatın təzəliyi göz önündə',
        text: 'Hər məlumat mənbəyi son dəfə nə vaxt sinxronlaşdığını göstərir, buna görə susan məlumat axını dayanmış maşınla qarışdırılmır.',
      },
      {
        title: 'Dispetçer üçün hazırlanmış xəritə',
        text: 'Status süzgəcləri, nömrə üzrə axtarış və hər maşının son marşrutunu, sürücüsünü və sensor göstəricilərini açan ətraflı görünüş.',
      },
    ],
  },

  stops: {
    id: 'stops',
    badge: '09:40',
    eyebrow: 'Dayanmaların təsnifatı',
    title: 'Sıfır sürət hələ cavab deyil',
    accent: 'hələ cavab deyil',
    lead: 'Dayanmış maşın müştərinin darvazası önündə növbədə ola, yanacaq doldura və ya tıxacda qala bilər — bunlardan yalnız birincisinə görə müştəriyə hesab kəsmək olar. Platforma hər dayanmanı dörd yoxlamadan keçirir və onun səbəbini müəyyən edir.',
    timeline: {
      title: '10-XX-027 · nümunə gün',
      weight: 'Xalis çəki',
      weightMax: '24,1 t',
      state: 'Status',
      hours: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
      legend: { drive: 'Hərəkət', waiting: 'Müştəri gözləməsi', operational: 'Əməliyyat dayanması' },
    },
    checksTitle: 'Hər dayanma üçün dörd yoxlama',
    checks: [
      { name: 'Zona', question: 'Maşın müştərinin geozonasının içindədirmi?', outcome: 'Xeyr → əməliyyat dayanması' },
      { name: 'Reys', question: 'Həmin müştəri bu maşının reysindədirmi?', outcome: 'Xeyr → əməliyyat dayanması' },
      { name: 'Yük', question: 'Çəki sensoru artdı, yoxsa azaldı?', outcome: 'Artdı → yükləmə · azaldı → boşaltma' },
      { name: 'Müqavilə', question: 'Müqavilə nə qədər pulsuz vaxt verir?', outcome: 'Ondan artıq → ödənişli gözləmə' },
    ],
    logTitle: 'Gün necə təsnif olundu',
    logLabels: { zone: 'Zona', trip: 'Reys', load: 'Yük' },
    log: [
      {
        from: '07:05',
        to: '07:25',
        duration: '20 dəq',
        zone: 'Müştəri zonası yoxdur',
        trip: '—',
        load: 'Yanacaq artdı',
        tone: 'operational',
        result: 'Əməliyyat dayanması',
        reason: 'Yanacaq doldurma',
      },
      {
        from: '09:40',
        to: '12:05',
        duration: '2 saat 25 dəq',
        zone: 'Demo Karxana',
        trip: 'Bu reysin müştərisi',
        load: '0,0 → 24,1 t',
        tone: 'waiting',
        result: 'Müştəri gözləməsi',
        reason: 'Yükləmə · pulsuz vaxtdan 25 dəq artıq',
      },
      {
        from: '12:40',
        to: '12:55',
        duration: '15 dəq',
        zone: 'Demo Zavod B',
        trip: 'Başqa müştəri',
        load: 'Dəyişmədi',
        tone: 'operational',
        result: 'Əməliyyat dayanması',
        reason: 'Bu reysin müştərisi deyil',
      },
      {
        from: '13:20',
        to: '13:50',
        duration: '30 dəq',
        zone: 'Müştəri zonası yoxdur',
        trip: '—',
        load: 'Dəyişmədi',
        tone: 'operational',
        result: 'Əməliyyat dayanması',
        reason: 'Sürücünün istirahəti',
      },
      {
        from: '14:10',
        to: '15:55',
        duration: '1 saat 45 dəq',
        zone: 'Demo Terminal',
        trip: 'Bu reysin müştərisi',
        load: '24,1 → 0,0 t',
        tone: 'waiting',
        result: 'Müştəri gözləməsi',
        reason: 'Boşaltma · pulsuz vaxt daxilində',
      },
    ],
    note: 'Bir neçə dəqiqəlik dayanmalar GPS «küyü» sayılır, zona sərhədində girib-çıxan maşının mövqeyi isə təsnifatdan əvvəl hamarlanır.',
  },

  waiting: {
    id: 'waiting',
    badge: '11:40',
    eyebrow: 'Gözləmə haqqının hesablanması',
    title: 'Gözləmə vaxtı ödənişli sətrə çevrilir',
    accent: 'ödənişli sətrə',
    lead: 'Hər müştəri müqaviləsində yükləmə və boşaltma üçün öz pulsuz vaxtı və öz saatlıq tarifi var. Maşın bundan artıq gözləyəndə platforma artıq vaxtı sayır, haqqı həmin müqavilə üzrə hesablayır və sübutları ilə birlikdə reysə əlavə edir.',
    clock: {
      inZone: 'zonada',
      elapsed: '2:25',
      free: 'Pulsuz vaxt',
      freeValue: '2:00',
      excess: 'Artıq vaxt',
      excessValue: '0:25',
      hours: ['0 saat', '1 saat', '2 saat', '3 saat'],
    },
    eventsTitle: 'Reys T-0412 · Demo Karxana',
    events: [
      { time: '09:40', tone: 'info', text: 'Demo Karxana zonasına boş daxil oldu' },
      { time: '11:16', tone: 'warn', text: 'Pulsuz vaxt bitmək üzrədir: dispetçer xəbərdar edilir' },
      { time: '11:40', tone: 'bad', text: 'Pulsuz vaxt bitdi: haqq hesablanmağa başlayır' },
      { time: '11:50', tone: 'ok', text: 'Yükləndi: xalis 24,1 t' },
      { time: '12:05', tone: 'info', text: 'Zonadan çıxdı: haqq yekunlaşdırılır' },
    ],
    receipt: {
      title: 'Gözləmə haqqı',
      code: 'Reys T-0412',
      rows: [
        { label: 'Müştəri', value: 'Demo Karxana' },
        { label: 'Əməliyyat', value: 'Yükləmə' },
        { label: 'Zonada', value: '09:40 – 12:05' },
        { label: 'Pulsuz vaxt, müqaviləyə görə', value: '2 saat 00 dəq' },
        { label: 'Ödənişli artıq vaxt', value: '0 saat 25 dəq' },
      ],
      totalLabel: 'Reysə əlavə olunan haqq',
      total: '35,00 ₼',
      evidence: 'Saxlanılan sübutlar: zonaya giriş və çıxış, çəki dəyişikliyi, GPS izi',
    },
    features: [
      {
        title: 'Yükləmə və boşaltma üçün ayrı limitlər',
        text: 'Hər müqavilədə hər iki əməliyyat üçün ayrıca pulsuz vaxt var, buna görə eyni gözləmə bir müştəridə pulsuz, digərində ödənişli ola bilər.',
      },
      {
        title: 'Maşın hələ darvaza önündə ikən xəbərdarlıq',
        text: 'Pulsuz vaxt bitməyə yaxınlaşanda dispetçer xəbərdarlıq, vaxt aşılanda isə kritik bildiriş alır.',
      },
      {
        title: 'Sübutu ilə birlikdə haqq',
        text: 'Gəliş, gediş, zona və çəki dəyişikliyi hər haqla birlikdə saxlanılır, buna görə mübahisə doğuran sətir öz sübutları ilə gəlir.',
      },
    ],
  },

  invoices: {
    id: 'invoices',
    badge: '14:30',
    eyebrow: 'AI ilə qaimə oxuma',
    title: 'Kabinadan gələn şəkil yoxlanılmış qeydə çevrilir',
    accent: 'yoxlanılmış qeydə',
    lead: 'Sürücülər kağız qaimələrin şəklini çəkib Telegram qrupuna göndərir. Platforma şəkli düzəldir, AI hər sahəni etibarlılıq dərəcəsi ilə oxuyur, biznes yoxlamaları isə təkcə oxumaqla tutulmayan səhvləri aşkarlayır. AI əmin olmayanda qərarı insan verir.',
    scene: {
      label:
        'Sürücü qaimə şəklini Telegram qrupuna göndərir; şəkil skan olunur, hər sahə etibarlılıq dərəcəsinə görə işarələnir, aydın olmayan tarix yoxlama növbəsinə düşür və operator onu təsdiqləyir (nümunə məlumatlar)',
      chat: {
        group: 'Qaimələr · sürücülər',
        members: 'bot, sürücülər, ofis',
        driver: 'Sürücü B.',
        photo: 'qaime_0417.jpg',
        received: 'Qəbul olundu. Oxunur…',
        review: 'Tarixə baxmaq lazımdır. Ofisə göndərildi.',
        recorded: 'Qeydə alındı: 10-XX-027 · Demo Karxana → Demo Terminal · 24,1 t',
      },
      document: {
        title: 'Qaimə № 0417',
        sender: '«Demo Karxana» MMC',
        stamp: 'Qəbul edildi',
      },
      fields: [
        { key: 'plate', label: 'Maşın', value: '10-XX-027', confidence: 'high' },
        { key: 'date', label: 'Tarix', value: '14.09', confidence: 'low' },
        { key: 'from', label: 'Haradan', value: 'Demo Karxana', confidence: 'high' },
        { key: 'to', label: 'Haraya', value: 'Demo Terminal', confidence: 'high' },
        { key: 'cargo', label: 'Yük', value: 'Qırma daş', confidence: 'high' },
        { key: 'weight', label: 'Xalis çəki', value: '24,1 t', confidence: 'medium' },
        { key: 'amount', label: 'Məbləğ', value: '412,00 ₼', confidence: 'high' },
      ],
      extractedTitle: 'AI oxudu',
      confidence: { high: 'Əmin', medium: 'Yoxlanıldı', low: 'Şübhəli' },
      lane: {
        title: 'Yoxlama növbəsi',
        field: 'Tarix',
        options: '14.09, yoxsa 11.09?',
        decision: '14.09',
        approve: 'Təsdiqlə',
        done: 'Ofis təsdiqlədi',
      },
    },
    pipelineTitle: 'Hər şəkillə nə baş verir',
    pipeline: [
      {
        title: 'Şəkil daxil olur',
        text: 'Telegram botu sürücü qruplarından şəkilləri qəbul edir və dərhal cavab verir ki, sürücü şəklin çatdığını bilsin.',
      },
      {
        title: 'Şəkil təmizlənir',
        text: 'Oxunmazdan əvvəl şəkil fırladılır, ölçüsü dəyişdirilir və kəskinləşdirilir, çünki kabinada çəkilən şəkillər nadir hallarda düz və aydın olur.',
      },
      {
        title: 'AI sahələri oxuyur',
        text: 'Maşın, tarix, marşrut, müştəri, çəki və məbləğ strukturlaşdırılmış məlumat kimi qayıdır — hər biri öz etibarlılıq dərəcəsi ilə, hətta bir səhifədə Azərbaycan, rus və ingilis dilləri qarışıq olsa belə.',
      },
      {
        title: 'Biznes yoxlamaları işə düşür',
        text: 'Heç nə saxlanılmazdan əvvəl nömrə formatı, tarixin düzgünlüyü, müştərinin sistemdə olması və cəmin düz gəlməsi yoxlanılır.',
      },
      {
        title: 'Qeydə alınır və ya yoxlamaya gedir',
        text: 'Əmin oxunuşlar qeydə alınır. Şübhəli olanları ikinci AI modeli yenidən oxuyur, hələ də aydın olmayanlar isə yoxlama növbəsində insanı gözləyir.',
      },
    ],
    note: 'Hər oxunuş AI-nin xam cavabını, etibarlılıq dərəcəsini və cavabı verən modeli saxlayır, buna görə istənilən qeydi öz şəklinə qədər izləmək olur.',
  },

  reconcile: {
    id: 'reconcile',
    badge: '23:00',
    eyebrow: 'Üçtərəfli tutuşdurma',
    title: 'Reys, qaimə və maliyyə qeydi üst-üstə düşməlidir',
    accent: 'üst-üstə düşməlidir',
    lead: 'Hər gecə platforma günü xam məlumatdan yenidən qurur: GPS-dən reysləri, dayanmaları və gözləmə haqlarını çıxarır, sonra hər reysi onun qaiməsi və maliyyə qeydi ilə üçtərəfli tutuşdurur. Uyğun gələnlər tutuşdurulmuş kimi işarələnir. Uyğun gəlməyənlər isə hansı sahənin fərqləndiyini göstərən növbəyə düşür.',
    board: {
      label:
        'GPS-dən gələn reys, AI-nin oxuduğu qaimə və maliyyə qeydi bir-birinə yaxınlaşır və sahə-sahə tutuşdurulur, ardınca təsdiq və ya rədd üçün üç uyğunsuzluqdan ibarət növbə görünür (nümunə məlumatlar)',
      columns: [
        { title: 'Reys', source: 'GPS-dən', code: 'T-0412' },
        { title: 'Qaimə', source: 'AI oxudu', code: '№ 0417' },
        { title: 'Maliyyə qeydi', source: 'mühasibatdan', code: 'FR-2291' },
      ],
      rows: [
        { label: 'Maşın', values: ['10-XX-027', '10-XX-027', '—'] },
        { label: 'Tarix', values: ['14.09', '14.09', '14.09'] },
        { label: 'Marşrut', values: ['Demo Karxana → Terminal', 'Demo Karxana → Terminal', '—'] },
        { label: 'Xalis çəki', values: ['24,1 t', '24,1 t', '—'] },
        { label: 'Məbləğ', values: ['—', '412,00 ₼', '412,00 ₼'] },
      ],
      stamp: 'Tutuşduruldu',
      queue: {
        title: 'Uyğunsuzluqlar',
        count: '3',
        selectAll: 'Hamısını seç',
        approve: 'Təsdiqlə',
        reject: 'Rədd et',
        rows: [
          { trip: 'T-0415', plate: '10-XX-033', reason: 'Məbləğ', detail: 'Qaimədə 380,00 ₼, maliyyədə 308,00 ₼' },
          { trip: 'T-0419', plate: '10-XX-051', reason: 'Qaimə yoxdur', detail: 'Reys var, şəkil hələ gəlməyib' },
          { trip: 'T-0422', plate: '10-XX-014', reason: 'Maşın', detail: 'Qaimədə 10-XX-041 yazılıb' },
        ],
      },
    },
    features: [
      {
        title: 'Sahə-sahə tutuşdurma',
        text: 'Maşın, tarix, marşrut, çəki və məbləğ bir-bir müqayisə olunur, buna görə uyğunsuzluq sadəcə qırmızı sətir kimi deyil, səbəbi ilə birlikdə gəlir.',
      },
      {
        title: 'Toplu qərarlar',
        text: 'Mühasiblər uyğunsuzluqları toplu şəkildə təsdiqləyir və ya rədd edir, hər qərar isə qeyddə qalır.',
      },
      {
        title: 'Yamanmır, yenidən qurulur',
        text: 'Eyni gecəni təkrar emal etmək eyni nəticəni verir, qayda dəyişəndə isə tarixçə xam məlumatdan yenidən qurulur.',
      },
    ],
  },

  reports: {
    id: 'reports',
    badge: '08:00',
    eyebrow: 'Hesabatlar və bot',
    title: 'Səhər hesabatı artıq hazırdır',
    accent: 'artıq hazırdır',
    lead: 'Rəhbərlik rəqəmləri heç kimdən hazırlamağı xahiş etmədən alır. Platforma dispetçerlərin gördüyü eyni məlumatdan on vərəqli Excel faylı və qrafiklər yaradır, Telegram botu isə sürücüləri və ofisi prosesdən xəbərdar saxlayır.',
    workbook: {
      label:
        'On vərəqli Excel hesabatı: icmal cədvəli, günlər üzrə müştəri gözləməsi və əməliyyat dayanmaları qrafiki, maşınlar üzrə yanacaq və məsafə qrafiki növbə ilə göstərilir (nümunə məlumatlar)',
      file: 'avtopark-hesabati-14-09.xlsx',
      tabs: [
        'İcmal',
        'Problemlər',
        'Reyslər',
        'GPS analizi',
        'Müştərilər',
        'Sürücülər',
        'Tutuşdurma',
        'AI oxuma',
        'Dayanma analizi',
        'Müqavilələr',
      ],
      summary: {
        head: ['Göstərici', 'Həftə'],
        rows: [
          { label: 'Reyslər', value: '212' },
          { label: 'Məsafə', value: '41 300 km' },
          { label: 'Sərf olunan yanacaq', value: '18 940 L' },
          { label: 'Müştəri gözləməsi', value: '61 saat' },
          { label: 'Əməliyyat dayanmaları', value: '148' },
          { label: 'AI ilə oxunan qaimələr', value: '209' },
        ],
      },
      // Vərəqin başlıq sətri; sətirlərin özü komponentdəki nümunə məlumatlardır.
      sheet: { head: ['Nömrə', 'Km', 'Gözləmə, saat', 'Haqq, ₼'] },
      stops: { title: 'Müştəri gözləməsi və əməliyyat dayanmaları, saat', days: ['B.e.', 'Ç.a.', 'Ç.', 'C.a.', 'C.', 'Ş.'] },
      fuel: { title: 'Maşınlar üzrə yanacaq və məsafə', x: 'km', y: 'L' },
    },
    tabsTitle: 'Hesabat hansı suallara cavab verir',
    tabNotes: [
      { label: 'İcmal', text: 'Dövr üzrə reyslər, məsafə, yanacaq, gözləmə vaxtı və haqlar bir vərəqdə.' },
      { label: 'Problemlər', text: 'Pulsuz vaxtdan artıq müştəri gözləmələri və boş qayıdışlar, süzgəcdən keçirməyə hazır.' },
      { label: 'Dayanma analizi', text: 'Hər dayanma səbəbi, zonası, müddəti və haqqı ilə.' },
      { label: 'GPS analizi', text: 'Hər maşın üzrə yanacağın məsafəyə nisbəti və sürət göstəriciləri.' },
      { label: 'Müştərilər, sürücülər', text: 'Eyni rəqəmlər müştəri və sürücü kəsimində.' },
      { label: 'Tutuşdurma', text: 'Nə uyğun gəldi, nə gəlmədi və hansı qaimələrə insan baxmalı oldu.' },
    ],
    chartsTitle: 'Rəhbərlik üçün qrafiklər',
    charts: ['Dayanmaların təsnifat bölgüsü', 'Yanacaq və gözləmə analizi', 'Aylıq dinamika', 'Optimallaşdırma potensialı'],
    bot: {
      title: 'Telegram botu',
      text: 'Sürücülər qaimə şəkillərini onsuz da yazışdıqları yerə göndərir. Bot nəticə ilə cavab verir, ofis isə yoxlama tələb edən hər qaimənin keçidini alır.',
    },
  },

  engineering: {
    id: 'engineering',
    eyebrow: 'Necə qurulub',
    title: 'Hər rəqəmin arxasında sübut var',
    accent: 'sübut var',
    lead: 'Müştəriyə hesab kəsən platforma hər rəqəmini əsaslandırmalıdır. Biz onu elə layihələndirdik ki, hər haqq, dayanma və tutuşdurma GPS mesajına, şəklə və ya maliyyə qeydinə qədər izlənsin və qaydalar dəyişəndə yenidən qurulsun.',
    flow: {
      sourcesTitle: 'Mənbələr',
      coreTitle: 'Platforma',
      outputsTitle: 'Nəticələr',
      sources: [
        'Wialon GPS',
        'Yanacaq çəni sensorları',
        'CAN çəki sensorları',
        'Telegram ilə qaimə şəkilləri',
        'Müştəri müqavilələrinin şərtləri',
        'Maliyyə qeydləri',
      ],
      core: [
        'Qəbul və normallaşdırma',
        'Dayanmaların təsnifatı',
        'Gözləmə haqqının hesablanması',
        'AI ilə qaimə oxuma',
        'Üçtərəfli tutuşdurma',
      ],
      outputs: [
        'Real vaxt paneli və xəritə',
        'Dispetçerlər üçün bildirişlər',
        'Reyslərdə gözləmə haqları',
        'Tutuşdurulmuş qeydlər',
        'Excel hesabatı və qrafiklər',
        'Sürücülərə bot cavabları',
      ],
    },
    principles: [
      {
        title: 'Xam məlumat heç vaxt dəyişdirilmir',
        text: 'GPS mesajları gəldiyi kimi saxlanılır. Reyslər, dayanmalar və haqlar onlardan hesablanır, buna görə yeni qayda tarixçəni yamamır, yenidən qurur.',
      },
      {
        title: 'Eyni giriş, eyni nəticə',
        text: 'Gecə emalı idempotentdir: eyni günü iki dəfə emal etmək heç vaxt reysi, haqqı və ya tutuşdurmanı təkrarlamır.',
      },
      {
        title: 'Real vaxt və ehtiyat yol',
        text: 'Panellər dəyişiklikləri baş verdiyi anda alır, birbaşa bağlantı kəsiləndə isə dövri sorğuya keçir.',
      },
      {
        title: 'Öz məlumatı ilə işləyir',
        text: 'Tətbiq öz verilənlər bazasından oxuyur, xarici məlumat axını yavaşlayanda və ya əlçatmaz olanda isə «circuit breaker» mexanizmi onu işlək saxlayır.',
      },
      {
        title: 'Uzun çəkən işlər növbədə',
        text: 'AI oxuması təkrar cəhdlərlə fon proseslərində işləyir, buna görə birdən gələn çoxlu şəkil də paneli yavaşlatmır.',
      },
      {
        title: 'Rola görə giriş',
        text: 'Dispetçerlər, mühasiblər, operatorlar və rəhbərlik üçün rollara əsaslanan giriş: hər kəs işi üçün lazım olan ekranları görür.',
      },
    ],
  },

  erp: {
    id: 'erp',
    eyebrow: 'Növbəti addım',
    title: 'Yol Aibaycan Logistics ERP ilə davam edir',
    accent: 'Aibaycan Logistics ERP',
    lead: 'Avtopark data platforması hər maşının harada olduğunu və vaxtının nəyə dəydiyini göstərir. Sahil Transport ilə əməkdaşlığımız Aibaycan Logistics ERP ilə davam edir — daşıyıcı şirkətin işini ilk sifarişdən pulun hesaba düşməsinə qədər idarə edən logistika ERP-miz.',
    from: {
      label: 'Sahil Transport üçün qurulub',
      title: 'Avtopark data platforması',
      items: [
        'GPS, yanacaq və çəki bir yerdə',
        'Dayanmaların təsnifatı',
        'Gözləmə haqqının hesablanması',
        'AI ilə qaimə oxuma',
        'Üçtərəfli tutuşdurma',
        'Excel hesabatları və Telegram botu',
      ],
    },
    to: {
      label: 'Məhsulumuz',
      title: 'Aibaycan Logistics ERP',
      items: [
        'Sifarişlər və dispetçerlik',
        'Sürücü tətbiqi',
        'CMR və təhvil aktları',
        'E-qaimə',
        'Debitor borcları və bank tutuşdurması',
        'Təsdiq zəncirləri',
      ],
    },
    cta: 'Aibaycan Logistics ERP haqqında danışaq',
  },

  role: {
    eyebrow: 'Rolumuz',
    title: 'Aibaycan nə etdi',
    items: [
      {
        title: 'Haqq hesablama məntiqi',
        text: 'Daşıyıcının gözləmə vaxtına görə necə haqq aldığını proqramın tətbiq edə biləcəyi qaydalara çevirdik: müştəri zonaları, reyslər, yük dəyişiklikləri və müqavilədəki pulsuz vaxt.',
      },
      {
        title: 'Telematika inteqrasiyası',
        text: '180-ə yaxın maşın üçün Wialon GPS-i yanacaq çəni sensorları və CAN çəki sensorları ilə birləşdirdik; xalis yük üçün hər maşının boş çəkisi öyrənilir.',
      },
      {
        title: 'Platforma mühəndisliyi',
        text: 'Real vaxt paneli, dayanmaların təsnifatı, gözləmə haqqının hesablanması, gecə emalı və üçtərəfli tutuşdurma.',
      },
      {
        title: 'AI ilə avtomatlaşdırma',
        text: 'Telegram botu vasitəsilə qaimə şəkillərinin qəbulu, sahələrin etibarlılıq dərəcəsi ilə AI tərəfindən oxunması, biznes yoxlamaları və insan yoxlaması üçün növbə.',
      },
      {
        title: 'Hesabatlar və dizayn',
        text: 'Telefonlara uyğunlaşan, Azərbaycan dilində tünd əməliyyat interfeysi, rəhbərlik üçün isə Excel hesabatı və qrafiklər.',
      },
    ],
  },
  stack: {
    eyebrow: 'Texnologiyalar',
    title: 'Məlumat axınları üçün seçilmiş texnologiyalar',
    groups: [
      { label: 'İnterfeys', items: ['TypeScript', 'React', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'Fastify', 'WebSockets'] },
      { label: 'Məlumat və fon işləri', items: ['PostgreSQL', 'Redis', 'İş növbələri'] },
      { label: 'AI və inteqrasiyalar', items: ['Vision LLM', 'Wialon', 'Telegram', 'Excel'] },
    ],
  },
  faq: {
    title: 'Daşıyıcıların bu platforma haqqında verdiyi suallar',
    items: [
      {
        q: 'Platforma müştəri gözləməsini adi dayanmadan necə ayırır?',
        a: 'Hər dayanma üçün dörd yoxlama ilə: maşın müştərinin zonasındadırmı, həmin müştəri bu reysdədirmi, çəki sensoru yükləmə və ya boşaltma göstəribmi və müqavilə nə qədər pulsuz vaxt verir. Yalnız dörd yoxlamanın hamısından keçən dayanma ödənişli gözləmə vaxtı sayılır.',
      },
      {
        q: 'Hansı telematika və sensorlarla işləyir?',
        a: 'Platforma yanacaq çəni sensorları və CAN çəki sensorları ilə Wialon GPS üzərində qurulub. API-si olan digər telematika platformaları da eyni qaydada qoşulur: mövqelər, geozonalar və sensor göstəriciləri sistemə daxil olur və reyslərə bağlanır.',
      },
      {
        q: 'AI qaiməni oxuya bilməyəndə nə baş verir?',
        a: 'Heç nə təxmin edilmir. Hər sahənin öz etibarlılıq dərəcəsi var. Şübhəli oxunuşu ikinci AI modeli yenidən oxuyur, hələ də aydın deyilsə, qaimə şübhəli sahəsi işarələnmiş halda yoxlama növbəsində insanın təsdiqini gözləyir.',
      },
      {
        q: 'Gözləmə haqqını hesablamaq üçün mövcud sistemlərimizi dəyişmək lazımdırmı?',
        a: 'Xeyr. Belə platforma telematika və mühasibat sistemlərinizin yanında işləyir: onlardan məlumat oxuyur, məlumatın öz nüsxəsini saxlayır və üzərinə təsnifat, haqlar, tutuşdurma və hesabatlar əlavə edir.',
      },
      {
        q: 'Sahil Transport ilə iş davam edirmi?',
        a: 'Bəli. Əməkdaşlıq Aibaycan Logistics ERP ilə davam edir — daşımanı sifarişdən pulun hesaba düşməsinə qədər aparan logistika ERP-miz.',
      },
    ],
  },
  railLabels: {
    challenge: 'Problem',
    fleet: 'Avtopark',
    stops: 'Dayanmalar',
    waiting: 'Gözləmə haqqı',
    invoices: 'AI ilə qaimələr',
    reconcile: 'Tutuşdurma',
    reports: 'Hesabatlar',
    engineering: 'Mühəndislik',
    erp: 'Növbəti addım',
  },
  sampleDataNote: 'Ekranlardakı adlar, nömrələr və rəqəmlər nümunə məlumatlardır.',
  mockupAriaLabel: 'Nümunə məlumatlarla məhsul ekranının təsviri',
};

export default az;
