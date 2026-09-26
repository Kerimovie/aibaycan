// eTəhsil case study (/[locale]/projects/etehsil-az), AZ. Prose written for Aibaycan (not shared with other sites),
// typed against the EN type source. Names and figures on screens are sample data.
import type { EtehsilCopy } from './en';

const az: EtehsilCopy = {
  seo: {
    title: 'eTəhsil — kurs və tədris mərkəzləri üçün idarəetmə proqramı',
    description:
      'Aibaycan-ın qurub idarə etdiyi eTəhsil kurslar və repetitorlar üçün SaaS-dır: avtomatik cədvəl, davamiyyət, borc izləmə, müqavilə, imtahan və valideyn portalı.',
  },
  h1: 'Kurs mərkəzini və fərdi repetitorluğu idarə edən proqram',
  hero: {
    eyebrow: 'SaaS platforması · EdTech',
    title: 'Kurs mərkəzinin bütün işi tək ekranda',
    accent: 'tək ekranda',
    lead: 'eTəhsil kurs mərkəzləri və müstəqil repetitorlar üçün bizə məxsus SaaS platformasıdır: dizaynından koduna qədər onu biz hazırlamışıq, gündəlik idarəsini də özümüz aparırıq. Dərs cədvəli, davamiyyət, ödəniş və borclar, müqavilələr, imtahanlar, valideynlərlə əlaqə və müəllim maaşı burada bir sistemdə birləşir; interfeys Azərbaycan, ingilis və rus dillərindədir.',
    primaryCta: 'Belə bir layihə planlayaq',
  },
  facts: { platforms: 'Veb · PWA', languages: 'AZ · EN · RU' },

  heroScreen: {
    label:
      'eTəhsil ekranının nümunə məlumatlı maketi: Demo Akademiyanın həftəlik cədvəli, vaxtı keçmiş borc kartı, yadda saxlanmış davamiyyət və hazırda gedən imtahan',
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
    eyebrow: 'Başlanğıc nöqtəsi',
    title: 'Kağız jurnal, səpələnmiş fayllar və bitməyən yazışmalar',
    accent: 'bitməyən yazışmalar',
    lead: 'Administratorun günü dərsdən xeyli əvvəl başlayır: kağız jurnal, bir faylda dərs cədvəli, başqa faylda borclular, hər sinfə ayrıca WhatsApp qrupu. Hər kəsin əlində mərkəzin bir parçası var, amma tam mənzərəni görən yoxdur. Ayın yekunu isə rəhbərə ancaq ay artıq geridə qalanda məlum olur.',
    desk: {
      label:
        'Köhnə iş qaydası: qeydləri pozulub-yazılmış kağız jurnal, eyni otağa iki qrup düşən cədvəl faylı və sualla dolub-daşan valideyn çatı',
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
        title: 'Eyni otaq, iki qrup',
        text: 'Otaq iki qrupa birdən verilir və səhv ancaq hər iki qrup eyni qapının ağzında rastlaşanda bilinir.',
      },
      {
        title: 'Jurnal yenidən köçürülür',
        text: 'Müəllim qeydi kağıza yazır, sonra kimsə onu kompüterə köçürür; üç dərsi dalbadal buraxan tələbə isə diqqətdən kənarda qalır.',
      },
      {
        title: 'Borclar yaddaşa ümid',
        text: 'Kimin nə qədər borcu olduğu və nə vaxtdan gecikdiyi ay sonunda qeydlərdən bir-bir toplanır. Xatırlatma ya gecikir, ya ümumiyyətlə göndərilmir.',
      },
      {
        title: 'Müqavilə və imtahan əl ilə',
        text: 'Müqavilə hər tələbə üçün Word-də ayrıca düzəldilir. İmtahan sual-sual yığılır, bir otaqdakı tələbələrə fərqli variantlar hazırlamaq isə praktikada alınmır.',
      },
      {
        title: 'Maaş kalkulyatorla hesablanır',
        text: 'Müəllim maaşını çıxarmaq üçün hər qrupun dərsləri tək-tək sayılır, bu arada valideynlər zəng edib uşağın dərsdə olub-olmadığını və qalan borcu soruşur.',
      },
    ],
    flowTitle: 'eTəhsil-də bunların hamısı bir axındır',
    flow: ['Dərs keçirilir', 'Davamiyyət işarələnir', 'Balans yenilənir', 'Valideyn bunu görür', 'Rəhbər yekunu görür'],
  },

  schedule: {
    id: 'schedule',
    km: '08:00',
    eyebrow: 'Dərs cədvəli · Otaqlar',
    title: 'Bütün kurs cədvəli avtomatik hazırlanır, otaq toqquşması olmur',
    accent: 'avtomatik hazırlanır',
    lead: 'Qrupun həftəlik qrafiki cəmi bir dəfə yazılır. Ondan eTəhsil kursun bütün dərslərini çıxarır, hər birinə tarix, otaq və müəllim bağlayır, bütün mərkəzi isə ortaq təqvimdə göstərir.',
    steps: [
      {
        title: 'Həftəni təsvir edin',
        text: 'Hansı günlər, saat neçədə, nə qədər, hansı otaqda və kimlə, bir də kursda neçə dərs olduğu. Cədvəl üçün başqa heç nə tələb olunmur.',
      },
      {
        title: 'Hər dərsin öz tarixi var',
        text: 'Kursun bütün dərsləri yaradılır, bitmə tarixi də sonuncu dərsdən götürülür. Yenidən yaratsanız, yalnız qarşıdakı dərslər dəyişir; keçilmişlər olduğu kimi qalır.',
      },
      {
        title: 'Bir otaqda iki qrup olmur',
        text: 'Dərs eyni saatda eyni otağa iki qrup yerləşdirəcəksə, eTəhsil buna icazə vermir və otağın hansı vaxt məşğul olduğunu göstərir. Rəhbər məsələni sinfin qapısı ağzında deyil, ekranda həll edir.',
      },
    ],
    screen: {
      label:
        'Nümunə məlumatlı cədvəl maketləri: IELTS B2 qrupunun həftəlik qrafik forması, oktyabr təqviminin nömrəli dərslərlə dolması və Riyaziyyat 11 ilə toqquşmanı bloklayıb dərsi boş otağa keçirən otaq lövhəsi',
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
      { title: 'Gündən ilə qədər görünüş', text: 'Bütün mərkəz üçün bir təqvim; onu müəllimə və ya qrupa görə süzmək olar.' },
      { title: 'Ləğv və köçürmə', text: 'Hər dəyişikliyin səbəbi yazılır, ləğv olunan dərs isə qayıb kimi sayılmır.' },
      { title: 'Otaqlar və yer sayı', text: 'Otaqlar tutumu ilə birlikdə saxlanılır, hər dərs konkret otağa aiddir.' },
      { title: 'Hamı xəbər tutur', text: 'Dərs ləğv ediləndə və ya vaxtı dəyişəndə tələbələr və müəllimlər bildiriş alır.' },
    ],
  },

  attendance: {
    id: 'attendance',
    km: '10:30',
    eyebrow: 'Davamiyyət · Valideyn portalı',
    title: 'Qeyd müəllimdən, nəticə valideynin ekranında',
    accent: 'valideynin ekranında',
    lead: 'Dərs başlayanda müəllimə üç hərəkət kifayətdir: «Hamı iştirak edir», gəlməyən yeganə tələbənin statusunu dəyişmək və «Yadda saxla». Valideyn bu qeydi keçid və PIN kodla daxil olduğu portalda izləyir: tətbiq quraşdırmaq da, hesab yaratmaq da lazım gəlmir.',
    teacherPhone: {
      label:
        'Müəllim telefonunun nümunə məlumatlı maketi: IELTS B2 dərsində biri istisna olmaqla hamı gəlib, qeyd saxlanılıb və 24 saatdan sonra kilidlənəcək',
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
        'Valideyn portalının nümunə məlumatlı maketi: keçid və PIN kodla giriş, davamiyyət, aktiv qruplar, gözlənilən ödəniş və son dərslər',
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
    sync: 'Eyni qeyd · iki ekranda',
    points: [
      {
        label: 'Tək toxunuş',
        text: '«Hamı iştirak edir» bütün qrupu bir dəfəyə qeyd edir; müəllimə yalnız istisnaları — qayıb və ya üzrlü — dəyişmək qalır.',
      },
      {
        label: '24 saatlıq kilid',
        text: '24 saat keçəndən sonra müəllim qeydləri dəyişə bilmir; onları yenidən açmaq yalnız mərkəz rəhbərliyinin əlindədir.',
      },
      {
        label: 'Risk siyahısı',
        text: 'Dərsləri dalbadal buraxanlar valideyn sual verməmişdən çox-çox əvvəl ayrıca siyahıda toplanır.',
      },
      {
        label: 'Valideyn portalı',
        text: 'Şəxsi keçid və PIN yalnız bir uşağın davamiyyətini, ödənişlərini və cədvəlini göstərir: ancaq baxış, artıq heç nə.',
      },
    ],
  },

  payments: {
    id: 'payments',
    km: '12:30',
    eyebrow: 'Kassa · Borclar',
    title: 'Kim, nə qədər gecikib — xatırlatma da hazırdır',
    accent: 'xatırlatma da hazırdır',
    lead: 'Tələbə kursa yazılan kimi onun ödəniş planı yaranır. Nağd, kartla və ya köçürmə ilə, tam yaxud hissə-hissə — hər ödəniş bu plana əlavə olunur və qəbz alır. Kassa ən uzun müddət ödəməyənləri siyahının başına çıxarır, onlardan hər birinə WhatsApp xatırlatması göndərmək isə bir klikdir.',
    screen: {
      label:
        'Kassanın nümunə məlumatlı maketi: ümumi və gecikmiş borclar, gecikmə gününə görə düzülmüş tələbələr, WhatsApp xatırlatması üçün seçilən üç nəfər və qəbzlə qeydə alınan ödəniş',
      title: 'Kassa',
      kpis: [
        { label: 'Ümumi borc', before: '2 430 ₼', after: '2 210 ₼', meta: '8 tələbə' },
        { label: 'Gecikmiş', before: '1 180 ₼', after: '960 ₼', meta: '4 → 3 tələbə' },
        { label: 'Oktyabrda yığılan', before: '6 880 ₼', after: '7 100 ₼', meta: 'Bu ay ödənilib' },
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
        'WhatsApp xatırlatmalarının nümunə məlumatlı maketi: birbaşa kassadan hazırlanıb valideynlərə ünvanlanan, gecikmiş ödənişlərlə bağlı üç mesaj',
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
      { title: 'Ödəniş planları', text: 'Qeydiyyat anında qurulur: aylıq və ya hissə-hissə, endirim düşürsə, o da nəzərə alınır.' },
      { title: 'Hissə-hissə ödəniş və avans', text: 'İndi bir hissəni ödəmək və ya avansı gələn aya keçirmək olar. Qalıq avtomatik yenilənir.' },
      {
        title: 'Qəbzlər və tam tarixçə',
        text: 'Hər ödəniş üçün qəbz çıxır. Ləğv olunan ödəniş tarixçədən silinmir, borc isə öz-özünə geri qayıdır.',
      },
      {
        title: 'Rola görə giriş',
        text: 'Qəbul masası ödəniş alır və qəbz verir, amma mərkəzin ümumi gəliri ona görünmür.',
      },
    ],
  },

  contracts: {
    id: 'contracts',
    km: '14:00',
    eyebrow: 'Müqavilələr',
    title: 'İşlətdiyiniz müqavilə avtomatik doldurulub nömrələnir',
    accent: 'avtomatik doldurulub nömrələnir',
    lead: 'Mərkəz hazırda işlətdiyi Word müqaviləsini sistemə yükləyir. eTəhsil içindəki hər dəyişəni aşkar edir, məlumatı olmayanları əvvəlcədən bildirir və hər tələbəyə tələbənin, valideynin, kursun və ödənişin məlumatları ilə doldurulmuş nömrəli PDF verir.',
    screen: {
      label:
        'Müqavilə hazırlanmasının nümunə məlumatlı maketi: Word şablonundakı altı dəyişən növbə ilə tələbənin nömrəli PDF müqaviləsinə köçür, sonra müqavilə imzalanmış kimi işarələnir',
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
        label: 'Sizin mətniniz',
        text: 'Hüquqi mətn mərkəzin yazdığı kimi qalır, eTəhsil ancaq məlumatları yerləşdirir. Hər dil üçün standart şablon da var.',
      },
      {
        label: 'Dəyişən yoxlaması',
        text: 'Xam dəyişən kimi çapa düşə biləcək sahələr ilk müqavilə verilməzdən əvvəl işarələnir.',
      },
      { label: 'Nömrələmə', text: 'Nömrələri sistem ardıcıllıqla verir, iki müqavilə eyni nömrəni ala bilməz.' },
      {
        label: 'İmza statusu',
        text: 'Gözləyir, imzalanıb və ya müddəti bitib; bitməsinə az qalanlar yuxarı qalxır.',
      },
      { label: 'Müqaviləsizlər', text: 'Müqaviləsi hələ bağlanmamış aktiv tələbələr ayrıca siyahıda toplanır.' },
    ],
  },

  exams: {
    id: 'exams',
    km: '16:00',
    eyebrow: 'Sual bankı · İmtahanlar',
    title: 'İmtahan 3 addımda qurulur, hər tələbə öz variantını alır',
    accent: 'hər tələbə öz variantını alır',
    lead: 'İmtahanın adını yazın, fənləri seçin və hər fənn üzrə neçə sual, hansı mövzulardan düşəcəyini göstərin. Qalanını eTəhsil edir: bütün variantları mərkəzin sual bankından, heç bir sualı iki dəfə işlətmədən toplayır. Tələbələr taymerlə yazır, avtomatik yoxlana bilən nə varsa, avtomatik yoxlanılır, nəticələr isə mövzu-mövzu açılır.',
    builder: {
      label:
        'İmtahan şablonu konstruktorunun nümunə məlumatlı maketi: üç addım (əsas, fənlər, suallar) və sualları fərqli sırada düzülmüş dörd variant',
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
        'İmtahan yazan tələbənin ekranı (nümunə məlumat): beş variantlı riyaziyyat sualı, işləyən taymer və qeydə düşmüş pəncərə dəyişməsi',
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
        'İmtahan nəticələri (nümunə məlumat): balların paylanma qrafiki və ən çox səhv edilən dörd mövzu',
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
        text: 'Doqquz sual tipi — tək seçimdən və uyğunlaşdırmadan tutmuş ədədi cavaba və esseyə qədər. Fənn, mövzu və çətinliyə görə qruplaşdırılır, riyazi yazılış dəstəklənir.',
      },
      {
        title: 'Şablon və variantlar',
        text: 'İmtahanın tərkibi şablonda bir dəfə saxlanılır; hər istifadədə yeni variantlar yaranır və bir və ya bir neçə qrupa təyin olunur.',
      },
      {
        title: 'Vaxtlı və qonaq imtahanları',
        text: 'Bütün imtahana və ya hər bölməyə ayrıca vaxt, avtomatik təhvil, pəncərə dəyişməsinə nəzarət, kənardan gələnlər üçün isə istəyə bağlı PIN-li qonaq keçidi.',
      },
      {
        title: 'Yoxlama və analitika',
        text: 'Qapalı sualları sistem, açıq cavabları müəllim yoxlayır; səhvlər mövzulara görə həm bütün mərkəz, həm də ayrı-ayrı tələbə üzrə hesablanır.',
      },
    ],
  },

  owner: {
    id: 'owner',
    km: '21:00',
    eyebrow: 'Rəhbər paneli · Əmək haqqı',
    title: 'Ay bitməmiş, yekun artıq ekranda',
    accent: 'yekun artıq ekranda',
    lead: 'Gəlir kassadan özü axıb gəlir. Xərclər kateqoriyalara görə daxil edilir, daimi xərcləri isə hər ay yenidən yazmaq lazım deyil. Müəllim maaşı qrup və keçirilmiş dərs sayına görə hesablanır: rəhbər təsdiq edir, müəllim qəbul edir. Mərkəzin istənilən dövrdəki vəziyyəti bir paneldə görünür.',
    dashboard: {
      label:
        'Rəhbər panelinin nümunə məlumatlı maketi: aylıq gəlir, gecikmiş borc, risk qrupundakı tələbələr, habelə davamiyyət, doluluq və ümumi marja göstəriciləri',
      title: 'İdarə paneli · Oktyabr',
      periods: ['Bu ay', '3 ay', '12 ay'],
      revenue: { label: 'Aylıq gəlir', value: '7 100 ₼', meta: 'sentyabrla müqayisədə +6%' },
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
        'Mənfəət və zərər qrafiki (nümunə məlumat): tələbə ödənişləri və digər gəlirlərdən kirayə, kommunal, marketinq və müəllim ödənişləri çıxılır, geriyə xalis nəticə qalır',
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
        'Müəllim əmək haqqı cədvəli (nümunə məlumat): üç müəllim, onların qrupları, keçirilmiş dərsləri və məbləğləri; ödənişi rəhbər təsdiqləyir, müəllim qəbul edir',
      title: 'Müəllim əmək haqqı · Oktyabr',
      columns: ['Müəllim', 'Qrup', 'Dərs', 'Məbləğ', 'Status'],
      rows: [
        { name: 'Leyla K.', groups: '3', lessons: '36', amount: '1 080 ₼' },
        { name: 'Rauf M.', groups: '2', lessons: '24', amount: '840 ₼' },
        { name: 'Nigar S.', groups: '2', lessons: '20', amount: '680 ₼' },
      ],
      pending: 'Gözləyir',
      approved: 'Təsdiqləndi',
      accepted: 'Qəbul edildi',
      approve: 'Təsdiqlə',
    },
    features: [
      { title: 'Gəlir və xərc', text: 'Mərkəzin özünün təyin etdiyi kateqoriyalar, daimi xərclər və dövrlərin bir-biri ilə müqayisəsi.' },
      {
        title: 'Müəllim maaşı',
        text: 'Qruplara və faktiki keçirilmiş dərslərə əsasən çıxarılır. Rəhbər təsdiqləyir, müəllim razılaşır və ya imtina edir.',
      },
      {
        title: 'Mühasib üçün hazır hesabat',
        text: 'Maliyyə hesabatını CSV və PDF-ə çıxarmaq olur; mühasib rolu maliyyəyə baxır, tələbə məlumatlarına isə çıxışı yoxdur.',
      },
      { title: 'Çevik dövr seçimi', text: 'Cari və ya ötən ay, son 3, 6, 12 ay, yaxud özünüz seçdiyiniz tarix aralığı.' },
    ],
  },

  engineering: {
    id: 'engineering',
    km: 'SaaS',
    eyebrow: 'Texniki tərəf',
    title: 'Çox mərkəz bir platformada, amma məlumatları bir-birinə qapalıdır',
    accent: 'bir-birinə qapalıdır',
    lead: 'eTəhsil multi-tenant SaaS kimi qurulub: hər mərkəzin və hər repetitorun ayrıca iş sahəsi (tenant) var, onların məlumatını bir-birindən ayıran isə təkcə tətbiq kodu deyil, verilənlər bazasının özüdür. Bu nüvənin üzərində icazələr sistemi, təhlükəsiz giriş, bildirişlər və üç dildə telefona qurulan tətbiq hazırlamışıq.',
    isolation: {
      label:
        'Sxem: üç nümunə iş sahəsi ortaq verilənlər bazasına müraciət edir; hər müraciət ancaq öz iş sahəsinə aid sətirlərə çatır, özgə iş sahəsinə uzanan müraciət isə bloklanır',
      tenants: ['Demo Akademiya', 'Nümunə Kurs', 'Repetitor · Leyla K.'],
      database: 'Bir verilənlər bazası',
      policy: 'İzolyasiya bazanın özündə',
      blocked: 'Bloklandı',
    },
    principles: [
      {
        title: 'Məlumat təcridi',
        text: 'Hər mərkəzin sətirləri bazanın özündə hasarlanıb, buna görə bir mərkəz digərinin məlumatını heç cür oxuya bilməz.',
      },
      {
        title: 'Rollar və icazələr',
        text: 'Qəbul masası, mühasib kimi hazır rollar; baxmaq, əlavə etmək, redaktə və silməyə qədər incələnən fərdi icazə qrupları; müəllimə isə yalnız öz qrupları açıqdır.',
      },
      { title: 'Təhlükəsiz giriş', text: 'İki faktorlu doğrulama (2FA), Google hesabı ilə giriş, əməkdaş və müəllimlər üçün dəvət linkləri.' },
      {
        title: 'Bir hesab — üç iş sahəsi',
        text: 'Eyni insan ikinci hesab açmadan biznes, müəllim və tələbə iş sahələri arasında keçə bilir.',
      },
      {
        title: 'Telefona qurulan PWA',
        text: 'Tətbiqi istənilən telefona qurmaq olar; dil — Azərbaycan, ingilis və ya rus, tema — açıq və ya tünd.',
      },
      {
        title: 'Testlərin nəzarətində',
        text: 'Avtomatik arxitektura testləri bütün modullarda iş sahələrinin təcridini və icazə qaydalarını yoxlayır.',
      },
    ],
    languages: {
      title: 'Eyni interfeys · üç dil',
      codes: ['AZ', 'EN', 'RU'],
      words: [
        ['Davamiyyət', 'Attendance', 'Посещаемость'],
        ['Kassa', 'Cash desk', 'Касса'],
        ['İmtahanlar', 'Exams', 'Экзамены'],
        ['Müqavilələr', 'Contracts', 'Договоры'],
      ],
    },
    integrationsTitle: 'Qoşulmuş xidmətlər',
    integrations: [
      { name: 'Payriff', note: 'Kartla onlayn balans artırılması' },
      { name: 'Google', note: 'Google hesabı ilə daxil olmaq' },
      { name: 'WhatsApp', note: 'Ödəniş xatırlatmaları birbaşa kassadan' },
      { name: 'Telegram', note: 'Bot üzərindən bildirişlər' },
      { name: 'E-poçt', note: 'Dəvət və bildirişlər' },
      { name: 'Web push', note: 'Brauzer və telefon bildirişləri' },
    ],
  },

  role: {
    eyebrow: 'Bizim işimiz',
    title: 'Aibaycan-ın gördüyü işlər',
    items: [
      {
        title: 'Məhsul və UX dizaynı',
        text: 'Mərkəzlərin, repetitorların, müəllimlərin, tələbələrin və valideynlərin gündəlik işini yaxından araşdırdıq və hər birinə lazım olan ekranı verən tək bir məhsul düşündük.',
      },
      {
        title: 'Multi-tenant arxitektura',
        text: 'İş sahələri modelini, rolları, icazələri və bazanın özündə işləyən məlumat təcridini lap ilk kod sətrindən planladıq.',
      },
      {
        title: 'Full-stack mühəndislik',
        text: 'API-ni, telefona qurulan veb-tətbiqi, ictimai saytı, DOCX şablonları ilə işləyən müqavilə mühərrikini, variantlı və analitikalı imtahan mühərrikini hazırladıq.',
      },
      {
        title: 'İnteqrasiyalar',
        text: 'Payriff üzərindən kartla balans artırmanı, Google ilə girişi, WhatsApp xatırlatmalarını, həmçinin Telegram, e-poçt və web push bildirişlərini sistemə bağladıq.',
      },
      {
        title: 'İstifadəyə vermə və dəstək',
        text: 'eTəhsil-i canlı SaaS məhsulu kimi işə saldıq və onu özümüz işlədirik: yeni buraxılışlar, istifadəçi dəstəyi, əlavə modullar.',
      },
    ],
  },
  stack: {
    eyebrow: 'Texnoloji baza',
    title: 'TypeScript əsaslı müasir stek',
    groups: [
      { label: 'Veb-tətbiq', items: ['TypeScript', 'React', 'PWA'] },
      { label: 'İctimai sayt', items: ['Next.js'] },
      { label: 'API', items: ['NestJS', 'TypeScript'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis'] },
    ],
  },
  faq: {
    title: 'eTəhsil haqqında suallar',
    items: [
      {
        q: 'eTəhsil həqiqətən işləyən məhsuldur, yoxsa konsepsiya?',
        a: 'İşləyən məhsuldur. eTəhsil bizim öz məhsulumuzdur: saytı və tətbiqi etehsil.az-da aktivdir. Dizaynı da, kodu da, gündəlik idarəsi də bizdədir.',
      },
      {
        q: 'Bir mərkəzin məlumatı digərindən necə ayrılır?',
        a: 'Hər mərkəz ayrıca iş sahəsidir və bu ayrılığı təkcə tətbiq kodu yox, verilənlər bazasının özü təmin edir. Mərkəzin içində isə kimin nəyə baxa biləcəyini rollar və icazələr həll edir: müəllim ancaq öz qruplarına baxa bilir, qəbul masası ümumi gəlirə çıxış əldə etmir, valideyn isə yalnız öz övladını görür.',
      },
      {
        q: 'Hansı yerli xidmətlərlə inteqrasiya var?',
        a: 'Payriff (kartla onlayn balans artırma), Google (hesabla giriş), WhatsApp (ödəniş xatırlatmaları), bildirişlərdə isə Telegram, e-poçt və web push işləyir.',
      },
      {
        q: 'Valideynlərin və müəllimlərin nəyisə quraşdırması lazımdır?',
        a: 'Lazım deyil. Valideyn ona göndərilən şəxsi keçidi açır və PIN kodu yazır. Müəllimlər, əməkdaşlar və tələbələr veb-tətbiqdə işləyir; onu telefona PWA kimi qurmaq da olar — Azərbaycan, ingilis və ya rus dilində.',
      },
      {
        q: 'Başqa sahə üçün oxşar platforma lazımdır. İş haradan başlayır?',
        a: 'İş qaydanızı öyrənməkdən. eTəhsil-in altında duran həllər — multi-tenant arxitektura, rollar və icazələr, şablon əsasında sənədlər, ödənişlər, bildirişlər, idarəetmə panelləri — başqa vertikal SaaS məhsullarına və daxili sistemlərə olduğu kimi köçürülə bilir. Bu gün işin necə qurulduğunu danışın, biz konkret planla qayıdaq.',
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
  sampleDataNote: 'Ekranlarda görünən ad və rəqəmlər şərtidir.',
  mockupAriaLabel: 'eTəhsil ekranının nümunə məlumatlı maketi',
};

export default az;
