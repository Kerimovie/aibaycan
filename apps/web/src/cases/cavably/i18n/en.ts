// Cavably case study (/[locale]/projects/cavably), EN. Ported from Atlas `src/i18n/en/cases/cavably.ts`.
// Type source for the case: AZ/RU are typed `CavablyCopy`. Names and figures on the mockups are sample data.
import type { CaseBase } from '../../types';

/** Messaging channels drawn in the mockups (icons and colours live in `src/components/cases/cavably/`). */
export type CavChannel = 'whatsapp' | 'instagram' | 'messenger' | 'telegram' | 'web';

/** Status of a conversation in the inbox mockups. */
export type CavState = 'ai' | 'human' | 'new' | 'overdue';

/** One chat bubble. `voice` = duration of a voice note, `photo` = caption of an attached picture. */
export interface CavMessage {
  from: 'customer' | 'ai' | 'agent' | 'system';
  text: string;
  name?: string;
  time?: string;
  source?: string;
  voice?: string;
  photo?: string;
}

export interface CavConversation {
  name: string;
  channel: CavChannel;
  text: string;
  time: string;
  state: CavState;
}

/** Identity helper: keeps list items typed by an interface (AZ/RU/TR then follow the same shape). */
const list = <T,>(items: T[]) => items;

const en = {
  seo: {
    title: 'Cavably: AI CRM with a WhatsApp and Instagram Shared Inbox',
    description:
      'Cavably, our AI CRM for service businesses: a WhatsApp, Instagram, Messenger and Telegram shared inbox, an AI assistant, bookings, debt reminders and flows.',
  },
  h1: 'AI CRM for service businesses with a shared WhatsApp and Instagram inbox',
  hero: {
    eyebrow: 'CRM · AI SaaS',
    title: 'Five channels. One inbox. Answers at any hour.',
    accent: 'Answers at any hour.',
    lead: 'Cavably is our AI-first CRM for salons, clinics, courses and other service businesses. We designed, built and run it. Messages from every channel land in one inbox, an AI assistant answers from the business’s own knowledge, and a conversation turns into a booking, a payment or a deal without leaving the screen.',
    primaryCta: 'Discuss a similar project',
  },
  facts: { platforms: 'Web app · Web chat · WhatsApp · Instagram · Messenger · Telegram', languages: 'AZ · EN · RU' },

  channels: {
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    messenger: 'Messenger',
    telegram: 'Telegram',
    web: 'Web chat',
  },
  states: {
    ai: 'AI replied',
    human: 'With Leyla',
    new: 'New',
    overdue: 'Overdue',
    typing: 'AI is typing',
  },

  heroInbox: {
    ariaLabel:
      'Sample Cavably inbox: messages from WhatsApp, Instagram, Messenger, Telegram and web chat flow into one list, and the AI assistant replies',
    business: 'Demo Beauty Studio',
    inbox: 'Inbox',
    online: '5 channels connected',
    conversations: list<CavConversation>([
      { name: 'Nərmin', channel: 'instagram', text: 'Is there a free slot on Saturday?', time: '23:40', state: 'ai' },
      { name: 'Tural', channel: 'whatsapp', text: 'How much is a men’s haircut?', time: '23:37', state: 'ai' },
      { name: 'Sevinc', channel: 'telegram', text: 'Can I pay the rest by card?', time: '23:31', state: 'human' },
      { name: 'Website visitor', channel: 'web', text: 'Do you work on Sundays?', time: '23:24', state: 'ai' },
      { name: 'Kamran', channel: 'messenger', text: 'Could I move my visit to 16:00?', time: '23:18', state: 'ai' },
      { name: 'Ləman', channel: 'whatsapp', text: 'Voice note · 0:12', time: '23:09', state: 'ai' },
    ]),
    reply: {
      from: 'AI assistant',
      text: 'Hi Nərmin! Saturday 11:00 and 15:30 are free with Nigar. Which one suits you?',
      source: 'Knowledge base · Opening hours',
    },
  },

  challenge: {
    id: 'challenge' as const,
    km: '23:40',
    eyebrow: 'The challenge',
    title: 'Customers write at midnight. The front desk opens at ten.',
    accent: 'The front desk opens at ten.',
    lead: 'A service business lives in its messengers. Questions, bookings and promises to pay arrive on WhatsApp, Instagram, Telegram and the website, at any hour and on several phones. Whether anyone answers depends on who is holding which phone.',
    clock: {
      ariaLabel:
        'Sample chart of one day of messages on five channels: many arrive in the evening and at night, outside opening hours, and wait until morning',
      title: 'One day of messages at a sample studio',
      hours: 'Opening hours',
      answered: 'Answered while open',
      waiting: 'Waits until morning',
      highlight: 'Nərmin · 23:40',
    },
    pains: [
      {
        title: 'The message nobody saw',
        text: 'A booking request arrives on Instagram at 23:40. By the time the studio opens, the customer has booked with someone who answered.',
      },
      {
        title: 'One slot, two promises',
        text: 'An admin confirms 15:00 on WhatsApp while a colleague gives the same slot to a caller. Both customers arrive.',
      },
      {
        title: 'Debts in a notebook',
        text: 'Who paid a deposit and who still owes for the last visit lives in someone’s memory, a notebook or a spreadsheet nobody updates.',
      },
      {
        title: 'The fiftieth price question',
        text: 'Prices, the address, parking and opening hours are typed by hand all day, by the people who should be serving customers.',
      },
      {
        title: 'No idea what works',
        text: 'Which post, ad or link brought a customer is gone the moment the chat scrolls away.',
      },
    ],
  },

  inbox: {
    id: 'inbox' as const,
    km: '23:40',
    eyebrow: 'Shared inbox',
    title: 'Every channel lands in one inbox',
    accent: 'one inbox',
    lead: 'WhatsApp, Instagram, Messenger, Telegram and the website chat arrive in one shared inbox. Every conversation has an owner, a full history and a customer profile, and the whole team sees in real time who is answering what.',
    screen: {
      ariaLabel:
        'Sample Cavably inbox screen: a conversation list from five channels, an Instagram chat answered by the AI assistant, and the customer’s profile with next visit and balance',
      title: 'Inbox',
      search: 'Search conversations',
      tabs: [
        { label: 'All', count: '12' },
        { label: 'Mine', count: '4' },
        { label: 'Unassigned', count: '3' },
      ],
      list: list<CavConversation>([
        { name: 'Nərmin', channel: 'instagram', text: '15:30 please. Can I also pay the 20 AZN?', time: '23:42', state: 'ai' },
        { name: 'Tural', channel: 'whatsapp', text: 'How much is a men’s haircut?', time: '23:37', state: 'ai' },
        { name: 'Sevinc', channel: 'telegram', text: 'Can I pay the rest by card?', time: '23:31', state: 'human' },
        { name: 'Website visitor', channel: 'web', text: 'Do you work on Sundays?', time: '23:24', state: 'new' },
        { name: 'Kamran', channel: 'messenger', text: 'Could I move my visit to 16:00?', time: '23:18', state: 'ai' },
        { name: 'Orxan', channel: 'whatsapp', text: 'Still waiting for an answer…', time: '22:55', state: 'overdue' },
      ]),
      thread: {
        name: 'Nərmin',
        meta: 'Instagram · Regular customer',
        assign: 'Assign to me',
        messages: list<CavMessage>([
          { from: 'customer', text: 'Hi! Is there a free slot for gel manicure on Saturday?', time: '23:40' },
          {
            from: 'ai',
            text: 'Hi Nərmin! Saturday 11:00 and 15:30 are free with Nigar. Gel manicure takes about an hour. Which time suits you?',
            time: '23:40',
            name: 'AI assistant',
          },
          { from: 'customer', text: '15:30 please. Can I also pay the 20 AZN from last time?', time: '23:42' },
          { from: 'system', text: 'Booked · Saturday 15:30 · Nigar' },
        ]),
        collision: 'Leyla is already replying to this conversation',
        composer: '/pay',
        quickReplies: [
          { key: '/payment', text: 'Ways to pay: card, cash or transfer' },
          { key: '/pay-debt', text: 'Your open balance is {balance}' },
        ],
      },
      profile: {
        title: 'Customer',
        tags: ['Regular', 'Manicure'],
        rows: [
          { label: 'Stage', value: 'Regular customer' },
          { label: 'Next visit', value: 'Sat 15:30 · Nigar' },
          { label: 'Balance', value: '−20 AZN' },
          { label: 'Came from', value: 'Instagram bio link' },
          { label: 'History', value: '14 chats · 9 visits' },
        ],
        note: 'Prefers pastel shades. Allergic to acetone.',
      },
    },
    features: [
      {
        title: 'Routing by workload',
        text: 'Rules hand each new conversation to the right operator. Anyone already at capacity is skipped, so nobody drowns while a colleague waits.',
      },
      {
        title: 'No double replies',
        text: 'Typing and “already replying” signals appear the moment a colleague opens the same chat.',
      },
      {
        title: 'Quick replies with “/”',
        text: 'Saved answers drop into the chat with a slash, and their variables fill in with the customer’s own details.',
      },
      {
        title: 'Follow-ups that go out on their own',
        text: 'An unanswered chat gets a nudge: free text inside WhatsApp’s 24-hour window, an approved template after it.',
      },
      {
        title: 'Comments that turn into chats',
        text: 'A keyword under an Instagram post triggers a public reply and a private message with the details.',
      },
      {
        title: 'Every lead with its source',
        text: 'Tracked links, QR codes and click-to-WhatsApp ads tag each new conversation with where it came from.',
      },
    ],
  },

  ai: {
    id: 'ai' as const,
    km: '23:41',
    eyebrow: 'AI assistant',
    title: 'An assistant that knows the price list and knows when to stop',
    accent: 'knows when to stop',
    lead: 'The AI assistant replies at once in Azerbaijani, Russian or English. It answers only from what the business has taught it, understands voice notes and photos, and passes the conversation to a person the moment it should.',
    chat: {
      business: 'Demo Beauty Studio',
      status: 'AI assistant',
      langs: 'AZ · RU · EN',
      composer: 'Message',
    },
    steps: [
      {
        id: 'knowledge',
        label: 'Knowledge base',
        title: 'Answers from the business’s own knowledge',
        text: 'The team adds FAQs, free text and pages of its website. Cavably splits and indexes them automatically, and the assistant grounds every answer in those sources.',
        ariaLabel: 'Sample chat: the AI assistant answers a price question from the knowledge base and shows its source',
        messages: list<CavMessage>([
          { from: 'customer', text: 'How much is gel manicure and how long does it take?', time: '23:40' },
          {
            from: 'ai',
            text: 'Gel manicure is 35 AZN and takes about an hour. Nigar has 11:00 and 15:30 free on Saturday. Shall I book one?',
            time: '23:40',
            source: 'Price list · FAQ',
          },
        ]),
        sources: ['FAQ · 24 answers', 'Price list', 'Website · Services page'],
      },
      {
        id: 'voice',
        label: 'Voice notes',
        title: 'Hears voice notes',
        text: 'Customers often record instead of typing. The assistant transcribes the voice note, shows the transcript in the conversation and answers. It can also reply with a voice note of its own.',
        ariaLabel: 'Sample chat: a customer sends a voice note, the transcript appears and the AI assistant answers',
        messages: list<CavMessage>([
          {
            from: 'customer',
            voice: '0:14',
            text: 'Hi, can my sister and I come on Saturday after four? Two haircuts.',
            time: '23:41',
          },
          {
            from: 'ai',
            text: 'Saturday at 16:30 works for two: Samir and Aytən are both free then. Shall I book you both?',
            time: '23:41',
          },
        ]),
        sources: [],
      },
      {
        id: 'photo',
        label: 'Photos',
        title: 'Understands photos',
        text: 'A customer sends a screenshot or replies to a Story. The assistant recognises what is in the picture and finds the closest match in the business’s catalogue.',
        ariaLabel: 'Sample chat: a customer sends a photo of a nail colour and the AI assistant finds the matching item in the catalogue',
        messages: list<CavMessage>([
          { from: 'customer', photo: 'Photo', text: 'Can you do this colour?', time: '23:42' },
          {
            from: 'ai',
            text: 'Yes, that is closest to “Cherry red” in our catalogue. Gel manicure in this shade is 35 AZN.',
            time: '23:42',
            source: 'Catalogue',
          },
        ]),
        sources: [],
      },
      {
        id: 'handoff',
        label: 'Handoff',
        title: 'Hands over at the right moment',
        text: 'When the knowledge base does not confidently cover a question, such as a complaint or a medical concern, the conversation goes to a person with the whole history attached. The business decides how readily the assistant hands off.',
        ariaLabel: 'Sample chat: a customer complains, the AI assistant hands the conversation to a person and a manager replies',
        messages: list<CavMessage>([
          { from: 'customer', text: 'My colour faded in a week. I want someone to fix it.', time: '23:44' },
          { from: 'system', text: 'Handed to a person · Leyla' },
          {
            from: 'agent',
            name: 'Leyla',
            text: 'Hello, this is Leyla. I’m sorry about that. We’ll redo it free of charge. Does tomorrow at 12:00 suit you?',
            time: '09:58',
          },
        ]),
        sources: [],
      },
    ],
    slider: { label: 'Handoff sensitivity', less: 'Hands off less', more: 'Hands off more' },
  },

  bookings: {
    id: 'bookings' as const,
    km: '23:42',
    eyebrow: 'Bookings and payments',
    title: 'The chat becomes a booking. The booking gets paid.',
    accent: 'The booking gets paid.',
    lead: 'A time agreed in a conversation goes straight into the right specialist’s calendar. Clashes are caught before they happen, confirmations and reminders go out on their own, and money owed is tracked next to the visit.',
    calendar: {
      ariaLabel:
        'Sample booking calendar for three specialists: a booking from WhatsApp lands at 15:30, a second booking is refused because the specialist is busy and moves to a free colleague',
      day: 'Saturday',
      today: 'Bookings',
      staff: ['Nigar', 'Samir', 'Aytən'],
      incoming: { channel: 'whatsapp' as CavChannel, name: 'Nərmin', text: '15:30 please' },
      blocks: [
        { staff: 0, row: 0, span: 2, kind: 'brows', label: 'Brows · Günay' },
        { staff: 0, row: 4, span: 3, kind: 'nails', label: 'Gel manicure · Aysu' },
        { staff: 0, row: 14, span: 2, kind: 'nails', label: 'Pedicure · Lalə' },
        { staff: 1, row: 1, span: 2, kind: 'hair', label: 'Haircut · Elvin' },
        { staff: 1, row: 6, span: 2, kind: 'hair', label: 'Haircut · Rauf' },
        { staff: 1, row: 13, span: 2, kind: 'hair', label: 'Beard · Orxan' },
        { staff: 2, row: 2, span: 4, kind: 'color', label: 'Colouring · Səbinə' },
        { staff: 2, row: 8, span: 2, kind: 'hair', label: 'Haircut · Fidan' },
      ],
      booking: { staff: 0, row: 11, span: 2, label: 'Gel manicure · Nərmin' },
      moved: { staff: 2, row: 12, span: 2, from: 0, label: 'Brows · Zeynəb' },
      clash: 'Nigar is busy at this time',
      confirmed: 'Confirmed · reminder goes out on Friday',
      movedNote: 'Moved to Aytən, who is free',
    },
    debts: {
      ariaLabel:
        'Sample payments and debts list with due dates and reminder status, and an automatic WhatsApp reminder message',
      title: 'Payments and debts',
      rows: [
        { name: 'Nərmin', item: 'Previous visit', amount: '20 AZN', due: 'Saturday', status: 'Reminder sent', tone: 'ok' },
        { name: 'Kamran', item: 'Course · 2nd instalment', amount: '120 AZN', due: '20 Sep', status: 'Scheduled', tone: 'info' },
        { name: 'Sevinc', item: 'Laser package', amount: '90 AZN', due: '3 days overdue', status: 'Overdue', tone: 'bad' },
      ],
      message: {
        channel: 'whatsapp' as CavChannel,
        text: 'Hello Kamran! A friendly reminder: the second instalment for your course, 120 AZN, is due on 20 September. Just reply here if you have any questions.',
        meta: 'Sent automatically on the due date',
      },
    },
    features: [
      {
        title: 'No double bookings',
        text: 'Each specialist has a calendar. A time that is already taken is refused before anyone confirms it.',
      },
      {
        title: 'Confirmations and reminders',
        text: 'The customer gets an automatic confirmation when the visit is booked and a reminder before it.',
      },
      {
        title: 'Money next to the visit',
        text: 'Payments and balances are recorded against the customer, so the admin sees who owes what before the visit starts.',
      },
      {
        title: 'Debt reminders on the due date',
        text: 'Add a payment with a due date, and a polite reminder goes out on that day without anyone remembering to send it.',
      },
    ],
  },

  growth: {
    id: 'growth' as const,
    km: 'Day 60',
    eyebrow: 'Pipeline, campaigns and loyalty',
    title: 'Conversations become deals. Customers come back.',
    accent: 'Customers come back.',
    lead: 'Larger sales like a course, a treatment package or a corporate order move through a pipeline that starts from the conversation itself. Regular customers collect points, and a customer who has gone quiet gets a well-timed message instead of being forgotten.',
    pipeline: {
      ariaLabel:
        'Sample deals pipeline with four stages; a course deal moves from proposal to won and the open pipeline value updates',
      title: 'Deals',
      valueLabel: 'Open pipeline',
      wonLabel: 'Won this month',
      stages: ['New', 'Qualified', 'Proposal', 'Won'],
      deals: [
        { stage: 0, name: 'Laser package', who: 'Sevinc', value: '450', channel: 'instagram' as CavChannel },
        { stage: 0, name: 'Bridal make-up', who: 'Sabina', value: '320', channel: 'whatsapp' as CavChannel },
        { stage: 1, name: 'Corporate gift cards', who: 'Demo Group LLC', value: '1 200', channel: 'web' as CavChannel },
        { stage: 1, name: 'Nail course', who: 'Fidan', value: '380', channel: 'telegram' as CavChannel },
        { stage: 2, name: 'Brow course', who: 'Kamran', value: '480', channel: 'messenger' as CavChannel },
        { stage: 3, name: 'Peel package', who: 'Ləman', value: '260', channel: 'instagram' as CavChannel },
      ],
      mover: 4,
      currency: 'AZN',
      fromChat: 'From a conversation',
      silent: '12 days silent',
      lostTitle: 'Why was the deal lost?',
      lostReasons: ['Price was too high', 'No time', 'Went to a competitor'],
    },
    campaign: {
      ariaLabel:
        'Sample WhatsApp campaign to customers who have not visited for 60 days, using an approved template with a name variable and an unsubscribe line',
      title: 'Campaign',
      name: 'We miss you',
      segmentLabel: 'Audience',
      segment: ['No visit in 60 days', 'Opted in'],
      templateLabel: 'Approved WhatsApp template',
      message: 'Hi {name}! We haven’t seen you for a while. Book this week and your brow tint is on us.',
      variable: '{name}',
      stop: 'Reply STOP to unsubscribe',
      send: 'Send',
      progress: 'Sending',
      log: [
        { name: 'Günay', status: 'Read' },
        { name: 'Elvin', status: 'Delivered' },
        { name: 'Rauf', status: 'Replied STOP · unsubscribed' },
      ],
    },
    loyalty: {
      ariaLabel: 'Sample loyalty card: a customer has 340 of 500 points towards the next reward',
      title: 'Loyalty',
      name: 'Nərmin',
      points: '340',
      goal: '500',
      pointsLabel: 'points',
      reward: 'Next reward: free brow tint',
    },
    features: [
      {
        title: 'A pipeline born in the chat',
        text: 'A deal is created from the conversation and stays linked to it. Stages, won and lost reasons, pipeline value and forecast are one click away.',
      },
      {
        title: 'Campaigns that respect consent',
        text: 'Broadcasts go only to customers who opted in, use approved WhatsApp templates, and drop anyone who writes STOP.',
      },
      {
        title: 'Loyalty points and reactivation',
        text: 'Points for every visit, and automatic win-back messages when a regular customer goes quiet.',
      },
    ],
  },

  flows: {
    id: 'flows' as const,
    km: '23:41',
    eyebrow: 'No-code flow builder',
    title: 'Automations drawn, not coded',
    accent: 'drawn, not coded',
    lead: 'Owners and managers draw their own conversation logic on a canvas: triggers, questions, conditions, waits, AI steps and handoffs. A built-in simulator runs a sample message through the flow before it is published.',
    builder: {
      ariaLabel:
        'Sample flow in the visual builder: a new Instagram message goes to an AI intent step and branches into booking, price question and other paths, while the simulator lists the executed steps',
      title: 'New enquiry · Instagram',
      status: 'Published',
      libraryTitle: 'Nodes',
      library: [
        'Send text and buttons',
        'Ask a question',
        'Condition (if / else)',
        'A/B split',
        'Wait',
        'Business hours',
        'CRM action',
        'Hand to AI',
        'Assign to agent',
        'HTTP request',
        'Google Sheets row',
        'Send email',
      ],
      nodes: {
        trigger: { type: 'Trigger', text: 'New message on Instagram' },
        intent: { type: 'AI intent', text: 'What does the customer want?' },
        ask: { type: 'Ask a question', text: 'Which service and day?' },
        deal: { type: 'CRM action', text: 'Create a booking deal' },
        answer: { type: 'Hand to AI', text: 'Answer from the knowledge base' },
        hours: { type: 'Business hours', text: 'Is the studio open?' },
        assign: { type: 'Assign to agent', text: 'Next available operator' },
      },
      branches: ['Booking', 'Price', 'Other'],
      simulatorTitle: 'Simulator',
      runs: [
        {
          message: 'I want to book brows for Friday',
          steps: ['Trigger matched', 'Intent: booking', 'Asked: service and day', 'Deal created'],
        },
        {
          message: 'How much is a pedicure?',
          steps: ['Trigger matched', 'Intent: price', 'AI answered from the price list'],
        },
        {
          message: 'Do you sell gift cards?',
          steps: ['Trigger matched', 'Intent: other', 'Studio is open', 'Assigned to Leyla'],
        },
      ],
      templatesTitle: 'Ready templates',
      templates: ['FAQ deflection', 'Lead qualification', 'Win-back'],
    },
    features: [
      {
        title: 'Every building block',
        text: 'Text and buttons, media, lists, WhatsApp templates, questions saved to variables, if/else, A/B splits, waits and business-hours branches.',
      },
      {
        title: 'AI inside the flow',
        text: 'An AI step classifies what the customer wants and picks the branch, answers from the knowledge base, or keeps the chat with the assistant.',
      },
      {
        title: 'Connected to the rest',
        text: 'CRM actions, handoff to an operator, HTTP requests, Google Sheets rows, email and other flows are nodes on the same canvas.',
      },
    ],
  },

  analytics: {
    id: 'analytics' as const,
    km: 'Mon 09:00',
    eyebrow: 'Analytics',
    title: 'Monday morning, the whole week on one screen',
    accent: 'on one screen',
    lead: 'The owner sees how conversations turn into bookings and money: the lead funnel, the revenue trend, which channel brings which customers, how fast the team replies and how satisfied customers are after each chat.',
    dashboard: {
      ariaLabel:
        'Sample analytics dashboard: lead funnel, weekly revenue trend, conversations by channel, first response time and customer satisfaction with a low-score alert',
      title: 'Analytics',
      range: 'Last 8 weeks',
      funnel: {
        title: 'Lead funnel',
        stages: [
          { label: 'Conversations', value: '486' },
          { label: 'Qualified', value: '212' },
          { label: 'Booked', value: '131' },
          { label: 'Paid', value: '117' },
        ],
      },
      revenue: {
        title: 'Revenue trend',
        total: '8 940 AZN',
        points: [620, 710, 680, 840, 790, 960, 1080, 1160],
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
      },
      channels: {
        title: 'Conversations by channel',
        items: [
          { channel: 'instagram' as CavChannel, value: 188 },
          { channel: 'whatsapp' as CavChannel, value: 164 },
          { channel: 'telegram' as CavChannel, value: 58 },
          { channel: 'web' as CavChannel, value: 46 },
          { channel: 'messenger' as CavChannel, value: 30 },
        ],
      },
      response: { title: 'First response', value: '1 min 12 s', note: 'AI and team together' },
      csat: {
        title: 'Customer satisfaction',
        value: '4.7',
        scale: '/ 5',
        bars: [2, 3, 9, 31, 55],
        alertTitle: 'Low score',
        alert: 'Sevinc rated 2. The manager is notified and the chat reopens.',
      },
    },
    features: [
      {
        title: 'From message to money',
        text: 'The funnel follows each lead from the first message to a booking and a payment.',
      },
      {
        title: 'Satisfaction after every chat',
        text: 'A short rating request goes out when a conversation closes. A low score alerts the manager and reopens the chat.',
      },
      {
        title: 'Channels and sources compared',
        text: 'See which channel, link, QR code or ad brings conversations, and how quickly each one is answered.',
      },
    ],
  },

  engineering: {
    id: 'engineering' as const,
    eyebrow: 'Engineering and security',
    title: 'Enterprise controls inside a small-business CRM',
    accent: 'Enterprise controls',
    lead: 'Cavably is a multi-tenant SaaS built to satisfy a company’s IT team as well as a salon owner. Single sign-on, an append-only audit log, SLA policies and custom roles sit next to the inbox.',
    controls: {
      ariaLabel:
        'Sample enterprise settings: SAML and OIDC single sign-on, an append-only audit log, an SLA policy for VIP customers and a custom role with permissions',
      sso: {
        title: 'Single sign-on',
        protocols: 'SAML 2.0 · OIDC',
        domain: '@demo-clinic.example',
        target: 'Company identity provider',
        role: 'Default role · Staff',
        status: 'Connection OK',
        fields: [
          { label: 'Login routing', value: 'By email domain' },
          { label: 'IdP certificate', value: 'x509 · uploaded' },
        ],
      },
      audit: {
        title: 'Audit log',
        note: 'Append-only · cannot be edited or deleted',
        rows: [
          { time: '09:42', who: 'Owner', what: 'Changed Samir’s role to Manager' },
          { time: '09:31', who: 'Leyla', what: 'Exported the customer list' },
          { time: '09:12', who: 'Aytən', what: 'Signed in with SSO' },
        ],
      },
      sla: {
        title: 'SLA policy',
        policy: 'VIP customers',
        rows: [
          { label: 'First reply', value: '10 min' },
          { label: 'Resolution', value: '4 h' },
        ],
        hours: 'Counts business hours only',
        overdue: '2 overdue',
      },
      roles: {
        title: 'Custom role',
        role: 'Front desk',
        permissions: [
          { label: 'Reply in the inbox', on: true },
          { label: 'Manage quick replies', on: true },
          { label: 'Export customers', on: false },
          { label: 'Billing and plan', on: false },
        ],
      },
    },
    principlesTitle: 'How it is built',
    principles: [
      {
        label: 'Multi-tenant',
        text: 'One platform, many businesses: each company works in its own tenant, and its data is isolated from every other.',
      },
      {
        label: 'Real time',
        text: 'New messages, typing, presence and “already replying” signals reach every operator’s screen the moment they happen.',
      },
      {
        label: 'Grounded AI',
        text: 'Retrieval over each business’s own sources, with a handoff threshold and a monthly AI usage limit that the business sets itself.',
      },
      {
        label: 'Security',
        text: 'Role-based permissions, Google sign-in, SAML 2.0 and OIDC single sign-on, an append-only audit log, and channel keys stored encrypted.',
      },
      {
        label: 'Open',
        text: 'Webhooks, an open API with scoped keys, and ready connectors such as Google Sheets.',
      },
      {
        label: 'Three languages',
        text: 'Azerbaijani, Russian and English across the interface and the AI; each business sets its language, time zone and working hours.',
      },
    ],
    hub: {
      title: 'Connected channels and systems',
      channelsLabel: 'Messaging channels',
      systemsLabel: 'Systems and sign-in',
      core: ['Inbox', 'AI assistant', 'CRM'],
      systems: ['Click-to-WhatsApp ads', 'Google Sheets', 'Webhooks', 'Open API', 'Email', 'Google sign-in', 'SAML 2.0 / OIDC'],
    },
  },

  role: {
    eyebrow: 'Our role',
    title: 'What Aibaycan did',
    items: [
      {
        title: 'Product and UX',
        text: 'We shaped Cavably around the working day of a salon, clinic or course: the inbox first, and bookings, payments and deals one click from the conversation.',
      },
      {
        title: 'AI engineering',
        text: 'Retrieval over each business’s knowledge, intent routing, voice transcription and voice replies, photo understanding and confidence-based handoff.',
      },
      {
        title: 'Channel integrations',
        text: 'WhatsApp, Instagram, Messenger, Telegram and an embeddable web chat, with templates, broadcasts, opt-outs and comment-to-message rules.',
      },
      {
        title: 'Platform engineering',
        text: 'A multi-tenant, real-time SaaS where the inbox, bookings, payments, pipeline, campaigns, flow builder and analytics share one data model.',
      },
      {
        title: 'Enterprise security',
        text: 'Single sign-on with SAML 2.0 and OIDC, an append-only audit log, SLA policies and custom roles with fine-grained permissions.',
      },
      {
        title: 'Launch and operation',
        text: 'We localised the product and its AI in three languages, launched it at cavably.com and run it as our own platform.',
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'What Cavably runs on',
    groups: [
      { label: 'Frontend', items: ['TypeScript', 'React', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'NestJS', 'WebSockets'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis'] },
      { label: 'AI', items: ['LLM APIs', 'RAG', 'Speech-to-text'] },
    ],
  },
  faq: {
    title: 'What buyers ask about Cavably',
    items: [
      {
        q: 'Is Cavably a real product I can open today?',
        a: 'Yes. Cavably is our own platform, live at cavably.com. We designed it, built it and run it, from the AI assistant and channel integrations to the enterprise controls.',
      },
      {
        q: 'How does the AI avoid making things up?',
        a: 'It answers only from the sources the business adds: FAQs, text and website pages. When an answer is not confidently covered, or the customer asks for a person, the chat goes to an operator with the full history. The business sets how readily that happens.',
      },
      {
        q: 'Which channels and systems does it connect?',
        a: 'WhatsApp, Instagram, Messenger, Telegram and a web chat widget on the business’s site, plus click-to-WhatsApp ads, Google Sheets, webhooks, an open API, Google sign-in and SAML 2.0 or OIDC single sign-on.',
      },
      {
        q: 'Does it work in Azerbaijani?',
        a: 'Yes. Azerbaijani is the default language, and the full interface and the AI assistant also work in Russian and English.',
      },
      {
        q: 'Can you build an AI assistant or messaging CRM like this for our company?',
        a: 'Yes. We build the same pieces for other businesses: knowledge-base AI with handoff, voice and photo understanding, WhatsApp and Instagram integrations, bookings, pipelines and no-code automations, either inside your existing system or as a new product.',
      },
    ],
  },
  railLabels: {
    challenge: 'Challenge',
    inbox: 'Inbox',
    ai: 'AI assistant',
    bookings: 'Bookings',
    growth: 'Deals and campaigns',
    flows: 'Flow builder',
    analytics: 'Analytics',
    engineering: 'Engineering',
  },
  sampleDataNote: 'Names and figures on screens are sample data.',
  mockupAriaLabel: 'Illustrative Cavably screen with sample data',
} satisfies CaseBase;

export type CavablyCopy = typeof en;
export default en;
