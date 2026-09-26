// Sahil Transport case study (/[locale]/projects/sahil-transport), EN. Structure ported from Atlas
// `src/i18n/en/cases/sahil-transport.ts`; prose rewritten for Aibaycan. Type source for the case: AZ/RU are typed `SahilTransportCopy`.
// Client project: describe what we built, never its operating status. Plates, names and figures are sample data.
import type { CaseBase } from '../../types';

const en = {
  seo: {
    title: 'Sahil Transport: Truck GPS Tracking & Demurrage Billing',
    description:
      'How Aibaycan built truck telematics for a Baku haulier: fuel and CAN load sensors, automatic stop reasons, contract-based demurrage and AI invoice reading.',
  },
  h1: 'Truck telematics and demurrage billing for a road-freight carrier',
  hero: {
    eyebrow: 'Logistics · Telematics and billing data',
    title: 'Every GPS ping, priced into the invoice',
    accent: 'priced into the invoice',
    lead: 'About 180 trucks, one Baku road-freight carrier: Sahil Transport. For them we built a platform that gathers GPS, fuel and CAN weight readings into a single stream, explains why each truck stopped, bills time spent waiting at customer sites at the rate set in the contract, and lets AI read the invoice photos drivers send before checking them against trips and the finance ledger.',
    primaryCta: 'Talk to us about a similar build',
  },
  facts: {
    platforms: 'Web dashboard · Telegram bot · Excel reports',
    languages: 'Azerbaijani',
  },

  // Hero visual: fleet map of the Absheron peninsula + sensor traces of one truck.
  console: {
    label:
      'The fleet on a map of the Absheron peninsula: trucks travel between customer zones while one sits waiting inside a zone; below, one truck’s speed, fuel and net weight readings scroll past (sample data)',
    title: 'Fleet · Absheron',
    realtime: 'Real time',
    clock: '09:52',
    cities: {
      baku: 'Baku',
      sumgayit: 'Sumgayit',
      alat: 'Alat',
      shamakhi: 'Shamakhi',
      siyazan: 'Siyazan',
      hajigabul: 'Hajigabul',
    },
    sea: 'Caspian Sea',
    legend: [
      { tone: 'moving', label: 'Moving', value: '103' },
      { tone: 'waiting', label: 'Customer waiting', value: '27' },
      { tone: 'operational', label: 'Operational stop', value: '37' },
      { tone: 'offline', label: 'Offline', value: '9' },
    ],
    truck: {
      plate: '10-XX-014',
      route: 'Baku → Sumgayit',
      status: 'Moving',
      traces: [
        { tone: 'speed', label: 'Speed', value: '62', unit: 'km/h' },
        { tone: 'fuel', label: 'Fuel', value: '212', unit: 'L' },
        { tone: 'weight', label: 'Net weight', value: '21.4', unit: 't' },
      ],
    },
  },

  challenge: {
    id: 'challenge' as const,
    badge: 'Before',
    eyebrow: 'The starting point',
    title: 'Plenty of signals. No single picture.',
    accent: 'No single picture.',
    lead: 'Trucks on the road produce thousands of data points a day: a position every few minutes, the fuel in the tank, the weight on each axle, photos of paper invoices taken in the cab. Sahil Transport kept all of it in three separate places with no link between them, and revenue leaked out wherever those places failed to meet.',
    scale: {
      value: '≈180',
      unit: 'trucks',
      text: 'across the fleet, each fitted with a GPS tracker, a tank fuel sensor and a CAN weight sensor that send readings every few minutes.',
    },
    sourcesTitle: 'Three disconnected sources',
    sources: [
      { name: 'Telematics portal', detail: 'Positions, speed, fuel, axle weight', sample: '10-XX-027 · 0 km/h · 148 L' },
      { name: 'Chat groups', detail: 'Invoice photos from drivers', sample: 'IMG_4417.jpg · IMG_4418.jpg' },
      { name: 'Finance records', detail: 'Customers, contracts, payments', sample: 'FR-2291 · 412.00 ₼' },
    ],
    gap: 'Nothing tied them to the same trip.',
    pains: [
      {
        title: 'Unbilled time at the gate',
        text: 'Contracts gave customers free loading time, trucks queued well past it, and no record showed by how much.',
      },
      {
        title: 'A stop was just a stop',
        text: 'Raw GPS shows zero speed whether the truck is in a customer queue, at the pump or stuck in traffic.',
      },
      {
        title: 'Invoices typed up twice',
        text: 'Paper invoices reached the office as photos and were re-entered into spreadsheets, late and full of errors.',
      },
      {
        title: 'Three versions of every trip',
        text: 'Trip logs, invoices and the finance ledger seldom matched, and working out which one was right took a line-by-line check.',
      },
    ],
  },

  fleet: {
    id: 'fleet' as const,
    badge: '06:00',
    eyebrow: 'Live fleet view',
    title: 'Every truck on a single screen',
    accent: 'a single screen',
    lead: 'Wialon supplies each truck’s position, speed, fuel level and weight. The platform turns that feed into what a dispatcher actually needs to know: which trucks are on the road, which are held up at a customer, which have stopped for reasons of their own and which have stopped reporting.',
    screen: {
      label:
        'Dispatch dashboard: status counters, per-truck cards with speed, fuel and net load, a ring chart of fleet status, the last sync time of each source and a list of trucks that need attention (sample data)',
      title: 'Fleet dashboard · real time',
      tiles: [
        { tone: 'moving', label: 'Moving', value: '103' },
        { tone: 'waiting', label: 'Customer waiting', value: '27' },
        { tone: 'operational', label: 'Operational stop', value: '37' },
        { tone: 'offline', label: 'Offline', value: '9' },
      ],
      cardLabels: { speed: 'Speed', fuel: 'Fuel', load: 'Net load' },
      cards: [
        {
          plate: '10-XX-014',
          driver: 'Driver A.',
          tone: 'moving',
          status: 'Moving',
          place: 'Baku → Sumgayit road',
          speed: '62 km/h',
          fuel: '212 L',
          load: '21.4 t',
        },
        {
          plate: '10-XX-027',
          driver: 'Driver B.',
          tone: 'waiting',
          status: 'Customer · 1:12',
          place: 'Demo Quarry zone',
          speed: '0 km/h',
          fuel: '148 L',
          load: '0.0 t',
        },
        {
          plate: '10-XX-041',
          driver: 'Driver E.',
          tone: 'moving',
          status: 'Moving',
          place: 'Alat → Baku road, empty',
          speed: '74 km/h',
          fuel: '188 L',
          load: '0.0 t',
        },
        {
          plate: '10-XX-033',
          driver: 'Driver C.',
          tone: 'operational',
          status: 'Operational',
          place: 'Alat road, outside zones',
          speed: '0 km/h',
          fuel: '96 L',
          load: '18.7 t',
        },
        {
          plate: '10-XX-058',
          driver: 'Driver F.',
          tone: 'waiting',
          status: 'Customer · 0:34',
          place: 'Demo Terminal zone',
          speed: '0 km/h',
          fuel: '175 L',
          load: '24.3 t',
        },
        {
          plate: '10-XX-051',
          driver: 'Driver D.',
          tone: 'offline',
          status: 'Offline',
          place: 'Last seen near Hajigabul',
          speed: '—',
          fuel: '—',
          load: '—',
        },
      ],
      ring: { title: 'Fleet status', total: '176', unit: 'trucks' },
      freshness: {
        title: 'Data freshness',
        items: [
          { source: 'GPS', value: '40 s ago', tone: 'ok' },
          { source: 'Invoices', value: '3 min ago', tone: 'ok' },
          { source: 'Finance', value: 'today 06:00', tone: 'warn' },
        ],
      },
      attention: {
        title: 'Needs attention',
        items: [
          { plate: '10-XX-051', text: 'No signal for 34 min', tone: 'bad' },
          { plate: '10-XX-062', text: 'Fuel at 12%', tone: 'warn' },
          { plate: '10-XX-027', text: 'Free time almost used', tone: 'warn' },
        ],
      },
    },
    features: [
      {
        title: 'Four statuses, one colour code',
        text: 'Moving, customer waiting, operational stop and offline look identical on the map, the truck cards, the alerts and every report.',
      },
      {
        title: 'Payload in tonnes',
        text: 'The platform learns each truck’s unladen weight, so CAN sensor output is shown as net cargo in tonnes rather than an unprocessed number.',
      },
      {
        title: 'Litres alongside kilometres',
        text: 'Fuel from the tank sensor is recorded in litres and percent next to the distance covered, both on the truck card and per trip.',
      },
      {
        title: 'Problems first',
        text: 'Instead of a map full of dots, trucks that lost signal, run low on fuel or are about to use up their free time move to the top of a list.',
      },
      {
        title: 'Sync times on display',
        text: 'Every feed displays the time of its latest sync, so a source that went silent is never mistaken for a truck standing still.',
      },
      {
        title: 'A map built around dispatch work',
        text: 'Filter by status, search by plate, and open any truck to see its recent trail, its driver and its sensor values.',
      },
    ],
  },

  stops: {
    id: 'stops' as const,
    badge: '09:40',
    eyebrow: 'Why the truck stopped',
    title: 'Zero km/h tells you nothing',
    accent: 'tells you nothing',
    lead: 'A stationary truck could be queuing at a customer, filling up or sitting in traffic, and the customer pays only for the first of these. So every stop runs through four checks, and together they decide its reason.',
    timeline: {
      title: '10-XX-027 · one sample day',
      weight: 'Net weight',
      weightMax: '24.1 t',
      state: 'State',
      hours: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
      legend: { drive: 'Driving', waiting: 'Customer waiting', operational: 'Operational stop' },
    },
    checksTitle: 'The four checks',
    checks: [
      { name: 'Zone', question: 'Is the truck within a customer geofence?', outcome: 'No → operational stop' },
      { name: 'Trip', question: 'Does this truck’s trip include that customer?', outcome: 'No → operational stop' },
      { name: 'Load', question: 'Has the weight reading risen or fallen?', outcome: 'Up → loading · down → unloading' },
      { name: 'Contract', question: 'What free time does the contract grant?', outcome: 'Beyond it → billable waiting' },
    ],
    logTitle: 'The sample day, stop by stop',
    logLabels: { zone: 'Zone', trip: 'Trip', load: 'Load' },
    log: [
      {
        from: '07:05',
        to: '07:25',
        duration: '20 min',
        zone: 'No customer zone',
        trip: '—',
        load: 'Fuel level up',
        tone: 'operational',
        result: 'Operational stop',
        reason: 'Refuelling',
      },
      {
        from: '09:40',
        to: '12:05',
        duration: '2 h 25 min',
        zone: 'Demo Quarry',
        trip: 'This trip’s customer',
        load: '0.0 → 24.1 t',
        tone: 'waiting',
        result: 'Customer waiting',
        reason: 'Loading · 25 min beyond free time',
      },
      {
        from: '12:40',
        to: '12:55',
        duration: '15 min',
        zone: 'Demo Plant B',
        trip: 'Another customer',
        load: 'No change',
        tone: 'operational',
        result: 'Operational stop',
        reason: 'Not this trip’s customer',
      },
      {
        from: '13:20',
        to: '13:50',
        duration: '30 min',
        zone: 'No customer zone',
        trip: '—',
        load: 'No change',
        tone: 'operational',
        result: 'Operational stop',
        reason: 'Driver rest',
      },
      {
        from: '14:10',
        to: '15:55',
        duration: '1 h 45 min',
        zone: 'Demo Terminal',
        trip: 'This trip’s customer',
        load: '24.1 → 0.0 t',
        tone: 'waiting',
        result: 'Customer waiting',
        reason: 'Unloading · within free time',
      },
    ],
    note: 'Very short stops are discarded as GPS noise, and a truck jittering along a zone boundary is smoothed out before any classification happens.',
  },

  waiting: {
    id: 'waiting' as const,
    badge: '11:40',
    eyebrow: 'Demurrage billing',
    title: 'Time at the gate becomes a charge',
    accent: 'becomes a charge',
    lead: 'No two contracts are alike: each customer has one free-time allowance for loading, another for unloading, and an hourly rate of its own. Once a truck overstays, the platform measures the extra time, applies that customer’s rate and attaches the resulting fee, evidence included, to the trip.',
    clock: {
      inZone: 'in the zone',
      elapsed: '2:25',
      free: 'Free time',
      freeValue: '2:00',
      excess: 'Excess',
      excessValue: '0:25',
      hours: ['0 h', '1 h', '2 h', '3 h'],
    },
    eventsTitle: 'Trip T-0412 · Demo Quarry',
    events: [
      { time: '09:40', tone: 'info', text: 'Entered the Demo Quarry zone, empty' },
      { time: '11:16', tone: 'warn', text: 'Free time almost used: the dispatcher is warned' },
      { time: '11:40', tone: 'bad', text: 'Free time exceeded: the fee starts running' },
      { time: '11:50', tone: 'ok', text: 'Loaded: 24.1 t net' },
      { time: '12:05', tone: 'info', text: 'Left the zone: the fee is closed' },
    ],
    receipt: {
      title: 'Waiting fee',
      code: 'Trip T-0412',
      rows: [
        { label: 'Customer', value: 'Demo Quarry' },
        { label: 'Operation', value: 'Loading' },
        { label: 'In the zone', value: '09:40 – 12:05' },
        { label: 'Free time, from the contract', value: '2 h 00 min' },
        { label: 'Billable excess', value: '0 h 25 min' },
      ],
      totalLabel: 'Fee added to the trip',
      total: '35.00 ₼',
      evidence: 'Evidence kept: zone entry and exit, weight change, GPS trail',
    },
    features: [
      {
        title: 'Loading and unloading limits kept apart',
        text: 'Contracts define free time per operation, which is why an identical wait can cost nothing at one customer and be billed at another.',
      },
      {
        title: 'Alerts while there is still time',
        text: 'A dispatcher is warned as a truck’s free time runs down and receives a critical alert the moment it runs out.',
      },
      {
        title: 'Every fee comes with proof',
        text: 'Arrival and departure times, the zone and the weight change are saved with the fee, so if a customer disputes it, the evidence is already there.',
      },
    ],
  },

  invoices: {
    id: 'invoices' as const,
    badge: '14:30',
    eyebrow: 'AI reads the invoices',
    title: 'Cab photo in, verified record out',
    accent: 'verified record out',
    lead: 'A driver snaps the paper invoice and posts it to a Telegram group. The image is straightened, AI extracts each field and rates how confident it is, and business rules catch the errors that reading alone would let through. Where the AI has doubts, a person makes the call.',
    scene: {
      label:
        'A driver posts an invoice photo in Telegram; the scan highlights every field by confidence, the doubtful date is pushed to the review lane, where an operator approves it (sample data)',
      chat: {
        group: 'Invoices · drivers',
        members: 'bot, drivers, office',
        driver: 'Driver B.',
        photo: 'invoice_0417.jpg',
        received: 'Received. Reading…',
        review: 'The date needs a look. Sent to the office.',
        recorded: 'Recorded: 10-XX-027 · Demo Quarry → Demo Terminal · 24.1 t',
      },
      document: {
        title: 'Invoice No. 0417',
        sender: 'Demo Quarry LLC',
        stamp: 'Received',
      },
      fields: [
        { key: 'plate', label: 'Vehicle', value: '10-XX-027', confidence: 'high' },
        { key: 'date', label: 'Date', value: '14.09', confidence: 'low' },
        { key: 'from', label: 'From', value: 'Demo Quarry', confidence: 'high' },
        { key: 'to', label: 'To', value: 'Demo Terminal', confidence: 'high' },
        { key: 'cargo', label: 'Cargo', value: 'Crushed stone', confidence: 'high' },
        { key: 'weight', label: 'Net weight', value: '24.1 t', confidence: 'medium' },
        { key: 'amount', label: 'Amount', value: '412.00 ₼', confidence: 'high' },
      ],
      extractedTitle: 'Read by AI',
      confidence: { high: 'Sure', medium: 'Checked', low: 'Unsure' },
      lane: {
        title: 'Review lane',
        field: 'Date',
        options: '14.09 or 11.09?',
        decision: '14.09',
        approve: 'Confirm',
        done: 'Confirmed by the office',
      },
    },
    pipelineTitle: 'The path of one photo',
    pipeline: [
      {
        title: 'Photo in',
        text: 'The Telegram bot collects photos from the driver groups and replies straight away, so the driver knows it arrived.',
      },
      {
        title: 'Image prepared',
        text: 'Cab photos are seldom level or in focus, so each one is rotated, resized and sharpened first.',
      },
      {
        title: 'Fields extracted',
        text: 'AI returns the vehicle, date, route, customer, weight and amount as structured data with a confidence per field, even when one page mixes Azerbaijani, Russian and English.',
      },
      {
        title: 'Rules applied',
        text: 'Before saving, the platform confirms the plate format, that the date is valid, that the customer exists and that the totals add up.',
      },
      {
        title: 'Saved or sent for review',
        text: 'High-confidence reads are saved. Low-confidence ones get a second pass from another AI model, and whatever remains unclear waits for a person in the review lane.',
      },
    ],
    note: 'Each read is stored together with the raw AI answer, its confidence score and the name of the model behind it, which makes every record traceable to its original photo.',
  },

  reconcile: {
    id: 'reconcile' as const,
    badge: '23:00',
    eyebrow: 'Three-way matching',
    title: 'Trip, invoice and ledger have to line up',
    accent: 'have to line up',
    lead: 'Overnight the platform recomputes the whole day from raw data (GPS trips, stops, waiting fees) and then compares each trip with its invoice and its finance record. Matches are marked reconciled; everything else goes to a queue that points to the exact field that differs.',
    board: {
      label:
        'Three cards (the trip from GPS, the invoice as read by AI and the finance record) slide together and are compared field by field; a queue of three mismatches then waits for approval or rejection (sample data)',
      columns: [
        { title: 'Trip', source: 'from GPS', code: 'T-0412' },
        { title: 'Invoice', source: 'read by AI', code: 'No. 0417' },
        { title: 'Finance record', source: 'from accounting', code: 'FR-2291' },
      ],
      rows: [
        { label: 'Vehicle', values: ['10-XX-027', '10-XX-027', '—'] },
        { label: 'Date', values: ['14.09', '14.09', '14.09'] },
        { label: 'Route', values: ['Demo Quarry → Terminal', 'Demo Quarry → Terminal', '—'] },
        { label: 'Net weight', values: ['24.1 t', '24.1 t', '—'] },
        { label: 'Amount', values: ['—', '412.00 ₼', '412.00 ₼'] },
      ],
      stamp: 'Reconciled',
      queue: {
        title: 'Mismatches',
        count: '3',
        selectAll: 'Select all',
        approve: 'Approve',
        reject: 'Reject',
        rows: [
          { trip: 'T-0415', plate: '10-XX-033', reason: 'Amount', detail: '380.00 ₼ on the invoice, 308.00 ₼ in finance' },
          { trip: 'T-0419', plate: '10-XX-051', reason: 'No invoice', detail: 'Trip found, no photo received yet' },
          { trip: 'T-0422', plate: '10-XX-014', reason: 'Vehicle', detail: 'The invoice says 10-XX-041' },
        ],
      },
    },
    features: [
      {
        title: 'Compared field by field',
        text: 'Each of the five fields (vehicle, date, route, weight, amount) is checked on its own, so every mismatch shows why it failed rather than simply turning red.',
      },
      {
        title: 'Bulk approval',
        text: 'Accountants accept or reject mismatches in batches, and each decision is kept in the record’s history.',
      },
      {
        title: 'Recomputed, not patched',
        text: 'Reprocessing a night produces an identical result, and when a rule changes, history is recomputed from the raw data.',
      },
    ],
  },

  reports: {
    id: 'reports' as const,
    badge: '08:00',
    eyebrow: 'Reporting and Telegram',
    title: 'By morning the report is done',
    accent: 'the report is done',
    lead: 'Nobody has to be asked to pull numbers together for management. From the very data dispatchers work with, the platform produces a ten-tab Excel workbook and a set of charts, while drivers and the office stay up to date through the Telegram bot.',
    workbook: {
      label:
        'A ten-tab Excel workbook that rotates between the summary sheet, a day-by-day chart comparing customer waiting with operational stops, and per-truck fuel versus distance (sample data)',
      file: 'fleet-report-14-09.xlsx',
      tabs: [
        'Summary',
        'Issues',
        'Trips',
        'GPS analysis',
        'Customers',
        'Drivers',
        'Reconciliation',
        'AI reading',
        'Stop analysis',
        'Contracts',
      ],
      summary: {
        head: ['Indicator', 'Week'],
        rows: [
          { label: 'Trips', value: '212' },
          { label: 'Distance', value: '41,300 km' },
          { label: 'Fuel used', value: '18,940 L' },
          { label: 'Customer waiting', value: '61 h' },
          { label: 'Operational stops', value: '148' },
          { label: 'Invoices read by AI', value: '209' },
        ],
      },
      // Header row of the sheet behind the chart object; the rows themselves are sample data in the component.
      sheet: { head: ['Plate', 'Km', 'Waiting, h', 'Fee, ₼'] },
      stops: { title: 'Customer waiting vs operational stops, h', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
      fuel: { title: 'Fuel against distance, per truck', x: 'km', y: 'L' },
    },
    tabsTitle: 'Questions the workbook answers',
    tabNotes: [
      { label: 'Summary', text: 'One sheet with the period’s trips, kilometres, fuel, waiting hours and fees.' },
      { label: 'Issues', text: 'A filterable list of waits past the free time and trucks coming back empty.' },
      { label: 'Stop analysis', text: 'Each stop listed with its reason, zone, length and fee.' },
      { label: 'GPS analysis', text: 'Per truck: fuel versus distance, plus speed patterns.' },
      { label: 'Customers, drivers', text: 'The same figures broken down per customer and per driver.' },
      { label: 'Reconciliation', text: 'Matches, mismatches and the invoices a person had to check.' },
    ],
    chartsTitle: 'Charts management sees',
    charts: ['Stop classification breakdown', 'Fuel and waiting analysis', 'Monthly trend', 'Optimisation potential'],
    bot: {
      title: 'The Telegram bot',
      text: 'Drivers post invoice photos in the chat they already use. The bot replies with what it read, and the office receives a link to every invoice that needs checking.',
    },
  },

  engineering: {
    id: 'engineering' as const,
    eyebrow: 'Under the hood',
    title: 'Every figure can prove itself',
    accent: 'can prove itself',
    lead: 'When a system sends bills to customers, each number needs a source. We designed this one so that every fee, stop and match can be traced to the GPS message, photo or finance record it came from, and is recomputed whenever the rules change.',
    flow: {
      sourcesTitle: 'Sources',
      coreTitle: 'Platform',
      outputsTitle: 'Results',
      sources: [
        'Wialon GPS',
        'Tank fuel sensors',
        'CAN weight sensors',
        'Invoice photos via Telegram',
        'Customer contract terms',
        'Finance records',
      ],
      core: ['Ingest and normalise', 'Classify stops', 'Price waiting time', 'Read invoices with AI', 'Reconcile three ways'],
      outputs: [
        'Real-time dashboard and map',
        'Alerts for dispatchers',
        'Waiting fees on trips',
        'Reconciled records',
        'Excel workbook and charts',
        'Bot replies to drivers',
      ],
    },
    principles: [
      {
        title: 'Raw data stays untouched',
        text: 'GPS messages are saved exactly as received. Trips, stops and fees are calculated from them, so a new rule recomputes history rather than patching it.',
      },
      {
        title: 'Run it twice, get the same result',
        text: 'The nightly job is idempotent: reprocessing a day never creates a duplicate trip, fee or match.',
      },
      {
        title: 'Live updates with a backup path',
        text: 'Changes reach the dashboards instantly, and if the push connection is lost they switch to polling.',
      },
      {
        title: 'Works from its own copy',
        text: 'The app answers from a database it owns; when an outside feed lags or goes offline, a circuit breaker keeps it responsive.',
      },
      {
        title: 'Heavy jobs in the background',
        text: 'AI reading happens in queued background workers with retries, so a flood of photos does not slow the dashboard down.',
      },
      {
        title: 'Role-based access',
        text: 'Dispatchers, accountants, operators and managers sign in under their own roles and get the screens their job requires.',
      },
    ],
  },

  erp: {
    id: 'erp' as const,
    eyebrow: 'Next step',
    title: 'Next on the road: Aibaycan Logistics ERP',
    accent: 'Aibaycan Logistics ERP',
    lead: 'The fleet data platform shows the location of every truck and the value of its time. Our work with Sahil Transport now continues with Aibaycan Logistics ERP, our logistics ERP that covers a carrier’s whole cycle, from the first order to payment landing in the bank.',
    from: {
      label: 'Delivered to Sahil Transport',
      title: 'Fleet data platform',
      items: [
        'GPS, fuel and weight in one place',
        'Stop classification',
        'Demurrage calculation',
        'AI invoice reading',
        'Three-way reconciliation',
        'Excel reports and a Telegram bot',
      ],
    },
    to: {
      label: 'Our product',
      title: 'Aibaycan Logistics ERP',
      items: [
        'Orders and dispatch',
        'Driver app',
        'CMR and delivery acts',
        'E-invoices',
        'Receivables and bank reconciliation',
        'Approval workflows',
      ],
    },
    cta: 'Ask about Aibaycan Logistics ERP',
  },

  role: {
    eyebrow: 'Our part',
    title: 'Aibaycan’s contribution',
    items: [
      {
        title: 'Billing rules',
        text: 'We captured how a haulier makes money on waiting time as rules software can run: customer geofences, trip membership, load changes and the free time set in each contract.',
      },
      {
        title: 'Connecting the telematics',
        text: 'Roughly 180 trucks now report through one system that combines Wialon GPS with tank fuel and CAN weight sensors; each truck’s empty weight is learned so cargo shows net.',
      },
      {
        title: 'Building the platform',
        text: 'Nightly processing, the live dashboard, stop classification, demurrage calculation and matching across three sources.',
      },
      {
        title: 'Automation with AI',
        text: 'A Telegram bot that collects invoice photos, AI that reads their fields with confidence scores, business rule checks and a separate lane for human review.',
      },
      {
        title: 'Design and reporting',
        text: 'A dark, phone-friendly operations interface in Azerbaijani, plus management’s Excel workbook and charts.',
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'A stack chosen for streaming data',
    groups: [
      { label: 'Interface', items: ['TypeScript', 'React', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'Fastify', 'WebSockets'] },
      { label: 'Data and jobs', items: ['PostgreSQL', 'Redis', 'Job queues'] },
      { label: 'AI and integrations', items: ['Vision LLM', 'Wialon', 'Telegram', 'Excel'] },
    ],
  },
  faq: {
    title: 'Questions carriers ask about the platform',
    items: [
      {
        q: 'Do we have to replace our existing systems to bill demurrage?',
        a: 'No. The platform runs alongside the telematics and accounting you already use: it reads from them, stores a copy of its own and layers stop classification, fees, reconciliation and reporting on top.',
      },
      {
        q: 'How does it tell waiting at a customer apart from any other stop?',
        a: 'Every stop is checked four ways: whether the truck is in a customer’s zone, whether that customer belongs to the trip, whether the weight sensor registered loading or unloading, and what free time the contract allows. Waiting becomes billable only when all four checks pass.',
      },
      {
        q: 'What telematics and sensors are supported?',
        a: 'The build pairs Wialon GPS with fuel sensors in the tanks and CAN weight sensors. Any other telematics platform that offers an API can be connected in the same way, feeding positions, geofences and sensor data into trips.',
      },
      {
        q: 'What if the AI can’t read an invoice?',
        a: 'The system does not guess. Every field is scored for confidence; low-scoring values are reread by a second AI model, and whatever stays unclear lands with a person in the review lane, the problem field highlighted.',
      },
      {
        q: 'Is Aibaycan still working with Sahil Transport?',
        a: 'Yes. The partnership goes on with Aibaycan Logistics ERP, our logistics ERP that tracks each shipment from order through to payment reaching the bank.',
      },
    ],
  },
  railLabels: {
    challenge: 'Challenge',
    fleet: 'Fleet',
    stops: 'Stops',
    waiting: 'Waiting fees',
    invoices: 'AI invoices',
    reconcile: 'Reconciliation',
    reports: 'Reports',
    engineering: 'Engineering',
    erp: 'What’s next',
  },
  sampleDataNote: 'All names, plates and numbers shown on screens are sample data.',
  mockupAriaLabel: 'Product screen illustration using sample data',
} satisfies CaseBase;

export type SahilTransportCopy = typeof en;
export default en;
