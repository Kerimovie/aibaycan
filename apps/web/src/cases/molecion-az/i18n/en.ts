// Molecion case study (/[locale]/projects/molecion-az), EN. Ported from Atlas `src/i18n/en/cases/molecion.ts`.
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
    title: 'Molecion: E-Commerce Platform and Retail Back Office',
    description:
      'The e-commerce platform and retail back office we built for a Baku fragrance retailer: supplier price-list automation, a pricing engine and a 3-language shop.',
  },
  h1: 'E-commerce platform with supplier price-list automation for retail',
  hero: {
    eyebrow: 'Premium fragrance retail · E-commerce · Retail back office',
    title: 'The hard part was never the shop',
    accent: 'never the shop',
    lead: 'Molecion sells original designer and niche fragrances in Baku. We built its whole online sales channel around the part that decides whether such a shop can be trusted: the supplier price list. It arrives in dollars against a catalogue of about 1,100 fragrances in about 1,600 sizes, and one sloppy match silently changes the price of the wrong perfume.',
    primaryCta: 'Discuss a similar project',
    secondaryCta: 'Start with the price list',
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
    note: 'The catalogue and the pricing engine already run on the business’s own data. The public launch waits on product photography and the domain.',
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
      'A supplier line read right to left into house, name, concentration, gender and size, locking into one identity card, then becoming a masked shelf price',
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
    eyebrow: 'The challenge',
    title: 'One wrong match, one wrong price',
    accent: 'one wrong price',
    lead: 'A fragrance retailer’s catalogue is not a list of products. It is a list of sizes — the same scent as a 30, a 50, a 90 and a tester, and often twice over, because the eau de parfum and the eau de toilette are different fragrances sharing a name. Every line of a new price list must find exactly one of those sizes, or none.',
    sheet: {
      ariaLabel:
        'Supplier lines, each a single string of house, name, concentration, gender and size, waiting to be matched against a catalogue of sizes',
      title: 'Lines waiting to be matched',
      columnRow: 'One line, one string',
      columnCost: 'Cost',
      columnMatch: 'Matches',
      unknown: '?',
      question: 'Which one of about 1,600 sizes is this?',
      byHand: 'By hand',
      byHandValue: 'not a job anybody finishes',
    },
    pains: [
      {
        title: 'The shelf price is not a markup',
        text: 'Costs arrive in dollars and the shop sells in manat. Repricing is a chain: a rate, a coefficient, then a margin that differs by house, by size and by cost.',
      },
      {
        title: 'The catalogue is sizes, not products',
        text: 'About 1,100 fragrances become about 1,600 bottles and testers. A line lands on exactly one of them, or it is something new.',
      },
      {
        title: 'The printed name is the only key',
        text: 'The supplier writes what a person can read, in its own spelling. The catalogue writes the same fragrance another way. Nothing between them is a shared code.',
      },
      {
        title: 'A wrong match makes no noise',
        text: 'Nothing fails, no error appears. One perfume simply stands in the shop at another perfume’s price until somebody notices.',
      },
      {
        title: 'There was no product database',
        text: 'The business had a price list and photographs — no houses, no sizes, no descriptions, nothing a shop could be built on.',
      },
    ],
    rule: {
      label: 'Our design rule',
      text: 'No price may change without a person seeing it first. The importer’s job is to prepare a decision, never to make one.',
    },
    scale: {
      title: 'The catalogue we built and loaded',
      ariaLabel: 'The scale of the catalogue: brands, fragrances, sizes, the ingredient library and languages',
      items: [
        { value: '125', label: 'Brands in the catalogue' },
        { value: '≈ 1,100', label: 'Fragrances' },
        { value: '≈ 1,600', label: 'Sizes and testers' },
        { value: '1,992', label: 'Ingredient note library' },
        { value: '3', label: 'Languages' },
      ],
      note: 'Every fragrance in it carries a full scent profile: accords, a three-level note pyramid and a when-to-wear profile.',
    },
  },

  parse: {
    id: 'parse' as const,
    eyebrow: 'Reading the line',
    title: 'The line is read right to left',
    accent: 'right to left',
    lead: 'A supplier line is one string: house, name, concentration, gender, size. Read forwards, it breaks on the first perfume whose own name contains the word Parfum. So the parser starts at the end, where the order of the fields is certain, and peels the line backwards until only the name is left standing.',
    row: {
      ariaLabel:
        'The invented line MAISON DEMO NUIT LE PARFUM EDP L 90ML peeled from the right: size, gender, concentration, then the name',
      label: 'The line as printed',
      direction: 'Read this way',
    },
    steps: [
      {
        field: 'Size',
        token: '90ML',
        value: '90 ml',
        text: 'The last certain field, and the one that later decides between a price update and a new bottle.',
      },
      {
        field: 'Gender',
        token: 'L',
        value: 'Women',
        text: 'A letter or a word, always between the concentration and the size. “Pour Femme” belongs to the name and stays in it.',
      },
      {
        field: 'Concentration',
        token: 'EDP',
        value: 'Eau de Parfum',
        text: 'Exactly one token is removed, and only from the end. A concentration word further left is part of the name.',
      },
      {
        field: 'Name',
        token: 'NUIT LE PARFUM',
        value: 'Nuit Le Parfum',
        text: 'Whatever survives the peeling is the name — including the Parfum that was always part of it.',
      },
    ],
    failure: {
      ariaLabel:
        'The same line read left to right: the first Parfum token is taken for the concentration, the name is cut short and the line resolves to a fragrance that does not exist',
      title: 'Forwards, the same line falls apart',
      text: 'Left to right, the first PARFUM the parser meets is inside the name. It takes it for the concentration, cuts the name short, and two tokens later asks for a price that belongs to nobody.',
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
        title: 'The end of the line is the reliable part',
        text: 'Suppliers vary how they write a name. They do not vary the order of size, gender and concentration.',
      },
      {
        title: 'One token, once',
        text: 'A second pass would eat the name, because names legitimately contain concentration words. The parser strips one and stops.',
      },
      {
        title: 'Gift sets are not bottles',
        text: 'A line describing two bottles in one box is a different article, not a size. It is set aside and reported.',
      },
    ],
  },

  identity: {
    id: 'identity' as const,
    eyebrow: 'The identity rule',
    title: 'Four fields are one fragrance',
    accent: 'one fragrance',
    lead: 'The owner dictated the rule and the system has no way around it. House, name, concentration and gender: all four equal and it is the same fragrance. The size then decides between updating this price and adding this bottle. One of the four different, and it is a different fragrance — with no fuzzy fallback to fall back on.',
    card: {
      ariaLabel: 'House, name, concentration and gender locking into one identity card, with the size held separately below',
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
      note: 'Four fields decide which fragrance. The fifth decides which bottle.',
    },
    branches: [
      {
        badge: 'Same size',
        title: 'Update this price',
        size: '90 ml',
        text: 'The catalogue carries this fragrance in this bottle. The line updates that one variant and nothing else.',
      },
      {
        badge: 'New size',
        title: 'Add this size',
        size: '30 ml',
        text: 'The fragrance exists, this bottle does not. It becomes a new size under the same fragrance, inheriting its profile.',
      },
    ],
    reject: {
      ariaLabel:
        'A second line, identical but for EDT in place of EDP, sliding past the identity card and stamped “different fragrance — price untouched”',
      badge: 'Different fragrance',
      stamp: 'Different fragrance — price untouched',
      title: 'One letter apart, and a different perfume in the bottle',
      text: 'The eau de toilette is never matched to the eau de parfum — not automatically, and not as a suggestion either, because a one-click confirmation is far too cheap a way to be wrong about a price. The near-miss is shown beside the line as information, never as an option.',
      info: 'Same house and name in the catalogue, different concentration',
      infoLabel: 'For information',
      decisionLabel: 'Needs your decision',
    },
    noKey: {
      title: 'No hidden key',
      text: 'Halfway through the build, the supplier code was deleted from the whole system. It matched well and explained nothing: when a price moved, nobody could see why. The key is now only the five fields printed on the page.',
      before: 'Matched by a code nobody can read',
      after: 'Matched by the five fields anyone can read',
      tradeoff: 'The cost is honest: when the supplier renames a fragrance, the line arrives as new and the owner links it once, by hand.',
    },
  },

  review: {
    id: 'review' as const,
    eyebrow: 'Review, then apply',
    title: 'Nothing is written until you confirm',
    accent: 'until you confirm',
    lead: 'Upload the list and the system writes nothing. It reads every line, resolves it against the catalogue and lays the change set out in buckets: dearer, cheaper, a new fragrance, a new bottle, or something the catalogue carries that this list no longer mentions. Each matched line shows the shelf price a customer would see, not only the supplier’s figure. A handful are raised for the owner’s decision.',
    screen: {
      ariaLabel:
        'A review screen: the lines sorted into buckets, each row showing the printed line, the identity fields and a masked cost movement, with an apply button below',
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
        { id: 'up', label: 'Cost up', text: 'Matched, and dearer than last time.' },
        { id: 'down', label: 'Cost down', text: 'Matched, and cheaper.' },
        { id: 'newFragrance', label: 'New fragrance', text: 'Not in the catalogue. Arrives as an unpublished draft.' },
        { id: 'newSize', label: 'New size', text: 'A fragrance the shop carries, in a bottle it does not.' },
        { id: 'missing', label: 'Not in this list', text: 'In the catalogue, absent from the file. Reported, never touched.' },
        { id: 'unchanged', label: 'Unchanged', text: 'Same fragrance, same cost. Listed, not written.' },
        { id: 'skipped', label: 'Skipped', text: 'Gift sets, repeated lines, and lines a rule ignores for good.' },
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
        title: 'A stale review cannot write a price',
        text: 'On apply, the server reads the list again, recomputes the difference and writes only the lines you selected. A review left open for an hour cannot carry an old number into the shop.',
      },
      {
        title: 'Cents are not a price change',
        text: 'Costs are kept to the cent, and a movement of a few cents against a whole-number cost is labelled as rounding — so the real news is not buried in noise.',
      },
      {
        title: 'A hand-set price stays hand-set',
        text: 'Where the owner priced a bottle by hand, an import refreshes what it cost and leaves the shelf price where it was put.',
      },
      {
        title: 'Absence is not a decision',
        text: 'A fragrance missing from one list is reported, never delisted and never zeroed. Dropping off a file is not leaving the catalogue.',
      },
    ],
  },

  rules: {
    id: 'rules' as const,
    eyebrow: 'The importer that learns',
    title: 'The same messy line never asks twice',
    accent: 'never asks twice',
    lead: 'A supplier writes a house name its own way, abbreviates a concentration nobody has met, or prints a line the parser cannot read at all. The owner resolves it once in the review screen. That resolution is stored as a rule, and the next list applies it before anyone sees the line.',
    panel: {
      ariaLabel:
        'The rules table: six kinds of stored rule mapping what the supplier writes to what the catalogue means, each with a counter of the lines it has caught',
      title: 'Matching rules',
      columns: { rule: 'What the supplier writes', target: 'What the catalogue means', hits: 'Caught' },
      hitsUnit: 'lines',
      types: [
        {
          label: 'House spelling',
          source: 'MSN DEMO',
          target: 'Maison Demo',
          hits: '18',
          text: 'An abbreviation, a typo or an older spelling.',
        },
        {
          label: 'Concentration wording',
          source: 'PARFUM DE NUIT',
          target: 'Parfum',
          hits: '7',
          text: 'A house wording the parser cannot infer.',
        },
        { label: 'Gender marker', source: 'F', target: 'Women', hits: '4', text: 'A marker the built-in list lacks.' },
        {
          label: 'Line correction',
          source: 'ATELIER DEMO VITRINE DEMO L',
          target: 'EDP · 100 ml',
          hits: '3',
          text: 'Unreadable fields, typed in once by hand.',
        },
        {
          label: 'Link to a fragrance',
          source: 'DEMO NOIR ABSOLU 75',
          target: 'Absolu Demo · Parfum · Unisex · 75 ml',
          hits: '2',
          text: '“This line is that bottle.” Confirmed by a person, never guessed.',
        },
        {
          label: 'Always skip',
          source: 'MAISON DEMO BODY MIST 200ML',
          target: 'Never imported',
          hits: '6',
          text: 'Not a fragrance variant, and never will be.',
        },
      ],
      hitsNote:
        'The counter shows how often a rule has caught a line, so one that never fires can be removed and one that fires too often can be questioned.',
      actions: {
        fix: 'Fix this line',
        link: 'Match with another fragrance',
        skip: 'Always skip this line',
        undo: 'Undo my decision',
      },
    },
    points: [
      {
        title: 'Fix it where you found it',
        text: 'Every line opens beside whatever it matched. The correction is made there, the same file is re-analysed on the spot, and the answer is kept.',
      },
      {
        title: 'A half-fix is still a problem',
        text: 'If a correction still leaves the size or the concentration unreadable, the line goes back to needing a decision.',
      },
      {
        title: 'Accuracy that accrues',
        text: 'Because the knowledge lives in data rather than code, the importer is better on its tenth list than its first, with no deployment in between.',
      },
      {
        title: 'Every rule is reversible',
        text: 'Delete it and the importer returns to its default reading of that line. A wrong decision costs a click, not a rebuild.',
      },
    ],
  },

  pricing: {
    id: 'pricing' as const,
    eyebrow: 'Cost becomes price',
    title: 'From a dollar cost to a shelf price',
    accent: 'to a shelf price',
    lead: 'A supplier cost is not a price. It becomes one through a chain the owner controls: a rate, a coefficient, then the most specific margin rule that fits this bottle — its house, its size and the cost band it falls into. The engine computes it for the whole catalogue in front of you before a single price moves.',
    chain: {
      ariaLabel:
        'The pricing chain drawn left to right with every figure masked: dollar cost, times a rate, times a coefficient, giving the manat cost, plus a margin, giving the shelf price',
      title: 'The chain',
      steps: [
        { label: 'Supplier cost', unit: 'USD', value: '•••', text: 'As read from the list, kept to the cent.' },
        { label: 'Rate', unit: '×', value: '•••', text: 'The manat rate, set by the owner.' },
        { label: 'Coefficient', unit: '×', value: '•••', text: 'Everything else between a list price and a Baku shelf.' },
        { label: 'Cost', unit: 'AZN', value: '•••', text: 'The figure the margin is measured against.' },
        { label: 'Margin', unit: '+', value: '•••', text: 'From the one rule that fits this bottle best.' },
        { label: 'Shelf price', unit: 'AZN', value: '•••', text: 'What the customer sees, rounded to the manat.' },
      ],
    },
    rule: {
      ariaLabel: 'Four margin rules of different specificity matching one bottle, with the three-condition rule winning',
      title: 'The most specific rule wins',
      text: 'A rule is a set of conditions joined by AND: this house, and this size, and this cost band. Several can match one bottle; the rule with the most conditions takes it, and between two equally specific rules the newer one wins.',
      conditions: { house: 'House', size: 'Size', band: 'Cost band', any: 'Any' },
      winner: 'Winning rule',
      loser: 'Also matches',
      specificity: 'Conditions',
      fallback: 'When no rule matches, the catalogue-wide margin applies.',
      example: { house: 'Maison Demo', size: '90 ml', band: 'One band', margin: '•••' },
    },
    brackets: {
      ariaLabel: 'Stacked cost bands drawn without values, with a marker showing which band this bottle’s cost falls into',
      title: 'Cost bands',
      note: 'The bands, their edges and their margins are the retailer’s commercial data. They are drawn without values, because the shape is the point.',
      landed: 'This bottle’s cost lands here',
      bandLabel: 'Band',
    },
    preview: {
      ariaLabel:
        'A live preview table of every bottle with its masked cost, the rule that priced it and its masked shelf price, above a save button and a separate apply button',
      title: 'Preview, then apply',
      text: 'Change the rate, the coefficient or any rule and the table recalculates for every bottle in front of you: cost, the rule that won, the shelf price and what is left in between.',
      columns: { fragrance: 'Fragrance', size: 'Size', cost: 'Cost', rule: 'Rule', delta: 'Difference', shelf: 'Shelf price' },
      save: 'Save the strategy',
      saveNote: 'Stores the rules. Prices stay where they are.',
      apply: 'Apply to the catalogue',
      applyNote: 'Writes the new shelf prices, once, deliberately.',
      why: 'Two buttons, because saving a rule and repricing about 1,600 bottles must never be the same click.',
    },
    log: {
      title: 'Every price has a history',
      text: 'Each price the engine writes leaves a record: what it was, what it became, which run moved it and when. That is what makes changing a margin safe to try.',
      columns: { when: 'When', fragrance: 'Fragrance', from: 'From', to: 'To', reason: 'Reason' },
      reason: 'Strategy applied',
    },
  },

  product: {
    id: 'product' as const,
    eyebrow: 'The shop and the back office',
    title: 'A shop window in three languages',
    accent: 'three languages',
    lead: 'In front: a catalogue a customer can genuinely browse, with filters, a search that finds a bottle from three letters, and a product page where the scent itself is data rather than a paragraph of marketing. Behind it: fourteen sections that run the shop, each opened to exactly the people who need it.',
    shot: {
      title: 'The shop front',
      caption: 'The real storefront — the brand’s own opening screen and category tiles, the way the shop presents itself.',
      alt: 'The Molecion storefront: a lit boutique wall of fragrance bottles, the gold monogram and the brand’s own carrier bag on black marble.',
      categories: [
        { label: 'Men', alt: 'Men’s fragrances lined up on black marble' },
        { label: 'Women', alt: 'Women’s fragrances lined up on black marble' },
        { label: 'Unisex', alt: 'Unisex fragrances lined up on black marble' },
      ],
    },
    storefront: {
      ariaLabel:
        'The storefront on a phone: the catalogue with its filter sheet, a product page with accords, a scent pyramid and a when-to-wear profile, and the install prompt',
      title: 'The storefront',
      groups: [
        {
          label: 'Catalogue',
          items: [
            'Filters by house, gender, concentration and price',
            'Fuzzy search — three letters find the bottle',
            'Grid and list views',
            'Filters as a bottom sheet on a phone',
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
          label: 'An app, not a narrow page',
          items: ['Installable PWA', 'Five-tab mobile shell', 'Works on a weak connection', 'Blog and information pages'],
        },
      ],
    },
    profile: {
      ariaLabel:
        'One fragrance’s profile drawn as type and bars: five main accords, a three-level note pyramid, and season and day-or-night bars',
      title: 'The scent is data, not a picture',
      text: 'Accords, a three-level pyramid of notes and a when-to-wear profile are stored for every fragrance, drawn from a library of 1,992 ingredients. That is what lets a customer compare two bottles instead of reading two paragraphs that both say “elegant”.',
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
      note: 'Drawn here as type and bars: the profile is structured data, so it can be rendered any way at all.',
    },
    admin: {
      ariaLabel: 'The back office: fourteen sections in a sidebar, with a staff account whose permissions open only one',
      title: 'Fourteen sections, one permission each',
      text: 'Everything the shop needs in order to be run, and nothing reachable by someone who was not given it.',
      sections: [
        {
          label: 'Products',
          text: 'A seven-tab editor: basics, sizes and pricing, gallery with a square cropper, notes, accords, when to wear, search copy.',
        },
        { label: 'Brands', text: 'Houses with their own logo, story and page.' },
        { label: 'Notes', text: 'The 1,992-ingredient library every pyramid is built from.' },
        { label: 'Accords', text: 'The accord vocabulary, each with its own colour.' },
        { label: 'Orders', text: 'Web and phone orders in one book, with a status and payment workflow.' },
        { label: 'Customers', text: 'A history built from each order’s phone number, mergeable into an account later.' },
        { label: 'Messages', text: 'The contact-form inbox: new, read, replied, archived.' },
        { label: 'Blog', text: 'Posts with categories and drafts.' },
        { label: 'Discounts', text: 'Campaigns by house, gender or bottle, in a date window, with a profit floor.' },
        { label: 'Pricing strategy', text: 'The rate, the coefficient and the margin rules, with a live preview.' },
        { label: 'Price list', text: 'The importer, its review screen, its rules and every past run.' },
        { label: 'Homepage', text: 'Front-page text blocks and image slots.' },
        { label: 'Translations', text: 'Product copy and interface wording, in all three languages.' },
        { label: 'Settings', text: 'Shop details, delivery fees, payment methods and staff accounts.' },
      ],
      staff: {
        title: 'One job, one view',
        text: 'Permissions are granted section by section, and the same permission gates the menu and the action behind it. An assistant hired to photograph bottles gets products and nothing else — no costs, no margins, no price list.',
        exampleLabel: 'An assistant’s view',
        exampleGranted: 'Products',
        exampleHidden: 'Everything else',
      },
      languages: {
        title: 'The translations belong to the owner',
        text: 'Product copy and interface wording are edited from the back office in two layers, so a fourth language is data entry rather than a release. All 1,992 note names arrived machine-drafted and flagged as drafts, so a person refines instead of types.',
        layers: [
          { label: 'Content', text: 'Fragrance and house copy, per language, over an English base.' },
          { label: 'Interface', text: 'Buttons, labels and banner wording, changed without touching code.' },
          { label: 'Fallback', text: 'Anything untranslated falls back to English, so nothing is blank.' },
        ],
      },
    },
  },

  engineering: {
    id: 'engineering' as const,
    eyebrow: 'How it is built',
    title: 'One deploy, and nothing to phone home to',
    accent: 'nothing to phone home to',
    lead: 'Storefront, back office and API are one deployable unit with no third-party service in the request path. Nothing about a customer, a cost or a margin leaves the host it runs on.',
    principles: [
      {
        label: 'One command, one platform',
        text: 'Shop, back office and API ship together as a single container image, and one command brings the whole platform up on any ordinary host.',
      },
      {
        label: 'Data that survives a redeploy',
        text: 'The catalogue and the uploaded images live outside the application, so rebuilding leaves them exactly as they were. Backups are taken automatically.',
      },
      {
        label: 'No third-party runtime',
        text: 'No analytics, no tracker, no external API behind a page load. The privacy story is architectural, not a policy page.',
      },
      {
        label: 'Tested where it costs money',
        text: 'Parser, matcher, change set and pricing chain are pure modules with unit tests. The suite was mutation-checked: two rules were deliberately broken to confirm it catches a real regression.',
      },
      {
        label: 'Images nobody has to think about',
        text: 'Every upload is validated, rotated, capped and re-encoded server-side into a web-sized WebP, one file per slot.',
      },
    ],
    posture: {
      title: 'Security posture',
      ariaLabel: 'A list of security features',
      tags: [
        'Permissions granted per section',
        'Sign-in sessions the owner can revoke',
        'Server-side validation at every boundary',
        'Uploads re-encoded, never trusted',
        'Rich text sanitised before storage',
        'Every price change recorded',
        'No third-party service in the request path',
      ],
    },
    roles: {
      title: 'Three kinds of user',
      items: [
        {
          title: 'Owner',
          text: 'Holds every section: the rate, the coefficient, the margin rules, the approval of an import and the last word on a disputed line.',
        },
        {
          title: 'Staff',
          text: 'Holds the sections they were granted and sees nothing else — not in the menu, and not through the action behind it.',
        },
        {
          title: 'Customer',
          text: 'Browses, searches, saves favourites and checks out as a guest, recognised afterwards by phone number.',
        },
      ],
    },
  },

  role: {
    eyebrow: 'Our role',
    title: 'What Aibaycan did',
    items: [
      {
        title: 'Built the catalogue that did not exist',
        text: 'We turned the business’s own price list into a structured catalogue, then gave every fragrance a full profile from a 1,992-ingredient note library.',
      },
      {
        title: 'Engineered the price list',
        text: 'The right-to-left parser, the identity rule, the change set and the review flow — plus the rule store that lets the owner teach the importer instead of asking a developer.',
      },
      {
        title: 'Built the pricing engine',
        text: 'Cost to shelf price, compound margin rules, a live preview across the catalogue, a deliberate split between saving and applying, and a record behind every price that moved.',
      },
      {
        title: 'Designed and built the storefront',
        text: 'A three-language shop with an app-like mobile shell — black and gold on cream paper — with the scent profile as its centrepiece.',
      },
      {
        title: 'Built the back office and packaged the platform',
        text: 'Fourteen permission-gated sections, an owner-editable translation layer, a server-side image pipeline, and a one-command deployment whose data survives every redeploy.',
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Built on a modern stack',
    groups: [
      { label: 'Application', items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
      { label: 'Storefront', items: ['PWA', 'Service worker', 'Server components'] },
      { label: 'Data', items: ['Prisma', 'SQL', 'Zod'] },
      { label: 'Media', items: ['Sharp', 'WebP'] },
      { label: 'Quality', items: ['Vitest'] },
    ],
  },
  faq: {
    title: 'What retailers ask us',
    items: [
      {
        q: 'Can you automate our supplier price list?',
        a: 'Yes, and it is usually the first thing worth building. We start from your real list and your real catalogue, agree in writing what makes two rows the same product, then build an importer that shows what went up, what went down, what is new and what disappeared — and writes nothing until you confirm.',
      },
      {
        q: 'How do you make sure the wrong product’s price never changes?',
        a: 'With an identity rule strict enough to be boring. For Molecion it is house, name, concentration and gender: all four equal or it is a different fragrance, with the size deciding between updating a price and adding a bottle. There is no fuzzy fallback, and on apply the change set is rebuilt on the server so a stale review cannot write a price.',
      },
      {
        q: 'Is the Molecion shop live?',
        a: 'No, and we will not describe it as if it were. Molecion is built, tested and deployment-ready: the catalogue and the pricing engine already run on the business’s own data, and the public launch waits on product photography and the domain, molecion.az.',
      },
      {
        q: 'Can our own staff run the shop without calling us every week?',
        a: 'That is what the back office is for. Product copy, houses, the note and accord libraries, homepage content, delivery and payment settings, campaigns, the pricing rules and all three languages are edited in the panel, with permissions so each person sees only their own job. A new supplier spelling is a rule someone types, not a release.',
      },
      {
        q: 'Can you build something like this for our shop?',
        a: 'Yes. The storefront is the straightforward half; the half that decides whether a shop is trustworthy is the pricing and the intake of supplier data. We start there, agree the money rules with you, and build the shop around them — on infrastructure you own.',
      },
    ],
  },
  railLabels: {
    challenge: 'Challenge',
    parse: 'Reading the line',
    identity: 'Identity',
    review: 'Review',
    rules: 'Rules',
    pricing: 'Cost → price',
    product: 'Shop & back office',
    engineering: 'Engineering',
  },
  sampleDataLabel: 'Sample data',
  sampleDataNote:
    'Houses, fragrances and price-list lines on these screens are invented. Costs, margins, rates and prices are the retailer’s own commercial data and are masked throughout.',
  mockupAriaLabel: 'Illustrative Molecion screen with invented sample data and masked figures',
} satisfies CaseBase;

export type MolecionCopy = typeof en;
export default en;
