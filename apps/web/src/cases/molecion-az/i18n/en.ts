// Molecion case study (/[locale]/projects/molecion-az), EN. Facts follow Atlas `src/i18n/en/cases/molecion.ts`,
// but every prose string is written fresh for Aibaycan (no duplicate content) — do not paste Atlas wording back in.
// the e-commerce platform and retail back office we built for Molecion,
// a Baku premium-fragrance retailer.
// Type source for this slug (AZ/RU are typed `MolecionCopy`). Chapter `id`s are fixed keys: keep them identical in
// all locales. In each chapter `accent` must be an exact substring of `title`.
// Mockup copy (`samples`, `heroVisual`, `sheet`, `row`, `card`, `screen`, `panel`, `chain`, `storefront`,
// `profile`, `admin`) is INVENTED sample data: the house and fragrance names do not exist, and every cost,
// margin, rate and price is masked with `samples.masked`. Geometry (bar lengths, band counts, row order)
// belongs in ../data.ts, not here.
// Claims: Molecion is built, tested and deployment-ready — never "live", "in production", "in daily use" or
// "selling". `molecion.az` is plain text, never a link. The only numbers on this page are the catalogue and
// system scale in `challenge.scale` (125 brands, ~1,100 fragrances, ~1,600 sizes, a 1,992-ingredient note
// library, 3 languages) and the 14 back-office sections. No prices, no costs, no rate, no coefficient, no
// margins, no percentages, no order or customer counts. Never name the supplier, the file format it sends,
// its cadence, or any real perfume house.
import type { CaseBase } from '../../types';

const en = {
  seo: {
    title: 'Molecion: Perfume E-Commerce Site with Price-List Import',
    description:
      'How Aibaycan built a three-language online perfume shop for a Baku retailer, with supplier price-list import, a margin-rule pricing engine and a back office.',
  },
  h1: 'Online perfume store with automated supplier price-list import',
  hero: {
    eyebrow: 'Fragrance retail · Online store · Back-office software',
    title: 'The shop was the easy part',
    accent: 'the easy part',
    lead: 'Molecion is a Baku retailer of original designer and niche perfumes. The online sales channel we built for it is organised around the thing that decides whether customers can trust such a shop: the supplier’s price list. That list comes in dollars, the catalogue holds roughly 1,100 fragrances across roughly 1,600 sizes, and a single careless match quietly reprices the wrong bottle.',
    primaryCta: 'Talk to us about your shop',
    secondaryCta: 'See how the price list works',
  },
  facts: {
    platforms: 'Storefront · Installable PWA · Back office',
    languages: 'Azerbaijani · English · Russian',
  },

  /** Rendered as a status band under the hero. `domain` is PLAIN TEXT — never a link. */
  status: {
    label: 'Status',
    value: 'Built, tested and deployment-ready',
    domain: 'molecion.az · launching soon',
    note: 'The pricing engine and the catalogue already work with the retailer’s real data. Going public is on hold until the product photography and the domain are ready.',
  },

  samples: {
    houses: { maison: 'Maison Demo', atelier: 'Atelier Demo', noir: 'Demo Noir' },
    fragrances: { nuit: 'Nuit Le Parfum', vitrine: 'Vitrine Demo', absolu: 'Absolu Demo' },
    /** Supplier lines exactly as such a list prints them: one string, upper case, no diacritics. */
    rows: {
      nuitEdp90: 'MAISON DEMO NUIT LE PARFUM EDP L 90ML',
      nuitEdp30: 'MAISON DEMO NUIT LE PARFUM EDP L 30ML',
      nuitEdt90: 'MAISON DEMO NUIT LE PARFUM EDT L 90ML',
      vitrineTester: 'ATELIER DEMO VITRINE DEMO EDP L 100ML TESTER',
      absolu: 'DEMO NOIR ABSOLU DEMO PARFUM UNISEX 75ML',
      bodyMist: 'MAISON DEMO BODY MIST 200ML',
      giftSet: 'MAISON DEMO NUIT LE PARFUM EDP L 90ML+2X30ML SET',
    },
    concentrations: { edp: 'EDP', edt: 'EDT', parfum: 'Parfum' },
    concentrationNames: { edp: 'Eau de Parfum', edt: 'Eau de Toilette', parfum: 'Parfum' },
    genders: { women: 'Women', men: 'Men', unisex: 'Unisex' },
    sizes: { ml30: '30 ml', ml50: '50 ml', ml75: '75 ml', ml90: '90 ml', ml100: '100 ml', tester: 'Tester' },
    listRef: 'Demo list 07',
    /** Every monetary figure on this page renders as this token. */
    masked: '•••',
    maskNote: 'Masked',
  },

  heroVisual: {
    ariaLabel:
      'A supplier line split from the right into house, name, concentration, gender and size, snapping into a single identity card and ending as a masked shelf price',
    rowLabel: 'The supplier’s line',
    identityLabel: 'One fragrance',
    priceLabel: 'Shelf price',
    fields: { house: 'House', name: 'Name', concentration: 'Concentration', gender: 'Gender', size: 'Size' },
    verdict: 'Matched on four fields and a size',
    chainLabel: 'Cost → price',
    steps: { cost: 'Cost', rate: 'Rate', coefficient: 'Coefficient', margin: 'Margin', shelf: 'Shelf' },
  },

  challenge: {
    id: 'challenge' as const,
    eyebrow: 'The problem',
    title: 'A wrong match is a wrong price',
    accent: 'a wrong price',
    lead: 'In perfume retail the catalogue is really a list of bottles rather than products. One scent comes in 30, 50 and 90 ml bottles and as a tester — and frequently twice, since an eau de parfum and an eau de toilette sharing a name are two separate fragrances. Each line of an incoming price list has to land on precisely one of those sizes, or on none at all.',
    sheet: {
      ariaLabel:
        'Supplier lines, each one string holding house, name, concentration, gender and size, still unmatched against the catalogue of sizes',
      title: 'Lines waiting to be matched',
      columnRow: 'One line, one string',
      columnCost: 'Cost',
      columnMatch: 'Matches',
      unknown: '?',
      question: 'Which of ~1,600 sizes does this line mean?',
      byHand: 'By hand',
      byHandValue: 'a job nobody ever gets to the end of',
    },
    pains: [
      {
        title: 'Shelf price is more than cost plus markup',
        text: 'The supplier quotes in dollars; customers pay in manat. Getting from one to the other takes a rate, then a coefficient, then a margin that changes with the house, the size and the cost.',
      },
      {
        title: 'Sizes, not products',
        text: 'Roughly 1,100 fragrances turn into roughly 1,600 bottles and testers. Every line either hits exactly one of them or describes something the shop does not carry yet.',
      },
      {
        title: 'Only the printed name links them',
        text: 'The supplier spells a fragrance however it likes, for human eyes. The catalogue spells it differently. No code is shared between the two.',
      },
      {
        title: 'A bad match is silent',
        text: 'No crash, no warning. A perfume just sits in the shop wearing someone else’s price until a person happens to spot it.',
      },
      {
        title: 'No product database existed',
        text: 'All the business had was a price list and its photographs. Houses, sizes, descriptions — none of it existed, so there was nothing to build a shop on.',
      },
    ],
    rule: {
      label: 'The rule we designed around',
      text: 'A price only changes after a person has looked at it. The importer prepares the decision; it never takes it.',
    },
    scale: {
      title: 'The catalogue we built and filled',
      ariaLabel: 'Catalogue scale: brands, fragrances, sizes, the note library and languages',
      items: [
        { value: '125', label: 'Brands in the catalogue' },
        { value: '≈ 1,100', label: 'Fragrances' },
        { value: '≈ 1,600', label: 'Sizes and testers' },
        { value: '1,992', label: 'Ingredient note library' },
        { value: '3', label: 'Languages' },
      ],
      note: 'Each fragrance comes with a complete scent profile: its accords, a top-heart-base note pyramid and guidance on when to wear it.',
    },
  },

  parse: {
    id: 'parse' as const,
    eyebrow: 'Parsing the line',
    title: 'The parser starts at the end',
    accent: 'at the end',
    lead: 'Each supplier line is a single string holding house, name, concentration, gender and size. Parse it left to right and it fails on the first perfume that has the word Parfum in its own name. That is why the parser begins at the right-hand end, where the field order never changes, and strips fields off one by one until nothing but the name remains.',
    row: {
      ariaLabel:
        'The invented line MAISON DEMO NUIT LE PARFUM EDP L 90ML taken apart from the right: size, gender, concentration, and finally the name',
      label: 'The line as printed',
      direction: 'Read this way',
    },
    steps: [
      {
        field: 'Size',
        token: '90ML',
        value: '90 ml',
        text: 'The most dependable field, and later the one that settles whether this is a price update or a new bottle.',
      },
      {
        field: 'Gender',
        token: 'L',
        value: 'Women',
        text: 'A letter or a word, always sitting between concentration and size. A phrase like “Pour Femme” is part of the name and is left there.',
      },
      {
        field: 'Concentration',
        token: 'EDP',
        value: 'Eau de Parfum',
        text: 'Only one token is taken, and only from the end. Any concentration word further to the left belongs to the name.',
      },
      {
        field: 'Name',
        token: 'NUIT LE PARFUM',
        value: 'Nuit Le Parfum',
        text: 'What remains after the stripping is the name — Parfum included, since it was part of the name all along.',
      },
    ],
    failure: {
      ariaLabel:
        'The same line parsed left to right: the first Parfum token is mistaken for the concentration, the name is truncated and the result is a fragrance nobody stocks',
      title: 'Read left to right, it breaks',
      text: 'Going left to right, the parser hits the PARFUM inside the name first, mistakes it for the concentration and truncates the name. A couple of tokens later it is looking up a price for a product that does not exist.',
      wrongLabel: 'Left to right',
      rightLabel: 'Right to left',
      wrongName: 'Nuit',
      wrongConcentration: 'Parfum',
      leftover: 'EDP L',
      wrongVerdict: 'A fragrance that does not exist',
      rightVerdict: 'Nuit Le Parfum · EDP · Women · 90 ml',
    },
    points: [
      {
        title: 'Suppliers keep the tail stable',
        text: 'Names get written in many ways. Size, gender and concentration always come last, and always in the same order.',
      },
      {
        title: 'Strip once, then stop',
        text: 'Names can legitimately contain concentration words, so a second pass would bite into the name. The parser removes one token and is done.',
      },
      {
        title: 'A gift set is its own article',
        text: 'When a line describes two bottles boxed together, it is not a size of anything. It gets set aside and listed in the report.',
      },
    ],
  },

  identity: {
    id: 'identity' as const,
    eyebrow: 'What counts as the same fragrance',
    title: 'Same four fields, same perfume',
    accent: 'same perfume',
    lead: 'This rule came from the owner, and the system cannot bend it. When house, name, concentration and gender all agree, it is one fragrance, and the size then settles whether the line updates a price or adds a bottle. If any one of the four differs, it is another fragrance — and there is no approximate match waiting to catch it.',
    card: {
      ariaLabel: 'House, name, concentration and gender snapping into one identity card, with the size kept apart beneath it',
      title: 'Identity',
      locked: 'Locked',
      andSize: '+ size',
      sizeLabel: 'Size',
      fields: [
        { label: 'House', value: 'Maison Demo' },
        { label: 'Name', value: 'Nuit Le Parfum' },
        { label: 'Concentration', value: 'EDP' },
        { label: 'Gender', value: 'Women' },
      ],
      note: 'Four fields pick the fragrance; the fifth picks the bottle.',
    },
    branches: [
      {
        badge: 'Same size',
        title: 'Update this price',
        size: '90 ml',
        text: 'This fragrance is already stocked in this bottle, so the line refreshes that single variant and touches nothing else.',
      },
      {
        badge: 'New size',
        title: 'Add this size',
        size: '30 ml',
        text: 'The fragrance is known but the bottle is not. A new size is added under it and takes over its scent profile.',
      },
    ],
    reject: {
      ariaLabel:
        'A second line that differs only by EDT instead of EDP slides past the identity card, stamped “different fragrance — price untouched”',
      badge: 'Different fragrance',
      stamp: 'Different fragrance — price untouched',
      title: 'One letter different, another perfume inside',
      text: 'An eau de toilette is never paired with the eau de parfum of the same name. Not automatically, and not as a suggested match either: a one-click confirm is far too easy a way to get a price wrong. The close candidate appears next to the line for reference only, never as something to pick.',
      info: 'Same house and name in the catalogue, different concentration',
      infoLabel: 'For information',
      decisionLabel: 'Needs your decision',
    },
    noKey: {
      title: 'No invisible key',
      text: 'Midway through the project we removed the supplier code from the entire system. It matched reliably but explained nothing — when a price moved, no one could tell why. Matching now relies solely on the five fields printed in the line.',
      before: 'Matched by an opaque code',
      after: 'Matched by five readable fields',
      tradeoff: 'There is an honest price for this: if the supplier renames a fragrance, its line arrives looking new, and the owner connects it manually, once.',
    },
  },

  review: {
    id: 'review' as const,
    eyebrow: 'Check first, apply second',
    title: 'You confirm before anything is written',
    accent: 'before anything is written',
    lead: 'Uploading a list writes nothing at all. The system reads each line, checks it against the catalogue and sorts the resulting changes into groups: more expensive, cheaper, new fragrance, new bottle, or stocked items this list has stopped mentioning. Next to the supplier’s figure, every matched line also shows the shelf price the customer would see. A few lines are flagged for the owner to decide.',
    screen: {
      ariaLabel:
        'A review screen: lines grouped into buckets, each row with the printed line, the identity fields and a masked cost change, and an apply button underneath',
      title: 'Price-list review',
      subtitle: 'Read, resolved, not written',
      file: 'Supplier list received',
      columns: {
        row: 'Line as printed',
        house: 'House',
        name: 'Name',
        details: 'Concentration · Gender',
        size: 'Size',
        cost: 'Cost',
        shelf: 'Shelf price',
        status: 'Status',
      },
      buckets: [
        { id: 'up', label: 'Cost up', text: 'Matched; costs more than last time.' },
        { id: 'down', label: 'Cost down', text: 'Matched; costs less.' },
        { id: 'newFragrance', label: 'New fragrance', text: 'Unknown to the catalogue. Comes in as an unpublished draft.' },
        { id: 'newSize', label: 'New size', text: 'A fragrance already stocked, in a bottle that is not.' },
        { id: 'missing', label: 'Not in this list', text: 'Stocked, but absent from this file. Reported and left alone.' },
        { id: 'unchanged', label: 'Unchanged', text: 'Same fragrance at the same cost. Shown, but not written.' },
        { id: 'skipped', label: 'Skipped', text: 'Gift sets, duplicate lines and lines a rule always ignores.' },
      ],
      flags: {
        decision: 'Needs your decision',
        rounding: 'Rounding, not a price move',
        manual: 'Priced by hand — shelf price frozen',
        similar: 'Same name, different fragrance',
        linked: 'Linked by you',
        ignored: 'Always skipped',
      },
      /** Printed in the line cell of a row the file never mentions, instead of a bare em dash. */
      noLine: 'No line in this file',
      up: 'Up',
      down: 'Down',
      select: 'Selected for this run',
      confirm: 'Apply the selected lines',
      recompute: 'On apply, the change set is rebuilt on the server from the file itself',
      nothingYet: 'Nothing has been written yet',
      reanalyse: 'Re-analyse',
    },
    points: [
      {
        title: 'An old review can’t push an old price',
        text: 'When you apply, the server rereads the file, recalculates the difference and writes just the lines you ticked. A review screen left open for an hour has no way to sneak a stale figure into the shop.',
      },
      {
        title: 'Rounding is not news',
        text: 'Costs are stored to the cent. When a whole-number cost shifts by a few cents, the line is marked as rounding, so genuine price movements stay easy to see.',
      },
      {
        title: 'Manual prices are respected',
        text: 'If the owner set a bottle’s price by hand, the import updates its cost and leaves that shelf price exactly where it was.',
      },
      {
        title: 'Missing is not removed',
        text: 'When a fragrance is absent from one list it gets reported — not delisted, not set to zero. Falling out of a file does not mean leaving the catalogue.',
      },
    ],
  },

  rules: {
    id: 'rules' as const,
    eyebrow: 'An importer that remembers',
    title: 'Each messy line is resolved once',
    accent: 'resolved once',
    lead: 'Suppliers spell a house their own way, shorten a concentration in a form nobody has seen before, or print a line the parser simply cannot read. The owner deals with it a single time, on the review screen. That answer is saved as a rule, and every later list applies it before the line reaches anyone.',
    panel: {
      ariaLabel:
        'The rules table: six kinds of saved rule translating supplier wording into catalogue meaning, each with a count of the lines it has caught',
      title: 'Matching rules',
      columns: { rule: 'What the supplier writes', target: 'What the catalogue means', hits: 'Caught' },
      hitsUnit: 'lines',
      types: [
        {
          label: 'House spelling',
          source: 'MSN DEMO',
          target: 'Maison Demo',
          hits: '18',
          text: 'Abbreviations, typos, outdated spellings.',
        },
        {
          label: 'Concentration wording',
          source: 'PARFUM DE NUIT',
          target: 'Parfum',
          hits: '7',
          text: 'House-specific wording the parser can’t work out.',
        },
        { label: 'Gender marker', source: 'F', target: 'Women', hits: '4', text: 'A marker missing from the built-in list.' },
        {
          label: 'Line correction',
          source: 'ATELIER DEMO VITRINE DEMO L',
          target: 'EDP · 100 ml',
          hits: '3',
          text: 'Fields the parser couldn’t read, entered once by hand.',
        },
        {
          label: 'Link to a fragrance',
          source: 'DEMO NOIR ABSOLU 75',
          target: 'Absolu Demo · Parfum · Unisex · 75 ml',
          hits: '2',
          text: '“This line means that bottle” — a person confirms it; nothing is guessed.',
        },
        {
          label: 'Always skip',
          source: 'MAISON DEMO BODY MIST 200ML',
          target: 'Never imported',
          hits: '6',
          text: 'Not a fragrance variant, now or ever.',
        },
      ],
      hitsNote:
        'Each rule counts the lines it has caught: one that never fires can go, and one that fires suspiciously often deserves a second look.',
      actions: {
        fix: 'Fix this line',
        link: 'Match with another fragrance',
        skip: 'Always skip this line',
        undo: 'Undo my decision',
      },
    },
    points: [
      {
        title: 'Correct it in place',
        text: 'Each line opens next to whatever it was matched with. You correct it right there, the file is analysed again straight away, and the answer is remembered.',
      },
      {
        title: 'Half-fixed means unfixed',
        text: 'If the size or concentration is still unreadable after a correction, the line goes back to the needs-a-decision pile.',
      },
      {
        title: 'Sharper with every list',
        text: 'The knowledge sits in data, not in code, so by the tenth list the importer is more accurate than on the first — without a single deployment in between.',
      },
      {
        title: 'Any rule can be undone',
        text: 'Remove a rule and the importer reads that line the default way again. A mistaken decision costs one click, not a rebuild.',
      },
    ],
  },

  pricing: {
    id: 'pricing' as const,
    eyebrow: 'From cost to price',
    title: 'Dollar cost in, shelf price out',
    accent: 'shelf price out',
    lead: 'What the supplier charges is not yet a price. The chain the owner controls turns it into one: a rate, a coefficient, and then the most specific margin rule for this bottle, picked according to house, size and the cost band the bottle sits in. Before any price actually changes, the engine calculates the result for the entire catalogue on screen.',
    chain: {
      ariaLabel:
        'The pricing chain from left to right, every figure masked: a dollar cost multiplied by a rate and a coefficient into a manat cost, then a margin added to reach the shelf price',
      title: 'The chain',
      steps: [
        { label: 'Supplier cost', unit: 'USD', value: '•••', text: 'Taken from the list, accurate to the cent.' },
        { label: 'Rate', unit: '×', value: '•••', text: 'The dollar-to-manat rate the owner chooses.' },
        { label: 'Coefficient', unit: '×', value: '•••', text: 'Covers the rest of the gap between list price and a Baku shelf.' },
        { label: 'Cost', unit: 'AZN', value: '•••', text: 'The base the margin is calculated on.' },
        { label: 'Margin', unit: '+', value: '•••', text: 'Taken from the best-fitting rule for this bottle.' },
        { label: 'Shelf price', unit: 'AZN', value: '•••', text: 'Rounded to the whole manat, as the customer sees it.' },
      ],
    },
    rule: {
      ariaLabel: 'Four margin rules of varying specificity all matching one bottle; the rule with three conditions wins',
      title: 'The narrowest rule takes it',
      text: 'Each rule combines conditions with AND — this house, this size, this cost band. When several rules match a bottle, the one with more conditions wins; if two are equally specific, the more recent one wins.',
      conditions: { house: 'House', size: 'Size', band: 'Cost band', any: 'Any' },
      winner: 'Winning rule',
      loser: 'Also matches',
      specificity: 'Conditions',
      fallback: 'If nothing matches, the catalogue-wide margin is used.',
      example: { house: 'Maison Demo', size: '90 ml', band: 'One band', margin: '•••' },
    },
    brackets: {
      ariaLabel: 'Cost bands stacked without values, with a marker on the band this bottle’s cost falls into',
      title: 'Cost bands',
      note: 'The bands’ edges and margins belong to the retailer’s commercial data, so they are shown without numbers — here it is the structure that matters.',
      landed: 'This bottle’s cost lands here',
      bandLabel: 'Band',
    },
    preview: {
      ariaLabel:
        'A live preview table listing every bottle with its masked cost, the rule that priced it and its masked shelf price, with a save button and a separate apply button',
      title: 'Preview before applying',
      text: 'Change any rule, the rate or the coefficient and every bottle’s row recalculates on screen: the cost, the winning rule, the shelf price and the difference between them.',
      columns: { fragrance: 'Fragrance', size: 'Size', cost: 'Cost', rule: 'Rule', delta: 'Difference', shelf: 'Shelf price' },
      save: 'Save the strategy',
      saveNote: 'Saves the rules; no price moves.',
      apply: 'Apply to the catalogue',
      applyNote: 'Writes the new shelf prices — once, on purpose.',
      why: 'They are separate buttons because saving a rule must never reprice about 1,600 bottles in the same click.',
    },
    log: {
      title: 'Each price keeps its history',
      text: 'Whenever the engine writes a price, it records the old value, the new one, the run responsible and the time. That record is why experimenting with a margin is safe.',
      columns: { when: 'When', fragrance: 'Fragrance', from: 'From', to: 'To', reason: 'Reason' },
      reason: 'Strategy applied',
    },
  },

  product: {
    id: 'product' as const,
    eyebrow: 'Storefront and back office',
    title: 'One storefront, three languages',
    accent: 'three languages',
    lead: 'Customers get a catalogue that is actually pleasant to browse: filters, a search that needs only three letters to find a bottle, and product pages where the scent is structured data instead of marketing prose. Behind them sit fourteen back-office sections that run the shop, each open only to the people whose work needs it.',
    shot: {
      title: 'The storefront',
      caption: 'The real storefront — opening screen and category tiles exactly as the brand itself presents them.',
      alt: 'Molecion storefront: perfume bottles on lit boutique shelves, with a gold monogram and the brand’s carrier bag resting on black marble.',
      categories: [
        { label: 'Men', alt: 'Men’s fragrances arranged on black marble' },
        { label: 'Women', alt: 'Women’s fragrances arranged on black marble' },
        { label: 'Unisex', alt: 'Unisex fragrances arranged on black marble' },
      ],
    },
    storefront: {
      ariaLabel:
        'The storefront on a phone: the catalogue with its filter sheet, a product page showing accords, a note pyramid and when-to-wear guidance, and the install prompt',
      title: 'The storefront',
      groups: [
        {
          label: 'Catalogue',
          items: [
            'Filter by house, gender, concentration and price',
            'Fuzzy search: three letters are enough',
            'Grid or list view',
            'Phone filters in a bottom sheet',
          ],
        },
        {
          label: 'Product page',
          items: ['Size and tester selector', 'Main accords', 'Three-level scent pyramid', 'When to wear', 'About the house'],
        },
        {
          label: 'Buying',
          items: ['Favourites', 'Cart', 'Guest checkout', 'Delivery and payment choice', 'Order confirmation'],
        },
        {
          label: 'More app than web page',
          items: ['Installable as a PWA', 'Five-tab mobile navigation', 'Copes with a weak connection', 'Blog and info pages'],
        },
      ],
    },
    profile: {
      ariaLabel:
        'A single fragrance profile rendered as text and bars: five main accords, a three-level note pyramid, plus season and day-or-night bars',
      title: 'Scent as structured data',
      text: 'For every fragrance we store its accords, a three-tier note pyramid and when to wear it, all drawn from a 1,992-ingredient library. So a shopper can compare two bottles directly, instead of reading two descriptions that both call the scent “elegant”.',
      accordsLabel: 'Main accords',
      accords: ['Woody', 'Amber', 'Warm spicy', 'Vanilla', 'Powdery'],
      pyramidLabel: 'Scent pyramid',
      levels: [
        { label: 'Top', notes: ['Bergamot', 'Pink pepper', 'Cardamom'] },
        { label: 'Heart', notes: ['Iris', 'Jasmine', 'Cinnamon'] },
        { label: 'Base', notes: ['Sandalwood', 'Amber', 'Tonka bean'] },
      ],
      wearLabel: 'When to wear',
      seasons: ['Winter', 'Autumn', 'Spring', 'Summer'],
      times: ['Day', 'Night'],
      note: 'Rendered here as text and bars; because the profile is structured, it can be displayed in any form at all.',
    },
    admin: {
      ariaLabel: 'The back office: fourteen sections in a sidebar, and a staff account whose permissions unlock just one',
      title: 'Fourteen sections, each behind a permission',
      text: 'Everything required to run the shop, and none of it visible to anyone who was not granted access.',
      sections: [
        {
          label: 'Products',
          text: 'Seven tabs: basics, sizes and prices, a gallery with square cropping, notes, accords, when to wear and search text.',
        },
        { label: 'Brands', text: 'Each house with its logo, story and own page.' },
        { label: 'Notes', text: 'The 1,992-ingredient library behind every pyramid.' },
        { label: 'Accords', text: 'The accord vocabulary, colour-coded.' },
        { label: 'Orders', text: 'Website and phone orders in a single book, with status and payment workflow.' },
        { label: 'Customers', text: 'History assembled from each order’s phone number, which can later merge into an account.' },
        { label: 'Messages', text: 'Messages from the contact form, tracked as new, read, replied or archived.' },
        { label: 'Blog', text: 'Articles, categories and drafts.' },
        { label: 'Discounts', text: 'Time-limited campaigns by house, gender or bottle, with a minimum-profit floor.' },
        { label: 'Pricing strategy', text: 'Rate, coefficient and margin rules, previewed live.' },
        { label: 'Price list', text: 'The importer with its review screen, rules and full run history.' },
        { label: 'Homepage', text: 'Text blocks and image slots on the front page.' },
        { label: 'Translations', text: 'Product texts and UI wording for all three languages.' },
        { label: 'Settings', text: 'Store details, delivery fees, payment methods, staff accounts.' },
      ],
      staff: {
        title: 'Each person sees their own job',
        text: 'Access is given one section at a time, and a single permission controls both the menu item and the action it leads to. Someone hired to photograph bottles gets Products only; costs, margins and the price list stay hidden.',
        exampleLabel: 'An assistant’s view',
        exampleGranted: 'Products',
        exampleHidden: 'Everything else',
      },
      languages: {
        title: 'The owner controls translations',
        text: 'Product texts and interface wording are managed in the back office on two layers, which makes a fourth language a matter of data entry, not a new release. All 1,992 note names came in machine-drafted and marked as drafts, so people polish them rather than type from scratch.',
        layers: [
          { label: 'Content', text: 'Fragrance and house texts per language, on top of an English base.' },
          { label: 'Interface', text: 'Button, label and banner wording, editable with no code changes.' },
          { label: 'Fallback', text: 'Untranslated items show in English, so nothing appears empty.' },
        ],
      },
    },
  },

  engineering: {
    id: 'engineering' as const,
    eyebrow: 'Engineering',
    title: 'One unit, no outside calls',
    accent: 'no outside calls',
    lead: 'The storefront, back office and API deploy together as a single unit, and no third-party service sits in the request path. Data about customers, costs or margins never leaves the server the platform runs on.',
    principles: [
      {
        label: 'A single command to deploy',
        text: 'Shop, back office and API ship as one container image; one command starts the entire platform on an ordinary server.',
      },
      {
        label: 'Data outlives redeploys',
        text: 'The catalogue and uploaded images are stored outside the application, so a rebuild leaves them untouched. Backups run automatically.',
      },
      {
        label: 'No external runtime services',
        text: 'There are no analytics scripts, trackers or external APIs behind a page load. Privacy comes from the architecture, not from a policy page.',
      },
      {
        label: 'Tests where money is at stake',
        text: 'The pricing chain, the change set, the matcher and the parser are pure modules covered by unit tests, and the suite itself was mutation-checked: two rules were broken on purpose to prove it catches a genuine regression.',
      },
      {
        label: 'Hands-off image handling',
        text: 'Each upload is validated, rotated, size-capped and re-encoded server-side as a web-sized WebP — a single file for each slot.',
      },
    ],
    posture: {
      title: 'Security posture',
      ariaLabel: 'Security measures',
      tags: [
        'Access granted section by section',
        'Login sessions the owner can revoke',
        'Server-side validation on every boundary',
        'Uploads re-encoded, not trusted',
        'Rich text sanitised before saving',
        'A record for every price change',
        'No third parties in the request path',
      ],
    },
    roles: {
      title: 'Three user types',
      items: [
        {
          title: 'Owner',
          text: 'Has every section: rate, coefficient, margin rules, sign-off on imports and the final say on any disputed line.',
        },
        {
          title: 'Staff',
          text: 'Has only the sections granted to them — everything else is hidden from the menu and blocked at the action itself.',
        },
        {
          title: 'Customer',
          text: 'Browses, searches, keeps favourites and orders without an account, then is recognised later by phone number.',
        },
      ],
    },
  },

  role: {
    eyebrow: 'Our role',
    title: 'What Aibaycan delivered',
    items: [
      {
        title: 'Created the missing catalogue',
        text: 'Starting from the business’s own price list, we built a structured catalogue and gave each fragrance a complete profile using a 1,992-ingredient note library.',
      },
      {
        title: 'Engineered the price-list import',
        text: 'Right-to-left parsing, the identity rule, the review flow and the change set, plus a rule store so the owner can teach the importer directly instead of calling a developer.',
      },
      {
        title: 'Delivered the pricing engine',
        text: 'Compound margin rules that take a cost to a shelf price, a live catalogue-wide preview, saving kept deliberately apart from applying, and every price change leaves a record.',
      },
      {
        title: 'Designed and developed the shop',
        text: 'A storefront in three languages with an app-style mobile shell, cream paper with black and gold, built around the scent profile.',
      },
      {
        title: 'Shipped the back office as one package',
        text: 'Fourteen permission-gated sections, a translation layer the owner edits, server-side image processing, and one-command deployment with data that persists across redeploys.',
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'The technology behind it',
    groups: [
      { label: 'Application', items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
      { label: 'Storefront', items: ['PWA', 'Service worker', 'Server components'] },
      { label: 'Data', items: ['Prisma', 'SQL', 'Zod'] },
      { label: 'Media', items: ['Sharp', 'WebP'] },
      { label: 'Quality', items: ['Vitest'] },
    ],
  },
  faq: {
    title: 'Questions retailers ask',
    items: [
      {
        q: 'Can our supplier price list be imported automatically?',
        a: 'Yes — and it is usually the right place to start. We work from your actual list and your actual catalogue, put in writing exactly when two rows count as the same product, and then build an importer that shows price rises, price drops, new items and items that disappeared, writing nothing until you approve it.',
      },
      {
        q: 'Could you build a shop like this for us?',
        a: 'Yes. The storefront is the easier half. What decides whether customers can trust the shop is pricing and the way supplier data comes in, so that is where we begin: we settle the money rules together and then build the shop around them — hosted on infrastructure you own.',
      },
      {
        q: 'How do you stop a price landing on the wrong product?',
        a: 'With a deliberately strict — even boring — identity rule. For Molecion that means house, name, concentration and gender must all match, otherwise it is a different fragrance; the size then picks either a price update or a new bottle. Nothing is matched approximately, and applying rebuilds the change set on the server, so an outdated review cannot write a price.',
      },
      {
        q: 'Can our team manage the shop without calling you every week?',
        a: 'That is the job of the back office. Product texts, houses, homepage content, the note and accord libraries, delivery and payment settings, campaigns, pricing rules and every one of the three languages live in the panel, and permissions keep each person to their own work. When a supplier invents a new spelling, someone adds a rule — no release needed.',
      },
      {
        q: 'Is Molecion open to customers yet?',
        a: 'Not yet, and we won’t pretend otherwise. Molecion is built, tested and ready to deploy. Catalogue and pricing engine are already running with the business’s own data, while the public launch is waiting for product photography and the molecion.az domain.',
      },
    ],
  },
  railLabels: {
    challenge: 'Problem',
    parse: 'Parsing',
    identity: 'Identity',
    review: 'Review',
    rules: 'Rules',
    pricing: 'Cost → price',
    product: 'Shop & back office',
    engineering: 'Engineering',
  },
  sampleDataLabel: 'Sample data',
  sampleDataNote:
    'All houses, fragrances and price-list lines shown in these screens are made up. Costs, margins, rates and prices belong to the retailer’s commercial data and are masked everywhere.',
  mockupAriaLabel: 'Illustrative Molecion screen with made-up sample data and masked figures',
} satisfies CaseBase;

export type MolecionCopy = typeof en;
export default en;
