// Molecion case study, AZ. Faktlar Atlas `src/i18n/az/cases/molecion.ts` ilə eynidir, amma bütün mətnlər Aibaycan
// üçün yenidən yazılıb (dublikat kontent olmasın) — Atlas ifadələrini bura geri köçürməyin.
// /[locale]/projects/molecion-az açarları (AZ). Forma və fəsil `id`-ləri src/i18n/en/cases/molecion.ts ilə eynidir;
// hər fəsildə `accent` mütləq `title`-ın dəqiq alt sətri olmalıdır.
// Mockup mətnləri uydurma nümunə datadır: brend və ətir adları mövcud deyil, bütün maya, marja, kurs və
// qiymət `samples.masked` ilə gizlədilir. Həndəsə (zolaq sayı, sütun uzunluğu) data.ts-dədir, burada yox.
// İddialar: platforma qurulub, test olunub və yerləşdirilməyə hazırdır — onun haqqında heç vaxt «canlıdır»,
// «istifadədədir» və ya «satış aparır» deyilmir (biznesin özünün ətir satması EN mətnində olduğu kimi qalır).
// `molecion.az` yalnız mətndir, link deyil. Səhifədəki yeganə rəqəmlər kataloq
// miqyasıdır (125 brend, ≈1 100 ətir, ≈1 600 ölçü, 1 992 notluq kitabxana, 3 dil) və 14 bölmədir.
import type { MolecionCopy } from './en';

const az: MolecionCopy = {
  seo: {
    title: 'Molecion: parfümeriya üçün onlayn mağaza və qiymət importu',
    description:
      'Aibaycan Bakıdakı ətir satıcısı üçün üç dilli onlayn mağaza qurdu: təchizatçı qiymət siyahısının importu, marja qaydalı qiymət mühərriki və arxa ofis.',
  },
  h1: 'Təchizatçı qiymətlərini avtomatik yükləyən parfümeriya onlayn mağazası',
  hero: {
    eyebrow: 'Ətir pərakəndəsi · Onlayn mağaza · Arxa ofis sistemi',
    title: 'Mağaza işin asan hissəsi idi',
    accent: 'asan hissəsi idi',
    lead: 'Molecion Bakıda orijinal dizayner və niş ətirlər satan pərakəndə satıcıdır. Onun üçün qurduğumuz onlayn satış kanalının mərkəzində müştəri etibarını həll edən hissə dayanır — təchizatçının qiymət siyahısı. Siyahı dollarla gəlir, kataloqda təxminən 1 100 ətir və 1 600-ə yaxın ölçü var, bir ehtiyatsız uyğunlaşdırma isə səssizcə başqa flakonun qiymətini dəyişir.',
    primaryCta: 'Mağazanızı bizimlə müzakirə edin',
    secondaryCta: 'Qiymət siyahısı necə işləyir',
  },
  facts: {
    platforms: 'Vitrin · Quraşdırıla bilən PWA · Arxa ofis',
    languages: 'Azərbaycan · İngilis · Rus',
  },

  status: {
    label: 'Status',
    value: 'Qurulub, test olunub və yerləşdirilməyə hazırdır',
    domain: 'molecion.az · tezliklə açılır',
    note: 'Qiymət mühərriki və kataloq artıq satıcının real məlumatları ilə işləyir. İctimai açılış üçün məhsul fotoçəkilişi və domen gözlənilir.',
  },

  samples: {
    houses: { maison: 'Maison Demo', atelier: 'Atelier Nümunə', noir: 'Demo Noir' },
    fragrances: { nuit: 'Nuit Le Parfum', vitrine: 'Vitrine Demo', absolu: 'Absolu Nümunə' },
    rows: {
      nuitEdp90: 'MAISON DEMO NUIT LE PARFUM EDP L 90ML',
      nuitEdp30: 'MAISON DEMO NUIT LE PARFUM EDP L 30ML',
      nuitEdt90: 'MAISON DEMO NUIT LE PARFUM EDT L 90ML',
      vitrineTester: 'ATELIER NUMUNE VITRINE DEMO EDP L 100ML TESTER',
      absolu: 'DEMO NOIR ABSOLU NUMUNE PARFUM UNISEX 75ML',
      bodyMist: 'MAISON DEMO BODY MIST 200ML',
      giftSet: 'MAISON DEMO NUIT LE PARFUM EDP L 90ML+2X30ML SET',
    },
    concentrations: { edp: 'EDP', edt: 'EDT', parfum: 'Parfum' },
    concentrationNames: { edp: 'Eau de Parfum', edt: 'Eau de Toilette', parfum: 'Parfum' },
    genders: { women: 'Qadın', men: 'Kişi', unisex: 'Uniseks' },
    sizes: { ml30: '30 ml', ml50: '50 ml', ml75: '75 ml', ml90: '90 ml', ml100: '100 ml', tester: 'Tester' },
    listRef: 'Nümunə siyahı 07',
    masked: '•••',
    maskNote: 'Gizlədilib',
  },

  heroVisual: {
    ariaLabel:
      'Təchizatçı sətri sağ ucdan beş sahəyə bölünür, tək kimlik kartında birləşir və sonda gizlədilmiş satış qiymətinə çevrilir',
    rowLabel: 'Təchizatçının sətri',
    identityLabel: 'Bir ətir',
    priceLabel: 'Satış qiyməti',
    fields: { house: 'Brend', name: 'Ad', concentration: 'Konsentrasiya', gender: 'Cins', size: 'Ölçü' },
    verdict: 'Dörd sahə və ölçü üzrə uyğunlaşdırıldı',
    chainLabel: 'Maya → qiymət',
    steps: { cost: 'Maya', rate: 'Kurs', coefficient: 'Əmsal', margin: 'Marja', shelf: 'Satış' },
  },

  challenge: {
    id: 'challenge',
    eyebrow: 'Çətinlik',
    title: 'Uyğunluq səhvdirsə, qiymət də səhvdir',
    accent: 'qiymət də səhvdir',
    lead: 'Ətir mağazasının kataloqu əslində məhsullardan yox, flakonlardan ibarətdir. Bir ətir 30, 50, 90 ml və tester kimi satılır, bəzən isə iki dəfə: eyni adlı eau de parfum və eau de toilette tamamilə ayrı ətirlərdir. Gələn qiymət siyahısının hər sətri bu ölçülərdən yalnız birinə düşməlidir — ya da heç birinə.',
    sheet: {
      ariaLabel:
        'Təchizatçı sətirləri — hər biri brend, ad, konsentrasiya, cins və ölçünü birlikdə daşıyan mətn — hələ kataloqdakı ölçülərlə tutuşdurulmayıb',
      title: 'Uyğunlaşdırılmağı gözləyən sətirlər',
      columnRow: 'Bir sətir, bir mətn',
      columnCost: 'Maya',
      columnMatch: 'Uyğunluq',
      unknown: '?',
      question: 'Bu sətir təxminən 1 600 ölçüdən hansıdır?',
      byHand: 'Əl ilə',
      byHandValue: 'heç vaxt sonu gəlməyən iş',
    },
    pains: [
      {
        title: 'Satış qiyməti sadəcə üstəlik deyil',
        text: 'Təchizatçı dollarla qiymət verir, müştəri manatla ödəyir. Aradakı yol kursdan, əmsaldan və brendə, ölçüyə, mayaya görə dəyişən marjadan keçir.',
      },
      {
        title: 'Kataloq ölçülərdən ibarətdir',
        text: 'Təxminən 1 100 ətirdən 1 600-ə yaxın flakon və tester yaranır. Hər sətir ya onlardan dəqiq birinə uyğun gəlir, ya da mağazada hələ olmayan bir şeydir.',
      },
      {
        title: 'Onları yalnız çap olunan ad bağlayır',
        text: 'Təchizatçı ətri insan oxusun deyə öz bildiyi kimi yazır, kataloq isə başqa cür. İki tərəf arasında ortaq kod yoxdur.',
      },
      {
        title: 'Səhv uyğunluq xəbər vermir',
        text: 'Nə xəta çıxır, nə xəbərdarlıq. Sadəcə bir ətir kimsə təsadüfən görənə qədər vitrində başqasının qiyməti ilə dayanır.',
      },
      {
        title: 'Məhsul bazası sıfırdan lazım idi',
        text: 'Biznesin əlində qiymət siyahısı ilə fotolardan başqa heç nə yox idi: brendlər, ölçülər, təsvirlər — mağaza qurmaq üçün təməl yox idi.',
      },
    ],
    rule: {
      label: 'Əsas prinsipimiz',
      text: 'İnsan baxmadan heç bir qiymət dəyişmir. İmport modulu qərarı hazırlayır, amma onu heç vaxt özü vermir.',
    },
    scale: {
      title: 'Qurub doldurduğumuz kataloq',
      ariaLabel: 'Kataloqun həcmi: brendlər, ətirlər, ölçülər, not kitabxanası və dillər',
      items: [
        { value: '125', label: 'Kataloqdakı brend' },
        { value: '≈ 1 100', label: 'Ətir' },
        { value: '≈ 1 600', label: 'Ölçü və tester' },
        { value: '1 992', label: 'İnqrediyent notları kitabxanası' },
        { value: '3', label: 'Dil' },
      ],
      note: 'Hər ətrin tam qoxu profili var: akkordları, üst-orta-alt notlardan qurulan piramida və hansı vaxt üçün uyğun olduğu.',
    },
  },

  parse: {
    id: 'parse',
    eyebrow: 'Sətrin təhlili',
    title: 'Parser sondan başlayır',
    accent: 'sondan başlayır',
    lead: 'Hər təchizatçı sətri tək bir mətndir: brend, ad, konsentrasiya, cins və ölçü yan-yana düzülüb. Soldan oxunsa, adında «Parfum» sözü olan ilk ətirdə hər şey pozulur. Buna görə parser sahələrin sırası heç vaxt dəyişməyən sağ ucdan başlayır və sahələri bir-bir ayırır — axırda yalnız ad qalır.',
    row: {
      ariaLabel:
        'Uydurma MAISON DEMO NUIT LE PARFUM EDP L 90ML sətri sağdan hissələrə ayrılır: ölçü, cins, konsentrasiya və ən sonda ad',
      label: 'Çap olunduğu kimi sətir',
      direction: 'Oxunma istiqaməti',
    },
    steps: [
      {
        field: 'Ölçü',
        token: '90ML',
        value: '90 ml',
        text: 'Ən etibarlı sahədir; sonra qiymətin yenilənməsi ilə yeni flakonun əlavəsi arasında seçimi də o edir.',
      },
      {
        field: 'Cins',
        token: 'L',
        value: 'Qadın',
        text: 'Həmişə konsentrasiya ilə ölçünün arasında duran hərf və ya söz. «Pour Femme» kimi ifadə adın içində qalır.',
      },
      {
        field: 'Konsentrasiya',
        token: 'EDP',
        value: 'Eau de Parfum',
        text: 'Sondan yalnız bir token götürülür. Solda qalan istənilən konsentrasiya sözü ada aiddir.',
      },
      {
        field: 'Ad',
        token: 'NUIT LE PARFUM',
        value: 'Nuit Le Parfum',
        text: 'Ayırmadan sonra qalan hissə addır — əvvəldən adın parçası olan «Parfum» da daxil olmaqla.',
      },
    ],
    failure: {
      ariaLabel:
        'Eyni sətir soldan sağa təhlil olunur: ilk Parfum tokeni konsentrasiya sanılır, ad qısalır və nəticədə heç kimdə olmayan ətir alınır',
      title: 'Soldan oxunanda sətir pozulur',
      text: 'Soldan sağa gedən parser əvvəlcə adın içindəki PARFUM-a rast gəlir, onu konsentrasiya sanır və adı qısaldır. Bir-iki token sonra isə mövcud olmayan məhsulun qiymətini axtarır.',
      wrongLabel: 'Soldan sağa',
      rightLabel: 'Sağdan sola',
      wrongName: 'Nuit',
      wrongConcentration: 'Parfum',
      leftover: 'EDP L',
      wrongVerdict: 'Mövcud olmayan ətir',
      rightVerdict: 'Nuit Le Parfum · EDP · Qadın · 90 ml',
    },
    points: [
      {
        title: 'Sətrin sonu sabitdir',
        text: 'Adlar hər cür yazılır, amma sondakı ölçü, cins və konsentrasiyanın sırası dəyişmir.',
      },
      {
        title: 'Bir dəfə kəs, dayan',
        text: 'Adda konsentrasiya sözü olması tamamilə normaldır, ona görə ikinci keçid adı yeyərdi. Parser bir token götürür və işini bitirir.',
      },
      {
        title: 'Hədiyyə dəsti ayrıca məhsuldur',
        text: 'Bir qutuda iki flakonu təsvir edən sətir heç bir ətrin ölçüsü deyil. Kənara qoyulur və hesabata düşür.',
      },
    ],
  },

  identity: {
    id: 'identity',
    eyebrow: 'Eyni ətir nə deməkdir',
    title: 'Dörd sahə — tək ətir',
    accent: 'tək ətir',
    lead: 'Bu qaydanı sahib müəyyən edib və sistem ondan yayına bilmir. Brend, ad, konsentrasiya və cins tam üst-üstə düşürsə, bu eyni ətirdir; ölçü isə sətrin qiyməti yeniləyəcəyini, yoxsa flakon əlavə edəcəyini həll edir. Dörd sahədən biri belə fərqlidirsə, bu artıq başqa ətirdir və «təxmini uyğunluq» deyilən bir şey yoxdur.',
    card: {
      ariaLabel: 'Brend, ad, konsentrasiya və cins tək kimlik kartında birləşir, ölçü isə onun altında ayrıca qalır',
      title: 'Kimlik',
      locked: 'Kilidlənib',
      andSize: '+ ölçü',
      sizeLabel: 'Ölçü',
      fields: [
        { label: 'Brend', value: 'Maison Demo' },
        { label: 'Ad', value: 'Nuit Le Parfum' },
        { label: 'Konsentrasiya', value: 'EDP' },
        { label: 'Cins', value: 'Qadın' },
      ],
      note: 'Ətri dörd sahə, flakonu isə beşinci sahə müəyyən edir.',
    },
    branches: [
      {
        badge: 'Eyni ölçü',
        title: 'Bu qiyməti yenilə',
        size: '90 ml',
        text: 'Bu ətir kataloqda məhz bu flakonda var — sətir yalnız həmin variantı yeniləyir, qalanına toxunmur.',
      },
      {
        badge: 'Yeni ölçü',
        title: 'Bu ölçünü əlavə et',
        size: '30 ml',
        text: 'Ətir tanışdır, flakon isə yox. Onun altında yeni ölçü yaranır və ətrin profilini miras alır.',
      },
    ],
    reject: {
      ariaLabel:
        'Yalnız EDP əvəzinə EDT ilə fərqlənən ikinci sətir kimlik kartının yanından ötür və «başqa ətir — qiymətə toxunulmur» möhürü alır',
      badge: 'Başqa ətir',
      stamp: 'Başqa ətir — qiymətə toxunulmur',
      title: 'Bir hərf fərqli — flakonda başqa ətir',
      text: 'Eau de toilette eyni adlı eau de parfum ilə heç vaxt eyniləşdirilmir: nə avtomatik, nə də təklif kimi. Bir kliklə təsdiq qiymətdə yanılmağın ən asan yoludur. Yaxın namizəd sətrin yanında yalnız arayış kimi görünür, seçim variantı kimi yox.',
      info: 'Kataloqda eyni brend və ad var, konsentrasiya fərqlidir',
      infoLabel: 'Məlumat üçün',
      decisionLabel: 'Qərarınız lazımdır',
    },
    noKey: {
      title: 'Görünməz açar yoxdur',
      text: 'Layihənin yarısında təchizatçı kodunu sistemdən tamamilə çıxardıq. Kod yaxşı uyğunlaşdırırdı, amma heç nəyi izah etmirdi — qiymət dəyişəndə səbəbini görmək mümkün olmurdu. İndi uyğunlaşdırma yalnız sətirdə yazılan beş sahəyə əsaslanır.',
      before: 'Anlaşılmaz kodla uyğunlaşdırma',
      after: 'Oxunan beş sahə ilə uyğunlaşdırma',
      tradeoff: 'Bunun açıq bir bədəli var: təchizatçı ətrin adını dəyişsə, sətir yenisi kimi görünür və sahib onu bir dəfə əllə bağlamalı olur.',
    },
  },

  review: {
    id: 'review',
    eyebrow: 'Əvvəl yoxla, sonra tətbiq et',
    title: 'Təsdiqiniz olmadan heç nə yazılmır',
    accent: 'Təsdiqiniz olmadan',
    lead: 'Siyahı yüklənəndə sistem heç nə yazmır. O, hər sətri oxuyur, kataloqla tutuşdurur və nəticəni qruplara bölür: bahalaşan, ucuzlaşan, yeni ətir, yeni flakon və ya bu siyahıda artıq adı keçməyən kataloq mövqeləri. Uyğun gələn hər sətirdə təchizatçı rəqəminin yanında müştərinin görəcəyi satış qiyməti də göstərilir. Bir neçə sətir isə sahibin qərarına saxlanılır.',
    screen: {
      ariaLabel:
        'Yoxlama ekranı: sətirlər qruplara ayrılıb, hər cərgədə çap olunmuş sətir, kimlik sahələri və gizlədilmiş maya dəyişikliyi, aşağıda isə tətbiq düyməsi',
      title: 'Qiymət siyahısının yoxlanması',
      subtitle: 'Oxunub, tutuşdurulub, yazılmayıb',
      file: 'Təchizatçı siyahısı alındı',
      columns: {
        row: 'Çap olunduğu kimi sətir',
        house: 'Brend',
        name: 'Ad',
        details: 'Konsentrasiya · Cins',
        size: 'Ölçü',
        cost: 'Maya',
        shelf: 'Satış qiyməti',
        status: 'Status',
      },
      buckets: [
        { id: 'up', label: 'Maya artdı', text: 'Uyğun gəldi, əvvəlkindən bahadır.' },
        { id: 'down', label: 'Maya azaldı', text: 'Uyğun gəldi, daha ucuzdur.' },
        { id: 'newFragrance', label: 'Yeni ətir', text: 'Kataloqda yoxdur, dərc olunmamış qaralama kimi əlavə olunur.' },
        { id: 'newSize', label: 'Yeni ölçü', text: 'Mağazada olan ətir, amma olmayan flakonda.' },
        { id: 'missing', label: 'Bu siyahıda yoxdur', text: 'Kataloqda var, bu faylda yox. Hesabata düşür, dəyişdirilmir.' },
        { id: 'unchanged', label: 'Dəyişmir', text: 'Ətir də, maya da eynidir — siyahıda görünür, bazaya yazılmır.' },
        { id: 'skipped', label: 'Atlanıb', text: 'Hədiyyə dəstləri, təkrar sətirlər və qaydanın daim atladığı sətirlər.' },
      ],
      flags: {
        decision: 'Qərarınız lazımdır',
        rounding: 'Yuvarlaqlaşma, qiymət dəyişikliyi deyil',
        manual: 'Əl ilə qiymətləndirilib — qiymət dondurulub',
        similar: 'Ad eyni, ətir başqa',
        linked: 'Sizin təsdiqinizlə bağlanıb',
        ignored: 'Həmişə atlanır',
      },
      /** Printed in the line cell of a row the file never mentions, instead of a bare em dash. */
      noLine: 'Bu faylda sətir yoxdur',
      up: 'Artdı',
      down: 'Azaldı',
      select: 'Bu dəfə üçün seçilib',
      confirm: 'Seçilmiş sətirləri tətbiq et',
      recompute: 'Tətbiq anında dəyişikliklər serverdə faylın özündən yenidən hesablanır',
      nothingYet: 'Hələ heç nə yazılmayıb',
      reanalyse: 'Yenidən analiz et',
    },
    points: [
      {
        title: 'Köhnə ekran köhnə qiymət yaza bilməz',
        text: 'Tətbiq düyməsinə basanda server faylı yenidən oxuyur, fərqi təzədən hesablayır və yalnız seçdiyiniz sətirləri yazır. Bir saat açıq qalan ekran mağazaya köhnə rəqəm ötürə bilməz.',
      },
      {
        title: 'Bir neçə sent xəbər deyil',
        text: 'Maya sentə qədər saxlanılır. Tam ədədli maya bir neçə sent tərpənəndə sətir «yuvarlaqlaşma» kimi işarələnir ki, əsl dəyişikliklər gözdən itməsin.',
      },
      {
        title: 'Əllə qoyulan qiymətə toxunulmur',
        text: 'Sahib flakonun qiymətini əllə təyin edibsə, import yalnız mayanı yeniləyir, satış qiyməti olduğu kimi qalır.',
      },
      {
        title: 'Görünməmək silinmək deyil',
        text: 'Bir siyahıda olmayan ətir hesabata düşür — satışdan çıxarılmır, qiyməti sıfırlanmır. Fayldan düşmək kataloqdan getmək demək deyil.',
      },
    ],
  },

  rules: {
    id: 'rules',
    eyebrow: 'Yadda saxlayan import',
    title: 'Problemli sətir bir dəfə həll olunur',
    accent: 'bir dəfə həll olunur',
    lead: 'Təchizatçı brendi öz bildiyi kimi yazır, konsentrasiyanı heç kimin görmədiyi formada qısaldır, bəzən də parserin ümumiyyətlə oxuya bilmədiyi sətir göndərir. Sahib bunu yoxlama ekranında bir dəfə həll edir. Həll qayda kimi yadda qalır və sonrakı siyahılarda sətir kiminsə gözünə dəyməmiş tətbiq olunur.',
    panel: {
      ariaLabel:
        'Qaydalar cədvəli: təchizatçının ifadəsini kataloqdakı mənasına çevirən altı növ saxlanmış qayda və hər birinin tutduğu sətirlərin sayı',
      title: 'Uyğunlaşdırma qaydaları',
      columns: { rule: 'Təchizatçı belə yazır', target: 'Kataloqda bu deməkdir', hits: 'Tutdu' },
      hitsUnit: 'sətir',
      types: [
        {
          label: 'Brend yazılışı',
          source: 'MSN DEMO',
          target: 'Maison Demo',
          hits: '18',
          text: 'Qısaltmalar, hərf səhvləri, köhnə yazılışlar.',
        },
        {
          label: 'Konsentrasiya sözü',
          source: 'PARFUM DE NUIT',
          target: 'Parfum',
          hits: '7',
          text: 'Parserin özü tapa bilmədiyi, brendə məxsus ifadə.',
        },
        { label: 'Cins işarəsi', source: 'F', target: 'Qadın', hits: '4', text: 'Standart siyahıda tapılmayan işarə.' },
        {
          label: 'Sətir düzəlişi',
          source: 'ATELIER NUMUNE VITRINE DEMO L',
          target: 'EDP · 100 ml',
          hits: '3',
          text: 'Oxunmayan sahələr, bir dəfə əllə daxil edilib.',
        },
        {
          label: 'Ətirlə bağlama',
          source: 'DEMO NOIR ABSOLU 75',
          target: 'Absolu Nümunə · Parfum · Uniseks · 75 ml',
          hits: '2',
          text: '«Bu sətir o flakondur» — bunu insan təsdiqləyir, heç nə təxmin edilmir.',
        },
        {
          label: 'Həmişə atla',
          source: 'MAISON DEMO BODY MIST 200ML',
          target: 'Heç vaxt import olunmur',
          hits: '6',
          text: 'Ətir variantı deyil, heç vaxt da olmayacaq.',
        },
      ],
      hitsNote:
        'Hər qayda tutduğu sətirləri sayır: heç işə düşməyəni silmək, həddən çox işə düşənə isə bir də baxmaq olar.',
      actions: {
        fix: 'Bu sətri düzəlt',
        link: 'Başqa ətirlə eyniləşdir',
        skip: 'Bu sətri həmişə atla',
        undo: 'Qərarımı geri al',
      },
    },
    points: [
      {
        title: 'Elə oradaca düzəldin',
        text: 'Hər sətir uyğunlaşdığı ətrin yanında açılır. Düzəlişi orada edirsiniz, həmin fayl elə o an təkrar analiz edilir, cavab isə yadda qalır.',
      },
      {
        title: 'Yarımçıq düzəliş düzəliş deyil',
        text: 'Düzəlişdən sonra da ölçü və ya konsentrasiya oxunmursa, sətir yenə qərar gözləyənlərin sırasına qayıdır.',
      },
      {
        title: 'Hər siyahı ilə daha dəqiq',
        text: 'Bilik kodda yox, məlumatda saxlanılır, ona görə import onuncu siyahıda birincidən dəqiq işləyir — arada heç bir yerləşdirmə olmadan.',
      },
      {
        title: 'İstənilən qaydanı ləğv etmək olar',
        text: 'Qaydanı silsəniz, import həmin sətri yenə standart qaydada oxuyacaq. Səhv qərar bir klikə başa gəlir, yenidən qurmağa yox.',
      },
    ],
  },

  pricing: {
    id: 'pricing',
    eyebrow: 'Mayadan qiymətə',
    title: 'Dollardan manata, mayadan rəfə',
    accent: 'mayadan rəfə',
    lead: 'Təchizatçının istədiyi məbləğ hələ qiymət deyil. Onu qiymətə sahibin idarə etdiyi zəncir çevirir: kurs, əmsal və bu flakonun brendinə, ölçüsünə və düşdüyü maya aralığına ən dəqiq uyğun gələn marja qaydası. Hər hansı qiymət real dəyişməzdən əvvəl mühərrik nəticəni bütün kataloq üçün ekranda hesablayır.',
    chain: {
      ariaLabel:
        'Soldan sağa qiymət zənciri, bütün rəqəmlər gizlədilib: dollarla maya kursa və əmsala vurularaq manatla mayaya çevrilir, üstünə marja gəlir və satış qiyməti alınır',
      title: 'Zəncir',
      steps: [
        { label: 'Təchizatçı mayası', unit: 'USD', value: '•••', text: 'Siyahıdan götürülür, sentə qədər dəqiq.' },
        { label: 'Kurs', unit: '×', value: '•••', text: 'Sahibin seçdiyi dollar–manat kursu.' },
        { label: 'Əmsal', unit: '×', value: '•••', text: 'Siyahı qiyməti ilə Bakı rəfi arasında qalan bütün fərq.' },
        { label: 'Maya', unit: 'AZN', value: '•••', text: 'Marjanın hesablandığı baza.' },
        { label: 'Marja', unit: '+', value: '•••', text: 'Bu flakona ən yaxşı uyğun gələn qaydadan.' },
        { label: 'Satış qiyməti', unit: 'AZN', value: '•••', text: 'Tam manata yuvarlaqlaşdırılır — müştəri bunu görür.' },
      ],
    },
    rule: {
      ariaLabel: 'Eyni flakona uyğun gələn, dəqiqliyi fərqli dörd marja qaydası; üç şərtli qayda seçilir',
      title: 'Ən konkret qayda qazanır',
      text: 'Hər qayda şərtləri «VƏ» ilə birləşdirir: bu brend, bu ölçü, bu maya aralığı. Flakona bir neçə qayda uyğun gəlirsə, şərti daha çox olan seçilir; dəqiqlik bərabərdirsə, daha yenisi qazanır.',
      conditions: { house: 'Brend', size: 'Ölçü', band: 'Maya aralığı', any: 'Hamısı' },
      winner: 'Qalib qayda',
      loser: 'O da uyğun gəlir',
      specificity: 'Şərt',
      fallback: 'Heç bir qayda tutmursa, bütün kataloq üçün ümumi marja tətbiq olunur.',
      example: { house: 'Maison Demo', size: '90 ml', band: 'Bir aralıq', margin: '•••' },
    },
    brackets: {
      ariaLabel: 'Rəqəmsiz üst-üstə düzülmüş maya aralıqları və bu flakonun mayasının düşdüyü aralığı göstərən nişan',
      title: 'Maya aralıqları',
      note: 'Aralıqların sərhədləri və marjaları satıcının kommersiya məlumatıdır, ona görə rəqəmsiz göstərilir — burada vacib olan quruluşdur.',
      landed: 'Bu flakonun mayası buraya düşür',
      bandLabel: 'Aralıq',
    },
    preview: {
      ariaLabel:
        'Canlı önizləmə cədvəli: hər flakonun gizlədilmiş mayası, onu qiymətləndirən qayda və gizlədilmiş satış qiyməti, yanında yadda saxla və ayrıca tətbiq et düymələri',
      title: 'Tətbiqdən öncə baxış',
      text: 'Kursu, əmsalı və ya istənilən qaydanı dəyişin — hər flakonun sətri ekranda dərhal yenilənir: maya, qalib gələn qayda, satış qiyməti və aradakı fərq.',
      columns: { fragrance: 'Ətir', size: 'Ölçü', cost: 'Maya', rule: 'Qayda', delta: 'Fərq', shelf: 'Satış qiyməti' },
      save: 'Strategiyanı yadda saxla',
      saveNote: 'Qaydaları saxlayır, qiymətlər tərpənmir.',
      apply: 'Kataloqa tətbiq et',
      applyNote: 'Yeni satış qiymətlərini bir dəfə, şüurlu şəkildə yazır.',
      why: 'Düymələr ayrıdır, çünki qaydanı saxlamaq heç vaxt eyni kliklə 1 600-ə yaxın flakonun qiymətini dəyişməməlidir.',
    },
    log: {
      title: 'Hər qiymət öz tarixçəsini saxlayır',
      text: 'Mühərrik qiymət yazdıqca qeyd aparır: köhnə dəyər, yeni dəyər, dəyişikliyi edən tətbiq və vaxt. Marja ilə təcrübə aparmağı təhlükəsiz edən məhz bu qeydlərdir.',
      columns: { when: 'Tarix', fragrance: 'Ətir', from: 'Əvvəl', to: 'Sonra', reason: 'Səbəb' },
      reason: 'Strategiya tətbiq olundu',
    },
  },

  product: {
    id: 'product',
    eyebrow: 'Vitrin və arxa ofis',
    title: 'Bir vitrin, üç dil',
    accent: 'üç dil',
    lead: 'Müştəri üçün rahat gəzilən kataloq: filtrlər, üç hərflə flakonu tapan axtarış və ətrin reklam mətni ilə yox, strukturlu məlumatla təsvir olunduğu məhsul səhifəsi. Arxa tərəfdə mağazanı idarə edən 14 bölmə var və hər biri yalnız işi üçün ona ehtiyacı olanlara açıqdır.',
    shot: {
      title: 'Mağaza vitrini',
      caption: 'Əsl vitrin: brendin öz giriş ekranı və kateqoriya kartları — mağaza özünü məhz belə təqdim edir.',
      alt: 'Molecion vitrini: işıqlı butik rəfində ətir flakonları, qızılı monoqram və qara mərmər üzərində brendin öz paketi.',
      categories: [
        { label: 'Kişi', alt: 'Qara mərmərə düzülmüş kişi ətirləri' },
        { label: 'Qadın', alt: 'Qara mərmərə düzülmüş qadın ətirləri' },
        { label: 'Uniseks', alt: 'Qara mərmərə düzülmüş uniseks ətirlər' },
      ],
    },
    storefront: {
      ariaLabel:
        'Telefonda vitrin: filtr paneli ilə kataloq, akkordlar, not piramidası və istifadə vaxtı göstərilən məhsul səhifəsi, bir də quraşdırma təklifi',
      title: 'Vitrin',
      groups: [
        {
          label: 'Kataloq',
          items: [
            'Brend, cins, konsentrasiya və qiymətə görə filtr',
            'Ağıllı axtarış: üç hərf kifayətdir',
            'Tor və ya siyahı görünüşü',
            'Telefonda filtrlər alt paneldə',
          ],
        },
        {
          label: 'Məhsul səhifəsi',
          items: ['Ölçü və tester seçimi', 'Əsas akkordlar', 'Üç səviyyəli not piramidası', 'Nə vaxt istifadə etməli', 'Brend haqqında'],
        },
        {
          label: 'Alış',
          items: ['Sevimlilər', 'Səbət', 'Qeydiyyatsız sifariş', 'Çatdırılma və ödəniş seçimi', 'Sifariş təsdiqi'],
        },
        {
          label: 'Dar səhifə yox, tətbiq',
          items: ['PWA kimi quraşdırılır', 'Beş tablı mobil menyu', 'Zəif internetdə də işləyir', 'Bloq və məlumat səhifələri'],
        },
      ],
    },
    profile: {
      ariaLabel:
        'Bir ətrin profili mətn və zolaqlarla: beş əsas akkord, üç səviyyəli not piramidası, fəsil və gündüz-gecə zolaqları',
      title: 'Qoxu — strukturlu məlumat',
      text: 'Hər ətir üçün akkordlar, üç pilləli not piramidası və hansı vaxt istifadə olunacağı 1 992 inqrediyentlik kitabxana əsasında saxlanılır. Beləliklə, müştəri ikisi də «zərif» deyən iki təsviri oxumaq əvəzinə iki flakonu birbaşa müqayisə edə bilir.',
      accordsLabel: 'Əsas akkordlar',
      accords: ['Odunsu', 'Kəhrəba', 'İsti ədviyyəli', 'Vanil', 'Pudralı'],
      pyramidLabel: 'Not piramidası',
      levels: [
        { label: 'Üst', notes: ['Berqamot', 'Çəhrayı bibər', 'Kardamon'] },
        { label: 'Orta', notes: ['İris', 'Yasəmən', 'Darçın'] },
        { label: 'Alt', notes: ['Sandal ağacı', 'Kəhrəba', 'Tonka paxlası'] },
      ],
      wearLabel: 'Nə vaxt istifadə etməli',
      seasons: ['Qış', 'Payız', 'Yaz', 'Yay'],
      times: ['Gündüz', 'Gecə'],
      note: 'Burada mətn və zolaqlarla göstərilib; profil strukturlu olduğundan onu istənilən formada təqdim etmək mümkündür.',
    },
    admin: {
      ariaLabel: 'Arxa ofis: yan paneldə 14 bölmə və icazəsi yalnız birini açan işçi hesabı',
      title: '14 bölmə, hər biri ayrıca icazə ilə',
      text: 'Mağazanın işləməsi üçün gərək olan hər şey buradadır — icazəsi olmayana isə heç biri görünmür.',
      sections: [
        {
          label: 'Məhsullar',
          text: 'Yeddi tab: əsas məlumat, ölçü və qiymətlər, kvadrat kəsmə ilə qalereya, notlar, akkordlar, istifadə vaxtı, axtarış mətni.',
        },
        { label: 'Brendlər', text: 'Hər brend öz loqosu, hekayəsi və səhifəsi ilə.' },
        { label: 'Notlar', text: 'Bütün piramidaların əsası olan 1 992 inqrediyentlik kitabxana.' },
        { label: 'Akkordlar', text: 'Rənglə işarələnmiş akkord lüğəti.' },
        { label: 'Sifarişlər', text: 'Saytdan və telefonla gələn sifarişlər bir yerdə, status və ödəniş axını ilə.' },
        { label: 'Müştərilər', text: 'Sifarişlərdəki telefon nömrəsindən yığılan tarixçə; sonradan hesabla birləşdirmək olar.' },
        { label: 'Mesajlar', text: 'Əlaqə formasından gələnlər: yeni, oxunmuş, cavablanmış, arxiv.' },
        { label: 'Bloq', text: 'Məqalələr, kateqoriyalar, qaralamalar.' },
        { label: 'Endirimlər', text: 'Brend, cins və ya flakon üzrə müddətli kampaniyalar, minimum mənfəət həddi ilə.' },
        { label: 'Qiymət strategiyası', text: 'Kurs, əmsal və marja qaydaları — dərhal önizləmə ilə.' },
        { label: 'Qiymət siyahısı', text: 'Yoxlama ekranı, qaydalar və keçmiş importların tam tarixçəsi ilə import modulu.' },
        { label: 'Ana səhifə', text: 'Ön səhifədəki mətn blokları və şəkil yerləri.' },
        { label: 'Tərcümələr', text: 'Məhsul mətnləri və interfeys ifadələri — hər üç dildə.' },
        { label: 'Tənzimləmələr', text: 'Mağaza rekvizitləri, çatdırılma haqqı, ödəniş üsulları, işçi hesabları.' },
      ],
      staff: {
        title: 'Hər kəs yalnız öz işini görür',
        text: 'Giriş bölmə-bölmə verilir və bir icazə həm menyu bəndini, həm də onun arxasındakı əməliyyatı idarə edir. Flakonların şəklini çəkmək üçün işə götürülən şəxs yalnız «Məhsullar»ı görür — maya, marja və qiymət siyahısı ona bağlıdır.',
        exampleLabel: 'Köməkçinin görünüşü',
        exampleGranted: 'Məhsullar',
        exampleHidden: 'Qalan hər şey',
      },
      languages: {
        title: 'Tərcümələri sahib idarə edir',
        text: 'Məhsul mətnləri və interfeys ifadələri arxa ofisdə iki qatda idarə olunur, ona görə dördüncü dil yeni buraxılış yox, sadəcə məlumat daxil etmək məsələsidir. Bütün 1 992 not adı maşınla hazırlanmış qaralama kimi gəlib və elə də işarələnib — insan sıfırdan yazmır, yalnız düzəldir.',
        layers: [
          { label: 'Məzmun', text: 'Ətir və brend mətnləri hər dil üçün, ingiliscə əsasın üzərində.' },
          { label: 'İnterfeys', text: 'Düymə, etiket və banner mətnləri kodu dəyişmədən redaktə olunur.' },
          { label: 'Ehtiyat', text: 'Tərcüməsi olmayan hər şey ingiliscə göstərilir, boş yer qalmır.' },
        ],
      },
    },
  },

  engineering: {
    id: 'engineering',
    eyebrow: 'Texniki tərəf',
    title: 'Hər şey bir paketdə, kənar xidmət yoxdur',
    accent: 'kənar xidmət yoxdur',
    lead: 'Vitrin, arxa ofis və API birlikdə tək vahid kimi yerləşdirilir, sorğunun keçdiyi yolda üçüncü tərəf xidməti iştirak etmir. Müştəri, maya və ya marja barədə məlumat platformanın işlədiyi serverdən kənara çıxmır.',
    principles: [
      {
        label: 'Tək əmrlə işə düşür',
        text: 'Mağaza, arxa ofis və API bir konteyner obrazında gəlir; bir əmr bütün platformanı istənilən adi serverdə qaldırır.',
      },
      {
        label: 'Yenidən yerləşdirmə datanı silmir',
        text: 'Kataloq və yüklənən şəkillər tətbiqdən ayrı saxlanılır, yenidən qurulma onlara toxunmur. Ehtiyat nüsxələr avtomatik çıxarılır.',
      },
      {
        label: 'Kənar xidmətlərdən asılılıq yoxdur',
        text: 'Səhifə açılanda nə analitika skripti, nə izləyici, nə də xarici API işləyir. Məxfilik siyasət səhifəsində yox, arxitekturanın özündədir.',
      },
      {
        label: 'Pul olan yerdə testlər',
        text: 'Parser, uyğunlaşdırıcı, dəyişiklik dəsti və qiymət zənciri unit testlərlə örtülmüş təmiz modullardır. Testlər mutasiya ilə yoxlanılıb: iki qayda bilərəkdən pozulub ki, real reqressiyanın tutulduğu sübut olunsun.',
      },
      {
        label: 'Şəkillərlə əlləşmək lazım deyil',
        text: 'Serverdə hər yükləmə yoxlanılır, döndərilir, ölçüsü məhdudlaşdırılır və veb üçün WebP-yə çevrilir — hər yer üçün bir fayl.',
      },
    ],
    posture: {
      title: 'Təhlükəsizlik',
      ariaLabel: 'Təhlükəsizlik tədbirləri',
      tags: [
        'Giriş bölmə-bölmə verilir',
        'Sahibin ləğv edə biləcəyi sessiyalar',
        'Hər sərhəddə server tərəfli yoxlama',
        'Yükləmələr yenidən kodlaşdırılır, etibar edilmir',
        'Zəngin mətn saxlanmazdan əvvəl təmizlənir',
        'Hər qiymət dəyişikliyinin qeydi',
        'Sorğu yolunda kənar xidmət yoxdur',
      ],
    },
    roles: {
      title: 'Üç növ istifadəçi',
      items: [
        {
          title: 'Sahib',
          text: 'Bütün bölmələr ona açıqdır: importu təsdiqləyir, kursu, əmsalı və marja qaydalarını təyin edir, mübahisəli sətirdə son sözü deyir.',
        },
        {
          title: 'İşçi',
          text: 'Yalnız ona açılan bölmələrdə işləyir; qalanı nə menyuda görünür, nə də əməliyyat səviyyəsində əlçatandır.',
        },
        {
          title: 'Müştəri',
          text: 'Kataloqa baxır, axtarır, sevimlilərə əlavə edir, qeydiyyatsız sifariş verir və sonradan telefon nömrəsi ilə tanınır.',
        },
      ],
    },
  },

  role: {
    eyebrow: 'Bizim işimiz',
    title: 'Aibaycan-ın gördüyü işlər',
    items: [
      {
        title: 'Olmayan kataloqu yaratdıq',
        text: 'Biznesin öz qiymət siyahısından strukturlu kataloq düzəltdik və hər ətrə 1 992 inqrediyentlik not kitabxanası əsasında tam profil hazırladıq.',
      },
      {
        title: 'Qiymət siyahısı importunu hazırladıq',
        text: 'Sağdan sola parser, eyniləşdirmə qaydası, dəyişiklik dəsti və yoxlama axını; üstəlik sahibin proqramçıya müraciət etmədən importu özü öyrədə bildiyi qaydalar bazası.',
      },
      {
        title: 'Qiymət mühərrikini yaratdıq',
        text: 'Mayadan satış qiymətinə: mürəkkəb marja qaydaları, kataloqun tamamı üçün canlı önizləmə, saxlamanın tətbiqdən qəsdən ayrılması və dəyişən hər qiymətin qeydi.',
      },
      {
        title: 'Vitrini dizayn edib hazırladıq',
        text: 'Üç dildə işləyən, tətbiq kimi mobil qabığı olan mağaza: krem kağız üzərində qara-qızılı üslub, diqqət mərkəzində isə ətir profili.',
      },
      {
        title: 'Arxa ofisi və paketi təhvil verdik',
        text: 'İcazə ilə açılan 14 bölmə, sahibin özü redaktə etdiyi tərcümə qatı, şəkillərin serverdə emalı və məlumatı hər yenidən yerləşdirmədə qoruyan bir əmrlik quraşdırma.',
      },
    ],
  },
  stack: {
    eyebrow: 'Texnologiyalar',
    title: 'İstifadə etdiyimiz texnologiyalar',
    groups: [
      { label: 'Tətbiq', items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
      { label: 'Vitrin', items: ['PWA', 'Service worker', 'Server components'] },
      { label: 'Data', items: ['Prisma', 'SQL', 'Zod'] },
      { label: 'Media', items: ['Sharp', 'WebP'] },
      { label: 'Keyfiyyət', items: ['Vitest'] },
    ],
  },
  faq: {
    title: 'Pərakəndəçilərin tez-tez verdiyi suallar',
    items: [
      {
        q: 'Təchizatçının qiymət siyahısını avtomatik yükləmək olarmı?',
        a: 'Bəli, adətən ilk başlamalı olduğumuz yer də budur. Sizin real siyahınız və real kataloqunuz üzərində işləyirik, iki sətrin nə vaxt eyni məhsul sayıldığını yazılı razılaşdırırıq, sonra isə bahalaşanı, ucuzlaşanı, yenisini və yoxa çıxanı göstərən, amma siz təsdiqləyənə qədər heç nə yazmayan import modulu qururuq.',
      },
      {
        q: 'Bizim mağaza üçün də belə sistem qura bilərsinizmi?',
        a: 'Bəli. Vitrin işin asan tərəfidir. Müştərinin mağazaya etibar edib-etməməsini qiymətləndirmə və təchizatçı məlumatlarının necə daxil olması həll edir — biz də oradan başlayırıq: pulla bağlı qaydaları sizinlə razılaşdırır, mağazanı onların ətrafında, sizə məxsus infrastrukturda qururuq.',
      },
      {
        q: 'Qiymətin səhv məhsula düşməyəcəyinə necə zəmanət verirsiniz?',
        a: 'Qəsdən sərt, hətta darıxdırıcı eyniləşdirmə qaydası ilə. Bu layihədə brend, ad, konsentrasiya və cins tam üst-üstə düşməlidir, əks halda söhbət başqa ətirdən gedir; ölçü isə qiymətin yenilənməsi ilə yeni flakon arasında seçim edir. Təxmini uyğunlaşdırma yoxdur, tətbiq zamanı isə dəyişikliklər serverdə yenidən qurulur, ona görə köhnəlmiş yoxlama ekranı qiymət yaza bilmir.',
      },
      {
        q: 'Komandamız mağazanı hər həftə sizə zəng etmədən idarə edə bilərmi?',
        a: 'Arxa ofis məhz bunun üçündür: ana səhifə, brendlər, məhsul mətnləri, akkord və not kitabxanaları, çatdırılma və ödəniş ayarları, kampaniyalar, qiymət qaydaları və hər üç dil paneldən dəyişdirilir, icazələr isə hər kəsi öz işi ilə məhdudlaşdırır. Təchizatçı yeni yazılış «icad edəndə» kimsə sadəcə qayda əlavə edir — yeni buraxılışa ehtiyac qalmır.',
      },
      {
        // The heading is uppercased on the page, and az would turn the brand's Latin i into İ: MOLECİON.
        q: 'Bu mağaza artıq açılıbmı?',
        a: 'Hələ yox, və biz bunu başqa cür göstərməyəcəyik. Molecion qurulub, test olunub və yerləşdirilməyə hazırdır. Kataloq və qiymət mühərriki artıq biznesin öz məlumatları ilə işləyir; ictimai açılış məhsul fotoçəkilişini və molecion.az domenini gözləyir.',
      },
    ],
  },
  railLabels: {
    challenge: 'Çətinlik',
    parse: 'Sətrin təhlili',
    identity: 'Kimlik',
    review: 'Yoxlama',
    rules: 'Qaydalar',
    pricing: 'Maya → qiymət',
    product: 'Mağaza və arxa ofis',
    engineering: 'Mühəndislik',
  },
  sampleDataLabel: 'Nümunə məlumat',
  sampleDataNote:
    'Bu ekranlardakı brendlər, ətirlər və qiymət siyahısı sətirləri uydurmadır. Maya, marja, kurs və qiymət kimi rəqəmlər isə satıcıya məxsus kommersiya məlumatıdır və hər yerdə gizlədilib.',
  mockupAriaLabel: 'Molecion ekranının illüstrasiyası: uydurma nümunə məlumatlar, gizlədilmiş rəqəmlər',
};

export default az;
