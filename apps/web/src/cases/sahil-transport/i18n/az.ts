// Sahil Transport case study (/[locale]/projects/sahil-transport), AZ. Structure ported from Atlas
// `src/i18n/az/cases/sahil-transport.ts`; prose rewritten for Aibaycan, typed against the EN type source. Plates, names and figures are sample data.
import type { SahilTransportCopy } from './en';

const az: SahilTransportCopy = {
  seo: {
    title: 'Sahil Transport: GPS ilə avtopark və yanacaq nəzarəti',
    description:
      'Aibaycan Bakıdakı yük daşıyıcısı üçün telematika qurdu: yanacaq və CAN çəki sensorları, dayanma səbəbləri, müqaviləyə görə gözləmə haqqı, AI ilə qaimə oxuma.',
  },
  h1: 'Yük daşıyıcısı üçün telematika və gözləmə haqqı platforması',
  hero: {
    eyebrow: 'Logistika · Telematika və hesablaşma',
    title: 'GPS siqnalı hesab-fakturaya çevrilir',
    accent: 'hesab-fakturaya çevrilir',
    lead: 'Sahil Transport Bakıda fəaliyyət göstərən, təxminən 180 yük maşını olan daşıma şirkətidir. Onlar üçün qurduğumuz platforma GPS, yanacaq və CAN çəki göstəricilərini vahid axına yığır, hər maşının niyə dayandığını izah edir, müştəri obyektində keçən gözləmə vaxtını müqavilədəki tariflə hesablayır, sürücülərin göndərdiyi qaimə şəkillərini isə AI ilə oxuyub reyslər və maliyyə uçotu ilə yoxlayır.',
    primaryCta: 'Bənzər layihə barədə danışaq',
  },
  facts: {
    platforms: 'Veb panel · Telegram botu · Excel hesabatları',
    languages: 'Azərbaycan dili',
  },

  console: {
    label:
      'Abşeron yarımadası xəritəsində avtopark: maşınlar müştəri zonaları arasında gedir, biri zonanın içində gözləyir; ekranın aşağısında seçilmiş maşının sürəti, yanacağı və xalis çəkisi canlı xətlərlə sürüşür (nümunə məlumatlar)',
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
    eyebrow: 'Başlanğıc nöqtəsi',
    title: 'Siqnal çoxdur. Ümumi mənzərə yoxdur.',
    accent: 'Ümumi mənzərə yoxdur.',
    lead: 'Yolda olan yük maşınları gün ərzində minlərlə məlumat nöqtəsi yaradır: hər bir neçə dəqiqədən mövqe, çəndəki yanacaq, oxlara düşən yük, kabinada çəkilmiş kağız qaimə fotoları. Sahil Transport bunların hamısını bir-birinə bağlı olmayan üç ayrı mənbədə saxlayırdı və gəlir məhz bu mənbələrin qovuşmadığı yerlərdə itirdi.',
    scale: {
      value: '≈180',
      unit: 'maşın',
      text: 'avtoparkın hamısında: hər maşında GPS izləyicisi, çən yanacaq sensoru və CAN çəki sensoru var, göstəricilər bir neçə dəqiqədən bir ötürülür.',
    },
    sourcesTitle: 'Bir-birindən xəbərsiz üç mənbə',
    sources: [
      { name: 'Telematika portalı', detail: 'Mövqe, sürət, yanacaq, ox çəkisi', sample: '10-XX-027 · 0 km/saat · 148 L' },
      { name: 'Messencer qrupları', detail: 'Sürücülərin qaimə şəkilləri', sample: 'IMG_4417.jpg · IMG_4418.jpg' },
      { name: 'Maliyyə qeydləri', detail: 'Müştərilər, müqavilələr, ödənişlər', sample: 'FR-2291 · 412,00 ₼' },
    ],
    gap: 'Onları eyni reysə bağlayan heç nə yox idi.',
    pains: [
      {
        title: 'Darvaza önündə itən vaxt',
        text: 'Müqavilə müştəriyə pulsuz yükləmə vaxtı verirdi, maşınlar isə növbədə ondan xeyli artıq qalırdı. Bunun nə qədər çəkdiyi heç yerdə qeyd olunmurdu.',
      },
      {
        title: 'Dayanma sadəcə dayanma idi',
        text: 'Maşın müştəri növbəsində, yanacaqdoldurma məntəqəsində və ya tıxacda olsa da, xam GPS eyni şeyi göstərir: sürət sıfır.',
      },
      {
        title: 'Qaimələr iki dəfə yazılırdı',
        text: 'Kağız qaimələr ofisə foto kimi çatır, sonra gecikmə və səhvlərlə cədvələ yenidən daxil edilirdi.',
      },
      {
        title: 'Hər reysin üç versiyası',
        text: 'Reys qeydləri, qaimələr və maliyyə uçotu çox vaxt bir-birini təsdiqləmirdi; hansının doğru olduğunu anlamaq üçün hər sətri ayrıca yoxlamaq gərək idi.',
      },
    ],
  },

  fleet: {
    id: 'fleet',
    badge: '06:00',
    eyebrow: 'Canlı avtopark görünüşü',
    title: 'Bütün maşınlar vahid ekranda',
    accent: 'vahid ekranda',
    lead: 'Hər maşının mövqeyi, sürəti, yanacaq səviyyəsi və çəkisi Wialon-dan gəlir. Platforma bu axını dispetçerin həqiqətən bilməli olduğu suallara cavaba çevirir: kim yoldadır, kim müştərinin yanında ləngiyir, kim öz səbəbi ilə dayanıb, kimdən isə məlumat gəlmir.',
    screen: {
      label:
        'Dispetçer paneli: status sayğacları, sürət, yanacaq və xalis yük göstərən maşın kartları, avtopark statusunun dairəvi diaqramı, hər mənbənin son sinxronizasiya vaxtı və diqqət tələb edən maşınlar siyahısı (nümunə məlumatlar)',
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
        title: 'Dörd status, vahid rəng kodu',
        text: 'Hərəkətdə, müştəri gözləməsi, əməliyyat dayanması və oflayn statusları xəritədə, maşın kartlarında, bildirişlərdə və istənilən hesabatda eyni cür görünür.',
      },
      {
        title: 'Yük tonla',
        text: 'Platforma hər maşının boş çəkisini öyrənir; nəticədə CAN sensorunun verdiyi emal olunmamış rəqəm yox, tonla xalis yük göstərilir.',
      },
      {
        title: 'Litr kilometrin yanında',
        text: 'Çən sensorundan gələn yanacaq qət olunan məsafənin yanında litr və faizlə qeyd olunur; bunu maşın kartında da, ayrı-ayrı reyslər üzrə də görmək olar.',
      },
      {
        title: 'Əvvəlcə problemlər',
        text: 'Nöqtələrlə dolu xəritə əvəzinə siqnalı itən, yanacağı azalan və ya pulsuz vaxtı tükənmək üzrə olan maşınlar siyahının başına keçir.',
      },
      {
        title: 'Sinxronizasiya vaxtı görünür',
        text: 'Hər mənbə son sinxronizasiyasını göstərir ki, məlumat göndərməyi dayandırmış axın yerində duran maşınla səhvən eyniləşdirilməsin.',
      },
      {
        title: 'Dispetçer işi üçün xəritə',
        text: 'Statusa görə süzgəc, nömrəyə görə axtarış; istənilən maşını açıb son marşrutunu, sürücüsünü və sensor göstəricilərini görmək olar.',
      },
    ],
  },

  stops: {
    id: 'stops',
    badge: '09:40',
    eyebrow: 'Maşın niyə dayandı',
    title: 'Sıfır km/saat heç nə demir',
    accent: 'heç nə demir',
    lead: 'Yerində duran maşın müştərinin növbəsində ola, yanacaq ala və ya tıxaca düşə bilər, müştəri isə yalnız birincisinə görə ödəyir. Buna görə hər dayanma dörd yoxlamadan keçir və onun səbəbini məhz bu yoxlamalar müəyyənləşdirir.',
    timeline: {
      title: '10-XX-027 · nümunə gün',
      weight: 'Xalis çəki',
      weightMax: '24,1 t',
      state: 'Status',
      hours: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
      legend: { drive: 'Hərəkət', waiting: 'Müştəri gözləməsi', operational: 'Əməliyyat dayanması' },
    },
    checksTitle: 'Dörd yoxlama',
    checks: [
      { name: 'Zona', question: 'Maşın müştərinin geozonası daxilindədirmi?', outcome: 'Xeyr → əməliyyat dayanması' },
      { name: 'Reys', question: 'Bu maşının reysinə həmin müştəri daxildirmi?', outcome: 'Xeyr → əməliyyat dayanması' },
      { name: 'Yük', question: 'Çəki göstəricisi artıb, yoxsa azalıb?', outcome: 'Artdı → yükləmə · azaldı → boşaltma' },
      { name: 'Müqavilə', question: 'Müqavilə hansı pulsuz vaxtı nəzərdə tutur?', outcome: 'Ondan artıq → ödənişli gözləmə' },
    ],
    logTitle: 'Nümunə gün, dayanma-dayanma',
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
    note: 'Çox qısa dayanmalar GPS küyü kimi nəzərə alınmır, zona sərhədində irəli-geri «tərpənən» maşının mövqeyi isə təsnifatdan əvvəl hamarlanır.',
  },

  waiting: {
    id: 'waiting',
    badge: '11:40',
    eyebrow: 'Gözləmə haqqı',
    title: 'Darvaza önündəki vaxt haqqa çevrilir',
    accent: 'haqqa çevrilir',
    lead: 'Müqavilələr bir-birinə bənzəmir: hər müştərinin yükləmə və boşaltma üçün ayrı-ayrı pulsuz vaxt limiti, bir də özünə məxsus saatlıq tarifi olur. Maşın limiti keçəndə platforma əlavə vaxtı ölçür, həmin müştərinin tarifini tətbiq edir və çıxan haqqı sübutları ilə birgə reysə bağlayır.',
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
        title: 'Yükləmə və boşaltma limitləri ayrıdır',
        text: 'Müqavilə pulsuz vaxtı hər əməliyyat üçün ayrıca müəyyən edir, ona görə də eyni gözləmə bir müştəridə heç nəyə başa gəlmir, başqasında isə hesaba yazılır.',
      },
      {
        title: 'Hələ vaxt varkən xəbərdarlıq',
        text: 'Maşının pulsuz vaxtı azaldıqca dispetçer xəbərdarlıq, vaxt bitən anda isə kritik bildiriş alır.',
      },
      {
        title: 'Hər haqqın sübutu var',
        text: 'Gəliş və gediş vaxtları, zona və çəki dəyişikliyi haqla birlikdə saxlanılır. Müştəri etiraz etsə, sübut artıq əldədir.',
      },
    ],
  },

  invoices: {
    id: 'invoices',
    badge: '14:30',
    eyebrow: 'Qaimələri AI oxuyur',
    title: 'Kabinadan şəkil, sistemdə yoxlanmış qeyd',
    accent: 'yoxlanmış qeyd',
    lead: 'Sürücü kağız qaimənin şəklini çəkib Telegram qrupuna atır. Şəkil düzəldilir, AI hər sahəni çıxarır və nə dərəcədə əmin olduğunu qiymətləndirir, biznes qaydaları isə yalnız oxumaqla gözdən qaçacaq səhvləri tutur. AI tərəddüd edəndə son sözü insan deyir.',
    scene: {
      label:
        'Sürücü qaimə şəklini Telegram-a göndərir; skan zamanı hər sahə etibarlılığa görə rənglənir, şübhəli tarix yoxlama növbəsinə keçir və operator onu təsdiqləyir (nümunə məlumatlar)',
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
    pipelineTitle: 'Bir şəklin yolu',
    pipeline: [
      {
        title: 'Şəkil gəlir',
        text: 'Telegram botu sürücü qruplarındakı şəkilləri toplayır və dərhal cavab yazır ki, sürücü şəklin çatdığından əmin olsun.',
      },
      {
        title: 'Şəkil hazırlanır',
        text: 'Kabinada çəkilən foto nadir hallarda düz və aydın olur, ona görə hər biri əvvəlcə fırladılır, ölçüsü dəyişdirilir və kəskinləşdirilir.',
      },
      {
        title: 'Sahələr çıxarılır',
        text: 'AI maşın, tarix, marşrut, müştəri, çəki və məbləği strukturlaşdırılmış məlumat kimi qaytarır və hər sahəyə ayrıca etibarlılıq dərəcəsi verir. Səhifədə üç dil (Azərbaycan, rus, ingilis) qarışıq yazılsa belə.',
      },
      {
        title: 'Qaydalar tətbiq olunur',
        text: 'Yadda saxlamazdan əvvəl platforma nömrə formatını, tarixin keçərli olduğunu, müştərinin sistemdə mövcudluğunu və cəmlərin düz gəldiyini təsdiqləyir.',
      },
      {
        title: 'Saxlanılır və ya yoxlamaya gedir',
        text: 'Etibarlı oxunuşlar yadda saxlanılır. Zəif olanlara başqa AI modeli ikinci dəfə baxır, yenə aydın olmayan hər şey isə yoxlama növbəsində insanı gözləyir.',
      },
    ],
    note: 'Hər oxunuşla birlikdə AI-dən gələn ilkin cavab, onun etibarlılıq balı və cavabı verən modelin adı saxlanılır. Beləliklə, istənilən qeydi ilkin şəklə qədər izləmək mümkündür.',
  },

  reconcile: {
    id: 'reconcile',
    badge: '23:00',
    eyebrow: 'Üç mənbənin tutuşdurulması',
    title: 'Reys, qaimə və maliyyə eyni şeyi deməlidir',
    accent: 'eyni şeyi deməlidir',
    lead: 'Gecə ərzində platforma bütün günü xam məlumatdan yenidən hesablayır (GPS reysləri, dayanmalar, gözləmə haqları), sonra hər reysi öz qaiməsi və maliyyə qeydi ilə müqayisə edir. Uyğun gələnlər tutuşdurulmuş sayılır; qalanları isə fərqin məhz hansı sahədə olduğunu göstərən növbəyə düşür.',
    board: {
      label:
        'Üç kart (GPS-dən gələn reys, AI ilə oxunmuş qaimə və maliyyə qeydi) bir araya gəlir və sahə-sahə müqayisə olunur, ardınca təsdiq və ya rədd gözləyən üç uyğunsuzluq növbəsi açılır (nümunə məlumatlar)',
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
        title: 'Hər sahə ayrıca yoxlanır',
        text: 'Maşın, tarix, marşrut, çəki və məbləğ ayrı-ayrılıqda müqayisə edilir, ona görə uyğunsuzluq sadəcə qırmızıya boyanmır, səbəbini də göstərir.',
      },
      {
        title: 'Toplu təsdiq',
        text: 'Mühasiblər uyğunsuzluqları dəstə şəklində qəbul edir ya da geri qaytarır; hər qərar qeydin tarixçəsində qalır.',
      },
      {
        title: 'Yamaq yox, yenidən hesablama',
        text: 'Gecəni təkrar emal etmək tam eyni nəticə verir; qayda dəyişəndə tarixçə xam məlumat əsasında yenidən hesablanır.',
      },
    ],
  },

  reports: {
    id: 'reports',
    badge: '08:00',
    eyebrow: 'Hesabatlar və Telegram',
    title: 'Səhərə hesabat hazır olur',
    accent: 'hazır olur',
    lead: 'Rəhbərlik üçün rəqəmləri toplamağı heç kimdən xahiş etmək lazım deyil. Dispetçerlərin işlədiyi həmin məlumatdan platforma on vərəqli Excel faylı və qrafiklər hazırlayır, Telegram botu isə sürücüləri və ofisi məlumatlandırır.',
    workbook: {
      label:
        'On vərəqli Excel faylı növbə ilə icmal vərəqini, müştəri gözləməsi ilə əməliyyat dayanmalarının günlük qrafikini və hər maşın üzrə yanacaq-məsafə qrafikini göstərir (nümunə məlumatlar)',
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
          { label: 'Məsafə', value: '41 300 km' },
          { label: 'Sərf olunan yanacaq', value: '18 940 L' },
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
    tabsTitle: 'Excel faylı nəyi göstərir',
    tabNotes: [
      { label: 'İcmal', text: 'Dövrün bütün yekunları bir vərəqdə: reyslər, kilometrlər, yanacaq, gözləmə saatları, haqlar.' },
      { label: 'Problemlər', text: 'Pulsuz vaxtı aşan gözləmələr və boş qayıdan maşınlar, süzgəclə seçilə bilən siyahıda.' },
      { label: 'Dayanma analizi', text: 'Hər dayanma üçün səbəb, zona, müddət və haqq.' },
      { label: 'GPS analizi', text: 'Hər maşın üçün yanacaq-məsafə nisbəti və sürət rejimi.' },
      { label: 'Müştərilər, sürücülər', text: 'Eyni göstəricilər müştəriyə və sürücüyə görə bölünmüş halda.' },
      { label: 'Tutuşdurma', text: 'Uyğun gələnlər, gəlməyənlər və insanın yoxlamalı olduğu qaimələr.' },
    ],
    chartsTitle: 'Rəhbərliyin gördüyü qrafiklər',
    charts: ['Dayanmaların təsnifat bölgüsü', 'Yanacaq və gözləmə analizi', 'Aylıq dinamika', 'Optimallaşdırma potensialı'],
    bot: {
      title: 'Telegram botu',
      text: 'Sürücülər qaimə şəklini artıq istifadə etdikləri çatda göndərir. Bot nə oxuduğunu cavab kimi yazır, yoxlanmalı qaimələrin linkləri isə ofisə göndərilir.',
    },
  },

  engineering: {
    id: 'engineering',
    eyebrow: 'Texniki tərəf',
    title: 'Hər rəqəm öz mənbəyini göstərir',
    accent: 'öz mənbəyini göstərir',
    lead: 'Müştəriyə hesab göndərən sistemdə hər rəqəmin mənbəyi olmalıdır. Platformanın arxitekturasında haqların, dayanmaların və tutuşdurmaların hər biri konkret GPS mesajı, foto və ya maliyyə qeydi ilə əlaqələndirilir, qaydalar dəyişəndə isə hamısı yenidən hesablanır.',
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
        title: 'Xam məlumata toxunulmur',
        text: 'GPS mesajları daxil olduğu formada saxlanılır. Reys, dayanma və haqlar bu mesajlardan törədilir, ona görə yeni qayda tarixçəni yamaqlamır, yenidən hesablayır.',
      },
      {
        title: 'İki dəfə işlət, eyni nəticəni al',
        text: 'Gecə prosesi idempotentdir: bir günü yenidən emal etmək reysin, haqqın və ya tutuşdurmanın dublikatını yaratmır.',
      },
      {
        title: 'Canlı yeniləmə və ehtiyat kanal',
        text: 'Dəyişikliklər panellərə dərhal çatır, push bağlantısı itəndə isə panellər dövri sorğuya keçir.',
      },
      {
        title: 'Öz nüsxəsi ilə işləyir',
        text: 'Tətbiq öz verilənlər bazası ilə işləyir; xarici axın gecikəndə və ya tamam kəsiləndə «circuit breaker» onun işlək qalmasını təmin edir.',
      },
      {
        title: 'Ağır işlər arxa planda',
        text: 'AI oxuması növbəyə qoyulan fon proseslərində, təkrar cəhdlərlə icra olunur, buna görə şəkil seli paneli ləngitmir.',
      },
      {
        title: 'Rollara əsaslanan giriş',
        text: 'Dispetçer, mühasib, operator və rəhbər öz rolu ilə daxil olur və yalnız öz işinə aid ekranlara baxır.',
      },
    ],
  },

  erp: {
    id: 'erp',
    eyebrow: 'Növbəti mərhələ',
    title: 'Yolun davamı: Aibaycan Logistics ERP',
    accent: 'Aibaycan Logistics ERP',
    lead: 'Hər maşının yerini və vaxtının dəyərini avtopark data platforması göstərir. Sahil Transport ilə işimiz indi Aibaycan Logistics ERP ilə davam edir. Bu, daşıyıcının bütün dövrünü, ilk sifarişdən ödənişin banka daxil olmasına qədər əhatə edən logistika ERP-mizdir.',
    from: {
      label: 'Sahil Transport üçün hazırlandı',
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
    cta: 'Aibaycan Logistics ERP barədə soruşun',
  },

  role: {
    eyebrow: 'Bizim payımız',
    title: 'Aibaycan-ın töhfəsi',
    items: [
      {
        title: 'Hesablaşma qaydaları',
        text: 'Gözləmə vaxtından gəlir əldə etmə üsulunu proqramın avtomatik icra etdiyi qaydalar toplusuna çevirdik: müştəri geozonaları, reysin tərkibi, yük çəkisinin dəyişməsi və hər müqavilədəki pulsuz vaxt.',
      },
      {
        title: 'Telematikanın qoşulması',
        text: 'Təxminən 180 maşında Wialon GPS, çən yanacaq sensorları və CAN çəki sensorları bir sistemdə birləşdi; yükün xalis göstərilməsi üçün hər maşının boş çəkisi öyrənilir.',
      },
      {
        title: 'Platformanın qurulması',
        text: 'Gecə emalı, canlı panel, dayanmaların təsnifatı, gözləmə haqlarının hesabı və üç mənbə üzrə tutuşdurma.',
      },
      {
        title: 'AI avtomatlaşdırması',
        text: 'Qaimə şəkillərini Telegram botu toplayır, AI sahələri etibarlılıq dərəcəsi ilə oxuyur, ardınca biznes qaydaları yoxlanılır, insan yoxlaması üçün isə ayrıca növbə var.',
      },
      {
        title: 'Dizayn və hesabatlar',
        text: 'Azərbaycan dilində, telefonda rahat işləyən tünd əməliyyat interfeysi, üstəlik rəhbərlik üçün Excel faylı və qrafiklər.',
      },
    ],
  },
  stack: {
    eyebrow: 'Texnologiyalar',
    title: 'Canlı məlumat axınına uyğun stek',
    groups: [
      { label: 'İnterfeys', items: ['TypeScript', 'React', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'Fastify', 'WebSockets'] },
      { label: 'Məlumat və fon işləri', items: ['PostgreSQL', 'Redis', 'İş növbələri'] },
      { label: 'AI və inteqrasiyalar', items: ['Vision LLM', 'Wialon', 'Telegram', 'Excel'] },
    ],
  },
  faq: {
    title: 'Daşıyıcıların platforma ilə bağlı sualları',
    items: [
      {
        q: 'Gözləmə haqqı üçün mövcud sistemlərimizi dəyişməliyik?',
        a: 'Xeyr. Platforma artıq istifadə etdiyiniz telematika və mühasibat sistemləri ilə yanaşı işləyir: onlardan oxuyur, öz nüsxəsini saxlayır və üzərinə dayanma təsnifatı, haqlar, tutuşdurma və hesabatlar əlavə edir.',
      },
      {
        q: 'Müştəri yanında gözləməni digər dayanmalardan necə ayırır?',
        a: 'Hər dayanma dörd cəhətdən yoxlanır: maşın müştəri zonasındadırmı, həmin müştəri reysə aiddirmi, çəki sensoru yükləmə və ya boşaltma qeyd edibmi və müqavilədə hansı pulsuz vaxt nəzərdə tutulub. Gözləmə yalnız dörd yoxlamanın hamısı keçəndə ödənişli olur.',
      },
      {
        q: 'Hansı telematika və sensorlar dəstəklənir?',
        a: 'Layihədə Wialon GPS çən yanacaq sensorları və CAN çəki sensorları ilə birgə işləyir. API-si olan istənilən başqa telematika platforması da eyni yolla qoşula bilər: mövqelər, geozonalar və sensor məlumatları reyslərə ötürülür.',
      },
      {
        q: 'AI qaiməni oxuya bilməsə nə olur?',
        a: 'Sistem təxminə yer qoymur. Hər sahə etibarlılıq balı alır; zəif bal alan dəyərləri ikinci AI modeli yenidən oxuyur, yenə aydınlaşmayan hallar isə problemli sahə vurğulanmış şəkildə yoxlama növbəsində insana çatır.',
      },
      {
        q: 'Aibaycan Sahil Transport ilə işləməyə davam edir?',
        a: 'Bəli. Əməkdaşlıq Aibaycan Logistics ERP ilə davam edir: yükü sifarişdən ödənişin banka düşməsinə qədər izləyən logistika ERP-miz.',
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
  sampleDataNote: 'Ekranlarda görünən bütün adlar, nömrələr və rəqəmlər nümunə üçündür.',
  mockupAriaLabel: 'Nümunə məlumatlı məhsul ekranının illüstrasiyası',
};

export default az;
