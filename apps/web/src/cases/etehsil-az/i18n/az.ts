// eTəhsil case study (/[locale]/projects/etehsil-az), AZ. Ported from Atlas `src/i18n/az/cases/etehsil.ts`,
// typed against the EN type source. Names and figures on screens are sample data.
import type { EtehsilCopy } from './en';

const az: EtehsilCopy = {
  seo: {
    title: 'eTəhsil: tədris mərkəzi proqramı, kurs idarəetmə sistemi',
    description:
      'Qurduğumuz və idarə etdiyimiz tədris mərkəzi və repetitor proqramı eTəhsil: dərs cədvəli, davamiyyət, borclar, müqavilələr, imtahanlar, valideyn portalı.',
  },
  h1: 'Tədris mərkəzləri üçün kurs idarəetmə sistemi və repetitor proqramı',
  hero: {
    eyebrow: 'EdTech · SaaS platforması',
    title: 'Bütün tədris mərkəzi bir ekranda',
    accent: 'bir ekranda',
    lead: 'eTəhsil tədris mərkəzləri və fərdi repetitorlar üçün öz SaaS platformamızdır: onu biz layihələndirib qurmuşuq və özümüz idarə edirik. Cədvəl, davamiyyət, ödəniş və borclar, müqavilələr, imtahanlar, valideynlər və əmək haqqı Azərbaycan, ingilis və rus dillərində vahid sistem kimi işləyir.',
    primaryCta: 'Oxşar layihəni müzakirə edək',
  },
  facts: { platforms: 'Veb · PWA', languages: 'AZ · EN · RU' },

  heroScreen: {
    label:
      'Nümunə məlumatlarla eTəhsil ekranı: Demo Akademiyanın həftəlik dərs cədvəli, gecikmiş borc kartı, saxlanmış davamiyyət qeydi və davam edən imtahan',
    url: 'etehsil.az',
    centre: 'Demo Akademiya',
    view: 'Bu həftə',
    now: 'İndi',
    nav: ['İdarə paneli', 'Cədvəl', 'Davamiyyət', 'Kassa', 'Müqavilələr', 'İmtahanlar', 'Maliyyə'],
    rooms: ['Otaq 1', 'Otaq 2', 'Otaq 3'],
    days: ['B.e.', 'Ç.a.', 'Ç.', 'C.a.', 'C.'],
    times: ['09:00', '10:30', '12:00', '14:00', '15:30'],
    groups: ['İngilis A2', 'IELTS B2', 'Riyaziyyat 11', 'SAT Math', 'Kodlaşdırma', 'Məntiq', 'Rus dili B1'],
    debt: { label: 'Gecikmiş borc', value: '960 ₼', meta: '3 tələbə' },
    attendance: { label: 'Davamiyyət saxlanıldı', value: '11/12', meta: 'IELTS B2 · Otaq 2' },
    exam: { label: 'İmtahan gedir', value: '42:18', meta: 'B variantı' },
    toasts: ['Xatırlatma hazırdır · 3 tələbə', 'DA-2026-0142 müqaviləsi yaradıldı', 'Maaş təsdiqləndi · Leyla K.'],
  },

  challenge: {
    id: 'challenge',
    km: '07:45',
    eyebrow: 'Problem',
    title: 'Dəftərlər, cədvəl faylları və yazışma qrupları ilə işləyən mərkəz',
    accent: 'Dəftərlər, cədvəl faylları və yazışma qrupları',
    lead: 'İlk dərsdən əvvəl administrator artıq kağız jurnal, bir faylda dərs cədvəli, digər faylda borc siyahısı və hər sinif üçün ayrıca WhatsApp qrupu arasında vurnuxur. Mərkəzin hər parçası kiminsə əlindədir, bütöv mənzərəni isə heç kim görmür. Rəhbər ayın necə keçdiyini yalnız ay bitəndən sonra öyrənir.',
    desk: {
      label:
        'Köhnə iş qaydasının təsviri: qeydləri pozulmuş kağız davamiyyət jurnalı, otaq toqquşması olan cədvəl faylı və suallarla dolu valideyn qrupu',
      register: {
        title: 'Jurnal · Oktyabr',
        rows: ['Aysel D.', 'Murad N.', 'Kamran T.', 'Nərmin Q.', 'Tural H.'],
        note: 'ödəyib?? B.e. soruş',
      },
      sheet: {
        file: 'cedvel_son_v3.xlsx',
        columns: ['Saat', 'Otaq 1', 'Otaq 2'],
        rows: [
          ['09:00', 'İngilis A2', ''],
          ['10:30', 'IELTS B2', 'IELTS B2 / Riyaziyyat 11 ?'],
          ['12:00', '#REF!', 'Məntiq'],
        ],
      },
      chat: {
        title: 'IELTS B2 · valideynlər',
        messages: [
          'Bu gün dərs var?',
          'Oktyabr üçün kim hələ ödəməyib?',
          'Müəllim xəstədir. Dərs nə vaxta keçdi?',
          'Aysel çərşənbə günü gəlmişdi?',
        ],
      },
    },
    pains: [
      {
        title: 'Dərslər üst-üstə düşür',
        text: 'İki qrup eyni otağa yazılır və bu, yalnız hər iki qrup eyni qapıdan girəndə üzə çıxır.',
      },
      {
        title: 'Davamiyyət əl ilə köçürülür',
        text: 'Müəllim kağız jurnalda işarələyir, kimsə bunu yenidən yazır və ardıcıl üç dərsi buraxan tələbəni heç kim görmür.',
      },
      {
        title: 'Borclar kiminsə yaddaşındadır',
        text: 'Kimin nə qədər və nə vaxtdan borclu olduğu ay sonunda qeydlərdən bərpa edilir. Xatırlatmalar ya gec gedir, ya heç getmir.',
      },
      {
        title: 'Müqavilə və imtahanlar əl ilə hazırlanır',
        text: 'Hər müqavilə tələbə-tələbə Word-də dəyişdirilir. Hər imtahan sual-sual yığılır, eyni otaq üçün ayrı variantlar hazırlamaq isə demək olar ki, mümkün deyil.',
      },
      {
        title: 'Əmək haqqı kalkulyatorda',
        text: 'Müəllim maaşı üçün dərslər qrup-qrup sayılır, valideynlər isə övladının gəlib-gəlmədiyini və nə qədər borcu qaldığını soruşmaq üçün zəng edir.',
      },
    ],
    flowTitle: 'eTəhsil bunları vahid axına çevirir',
    flow: ['Dərs keçilir', 'Davamiyyət qeydə alınır', 'Borc yenidən hesablanır', 'Valideyn görür', 'Rəhbər ayın nəticəsini görür'],
  },

  schedule: {
    id: 'schedule',
    km: '08:00',
    eyebrow: 'Cədvəl · Otaqlar',
    title: 'Kurs cədvəli özü qurulur, otaq isə eyni vaxtda iki qrupa verilmir',
    accent: 'özü qurulur',
    lead: 'Qrupun həftəlik şablonunu bir dəfə daxil edirsiniz. eTəhsil onu kursun bütün dərslərinə çevirir, hər dərsə öz tarixini, otağını və müəllimini verir və bütün mərkəzi vahid təqvimdə saxlayır.',
    steps: [
      {
        title: 'Həftəlik şablon təyin olunur',
        text: 'Günlər, başlama saatı, müddət, otaq və müəllim, üstəlik kursdakı dərslərin sayı. Cədvəlin ehtiyac duyduğu yeganə məlumat budur.',
      },
      {
        title: 'Hər dərs öz tarixini alır',
        text: 'eTəhsil kursun hər dərsini yaradır və bitmə tarixini sonuncu dərsə görə təyin edir. Cədvəl yenidən yaradılanda yalnız gələcək dərslər əvəz olunur, keçilmiş dərslərə toxunulmur.',
      },
      {
        title: 'Otaqlarda toqquşma olmur',
        text: 'Dərs iki qrupu eyni vaxtda eyni otağa salacaqsa, eTəhsil onu bloklayır və otağın nə vaxt tutulduğunu göstərir. Qərarı rəhbər sinif qapısında yox, ekranda verir.',
      },
    ],
    screen: {
      label:
        'Nümunə məlumatlarla cədvəl ekranları: IELTS B2 qrupu üçün həftəlik şablon forması, nömrələnmiş dərslərlə dolan oktyabr təqvimi və toqquşan Riyaziyyat 11 dərsinin bloklanıb başqa otağa keçirildiyi otaq lövhəsi',
      patternTitle: 'Həftəlik şablon',
      fields: [
        { label: 'Qrup', value: 'IELTS B2' },
        { label: 'Günlər', value: 'B.e. · Ç. · C.' },
        { label: 'Başlama · müddət', value: '10:30 · 90 dəq' },
        { label: 'Otaq', value: 'Otaq 2' },
        { label: 'Müəllim', value: 'Leyla K.' },
        { label: 'Kurs', value: '36 dərs' },
      ],
      generate: 'Dərsləri yarat',
      generated: '36 dərs · 25 dekabrda bitir',
      month: 'Oktyabr',
      weekdays: ['B.e.', 'Ç.a.', 'Ç.', 'C.a.', 'C.', 'Ş.', 'B.'],
      more: '+24 dərs noyabr və dekabrda',
      boardTitle: 'Çərşənbə · otaqlar',
      rooms: ['Otaq 1', 'Otaq 2', 'Otaq 3'],
      times: ['09:00', '10:30', '12:00'],
      booked: [
        { group: 'İngilis A2', room: 0, time: 0 },
        { group: 'Məntiq', room: 2, time: 2 },
        { group: 'Rus dili B1', room: 0, time: 2 },
      ],
      newGroup: 'IELTS B2',
      clashGroup: 'Riyaziyyat 11',
      clashMessage: 'Otaq 2 saat 10:30-da başqa qrup tərəfindən tutulub',
      resolved: 'Otaq 3-ə keçirildi',
    },
    features: [
      { title: 'Gün, həftə, ay və il', text: 'Bütün mərkəz üçün vahid təqvim, müəllim və ya qrupa görə süzgəclə.' },
      { title: 'Dərsin ləğvi və köçürülməsi', text: 'Səbəb qeyd olunur, ləğv edilmiş dərs isə davamiyyətə təsir etmir.' },
      { title: 'Otaqlar və tutum', text: 'Hər otaq yer sayı ilə saxlanılır, hər dərs bir otağa bağlanır.' },
      { title: 'Dəyişiklik hamıya çatır', text: 'Dərs ləğv olunanda və ya başqa vaxta keçəndə tələbə və müəllim bildiriş alır.' },
    ],
  },

  attendance: {
    id: 'attendance',
    km: '10:30',
    eyebrow: 'Davamiyyət · Valideyn portalı',
    title: 'Müəllimin telefonunda işarələnir. Valideynin telefonunda görünür.',
    accent: 'Valideynin telefonunda görünür.',
    lead: 'Müəllim dərsi açır, «Hamı iştirak edir» düyməsinə toxunur, evdə qalan tələbənin qeydini dəyişir və yadda saxlayır. Valideyn həmin dərsi keçid və PIN kodla açılan portalda görür. Tətbiq yükləmək, hesab açmaq lazım deyil.',
    teacherPhone: {
      label:
        'Nümunə məlumatlarla müəllim telefonu: IELTS B2 dərsinin davamiyyəti, bir tələbədən başqa hamı iştirak edir, qeyd saxlanılıb və 24 saatdan sonra kilidlənir',
      time: 'Bu gün · 10:30',
      group: 'IELTS B2 · Otaq 2',
      topic: 'Mövzu: Reading · skimming',
      allPresent: 'Hamı iştirak edir',
      marks: ['İ', 'Q', 'Ü'],
      students: ['Aysel D.', 'Murad N.', 'Kamran T.', 'Nərmin Q.', 'Tural H.', 'Sevinc R.'],
      absentIndex: 3,
      save: 'Yadda saxla',
      saved: 'Saxlanıldı · 24 saata kilidlənir',
    },
    parentPhone: {
      label:
        'Nümunə məlumatlarla valideyn portalı: keçid və PIN kodla açılır, davamiyyəti, aktiv qrupları, gözləyən ödənişi və son dərsləri göstərir',
      portal: 'Valideyn portalı',
      centre: 'Demo Akademiya',
      pin: 'PIN kodu daxil edin',
      access: 'Keçid + PIN',
      child: 'Nərmin Q.',
      tabs: ['İcmal', 'Davamiyyət', 'Ödənişlər', 'Cədvəl'],
      kpis: [
        { label: 'Davamiyyət', value: '92%' },
        { label: 'Qruplar', value: '2' },
        { label: 'Ödənilməli', value: '1' },
      ],
      history: [
        { when: 'Ç. 10:30 · IELTS B2', status: 'Gəlmədi' },
        { when: 'B.e. 10:30 · IELTS B2', status: 'Gəldi' },
        { when: 'Ş. 12:00 · Riyaziyyat 11', status: 'Gəldi' },
      ],
    },
    sync: 'Bir qeyd · iki ekran',
    points: [
      {
        label: 'Bir toxunuş',
        text: '«Hamı iştirak edir» bütün qrupu işarələyir, müəllim yalnız istisnaları dəyişir: qayıb və ya üzrlü.',
      },
      {
        label: '24 saatlıq kilid',
        text: 'Müəllimin qeydləri 24 saatdan sonra kilidlənir. Bundan sonra onları yalnız mərkəzin rəhbərliyi aça bilər.',
      },
      {
        label: 'Risk siyahısı',
        text: 'Dərsləri ardıcıl buraxan tələbələr valideyn soruşmamışdan xeyli əvvəl ayrıca siyahıya düşür.',
      },
      {
        label: 'Valideyn portalı',
        text: 'Şəxsi keçid və PIN kod bir övladın davamiyyətini, ödənişlərini və cədvəlini açır. Yalnız baxmaq üçündür, başqa heç nə.',
      },
    ],
  },

  payments: {
    id: 'payments',
    km: '12:30',
    eyebrow: 'Kassa · Borclar',
    title: 'Hər borcun adı, gün sayı və xatırlatması var',
    accent: 'xatırlatması var',
    lead: 'Tələbə qeydiyyatdan keçəndə ödəniş planı özü yaranır. Nağd, kart və ya köçürmə, tam və ya qismən — hər ödəniş qəbzlə həmin plana yazılır. Kassa ən çox gecikənləri yuxarı çıxarır, hər biri üçün WhatsApp xatırlatması isə bir klik məsafəsindədir.',
    screen: {
      label:
        'Nümunə məlumatlarla kassa: ümumi və gecikmiş borc, gecikmə gününə görə sıralanmış tələbələr, WhatsApp xatırlatması üçün seçilmiş üç tələbə və qəbzlə qeydə alınmış bir ödəniş',
      title: 'Kassa',
      kpis: [
        { label: 'Ümumi borc', before: '2 430 ₼', after: '2 210 ₼', meta: '8 tələbə' },
        { label: 'Gecikmiş', before: '1 180 ₼', after: '960 ₼', meta: '4 → 3 tələbə' },
        { label: 'Oktyabrda yığılan', before: '6 880 ₼', after: '7 100 ₼', meta: 'Bu ay ödənilib' },
      ],
      filters: ['Gecikmiş', 'Bu ay ödənilməli', 'Borcu yoxdur', 'Planı yoxdur'],
      rows: [
        { name: 'Murad N.', group: 'SAT Math', late: '3 ödəniş · 64 gün', amount: '420 ₼' },
        { name: 'Aysel D.', group: 'IELTS B2', late: '2 ödəniş · 34 gün', amount: '360 ₼' },
        { name: 'Kamran T.', group: 'Riyaziyyat 11', late: '1 ödəniş · 12 gün', amount: '180 ₼' },
        { name: 'Sevinc R.', group: 'İngilis A2', late: '1 ödəniş · 5 gün', amount: '220 ₼' },
      ],
      selected: '3 seçilib',
      remind: 'WhatsApp xatırlatması',
      paidUp: 'Borcu yoxdur',
      receipt: 'Qəbz Q-0419',
    },
    chat: {
      label:
        'Nümunə məlumatlarla WhatsApp xatırlatmaları: kassadan valideynlər üçün hazırlanmış gecikmiş ödənişlər barədə üç mesaj',
      title: 'WhatsApp · xatırlatmalar',
      messages: [
        {
          to: 'Murad N. · valideyn',
          text: 'Salam! Demo Akademiyadan yazırıq. Muradın SAT Math üzrə 3 ödənişi gecikib, cəmi 420 ₼. Ödənişi kassada və ya köçürmə ilə edə bilərsiniz.',
        },
        { to: 'Aysel D. · valideyn', text: 'Salam! Demo Akademiyadan yazırıq. IELTS B2 üzrə 2 ödəniş gecikib, cəmi 360 ₼.' },
        { to: 'Kamran T. · valideyn', text: 'Salam! Demo Akademiyadan yazırıq. Riyaziyyat 11 üzrə oktyabr ödənişi gecikib, 180 ₼.' },
      ],
    },
    features: [
      { title: 'Ödəniş planları', text: 'Aylıq və ya hissə-hissə, qeydiyyat zamanı yaradılır, lazım olduqda endirimlə.' },
      { title: 'Qismən ödəniş və avans', text: 'Məbləğin bir hissəsi indi ödənilir və ya avans növbəti aya keçir. Qalıq özü yenidən hesablanır.' },
      {
        title: 'Qəbz və şəffaf tarixçə',
        text: 'Hər ödənişə qəbz verilir. Ləğv edilmiş ödəniş tarixçədə qalır, borc isə avtomatik bərpa olunur.',
      },
      {
        title: 'Hər əməkdaş yalnız lazım olanı görür',
        text: 'Qəbul masası ödənişləri qəbul edib qəbz verir, mərkəzin ümumi gəlirini isə heç vaxt görmür.',
      },
    ],
  },

  contracts: {
    id: 'contracts',
    km: '14:00',
    eyebrow: 'Müqavilələr',
    title: 'Mərkəzin öz müqaviləsi bir kliklə doldurulur və nömrələnir',
    accent: 'doldurulur və nömrələnir',
    lead: 'Mərkəz artıq istifadə etdiyi Word müqaviləsini yükləyir. eTəhsil hər dəyişəni tanıyır, doldura bilmədiyi sahələr barədə xəbərdarlıq edir və hər tələbə üçün tələbə, valideyn, kurs və ödəniş məlumatları artıq yerində olan nömrələnmiş PDF hazırlayır.',
    screen: {
      label:
        'Nümunə məlumatlarla müqavilənin hazırlanması: Word şablonunun altı dəyişəni bir-bir tələbə üçün nömrələnmiş PDF müqavilənin sahələrinə uyğunlaşdırılır, sonra müqavilə imzalanmış kimi qeyd olunur',
      file: 'muqavile_standart.docx',
      template: 'Şablon',
      ready: 'Hazırdır · 6 dəyişənin 6-sı doldurulacaq',
      pdf: 'PDF',
      docTitle: 'Təhsil xidmətləri müqaviləsi',
      party: 'Demo Akademiya',
      fields: [
        { key: 'muqavile_no', label: 'Müqavilə №', value: 'DA-2026-0142' },
        { key: 'tarix', label: 'Tarix', value: '14.10.2026' },
        { key: 'telebe', label: 'Tələbə', value: 'Aysel D.' },
        { key: 'valideyn', label: 'Valideyn', value: 'Rəna D.' },
        { key: 'kurs', label: 'Kurs', value: 'IELTS B2 · 36 dərs' },
        { key: 'ayliq_haqq', label: 'Aylıq haqq', value: '180 ₼' },
      ],
      signature: 'İmza',
      awaiting: 'İmza gözlənilir',
      signed: 'İmzalanıb',
    },
    points: [
      {
        label: 'Öz formanız',
        text: 'Mərkəz hüquqi mətnini saxlayır. eTəhsil yalnız məlumatları doldurur, hər dil üçün isə standart şablon təyin olunur.',
      },
      {
        label: 'Dəyişən yoxlaması',
        text: 'Doldurulmadan olduğu kimi çap olunacaq sahələr hələ ilk müqavilə hazırlanmazdan əvvəl göstərilir.',
      },
      { label: 'Nömrələmə', text: 'Müqavilə nömrələrini sistem ardıcıl verir, ona görə nömrə heç vaxt təkrarlanmır.' },
      {
        label: 'İmza statusu',
        text: 'İmza gözləyən, imzalanmış və ya müddəti bitmiş; bitməsinə az qalan müqavilələr önə çıxır.',
      },
      { label: 'Müqaviləsi olmayanlar', text: 'Hələ müqaviləsi olmayan aktiv tələbələr ayrıca siyahıda görünür.' },
    ],
  },

  exams: {
    id: 'exams',
    km: '16:00',
    eyebrow: 'Sual bankı · İmtahanlar',
    title: '3 addımlı imtahan konstruktoru və hər tələbəyə ayrıca variant',
    accent: 'hər tələbəyə ayrıca variant',
    lead: 'İmtahana ad verin, hər fənn üçün sual sayını və mövzu tərkibini seçin — eTəhsil hər variantı mərkəzin sual bankından heç bir sualı təkrarlamadan doldurur. Tələbələr imtahanı taymerlə verir, cavablar mümkün olan hər yerdə avtomatik yoxlanılır, nəticələr isə mövzular üzrə təhlil olunur.',
    builder: {
      label:
        'Nümunə məlumatlarla imtahan şablonu konstruktoru: üç addım (əsas məlumat, fənlər, suallar) və sual ardıcıllığı fərqlənən dörd variant',
      title: 'Yeni imtahan şablonu',
      steps: ['Əsas', 'Fənlər', 'Suallar'],
      basics: [
        { label: 'Ad', value: 'Sınaq imtahanı · Qəbul' },
        { label: 'Vaxt', value: '180 dəq · bölmə üzrə' },
        { label: 'Mənfi bal', value: 'Aktiv' },
        { label: 'Pəncərə dəyişməsi', value: 'Qeydə alınır' },
      ],
      subjects: [
        { name: 'Riyaziyyat', count: '25', mix: 'Test 20 · Açıq 5' },
        { name: 'İngilis dili', count: '30', mix: 'Test 30' },
        { name: 'Məntiq', count: '10', mix: 'Test 10' },
      ],
      difficulty: ['Asan', 'Orta', 'Çətin'],
      autofill: 'Avtomatik doldur',
      progress: '65/65 sual',
      noRepeat: 'Təkrar sual yoxdur',
      variant: 'Variant',
    },
    taking: {
      label:
        'Nümunə məlumatlarla tələbənin imtahan ekranı: beş cavab variantı olan riyaziyyat sualı, geri sayan taymer və qeydə alınmış pəncərə dəyişməsi',
      section: 'Riyaziyyat · 12/25',
      left: 'qalıb',
      question: '3x − 7 = 11 olarsa, x nəyə bərabərdir?',
      options: ['4', '5', '6', '7', '8'],
      chosen: 2,
      tabSwitch: 'Pəncərə dəyişməsi qeydə alındı',
      autoSubmit: '00:00-da avtomatik təhvil verilir',
    },
    results: {
      label:
        'Nümunə məlumatlarla imtahan nəticələri: bal paylanması qrafiki və səhv payı ən yüksək olan dörd mövzu',
      title: 'Nəticələr · Sınaq imtahanı',
      distribution: 'Bal paylanması',
      scale: ['0', '50', '100'],
      weak: 'Ən zəif mövzular · səhv payı',
      topics: [
        { name: 'Kəsrlər', value: 58 },
        { name: 'Loqarifmlər', value: 46 },
        { name: 'Reading: nəticə çıxarma', value: 39 },
        { name: 'Mətnli məsələlər', value: 31 },
      ],
      summary: ['Orta bal 61,4', 'Keçənlər 74%'],
    },
    features: [
      {
        title: 'Sual bankı',
        text: 'Tək seçimli və uyğunlaşdırma suallarından ədədi cavab və esseyə qədər doqquz sual tipi: fənn, mövzu və çətinlik üzrə çeşidlənir, riyazi ifadələr yazmaq mümkündür.',
      },
      {
        title: 'Şablonlar və variantlar',
        text: 'Şablon imtahanın reseptini bir dəfə saxlayır. Hər dəfə yeni variantlar doldurulur və bir və ya bir neçə qrupa verilir.',
      },
      {
        title: 'Vaxt məhdudiyyətli və qonaq imtahanları',
        text: 'Ümumi və ya bölmə üzrə vaxt, avtomatik təhvil, pəncərə dəyişməsinin izlənməsi və kənar iştirakçılar üçün istəyə görə PIN kodlu qonaq keçidi.',
      },
      {
        title: 'Qiymətləndirmə və analitika',
        text: 'Qapalı suallar avtomatik, açıq cavablar müəllim tərəfindən yoxlanılır; səhvlər həm mərkəz, həm də hər tələbə üzrə mövzu-mövzu sayılır.',
      },
    ],
  },

  owner: {
    id: 'owner',
    km: '21:00',
    eyebrow: 'Rəhbər paneli · Əmək haqqı',
    title: 'Rəhbər ayın nəticəsini ay bitmədən görür',
    accent: 'ay bitmədən görür',
    lead: 'Gəlirlər kassadan avtomatik düşür. Xərclər kateqoriyalar üzrə yazılır, daimi xərclər isə özü təkrarlanır. Müəllim maaşı qruplara və keçilmiş dərslərə görə hesablanır, rəhbər tərəfindən təsdiqlənir və müəllim tərəfindən qəbul edilir. Bir panel mərkəzin vəziyyətini istənilən dövr üzrə göstərir.',
    dashboard: {
      label:
        'Nümunə məlumatlarla rəhbər paneli: aylıq gəlir, gecikmiş borc, risk altında olan tələbələr, davamiyyət, doluluq və ümumi marja göstəriciləri',
      title: 'İdarə paneli · Oktyabr',
      periods: ['Bu ay', '3 ay', '12 ay'],
      revenue: { label: 'Aylıq gəlir', value: '7 100 ₼', meta: 'sentyabrla müqayisədə +6%' },
      debt: { label: 'Gecikmiş borc', value: '960 ₼', meta: '3 tələbə' },
      risk: { label: 'Risk altında', value: '5', meta: 'Ardıcıl buraxılan dərslər' },
      gauges: [
        { label: 'Davamiyyət', value: 88 },
        { label: 'Doluluq', value: 77 },
        { label: 'Ümumi marja', value: 41 },
      ],
    },
    pnl: {
      label:
        'Nümunə məlumatlarla mənfəət və zərər qrafiki: tələbə ödənişləri və digər gəlirdən kirayə, kommunal, marketinq və müəllim ödənişləri çıxılır, xalis nəticə alınır',
      title: 'Mənfəət və zərər · Oktyabr',
      rows: [
        { label: 'Tələbə ödənişləri', value: 7100 },
        { label: 'Digər gəlir', value: 450 },
        { label: 'Kirayə', value: -1600 },
        { label: 'Kommunal xərclər', value: -380 },
        { label: 'Marketinq', value: -520 },
        { label: 'Müəllim ödənişləri', value: -2600 },
      ],
      net: 'Xalis nəticə',
    },
    payroll: {
      label:
        'Nümunə məlumatlarla müəllim əmək haqqı: qrupları, keçilmiş dərsləri və məbləğləri ilə üç müəllim; rəhbər ödənişləri təsdiqləyir, müəllimlər qəbul edir',
      title: 'Müəllim əmək haqqı · Oktyabr',
      columns: ['Müəllim', 'Qrup', 'Dərs', 'Məbləğ', 'Status'],
      rows: [
        { name: 'Leyla K.', groups: '3', lessons: '36', amount: '1 080 ₼' },
        { name: 'Rauf M.', groups: '2', lessons: '24', amount: '840 ₼' },
        { name: 'Nigar S.', groups: '2', lessons: '20', amount: '680 ₼' },
      ],
      pending: 'Gözləyir',
      approved: 'Təsdiqləndi',
      accepted: 'Qəbul edildi',
      approve: 'Təsdiqlə',
    },
    features: [
      { title: 'Gəlir və xərclər', text: 'Mərkəzin öz kateqoriyaları, təkrarlanan xərclər və dövrlərin yan-yana müqayisəsi.' },
      {
        title: 'Müəllim əmək haqqı',
        text: 'Qrup və keçilmiş dərsə görə hesablanır. Rəhbər təsdiqləyir, müəllim qəbul edir və ya imtina edir.',
      },
      {
        title: 'Mühasib üçün hesabatlar',
        text: 'Maliyyə hesabatı CSV və PDF formatında ixrac olunur, mühasib rolu isə maliyyəni tələbə məlumatları olmadan görür.',
      },
      { title: 'İstənilən dövr', text: 'Bu ay, keçən ay, son 3, 6 və ya 12 ay, yaxud istədiyiniz aralıq.' },
    ],
  },

  engineering: {
    id: 'engineering',
    km: 'SaaS',
    eyebrow: 'Mühəndislik',
    title: 'Bir platforma, çox mərkəz: hər mərkəzin məlumatı yalnız özünündür',
    accent: 'yalnız özünündür',
    lead: 'eTəhsil multi-tenant SaaS platformadır: hər mərkəz və hər repetitor ayrıca iş sahəsində işləyir, məlumatların izolyasiyası isə yalnız tətbiq kodunda deyil, verilənlər bazasının özündə təmin olunur. Bu təməlin üzərində icazələr, təhlükəsiz giriş, bildirişlər və üç dildə quraşdırıla bilən tətbiq qurmuşuq.',
    isolation: {
      label:
        'Diaqram: üç nümunə iş sahəsi bir verilənlər bazasına sorğu göndərir; hər sorğu yalnız öz iş sahəsinin sətirlərinə çatır, başqa iş sahəsinin məlumatına uzanan sorğu isə bloklanır',
      tenants: ['Demo Akademiya', 'Nümunə Kurs', 'Repetitor · Leyla K.'],
      database: 'Bir verilənlər bazası',
      policy: 'İzolyasiya bazanın özündə',
      blocked: 'Bloklandı',
    },
    principles: [
      {
        title: 'Məlumatların izolyasiyası',
        text: 'Hər mərkəzin qeydləri verilənlər bazası səviyyəsində ayrılıb, ona görə bir mərkəz başqa mərkəzin məlumatını heç vaxt oxumur.',
      },
      {
        title: 'Rollar və icazələr',
        text: 'Qəbul masası və mühasib kimi hazır rollar, baxmaq, əlavə etmək, dəyişmək və silmək səviyyəsinə qədər fərdi icazə qrupları; müəllim isə yalnız öz qruplarını görür.',
      },
      { title: 'Təhlükəsiz giriş', text: 'İki faktorlu autentifikasiya (2FA), Google ilə giriş, əməkdaş və müəllimlər üçün dəvət keçidləri.' },
      {
        title: 'Bir hesab, üç iş sahəsi',
        text: 'Eyni şəxs biznes, müəllim və tələbə iş sahələri arasında ikinci hesab açmadan keçid edir.',
      },
      {
        title: 'Quraşdırıla bilən PWA',
        text: 'Tətbiq istənilən telefona quraşdırılır; Azərbaycan, ingilis və ya rus dilində, açıq və tünd temada.',
      },
      {
        title: 'Testlərlə qorunur',
        text: 'Avtomatlaşdırılmış arxitektura testləri modullar üzrə məlumat izolyasiyasını və icazə qaydalarını yoxlayır.',
      },
    ],
    languages: {
      title: 'Bir interfeys · üç dil',
      codes: ['AZ', 'EN', 'RU'],
      words: [
        ['Davamiyyət', 'Attendance', 'Посещаемость'],
        ['Kassa', 'Cash desk', 'Касса'],
        ['İmtahanlar', 'Exams', 'Экзамены'],
        ['Müqavilələr', 'Contracts', 'Договоры'],
      ],
    },
    integrationsTitle: 'Hazır inteqrasiyalar',
    integrations: [
      { name: 'Payriff', note: 'Kartla onlayn balans artırma' },
      { name: 'Google', note: 'Google hesabı ilə giriş' },
      { name: 'WhatsApp', note: 'Kassadan ödəniş xatırlatmaları' },
      { name: 'Telegram', note: 'Bot vasitəsilə bildirişlər' },
      { name: 'E-poçt', note: 'Dəvətlər və bildirişlər' },
      { name: 'Web push', note: 'Brauzerdə və telefonda bildirişlər' },
    ],
  },

  role: {
    eyebrow: 'Rolumuz',
    title: 'Aibaycan nə etdi',
    items: [
      {
        title: 'Məhsul və UX dizaynı',
        text: 'Mərkəzlərin, repetitorların, müəllimlərin, tələbələrin və valideynlərin real iş qaydasını öyrəndik və hər biri üçün doğru ekranı olan vahid məhsul layihələndirdik.',
      },
      {
        title: 'Multi-tenant arxitektura',
        text: 'Multi-tenant modeli, rolları və icazələri, verilənlər bazası səviyyəsində təmin olunan məlumat izolyasiyasını ilk kod sətrindən layihələndirdik.',
      },
      {
        title: 'Full-stack mühəndislik',
        text: 'API-ni, quraşdırıla bilən veb-tətbiqi, ictimai saytı, DOCX şablonlarından müqavilə hazırlayan mühərriki, variantları və analitikası olan imtahan mühərrikini qurduq.',
      },
      {
        title: 'İnteqrasiyalar',
        text: 'Payriff ilə kartla onlayn balans artırmanı, Google ilə girişi, WhatsApp xatırlatmalarını, Telegram, e-poçt və web push bildirişlərini qoşduq.',
      },
      {
        title: 'İşə salma və idarəetmə',
        text: 'eTəhsil-i canlı SaaS məhsulu kimi istifadəyə verdik və onu özümüz idarə edirik: yeni buraxılışlar, dəstək və yeni modullar.',
      },
    ],
  },
  stack: {
    eyebrow: 'Texnologiyalar',
    title: 'Müasir veb texnologiyaları üzərində qurulub',
    groups: [
      { label: 'Veb-tətbiq', items: ['TypeScript', 'React', 'PWA'] },
      { label: 'Sayt', items: ['Next.js'] },
      { label: 'API', items: ['NestJS', 'TypeScript'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis'] },
    ],
  },
  faq: {
    title: 'eTəhsil barədə ən çox verilən suallar',
    items: [
      {
        q: 'eTəhsil real, işlək məhsuldurmu?',
        a: 'Bəli. eTəhsil öz məhsulumuzdur və canlıdır: sayt və tətbiq etehsil.az ünvanında işləyir. Onu biz layihələndirib qurmuşuq və özümüz idarə edirik.',
      },
      {
        q: 'Hər mərkəzin məlumatı necə ayrı saxlanılır?',
        a: 'Hər mərkəz ayrıca iş sahəsində işləyir, məlumatların izolyasiyası isə yalnız tətbiq kodunda deyil, verilənlər bazasının özündə təmin olunur. Mərkəzin daxilində isə kimin nəyi görəcəyini rollar və icazələr müəyyən edir: müəllim yalnız öz qruplarını görür, qəbul masası ümumi gəliri görmür, valideyn isə yalnız öz övladını görür.',
      },
      {
        q: 'Valideyn və müəllim nəsə quraşdırmalıdırmı?',
        a: 'Xeyr. Valideyn şəxsi keçidi açıb PIN kodu daxil edir. Müəllimlər, əməkdaşlar və tələbələr veb-tətbiqdən istifadə edir; o, telefona PWA kimi Azərbaycan, ingilis və ya rus dilində quraşdırılır.',
      },
      {
        q: 'Hansı yerli xidmətlərə qoşulur?',
        a: 'Kartla onlayn balans artırma üçün Payriff, Google ilə giriş, ödəniş xatırlatmaları üçün WhatsApp, bildirişlər üçün isə Telegram, e-poçt və web push.',
      },
      {
        q: 'Başqa sahə üçün belə bir platformaya ehtiyacımız var. Haradan başlayaq?',
        a: 'Sizin proseslərinizdən. eTəhsil-in təməli digər vertikal SaaS məhsullarına və daxili sistemlərə birbaşa keçir: multi-tenant arxitektura, rollar və icazələr, şablondan sənədlər, ödənişlər, bildirişlər və idarəetmə panelləri. İşinizin bu gün necə getdiyini bizə danışın, konkret planla qayıdırıq.',
      },
    ],
  },
  railLabels: {
    challenge: 'Problem',
    schedule: 'Cədvəl',
    attendance: 'Davamiyyət',
    payments: 'Ödənişlər',
    contracts: 'Müqavilələr',
    exams: 'İmtahanlar',
    owner: 'Rəhbər',
    engineering: 'Mühəndislik',
  },
  sampleDataNote: 'Ekranlardakı adlar və rəqəmlər nümunə kimi verilib.',
  mockupAriaLabel: 'Nümunə məlumatlarla eTəhsil ekranının təsviri',
};

export default az;
