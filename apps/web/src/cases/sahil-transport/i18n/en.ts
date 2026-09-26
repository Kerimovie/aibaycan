// Sahil Transport case study (/[locale]/projects/sahil-transport), EN. Ported from Atlas
// `src/i18n/en/cases/sahil-transport.ts`. Type source for the case: AZ/RU are typed `SahilTransportCopy`.
// Client project: describe what we built, never its operating status. Plates, names and figures are sample data.
import type { CaseBase } from '../../types';

const en = {
  seo: {
    title: 'Sahil Transport: Fleet Monitoring & Demurrage Platform',
    description:
      'The fleet monitoring platform we built for a Baku road-freight carrier: GPS fuel control, CAN weight sensors, stop classification and demurrage calculation.',
  },
  h1: 'Fleet monitoring platform with demurrage calculation for road freight',
  hero: {
    eyebrow: 'Logistics · Fleet data platform',
    title: 'From a GPS ping to a line on the invoice',
    accent: 'a line on the invoice',
    lead: 'Sahil Transport is a Baku road-freight carrier with about 180 trucks. We built its fleet data platform: GPS, fuel and CAN weight sensor streams meet in one place, every stop gets a reason, waiting time at customer sites is priced from the contract, and driver invoice photos are read by AI and matched with trips and finance records.',
    primaryCta: 'Discuss a similar project',
  },
  facts: {
    platforms: 'Web dashboard · Telegram bot · Excel reports',
    languages: 'Azerbaijani',
  },

  // Hero visual: fleet map of the Absheron peninsula + sensor traces of one truck.
  console: {
    label:
      'Fleet map of the Absheron peninsula: trucks move between customer zones, one waits inside a zone, and the speed, fuel and net weight traces of one truck scroll below (sample data)',
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
    eyebrow: 'The challenge',
    title: 'Every truck reports. Nobody connects the dots.',
    accent: 'Nobody connects the dots.',
    lead: 'A carrier’s day throws off thousands of signals: positions every few minutes, tank levels, axle weights, paper invoices photographed in the cab. At Sahil Transport they lived in three places that never talked to each other, and money was slipping through the gaps between them.',
    scale: {
      value: '≈180',
      unit: 'trucks',
      text: 'with GPS trackers, tank fuel sensors and CAN weight sensors across the whole fleet, each reporting every few minutes.',
    },
    sourcesTitle: 'Where the data lived',
    sources: [
      { name: 'Telematics portal', detail: 'Positions, speed, fuel, axle weight', sample: '10-XX-027 · 0 km/h · 148 L' },
      { name: 'Chat groups', detail: 'Invoice photos from drivers', sample: 'IMG_4417.jpg · IMG_4418.jpg' },
      { name: 'Finance records', detail: 'Customers, contracts, payments', sample: 'FR-2291 · 412.00 ₼' },
    ],
    gap: 'No shared trip. No shared truth.',
    pains: [
      {
        title: 'Waiting time went unbilled',
        text: 'Trucks queued at loading sites beyond the free time in the contract, and nobody could show for how long.',
      },
      {
        title: 'Every stop looked the same',
        text: 'In raw GPS data a customer queue, a fuel stop and a traffic jam are one and the same thing: speed zero.',
      },
      {
        title: 'Invoices were retyped by hand',
        text: 'Drivers photographed paper invoices, and the office copied them into spreadsheets, late and with typos.',
      },
      {
        title: 'Three records, three truths',
        text: 'Trips, invoices and finance records rarely agreed, and finding the right one meant checking line by line.',
      },
    ],
  },

  fleet: {
    id: 'fleet' as const,
    badge: '06:00',
    eyebrow: 'The fleet in real time',
    title: 'The whole fleet on one screen',
    accent: 'one screen',
    lead: 'The platform pulls position, speed, fuel and weight for every truck from Wialon and turns them into a dispatcher’s view: who is moving, who is waiting at a customer, who has stopped for its own reasons and who has gone quiet.',
    screen: {
      label:
        'Dispatcher dashboard with status tiles, truck cards showing speed, fuel and net load, a fleet status ring, data freshness per source and an attention queue (sample data)',
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
        title: 'Four states that mean something',
        text: 'Moving, customer waiting, operational stop and offline, in the same colours on the map, the cards, the alerts and the reports.',
      },
      {
        title: 'Net cargo, not raw sensor readings',
        text: 'For every truck the platform learns its empty weight, so the CAN sensor reads as net cargo in tonnes instead of a raw value.',
      },
      {
        title: 'Fuel in litres, next to kilometres',
        text: 'Tank sensor levels are kept in litres and per cent alongside the distance driven, on the truck card and for every trip.',
      },
      {
        title: 'An attention queue, not a wall of dots',
        text: 'Trucks that went quiet, run low on fuel or are close to the end of their free time rise to the top of the list.',
      },
      {
        title: 'Freshness you can see',
        text: 'Every data source shows when it last synced, so a silent feed is never mistaken for a parked truck.',
      },
      {
        title: 'A map made for dispatchers',
        text: 'Status filters, plate search and a detail view with each truck’s latest trail, driver and sensor readings.',
      },
    ],
  },

  stops: {
    id: 'stops' as const,
    badge: '09:40',
    eyebrow: 'Stop classification',
    title: 'Speed zero is not an answer',
    accent: 'not an answer',
    lead: 'A truck standing still may be queueing at a customer’s gate, refuelling or stuck in traffic, and only the first one can be billed. The platform puts every stop through four checks and gives it a reason.',
    timeline: {
      title: '10-XX-027 · one sample day',
      weight: 'Net weight',
      weightMax: '24.1 t',
      state: 'State',
      hours: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
      legend: { drive: 'Driving', waiting: 'Customer waiting', operational: 'Operational stop' },
    },
    checksTitle: 'Four checks on every stop',
    checks: [
      { name: 'Zone', question: 'Is the truck inside a customer’s geofence?', outcome: 'No → operational stop' },
      { name: 'Trip', question: 'Is that customer on this truck’s trip?', outcome: 'No → operational stop' },
      { name: 'Load', question: 'Did the weight sensor go up or down?', outcome: 'Up → loading · down → unloading' },
      { name: 'Contract', question: 'How much free time does the contract allow?', outcome: 'Beyond it → billable waiting' },
    ],
    logTitle: 'How the day was classified',
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
    note: 'Stops of a few minutes are treated as GPS noise, and a truck hovering on a zone border is smoothed out before it is classified.',
  },

  waiting: {
    id: 'waiting' as const,
    badge: '11:40',
    eyebrow: 'Demurrage calculation',
    title: 'Waiting time turns into a billable line',
    accent: 'a billable line',
    lead: 'Every customer contract sets its own free time for loading and unloading and its own hourly rate. When a truck waits longer, the platform counts the excess, prices it from that contract and attaches the fee to the trip, together with the evidence.',
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
        title: 'Separate limits for loading and unloading',
        text: 'Each contract carries its own free time for both operations, so the same wait can be free at one customer and billable at another.',
      },
      {
        title: 'Warnings while the truck is still at the gate',
        text: 'Dispatchers get a warning as a truck nears the end of its free time and a critical alert once it is exceeded.',
      },
      {
        title: 'A fee with its proof attached',
        text: 'Arrival, departure, zone and weight change are stored with every fee, so a disputed line arrives with its own evidence.',
      },
    ],
  },

  invoices: {
    id: 'invoices' as const,
    badge: '14:30',
    eyebrow: 'AI invoice reading',
    title: 'A photo from the cab becomes a checked record',
    accent: 'a checked record',
    lead: 'Drivers photograph paper invoices and send them to a Telegram group. The platform straightens the image, AI reads every field with a confidence score, and business checks catch what reading alone misses. When the AI is unsure, a person decides.',
    scene: {
      label:
        'A driver sends an invoice photo to a Telegram group; the photo is scanned, each field is highlighted by confidence, the unclear date goes to a review lane and an operator confirms it (sample data)',
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
    pipelineTitle: 'What happens to every photo',
    pipeline: [
      {
        title: 'The photo arrives',
        text: 'The Telegram bot takes photos from the drivers’ groups and replies at once, so the driver knows it landed.',
      },
      {
        title: 'The image is cleaned up',
        text: 'Rotated, resized and sharpened before reading, because cab photos are rarely straight or sharp.',
      },
      {
        title: 'AI reads the fields',
        text: 'Vehicle, date, route, customer, weight and amount come back as structured data, each with its own confidence, even with Azerbaijani, Russian and English on one page.',
      },
      {
        title: 'Business checks run',
        text: 'The plate format, a valid date, a known customer and totals that add up are verified before anything is saved.',
      },
      {
        title: 'Recorded or reviewed',
        text: 'Confident reads are recorded. Unsure ones are read again by a second AI model, and anything still unclear waits in the review lane for a person.',
      },
    ],
    note: 'Every read keeps the raw AI answer, its confidence and the model that produced it, so any record can be traced back to its photo.',
  },

  reconcile: {
    id: 'reconcile' as const,
    badge: '23:00',
    eyebrow: 'Three-way reconciliation',
    title: 'Trip, invoice and finance record must agree',
    accent: 'must agree',
    lead: 'Every night the platform rebuilds the day from raw data: trips from GPS, stops and waiting fees, then a three-way match between each trip, its invoice and its finance record. What agrees is marked reconciled. What does not lands in a queue that names the field that differs.',
    board: {
      label:
        'A trip from GPS, an AI-read invoice and a finance record slide together and match field by field, followed by a queue of three mismatches to approve or reject (sample data)',
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
        title: 'Field-level matching',
        text: 'Vehicle, date, route, weight and amount are compared one by one, so a mismatch arrives with its reason instead of a red row.',
      },
      {
        title: 'Decisions in batches',
        text: 'Accountants approve or reject mismatches in bulk, and every decision stays on the record.',
      },
      {
        title: 'Rebuilt, never patched',
        text: 'Running a night again gives the same result, and a changed rule rebuilds the history from raw data.',
      },
    ],
  },

  reports: {
    id: 'reports' as const,
    badge: '08:00',
    eyebrow: 'Reports and the bot',
    title: 'The morning report is already written',
    accent: 'already written',
    lead: 'Management gets its numbers without asking anyone to build them. The platform generates a ten-tab Excel workbook and charts from the same data the dispatchers see, and the Telegram bot keeps drivers and the office in the loop.',
    workbook: {
      label:
        'Excel workbook with ten tabs, cycling through the summary table, a chart of customer waiting against operational stops by day, and fuel against distance per truck (sample data)',
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
    tabsTitle: 'What the workbook answers',
    tabNotes: [
      { label: 'Summary', text: 'Trips, distance, fuel, waiting time and fees for the period on one sheet.' },
      { label: 'Issues', text: 'Customer waiting beyond free time and empty return legs, ready to filter.' },
      { label: 'Stop analysis', text: 'Every stop with its reason, zone, duration and fee.' },
      { label: 'GPS analysis', text: 'Fuel against distance and speed patterns for each truck.' },
      { label: 'Customers, drivers', text: 'The same numbers cut by customer and by driver.' },
      { label: 'Reconciliation', text: 'What matched, what did not, and which invoices needed a person.' },
    ],
    chartsTitle: 'Charts for management',
    charts: ['Stop classification breakdown', 'Fuel and waiting analysis', 'Monthly trend', 'Optimisation potential'],
    bot: {
      title: 'The Telegram bot',
      text: 'Drivers send invoice photos where they already chat. The bot answers with the result, and the office gets a link to anything that needs review.',
    },
  },

  engineering: {
    id: 'engineering' as const,
    eyebrow: 'How it is built',
    title: 'Built to trust its own numbers',
    accent: 'its own numbers',
    lead: 'A platform that bills customers has to prove every figure. We designed this one so each fee, stop and match traces back to a GPS message, a photo or a finance record, and can be rebuilt when the rules change.',
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
        title: 'Raw data is never edited',
        text: 'GPS messages are stored as they arrive. Trips, stops and fees are derived from them, so a new rule rebuilds history instead of patching it.',
      },
      {
        title: 'Same input, same answer',
        text: 'Nightly processing is idempotent: running a day twice never duplicates a trip, a fee or a match.',
      },
      {
        title: 'Real time, with a fallback',
        text: 'Dashboards receive changes the moment they happen and fall back to polling if the push connection drops.',
      },
      {
        title: 'Serves its own data',
        text: 'The app reads from its own database, and a circuit breaker keeps it responsive when an outside feed is slow or unreachable.',
      },
      {
        title: 'Slow work runs in queues',
        text: 'AI reading runs in background workers with retries, so a burst of photos never slows the dashboard.',
      },
      {
        title: 'Access by role',
        text: 'Sign-in with role-based access for dispatchers, accountants, operators and management, each seeing the screens their work needs.',
      },
    ],
  },

  erp: {
    id: 'erp' as const,
    eyebrow: 'What comes next',
    title: 'The road continues with Aibaycan Logistics ERP',
    accent: 'Aibaycan Logistics ERP',
    lead: 'The fleet data platform shows where every truck is and what its time is worth. Our partnership with Sahil Transport continues with Aibaycan Logistics ERP, our logistics ERP that runs a carrier from the first order to the money in the bank.',
    from: {
      label: 'Built for Sahil Transport',
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
    cta: 'Discuss Aibaycan Logistics ERP',
  },

  role: {
    eyebrow: 'Our role',
    title: 'What Aibaycan did',
    items: [
      {
        title: 'Billing logic',
        text: 'We turned how a carrier earns from waiting time into rules a machine can apply: customer zones, trips, load changes and contract free time.',
      },
      {
        title: 'Telematics integration',
        text: 'We connected Wialon GPS with tank fuel sensors and CAN weight sensors across about 180 trucks, with learned empty weights for net cargo.',
      },
      {
        title: 'Platform engineering',
        text: 'The real-time dashboard, stop classification, demurrage calculation, nightly processing and three-way reconciliation.',
      },
      {
        title: 'AI automation',
        text: 'Invoice photo intake through a Telegram bot, AI field reading with confidence scores, business checks and a human review lane.',
      },
      {
        title: 'Reporting and design',
        text: 'A dark operations interface in Azerbaijani that adapts to phones, plus the Excel workbook and charts for management.',
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Built on a stack made for streams',
    groups: [
      { label: 'Interface', items: ['TypeScript', 'React', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'Fastify', 'WebSockets'] },
      { label: 'Data and jobs', items: ['PostgreSQL', 'Redis', 'Job queues'] },
      { label: 'AI and integrations', items: ['Vision LLM', 'Wialon', 'Telegram', 'Excel'] },
    ],
  },
  faq: {
    title: 'What carriers ask us about this platform',
    items: [
      {
        q: 'How does the platform tell a customer wait from an ordinary stop?',
        a: 'With four checks on every stop: is the truck inside a customer’s zone, is that customer on this trip, did the weight sensor show loading or unloading, and how much free time does the contract allow. Only a stop that passes all four becomes billable waiting time.',
      },
      {
        q: 'Which telematics and sensors does it work with?',
        a: 'It is built on Wialon GPS with tank fuel sensors and CAN weight sensors. Other telematics platforms with an API connect the same way: positions, geofences and sensor readings flow in and attach to trips.',
      },
      {
        q: 'What happens when the AI cannot read an invoice?',
        a: 'Nothing is guessed. Every field carries a confidence score. An unsure read goes to a second AI model, and if it is still unclear the invoice waits in the review lane with the doubtful field highlighted for a person to confirm.',
      },
      {
        q: 'Does demurrage calculation require replacing our current systems?',
        a: 'No. A platform like this sits next to your telematics and accounting: it reads from them, keeps its own copy of the data and adds classification, fees, reconciliation and reports on top.',
      },
      {
        q: 'Does the work with Sahil Transport continue?',
        a: 'Yes. The partnership continues with Aibaycan Logistics ERP, our logistics ERP that takes a shipment from the order to the money in the bank.',
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
  sampleDataNote: 'Names, plates and figures on screens are sample data.',
  mockupAriaLabel: 'Illustrative product screen with sample data',
} satisfies CaseBase;

export type SahilTransportCopy = typeof en;
export default en;
