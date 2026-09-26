// Molecion case study, AZ. Ported from Atlas `src/i18n/az/cases/molecion.ts`.
// /[locale]/projects/molecion-az açarları (AZ). Forma və fəsil `id`-ləri src/i18n/en/cases/molecion.ts ilə eynidir;
// hər fəsildə `accent` mütləq `title`-ın dəqiq alt sətri olmalıdır.
// Mockup mətnləri uydurma nümunə datadır: brend və ətir adları mövcud deyil, bütün maya, marja, kurs və
// qiymət `samples.masked` ilə gizlədilir. Həndəsə (zolaq sayı, sütun uzunluğu) data.ts-dədir, burada yox.
// İddialar: platforma qurulub, test olunub və yerləşdirilməyə hazırdır — onun haqqında heç vaxt «canlıdır»,
// «istifadədədir» və ya «satış aparır» deyilmir (biznesin özünün ətir satması EN mətnində olduğu kimi qalır).
// `molecion.az` yalnız mətndir, link deyil. Səhifədəki yeganə rəqəmlər kataloq
// miqyasıdır (125 brend, ≈1 100 ətir, ≈1 600 ölçü, 1 992 notluq kitabxana, 3 dil) və 14 bölmədir.
import type { MolecionCopy } from './en';

const az: MolecionCopy = {
  seo: {
    title: 'Molecion: onlayn mağaza proqramı və pərakəndə arxa ofis',
    description:
      'Bakıdakı parfümeriya satıcısı üçün qurduğumuz e-commerce platforması: qiymət siyahısının avtomatik yüklənməsi, qiymət mühərriki və üç dilli onlayn mağaza.',
  },
  h1: 'Pərakəndə satış üçün onlayn mağaza proqramı və qiymət siyahısının avtomatik yüklənməsi',
  hero: {
    eyebrow: 'Premium parfümeriya · E-commerce · Pərakəndə arxa ofis',
    title: 'Ən çətin hissə heç vaxt mağaza olmayıb',
    accent: 'heç vaxt mağaza olmayıb',
    lead: 'Molecion Bakıda orijinal dizayner və niş ətirləri satır. Onun bütün onlayn satış kanalını belə bir mağazanın etibarını müəyyən edən hissənin ətrafında qurduq: təchizatçının qiymət siyahısı. Siyahı dollarla gəlir, qarşısında isə 1 100-ə yaxın ətri 1 600-ə yaxın ölçüdə saxlayan kataloq dayanır və bir səhv uyğunlaşdırma səssizcə yanlış ətrin qiymətini dəyişir.',
    primaryCta: 'Oxşar layihəni müzakirə edək',
    secondaryCta: 'Qiymət siyahısından başlayın',
  },
  facts: {
    platforms: 'Vitrin · Quraşdırıla bilən PWA · Arxa ofis',
    languages: 'Azərbaycan · İngilis · Rus',
  },

  status: {
    label: 'Status',
    value: 'Qurulub, test olunub və yerləşdirilməyə hazırdır',
    domain: 'molecion.az · tezliklə açılır',
    note: 'Kataloq və qiymət mühərriki artıq biznesin öz məlumatları üzərində işləyir. Açılış məhsul çəkilişlərini və domeni gözləyir.',
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
      'Təchizatçı sətri sağdan sola beş sahəyə ayrılır, bir kimlik kartında kilidlənir və sonra gizlədilmiş satış qiymətinə çevrilir',
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
    eyebrow: 'Problem',
    title: 'Bir səhv uyğunluq, bir səhv qiymət',
    accent: 'bir səhv qiymət',
    lead: 'Parfümeriya satıcısının kataloqu məhsul siyahısı deyil — ölçü siyahısıdır. Eyni ətir 30, 50 və 90 ml-lik flakonda, həm də testerdə olur, çox vaxt isə iki dəfə: eau de parfum ilə eau de toilette adı bir olsa da, ayrı-ayrı iki ətirdir. Yeni qiymət siyahısının hər sətri bu ölçülərdən dəqiq birini tapmalıdır — ya da heç birini.',
    sheet: {
      ariaLabel:
        'Təchizatçı sətirləri — hər biri brend, ad, konsentrasiya, cins və ölçüdən ibarət tək sətir — ölçülər kataloqu ilə uyğunlaşdırılmağı gözləyir',
      title: 'Uyğunlaşdırılmağı gözləyən sətirlər',
      columnRow: 'Bir sətir, bir mətn',
      columnCost: 'Maya',
      columnMatch: 'Uyğunluq',
      unknown: '?',
      question: 'Bu, 1 600-ə yaxın ölçüdən hansıdır?',
      byHand: 'Əl ilə',
      byHandValue: 'heç kimin sona çatdıra bilmədiyi iş',
    },
    pains: [
      {
        title: 'Satış qiyməti sadə ticarət əlavəsi deyil',
        text: 'Maya dollarla gəlir, mağaza isə manatla satır. Yenidən qiymətləndirmə zəncirdir: kurs, əmsal, sonra brendə, ölçüyə və mayaya görə fərqlənən marja.',
      },
      {
        title: 'Kataloq məhsuldan deyil, ölçüdən ibarətdir',
        text: '1 100-ə yaxın ətir 1 600-ə yaxın flakon və testerə çevrilir. Sətir onlardan dəqiq birinə düşür, ya da tamam yeni bir şeydir.',
      },
      {
        title: 'Yeganə açar çap olunmuş addır',
        text: 'Təchizatçı insanın oxuya biləcəyini öz yazılışı ilə yazır. Kataloq eyni ətri başqa cür yazır. Aralarında ortaq kod yoxdur.',
      },
      {
        title: 'Səhv uyğunluq səs çıxarmır',
        text: 'Heç nə sınmır, heç bir xəta görünmür. Bir ətir sadəcə kimsə fərq edənə qədər mağazada başqa ətrin qiymətində dayanır.',
      },
      {
        title: 'Məhsul bazası ümumiyyətlə yox idi',
        text: 'Biznesin əlində qiymət siyahısı və şəkillər var idi — nə brend, nə ölçü, nə təsvir; mağaza qurmağa yarayan heç nə.',
      },
    ],
    rule: {
      label: 'Dizayn qaydamız',
      text: 'Heç bir qiymət insan görmədən dəyişə bilməz. İmport modulunun işi qərar hazırlamaqdır, qərar vermək deyil.',
    },
    scale: {
      title: 'Qurduğumuz və yüklədiyimiz kataloq',
      ariaLabel: 'Kataloqun miqyası: brendlər, ətirlər, ölçülər, inqrediyent kitabxanası və dillər',
      items: [
        { value: '125', label: 'Kataloqdakı brend' },
        { value: '≈ 1 100', label: 'Ətir' },
        { value: '≈ 1 600', label: 'Ölçü və tester' },
        { value: '1 992', label: 'İnqrediyent notları kitabxanası' },
        { value: '3', label: 'Dil' },
      ],
      note: 'Kataloqdakı hər ətrin tam ətir profili var: akkordlar, üç səviyyəli not piramidası və «nə vaxt istifadə etməli» profili.',
    },
  },

  parse: {
    id: 'parse',
    eyebrow: 'Sətrin oxunması',
    title: 'Sətir sağdan sola oxunur',
    accent: 'sağdan sola',
    lead: 'Təchizatçı sətri tək mətndir: brend, ad, konsentrasiya, cins, ölçü. Soldan sağa oxunanda isə adının içində «Parfum» sözü olan ilk ətir parseri çaşdırır. Ona görə parser sonda — sahələrin sırası dəqiq olan yerdə — başlayır və yalnız ad qalana qədər sətri sağdan soyur.',
    row: {
      ariaLabel:
        'Uydurma MAISON DEMO NUIT LE PARFUM EDP L 90ML sətri sağdan soyulur: ölçü, cins, konsentrasiya, sonra ad',
      label: 'Çap olunduğu kimi sətir',
      direction: 'Oxunma istiqaməti',
    },
    steps: [
      {
        field: 'Ölçü',
        token: '90ML',
        value: '90 ml',
        text: 'Sonuncu dəqiq sahə və sonradan «qiymət yenilənsin, yoxsa yeni flakon əlavə olunsun» qərarını verən sahə.',
      },
      {
        field: 'Cins',
        token: 'L',
        value: 'Qadın',
        text: 'Hərf və ya söz, həmişə konsentrasiya ilə ölçü arasında. «Pour Femme» burada kəsilmir — o, adın bir hissəsidir.',
      },
      {
        field: 'Konsentrasiya',
        token: 'EDP',
        value: 'Eau de Parfum',
        text: 'Yalnız bir token çıxarılır, yalnız sondan. Daha solda qalan konsentrasiya sözü adın hissəsidir.',
      },
      {
        field: 'Ad',
        token: 'NUIT LE PARFUM',
        value: 'Nuit Le Parfum',
        text: 'Soyulmadan sonra qalan hissə addır — həmişə onun bir parçası olmuş «Parfum» da daxil.',
      },
    ],
    failure: {
      ariaLabel:
        'Eyni sətir soldan sağa oxunur: ilk Parfum tokeni konsentrasiya sayılır, ad yarımçıq qalır və sətir mövcud olmayan ətrə çevrilir',
      title: 'Soldan sağa eyni sətir dağılır',
      text: 'Soldan sağa parserin rastlaşdığı ilk PARFUM adın içindədir. Onu konsentrasiya sayır, adı yarımçıq kəsir və iki token sonra heç kimə aid olmayan bir qiymət soruşur.',
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
        title: 'Sətrin sonu etibarlı hissədir',
        text: 'Təchizatçılar adı müxtəlif cür yazır. Ölçü, cins və konsentrasiyanın sırasını isə dəyişmirlər.',
      },
      {
        title: 'Bir token, bir dəfə',
        text: 'İkinci keçid adın özünü kəsərdi, çünki adların içində qanuni olaraq konsentrasiya sözləri olur. Parser birini çıxarır və dayanır.',
      },
      {
        title: 'Hədiyyə dəstləri flakon deyil',
        text: 'Bir qutuda iki flakon təsvir edən sətir ölçü deyil, ayrı məhsuldur. O, kənara qoyulur və hesabatda göstərilir.',
      },
    ],
  },

  identity: {
    id: 'identity',
    eyebrow: 'Eyniləşdirmə qaydası',
    title: 'Dörd sahə bir ətirdir',
    accent: 'bir ətirdir',
    lead: 'Qaydanı mağaza sahibi qoydu və sistemin onu dolanmaq yolu yoxdur. Brend, ad, konsentrasiya və cins: dördü də eynidirsə, eyni ətirdir. Sonra ölçü «bu qiyməti yenilə» ilə «bu flakonu əlavə et» arasında qərar verir. Dörddən biri fərqlidirsə, başqa ətirdir — «təxmini uyğunluq» adlı ehtiyat yol isə yoxdur.',
    card: {
      ariaLabel: 'Brend, ad, konsentrasiya və cins bir kimlik kartında kilidlənir, ölçü isə altda ayrı saxlanılır',
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
      note: 'Dörd sahə hansı ətir olduğunu, beşinci isə hansı flakon olduğunu müəyyən edir.',
    },
    branches: [
      {
        badge: 'Eyni ölçü',
        title: 'Bu qiyməti yenilə',
        size: '90 ml',
        text: 'Kataloqda bu ətir bu flakonda var. Sətir yalnız o variantı yeniləyir, başqa heç nəyə toxunmur.',
      },
      {
        badge: 'Yeni ölçü',
        title: 'Bu ölçünü əlavə et',
        size: '30 ml',
        text: 'Ətir var, bu flakon yox. Sətir həmin ətrin altında yeni ölçüyə çevrilir və onun profilini götürür.',
      },
    ],
    reject: {
      ariaLabel:
        'EDP yerinə EDT yazılmış ikinci sətir kimlik kartının yanından keçir və «başqa ətir — qiymətə toxunulmur» möhürü alır',
      badge: 'Başqa ətir',
      stamp: 'Başqa ətir — qiymətə toxunulmur',
      title: 'Bir hərf fərq, flakonda isə başqa ətir',
      text: 'Eau de toilette heç vaxt eau de parfum ilə uyğunlaşdırılmır — nə avtomatik, nə də təklif kimi, çünki bir kliklik təsdiq qiymətdə səhv etmək üçün həddən artıq asan yoldur. Yaxın uyğunluq sətrin yanında yalnız məlumat kimi görünür, seçim kimi yox.',
      info: 'Kataloqda eyni brend və ad var, konsentrasiya fərqlidir',
      infoLabel: 'Məlumat üçün',
      decisionLabel: 'Qərarınız lazımdır',
    },
    noKey: {
      title: 'Gizli açar yoxdur',
      text: 'Layihənin ortasında təchizatçı kodu bütün sistemdən silindi. O, yaxşı uyğunlaşdırırdı, amma heç nə izah etmirdi: qiymət dəyişəndə səbəbini heç kim görə bilmirdi. Açar artıq yalnız səhifədə çap olunan beş sahədir.',
      before: 'Heç kimin oxuya bilmədiyi kodla uyğunlaşdırma',
      after: 'Hər kəsin oxuya bildiyi beş sahə ilə uyğunlaşdırma',
      tradeoff: 'Güzəşt açıqdır: təchizatçı ətrin adını dəyişəndə sətir «yeni» kimi gəlir və sahib onu bir dəfə əl ilə bağlayır.',
    },
  },

  review: {
    id: 'review',
    eyebrow: 'Yoxlama, sonra tətbiq',
    title: 'Siz təsdiq edənə qədər heç nə yazılmır',
    accent: 'heç nə yazılmır',
    lead: 'Siyahını yükləyin — sistem heç nə yazmır. Hər sətri oxuyur, kataloqla tutuşdurur və bütün dəyişiklikləri qruplara ayırır: bahalaşdı, ucuzlaşdı, yeni ətir, yeni flakon, yaxud kataloqda olub bu siyahıda artıq adı çəkilməyən ətir. Uyğunlaşan hər sətir yalnız təchizatçı rəqəmini deyil, müştərinin görəcəyi satış qiymətini də göstərir. Bir neçə sətir sahibin qərarına çıxarılır.',
    screen: {
      ariaLabel:
        'Yoxlama ekranı: sətirlər qruplara bölünüb, hər sətirdə çap olunmuş mətn, kimlik sahələri və gizlədilmiş maya dəyişikliyi, aşağıda tətbiq düyməsi',
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
        { id: 'up', label: 'Maya artdı', text: 'Uyğunlaşdı və keçən dəfədən bahadır.' },
        { id: 'down', label: 'Maya azaldı', text: 'Uyğunlaşdı və ucuzdur.' },
        { id: 'newFragrance', label: 'Yeni ətir', text: 'Kataloqda yoxdur. Dərc olunmamış qaralama kimi gəlir.' },
        { id: 'newSize', label: 'Yeni ölçü', text: 'Mağazada olan ətir, olmayan flakonda.' },
        { id: 'missing', label: 'Bu siyahıda yoxdur', text: 'Kataloqda var, faylda yoxdur. Yalnız hesabatda, toxunulmur.' },
        { id: 'unchanged', label: 'Dəyişmir', text: 'Eyni ətir, eyni maya. Göstərilir, yazılmır.' },
        { id: 'skipped', label: 'Atlanıb', text: 'Hədiyyə dəstləri, faylda təkrarlanan sətirlər və qaydanın həmişə atladığı sətirlər.' },
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
        title: 'Köhnəlmiş yoxlama qiymət yaza bilmir',
        text: 'Tətbiq anında server siyahını bir daha oxuyur, fərqi yenidən hesablayır və yalnız sizin seçdiyiniz sətirləri yazır. Bir saat açıq qalmış yoxlama köhnə rəqəmi mağazaya gətirə bilmir.',
      },
      {
        title: 'Sentlik fərq qiymət dəyişikliyi deyil',
        text: 'Maya sentə qədər saxlanılır; tam ədədli mayaya nisbətən bir neçə sentlik hərəkət «yuvarlaqlaşma» kimi işarələnir — real xəbər səs-küyün içində itmir.',
      },
      {
        title: 'Əl ilə qoyulmuş qiymət əl ilə qalır',
        text: 'Sahib flakonu əl ilə qiymətləndiribsə, import yalnız mayasını yeniləyir, satış qiymətini isə qoyulduğu yerdə saxlayır.',
      },
      {
        title: 'Siyahıda olmamaq qərar deyil',
        text: 'Bir siyahıda görünməyən ətir hesabatda göstərilir, satışdan çıxarılmır və sıfırlanmır. Fayldan düşmək kataloqdan çıxmaq deyil.',
      },
    ],
  },

  rules: {
    id: 'rules',
    eyebrow: 'Öyrənən import modulu',
    title: 'Eyni problemli sətir iki dəfə soruşmur',
    accent: 'iki dəfə soruşmur',
    lead: 'Təchizatçı brend adını öz yazılışı ilə yazır, heç kimin rastlaşmadığı konsentrasiyanı qısaldır, ya da parserin heç oxuya bilmədiyi sətir çap edir. Sahib onu yoxlama ekranında bir dəfə həll edir. Bu həll qayda kimi saxlanılır və növbəti siyahıda sətri kimsə görməmişdən əvvəl tətbiq olunur.',
    panel: {
      ariaLabel:
        'Qaydalar cədvəli: təchizatçının yazdığını kataloqun anladığına çevirən altı növ qayda, hər birində tutduğu sətirlərin sayğacı',
      title: 'Uyğunlaşdırma qaydaları',
      columns: { rule: 'Təchizatçı belə yazır', target: 'Kataloqda bu deməkdir', hits: 'Tutdu' },
      hitsUnit: 'sətir',
      types: [
        {
          label: 'Brend yazılışı',
          source: 'MSN DEMO',
          target: 'Maison Demo',
          hits: '18',
          text: 'Qısaltma, hərf səhvi və ya köhnə yazılış.',
        },
        {
          label: 'Konsentrasiya sözü',
          source: 'PARFUM DE NUIT',
          target: 'Parfum',
          hits: '7',
          text: 'Parserin özü müəyyən edə bilmədiyi brend ifadəsi.',
        },
        { label: 'Cins işarəsi', source: 'F', target: 'Qadın', hits: '4', text: 'Daxili siyahıda olmayan işarə.' },
        {
          label: 'Sətir düzəlişi',
          source: 'ATELIER NUMUNE VITRINE DEMO L',
          target: 'EDP · 100 ml',
          hits: '3',
          text: 'Oxunmayan sahələr bir dəfə əl ilə yazılıb.',
        },
        {
          label: 'Ətirlə bağlama',
          source: 'DEMO NOIR ABSOLU 75',
          target: 'Absolu Nümunə · Parfum · Uniseks · 75 ml',
          hits: '2',
          text: '«Bu sətir həmin flakondur» — insan təsdiqləyir, sistem təxmin etmir.',
        },
        {
          label: 'Həmişə atla',
          source: 'MAISON DEMO BODY MIST 200ML',
          target: 'Heç vaxt import olunmur',
          hits: '6',
          text: 'Ətir variantı deyil və olmayacaq.',
        },
      ],
      hitsNote:
        'Sayğac qaydanın nə qədər sətir tutduğunu göstərir: heç işləməyəni silmək, çox işləyəni isə şübhə altına almaq olur.',
      actions: {
        fix: 'Bu sətri düzəlt',
        link: 'Başqa ətirlə eyniləşdir',
        skip: 'Bu sətri həmişə atla',
        undo: 'Qərarımı geri al',
      },
    },
    points: [
      {
        title: 'Tapdığınız yerdə düzəldin',
        text: 'Hər sətir nə ilə uyğunlaşdığının yanında açılır. Düzəliş orada edilir, eyni fayl dərhal yenidən analiz olunur və cavab saxlanılır.',
      },
      {
        title: 'Yarımçıq düzəliş yenə problemdir',
        text: 'Düzəlişdən sonra ölçü və ya konsentrasiya hələ də oxunmursa, sətir yenidən «qərar lazımdır» halına qaytarılır.',
      },
      {
        title: 'Yığılan dəqiqlik',
        text: 'Bilik kodda deyil, datada yaşadığı üçün import modulu onuncu siyahıda birincidən dəqiqdir — aradan bir dəfə də yerləşdirmə keçmədən.',
      },
      {
        title: 'Hər qayda geri alına bilir',
        text: 'Qaydanı silin — import modulu o sətir üçün standart oxunuşuna qayıdır. Səhv qərarın qiyməti bir klikdir, yenidən qurulma deyil.',
      },
    ],
  },

  pricing: {
    id: 'pricing',
    eyebrow: 'Maya qiymətə çevrilir',
    title: 'Dollarla mayadan satış qiymətinə',
    accent: 'satış qiymətinə',
    lead: 'Təchizatçı mayası qiymət deyil. O, sahibin idarə etdiyi zəncirlə qiymətə çevrilir: kurs, əmsal, sonra bu flakona ən dəqiq uyğun gələn marja qaydası — brendi, ölçüsü və düşdüyü maya aralığı. Mühərrik bunu heç bir qiymət dəyişməmişdən əvvəl bütün kataloq üzrə gözünüzün qarşısında hesablayır.',
    chain: {
      ariaLabel:
        'Bütün rəqəmləri gizlədilmiş qiymət zənciri: dollarla maya kursa və əmsala vurulur, manatla maya alınır, marja əlavə olunur və satış qiyməti çıxır',
      title: 'Zəncir',
      steps: [
        { label: 'Təchizatçı mayası', unit: 'USD', value: '•••', text: 'Siyahıdan oxunduğu kimi, sentə qədər.' },
        { label: 'Kurs', unit: '×', value: '•••', text: 'Sahibin təyin etdiyi manat kursu.' },
        { label: 'Əmsal', unit: '×', value: '•••', text: 'Siyahı qiyməti ilə Bakıdakı rəf arasında qalan hər şey.' },
        { label: 'Maya', unit: 'AZN', value: '•••', text: 'Marjanın ölçüldüyü rəqəm.' },
        { label: 'Marja', unit: '+', value: '•••', text: 'Bu flakona ən dəqiq uyğun gələn qaydadan.' },
        { label: 'Satış qiyməti', unit: 'AZN', value: '•••', text: 'Müştərinin gördüyü, manata yuvarlaqlanmış qiymət.' },
      ],
    },
    rule: {
      ariaLabel: 'Bir flakona uyğun gələn dörd fərqli dəqiqlikdə marja qaydası, üç şərtli qayda qalib gəlir',
      title: 'Ən dəqiq qayda qalib gəlir',
      text: 'Qayda «VƏ» ilə birləşən şərtlər dəstidir: bu brend, bu ölçü və bu maya aralığı. Bir flakona bir neçə qayda uyğun gələ bilər; şərti çox olan onu götürür, bərabər dəqiqlikdə isə yeni yazılan qalib gəlir.',
      conditions: { house: 'Brend', size: 'Ölçü', band: 'Maya aralığı', any: 'Hamısı' },
      winner: 'Qalib qayda',
      loser: 'O da uyğun gəlir',
      specificity: 'Şərt',
      fallback: 'Heç bir qayda uyğun gəlmirsə, kataloq üzrə ümumi marja işləyir.',
      example: { house: 'Maison Demo', size: '90 ml', band: 'Bir aralıq', margin: '•••' },
    },
    brackets: {
      ariaLabel: 'Rəqəmsiz çəkilmiş maya aralıqları və bu flakonun mayasının hansına düşdüyünü göstərən nişan',
      title: 'Maya aralıqları',
      note: 'Aralıqlar, onların sərhədləri və marjaları satıcının kommersiya məlumatlarıdır. Burada rəqəmsiz çəkilib, çünki əsas olan formadır.',
      landed: 'Bu flakonun mayası buraya düşür',
      bandLabel: 'Aralıq',
    },
    preview: {
      ariaLabel:
        'Hər flakonun gizlədilmiş mayası, onu qiymətləndirən qayda və gizlədilmiş satış qiyməti olan canlı önizləmə cədvəli, altında yadda saxla və ayrıca tətbiq et düymələri',
      title: 'Önizləmə, sonra tətbiq',
      text: 'Kursu, əmsalı və ya hər hansı qaydanı dəyişin — cədvəl gözünüzün qarşısında hər flakon üçün yenidən hesablanır: maya, qalib qayda, satış qiyməti və aradakı fərq.',
      columns: { fragrance: 'Ətir', size: 'Ölçü', cost: 'Maya', rule: 'Qayda', delta: 'Fərq', shelf: 'Satış qiyməti' },
      save: 'Strategiyanı yadda saxla',
      saveNote: 'Qaydaları saxlayır. Qiymətlər yerində qalır.',
      apply: 'Kataloqa tətbiq et',
      applyNote: 'Yeni satış qiymətlərini bir dəfə, qəsdən yazır.',
      why: 'İki düymə, çünki qaydanı yadda saxlamaq və 1 600-ə yaxın flakonu yenidən qiymətləndirmək heç vaxt eyni klik olmamalıdır.',
    },
    log: {
      title: 'Hər qiymətin tarixçəsi var',
      text: 'Mühərrikin yazdığı hər qiymət arxasında bir qeyd qoyur: nə idi, nə oldu, hansı tətbiq onu dəyişdi və nə vaxt. Marjanı dəyişməyi təhlükəsiz sınağa çevirən də budur.',
      columns: { when: 'Tarix', fragrance: 'Ətir', from: 'Əvvəl', to: 'Sonra', reason: 'Səbəb' },
      reason: 'Strategiya tətbiq olundu',
    },
  },

  product: {
    id: 'product',
    eyebrow: 'Mağaza və arxa ofis',
    title: 'Üç dildə vitrin',
    accent: 'Üç dildə',
    lead: 'Öndə: müştərinin həqiqətən gəzə biləcəyi kataloq — filtrlər, üç hərfdən flakonu tapan axtarış və ətrin özünün marketinq abzası deyil, data olduğu məhsul səhifəsi. Arxada: mağazanı idarə edən 14 bölmə, hər biri yalnız ona ehtiyacı olan adamlara açılır.',
    shot: {
      title: 'Mağazanın vitrini',
      caption: 'Real vitrin — brendin öz açılış ekranı və kateqoriya blokları: mağaza özünü belə təqdim edir.',
      alt: 'Molecion vitrini: işıqlandırılmış rəflərdə ətir flakonları, qızılı monoqram və brendin öz çantası qara mərmər üzərində.',
      categories: [
        { label: 'Kişi', alt: 'Qara mərmər üzərində kişi ətirləri' },
        { label: 'Qadın', alt: 'Qara mərmər üzərində qadın ətirləri' },
        { label: 'Uniseks', alt: 'Qara mərmər üzərində uniseks ətirlər' },
      ],
    },
    storefront: {
      ariaLabel:
        'Telefonda vitrin: filtr pərdəsi ilə kataloq, akkordlar, not piramidası və «nə vaxt istifadə etməli» profili olan məhsul səhifəsi və quraşdırma təklifi',
      title: 'Vitrin',
      groups: [
        {
          label: 'Kataloq',
          items: [
            'Brend, cins, konsentrasiya və qiymət filtrləri',
            'Ağıllı axtarış — üç hərf flakonu tapır',
            'Tor və siyahı görünüşü',
            'Telefonda filtrlər aşağı pərdədə',
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
          label: 'Tətbiq, sadəcə mobil səhifə deyil',
          items: ['Quraşdırıla bilən PWA', 'Beş bölməli mobil naviqasiya', 'Zəif internetdə işləyir', 'Bloq və məlumat səhifələri'],
        },
      ],
    },
    profile: {
      ariaLabel:
        'Bir ətrin profili yazı və sütunlarla: beş əsas akkord, üç səviyyəli not piramidası, fəsil və gündüz-gecə sütunları',
      title: 'Ətir şəkil deyil, datadır',
      text: 'Akkordlar, üç səviyyəli not piramidası və «nə vaxt istifadə etməli» profili 1 992 inqrediyentlik kitabxanadan götürülüb kataloqdakı hər ətir üçün saxlanılır. Müştəriyə hər ikisi «zərif» yazan iki abzası oxumaq yerinə iki flakonu müqayisə etmək imkanı verən də budur.',
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
      note: 'Burada yazı və sütunlarla çəkilib: profil strukturlu datadır, ona görə istənilən şəkildə göstərilə bilər.',
    },
    admin: {
      ariaLabel: 'Arxa ofis: yan menyuda 14 bölmə və icazələri yalnız birini açan işçi hesabı',
      title: 'On dörd bölmə, hər birinə bir icazə',
      text: 'Mağazanı idarə etmək üçün lazım olan hər şey buradadır və icazəsi olmayan adam heç nəyə çata bilmir.',
      sections: [
        {
          label: 'Məhsullar',
          text: 'Yeddi tablı redaktor: əsaslar, ölçü və qiymət, kvadrat kəsicili qalereya, notlar, akkordlar, nə vaxt istifadə etməli, axtarış mətnləri.',
        },
        { label: 'Brendlər', text: 'Öz loqosu, tarixçəsi və səhifəsi olan brendlər.' },
        { label: 'Notlar', text: 'Hər piramidanın qurulduğu 1 992 inqrediyentlik kitabxana.' },
        { label: 'Akkordlar', text: 'Akkord lüğəti, hər biri öz rəngi ilə.' },
        { label: 'Sifarişlər', text: 'Sayt və telefon sifarişləri vahid kitabda, status və ödəniş axını ilə.' },
        { label: 'Müştərilər', text: 'Hər sifarişin telefon nömrəsindən yığılan tarixçə, sonradan hesabla birləşdirilə bilir.' },
        { label: 'Mesajlar', text: 'Əlaqə formasının qutusu: yeni, oxunub, cavablanıb, arxivdə.' },
        { label: 'Bloq', text: 'Kateqoriyalı yazılar və qaralamalar.' },
        { label: 'Endirimlər', text: 'Brend, cins və ya flakon üzrə kampaniyalar, tarix aralığı və mənfəət həddi ilə.' },
        { label: 'Qiymət strategiyası', text: 'Kurs, əmsal və marja qaydaları, canlı önizləmə ilə.' },
        { label: 'Qiymət siyahısı', text: 'İmport modulu, yoxlama ekranı, qaydalar və bütün keçmiş importlar.' },
        { label: 'Ana səhifə', text: 'Ana səhifənin mətn blokları və şəkil yerləri.' },
        { label: 'Tərcümələr', text: 'Məhsul mətnləri və interfeys sözləri, üç dildə.' },
        { label: 'Tənzimləmələr', text: 'Mağaza məlumatları, çatdırılma haqqı, ödəniş üsulları və işçi hesabları.' },
      ],
      staff: {
        title: 'Bir iş, bir görünüş',
        text: 'İcazələr bölmə-bölmə verilir və eyni icazə həm menyunu, həm də arxadakı əməliyyatı qoruyur. Flakon şəkli çəkmək üçün götürülən köməkçi yalnız məhsulları görür — nə maya, nə marja, nə də qiymət siyahısı.',
        exampleLabel: 'Köməkçinin görünüşü',
        exampleGranted: 'Məhsullar',
        exampleHidden: 'Qalan hər şey',
      },
      languages: {
        title: 'Tərcümələr sahibə aiddir',
        text: 'Məhsul mətnləri və interfeys sözləri arxa ofisdən iki qatda redaktə olunur, ona görə dördüncü dil yerləşdirmə deyil, məlumat daxiletməsidir. 1 992 not adının hamısı maşın tərcüməsi ilə qaralama kimi gəlib və qaralama kimi işarələnib — insan yazmır, cilalayır.',
        layers: [
          { label: 'Məzmun', text: 'Ətir və brend mətnləri, dil üzrə, ingilis bazanın üstündə.' },
          { label: 'İnterfeys', text: 'Düymə, etiket və banner sözləri, koda toxunmadan dəyişir.' },
          { label: 'Ehtiyat', text: 'Tərcümə olunmayan hər şey ingiliscəyə qayıdır, boş qalmır.' },
        ],
      },
    },
  },

  engineering: {
    id: 'engineering',
    eyebrow: 'Necə qurulub',
    title: 'Bir yerləşdirmə, kənara çıxan heç bir sorğu yoxdur',
    accent: 'kənara çıxan heç bir sorğu yoxdur',
    lead: 'Vitrin, arxa ofis və API sorğu yolunda heç bir üçüncü tərəf xidməti olmayan tək bir yerləşdirmə vahididir. Müştəri, maya və ya marja haqqında heç nə işlədiyi serverdən kənara çıxmır.',
    principles: [
      {
        label: 'Bir əmr, bir platforma',
        text: 'Mağaza, arxa ofis və API tək konteyner obrazı kimi birlikdə gedir və bir əmr bütün platformanı adi serverdə qaldırır.',
      },
      {
        label: 'Yenidən yerləşdirməyə tab gətirən data',
        text: 'Kataloq və yüklənmiş şəkillər tətbiqdən kənarda yaşayır, ona görə yenidən qurulma onları olduğu kimi saxlayır. Ehtiyat nüsxələr avtomatik alınır.',
      },
      {
        label: 'Üçüncü tərəf xidməti yoxdur',
        text: 'Analitika yox, izləyici yox, səhifə arxasında xarici API yox. Məxfilik hekayəsi siyasət səhifəsi deyil, arxitekturadır.',
      },
      {
        label: 'Pulun keçdiyi yerdə test',
        text: 'Parser, uyğunlaşdırıcı, fərq hesabı və qiymət zənciri unit testləri olan saf modullardır. Test dəsti mutasiya yoxlamasından keçib: iki qayda qəsdən sındırılıb və testlərin real reqressiyanı tutduğu təsdiqlənib.',
      },
      {
        label: 'Şəkillər barədə düşünmək lazım deyil',
        text: 'Hər yüklənən şəkil serverdə yoxlanır, düzgün istiqamətə çevrilir, ölçüsü məhdudlaşdırılır və veb ölçüsündə WebP formatına salınır — hər yer üçün bir fayl.',
      },
    ],
    posture: {
      title: 'Təhlükəsizlik yanaşması',
      ariaLabel: 'Təhlükəsizlik imkanlarının siyahısı',
      tags: [
        'İcazələr bölmə üzrə verilir',
        'Sahibin ləğv edə bildiyi giriş sessiyaları',
        'Hər sərhəddə serverdə yoxlama',
        'Yüklənən fayllara etibar edilmir, yenidən kodlanır',
        'Formatlanmış mətn saxlanmadan əvvəl təmizlənir',
        'Hər qiymət dəyişikliyi qeyd olunur',
        'Sorğu yolunda üçüncü tərəf xidməti yox',
      ],
    },
    roles: {
      title: 'Üç istifadəçi tipi',
      items: [
        {
          title: 'Sahib',
          text: 'Bütün bölmələr onundur: kurs, əmsal, marja qaydaları, importun təsdiqi və mübahisəli sətir üzrə son söz.',
        },
        {
          title: 'İşçi',
          text: 'Yalnız ona verilmiş bölmələri görür, başqa heç nəyi görmür — nə menyuda, nə də arxadakı əməliyyat vasitəsilə.',
        },
        {
          title: 'Müştəri',
          text: 'Gəzir, axtarır, sevimlilərə əlavə edir və qeydiyyatsız sifariş verir, sonra telefon nömrəsi ilə tanınır.',
        },
      ],
    },
  },

  role: {
    eyebrow: 'Rolumuz',
    title: 'Aibaycan nə etdi',
    items: [
      {
        title: 'Mövcud olmayan kataloqu qurduq',
        text: 'Biznesin öz qiymət siyahısını strukturlu kataloqa çevirdik, sonra hər ətrə 1 992 inqrediyentlik not kitabxanasından tam profil verdik.',
      },
      {
        title: 'Qiymət siyahısını mühəndis işi kimi qurduq',
        text: 'Sağdan sola oxuyan parser, eyniləşdirmə qaydası, fərq hesabı və yoxlama axını — üstəlik sahibə proqramçı çağırmadan import modulunu özünün öyrətməsinə imkan verən qayda anbarı.',
      },
      {
        title: 'Qiymət mühərrikini qurduq',
        text: 'Mayadan satış qiymətinə, çoxşərtli marja qaydaları, bütün kataloq üzrə canlı önizləmə, yadda saxlama ilə tətbiq arasında qəsdən qoyulmuş ayrılıq və dəyişən hər qiymətin arxasında qeyd.',
      },
      {
        title: 'Vitrini dizayn edib qurduq',
        text: 'Tətbiq kimi işləyən mobil interfeysi olan üç dilli mağaza — krem kağız üzərində qara və qızılı — mərkəzində isə ətir profili.',
      },
      {
        title: 'Arxa ofisi qurub platformanı paketlədik',
        text: 'İcazə ilə qorunan 14 bölmə, sahibin redaktə etdiyi tərcümə qatı, serverdə şəkil emalı və datası hər yenidən yerləşdirməyə tab gətirən bir əmrlik yerləşdirmə.',
      },
    ],
  },
  stack: {
    eyebrow: 'Texnologiyalar',
    title: 'Müasir texnologiyalar üzərində qurulub',
    groups: [
      { label: 'Tətbiq', items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
      { label: 'Vitrin', items: ['PWA', 'Service worker', 'Server components'] },
      { label: 'Data', items: ['Prisma', 'SQL', 'Zod'] },
      { label: 'Media', items: ['Sharp', 'WebP'] },
      { label: 'Keyfiyyət', items: ['Vitest'] },
    ],
  },
  faq: {
    title: 'Pərakəndə satıcıların bizə verdiyi suallar',
    items: [
      {
        q: 'Təchizatçı qiymət siyahımızı avtomatlaşdıra bilərsinizmi?',
        a: 'Bəli, adətən ilk qurulmağa dəyən hissə də məhz budur. Sizin real siyahınızdan və real kataloqunuzdan başlayırıq, iki sətri eyni məhsul edən şərti yazılı şəkildə razılaşdırırıq, sonra nəyin bahalaşdığını, nəyin ucuzlaşdığını, nəyin yeni olduğunu və nəyin yoxa çıxdığını göstərən — siz təsdiq edənə qədər isə heç nə yazmayan import modulu qururuq.',
      },
      {
        q: 'Səhv məhsulun qiymətinin dəyişməyəcəyinə necə əmin olursunuz?',
        a: 'Darıxdırıcı dərəcədə sərt eyniləşdirmə qaydası ilə. Molecion-da bu brend, ad, konsentrasiya və cinsdir: dördü də eyni olmalıdır, yoxsa söhbət başqa ətirdən gedir; ölçü isə «qiyməti yenilə» ilə «flakon əlavə et» arasında qərar verir. Təxmini uyğunluq yoxdur, tətbiq anında isə dəyişikliklər serverdə yenidən hesablanır — köhnəlmiş yoxlama qiymət yaza bilmir.',
      },
      {
        // The heading is uppercased on the page, and az would turn the brand's Latin i into İ: MOLECİON.
        q: 'Bu parfümeriya mağazası artıq canlıdırmı?',
        a: 'Xeyr, və biz onu canlı kimi təqdim etməyəcəyik. Molecion qurulub, test olunub və yerləşdirilməyə hazırdır: kataloq və qiymət mühərriki artıq biznesin öz məlumatları üzərində işləyir, açılış isə məhsul çəkilişlərini və molecion.az domenini gözləyir.',
      },
      {
        q: 'İşçilərimiz hər həftə sizə zəng etmədən mağazanı idarə edə bilərmi?',
        a: 'Arxa ofis bunun üçündür. Məhsul mətnləri, brendlər, not və akkord kitabxanaları, ana səhifə məzmunu, çatdırılma və ödəniş tənzimləmələri, kampaniyalar, qiymət qaydaları və üç dilin hamısı paneldən redaktə olunur; icazələr isə hər adamın yalnız öz işini görməsini təmin edir. Yeni təchizatçı yazılışı kiminsə yazdığı qaydadır, yeni buraxılış deyil.',
      },
      {
        q: 'Bizim mağazamız üçün də belə bir şey qura bilərsinizmi?',
        a: 'Bəli. Vitrin işin asan yarısıdır; mağazanın etibarını müəyyən edən yarı qiymətləndirmə və təchizatçı məlumatlarının qəbuludur. Biz oradan başlayırıq, pul qaydalarını sizinlə razılaşdırırıq və mağazanı onların ətrafında qururuq — özünüzə aid infrastrukturda.',
      },
    ],
  },
  railLabels: {
    challenge: 'Problem',
    parse: 'Sətrin oxunması',
    identity: 'Kimlik',
    review: 'Yoxlama',
    rules: 'Qaydalar',
    pricing: 'Maya → qiymət',
    product: 'Mağaza və arxa ofis',
    engineering: 'Mühəndislik',
  },
  sampleDataLabel: 'Nümunə məlumat',
  sampleDataNote:
    'Ekranlardakı brend, ətir və qiymət siyahısı sətirləri uydurma nümunələrdir. Maya, marja, kurs və qiymətlər satıcının kommersiya məlumatlarıdır və hər yerdə gizlədilib.',
  mockupAriaLabel: 'Uydurma nümunə məlumatlar və gizlədilmiş rəqəmlərlə Molecion ekranının təsviri',
};

export default az;
