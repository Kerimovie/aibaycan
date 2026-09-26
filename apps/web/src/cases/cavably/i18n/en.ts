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
    title: 'Cavably: WhatsApp & Instagram CRM with an AI Assistant',
    description:
      'Cavably is the AI CRM we built for salons and clinics: one inbox for WhatsApp, Instagram, Messenger and Telegram, AI replies, online booking and debt reminders.',
  },
  h1: 'AI messaging CRM for salons and clinics: WhatsApp and Instagram together',
  hero: {
    eyebrow: 'CRM · AI SaaS',
    title: 'Five channels, one screen, replies at midnight.',
    accent: 'replies at midnight.',
    lead: 'We designed, built and still operate Cavably, an AI-first CRM for clinics, salons, courses and similar service businesses. Whatever channel a customer writes from, the message reaches a single inbox; the AI assistant replies using what the business has taught it; and on that same screen the chat becomes a booking, a payment or a deal.',
    primaryCta: 'Start a project like this',
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
    eyebrow: 'The problem',
    title: 'Messages arrive at 23:40. The admin arrives at ten.',
    accent: 'The admin arrives at ten.',
    lead: 'For a service business, the messengers are the shop window. Questions, booking requests and “I’ll pay tomorrow” promises come in through WhatsApp, Instagram, Telegram and the website, day and night, spread across several phones. Whether a customer hears back is down to luck: who happens to have which phone.',
    clock: {
      ariaLabel:
        'Sample chart of one day of messages on five channels: many arrive in the evening and at night, outside opening hours, and wait until morning',
      title: 'A sample studio’s messages over one day',
      hours: 'Opening hours',
      answered: 'Answered while open',
      waiting: 'Waits until morning',
      highlight: 'Nərmin · 23:40',
    },
    pains: [
      {
        title: 'Seen by no one',
        text: 'An Instagram booking request lands at 23:40. When the studio opens in the morning, the customer has already gone to a place that replied.',
      },
      {
        title: 'Two customers, one slot',
        text: 'On WhatsApp an admin confirms 15:00; on the phone a colleague gives away the same time. Both customers turn up.',
      },
      {
        title: 'Debts kept on paper',
        text: 'Deposits paid and balances left over from the last visit are tracked in someone’s head, a paper notebook or a spreadsheet that stopped being updated.',
      },
      {
        title: '“How much?” for the fiftieth time',
        text: 'All day, the staff who should be looking after customers retype the prices, the address, parking tips and opening hours by hand.',
      },
      {
        title: 'Marketing in the dark',
        text: 'Once the chat scrolls out of view, nobody can tell which post, ad or link brought that customer in.',
      },
    ],
  },

  inbox: {
    id: 'inbox' as const,
    km: '23:40',
    eyebrow: 'One inbox for the team',
    title: 'Five channels, one shared inbox',
    accent: 'one shared inbox',
    lead: 'Chats from WhatsApp, Instagram, Messenger, Telegram and the website widget all arrive in the same team inbox. Each one carries an assigned owner, its complete history and the customer’s profile, and everyone can see live which colleague is handling which chat.',
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
        title: 'Load-aware routing',
        text: 'Assignment rules pass each new chat to a suitable operator and skip anyone who has hit their limit, so one person is not buried while another sits idle.',
      },
      {
        title: 'One reply, not two',
        text: 'As soon as a colleague opens the same conversation, you see that they are typing or already replying.',
      },
      {
        title: 'Saved replies on “/”',
        text: 'Type a slash to insert a saved answer; its variables are filled with this customer’s details.',
      },
      {
        title: 'Automatic follow-ups',
        text: 'If a chat goes unanswered, a nudge is sent: free-form text while WhatsApp’s 24-hour window is open, an approved template once it has closed.',
      },
      {
        title: 'From comment to DM',
        text: 'When someone leaves a keyword under an Instagram post, they get a public reply to the comment and the details in a private message.',
      },
      {
        title: 'A source on every lead',
        text: 'Every new chat is labelled with where it came from: a tracked link, a QR code or a click-to-WhatsApp ad.',
      },
    ],
  },

  ai: {
    id: 'ai' as const,
    km: '23:41',
    eyebrow: 'AI assistant',
    title: 'It knows the prices, and it knows its limits',
    accent: 'knows its limits',
    lead: 'Replies go out instantly in Azerbaijani, Russian or English. The assistant sticks to what the business has taught it, makes sense of voice notes and photos, and brings in a human as soon as the situation calls for one.',
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
        title: 'Replies built on the business’s own material',
        text: 'The team uploads FAQs, free-form notes and pages from its website. Cavably chunks and indexes this material automatically, and every reply the assistant gives is based on it.',
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
        title: 'Listens to voice notes',
        text: 'Plenty of customers would rather record than type. The assistant turns the recording into text, shows that transcript in the chat and replies, and it can answer with a voice note too.',
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
        title: 'Reads photos',
        text: 'When a customer sends a screenshot or answers a Story, the assistant works out what the image shows and looks up the nearest item in the business’s catalogue.',
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
        title: 'Knows when to step aside',
        text: 'If the knowledge base cannot answer with confidence, as with a complaint or a health concern, a person takes over and sees the entire history. How quickly the assistant steps aside is a setting the business controls.',
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
    eyebrow: 'Booking and payment',
    title: 'Agreed in the chat. Booked, reminded, paid.',
    accent: 'Booked, reminded, paid.',
    lead: 'Once a time is agreed in the chat, it goes directly into the calendar of the right specialist. Double bookings are blocked up front, confirmations and reminders are sent automatically, and any money owed sits right beside the appointment.',
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
        title: 'Clashes blocked up front',
        text: 'Every specialist gets a separate calendar, and a slot that is already taken is rejected before anyone can confirm it.',
      },
      {
        title: 'Automatic confirmations',
        text: 'Booking a visit sends the customer an instant confirmation, and a reminder follows ahead of the appointment.',
      },
      {
        title: 'Payments beside the booking',
        text: 'Payments and balances belong to the customer record, so before a visit begins the admin already knows who owes how much.',
      },
      {
        title: 'Reminders on the due date',
        text: 'Enter a payment with its due date; on that day a courteous reminder goes out, and nobody has to keep it in mind.',
      },
    ],
  },

  growth: {
    id: 'growth' as const,
    km: 'Day 60',
    eyebrow: 'Deals, broadcasts and loyalty',
    title: 'Chats turn into sales. Regulars keep returning.',
    accent: 'Regulars keep returning.',
    lead: 'Bigger purchases, such as a course, a package of treatments or a corporate order, travel through a sales pipeline that begins inside the chat. Regulars earn points, and customers who have drifted away get a timely message rather than being quietly forgotten.',
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
        title: 'Deals that start in the chat',
        text: 'Each deal is opened from a conversation and remains tied to it. Stages, reasons for winning or losing, pipeline value and the forecast are all a click away.',
      },
      {
        title: 'Consent-first campaigns',
        text: 'Broadcasts reach only customers who agreed to receive them, go out as approved WhatsApp templates, and automatically remove anyone who replies STOP.',
      },
      {
        title: 'Points and win-back',
        text: 'Each visit earns points, and when a regular stops coming, win-back messages go out automatically.',
      },
    ],
  },

  flows: {
    id: 'flows' as const,
    km: '23:41',
    eyebrow: 'No-code automation',
    title: 'Draw the automation. Skip the code.',
    accent: 'Skip the code.',
    lead: 'Owners and managers lay out their own chat logic on a visual canvas, with triggers, questions, conditions, delays, AI steps and handoffs to people. Before a flow goes live, a built-in simulator plays a test message through it.',
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
        title: 'All the pieces you need',
        text: 'Text with buttons, media, lists, WhatsApp templates, questions that store answers in variables, if/else logic, A/B splits, waits and branches for business hours.',
      },
      {
        title: 'AI as a step',
        text: 'An AI step works out what the customer is asking for and chooses the branch, replies from the knowledge base, or leaves the conversation with the assistant.',
      },
      {
        title: 'Linked to everything else',
        text: 'Nodes on the same canvas cover CRM actions, HTTP requests, new Google Sheets rows, emails, handing over to an operator and jumps to other flows.',
      },
    ],
  },

  analytics: {
    id: 'analytics' as const,
    km: 'Mon 09:00',
    eyebrow: 'Analytics',
    title: 'Last week at a glance, first thing Monday',
    accent: 'at a glance',
    lead: 'The owner can trace how chats become bookings and revenue: the lead funnel, where revenue is heading, which channel brings in which customers, how quickly the team responds, and how happy customers are once a chat ends.',
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
        title: 'First message to payment',
        text: 'The funnel tracks every lead from its opening message through the booking to the payment.',
      },
      {
        title: 'A rating after each chat',
        text: 'Closing a conversation sends the customer a quick rating request. A poor score notifies the manager and reopens the chat.',
      },
      {
        title: 'Compare channels and sources',
        text: 'Find out which channel, link, QR code or ad generates conversations, and how fast each one gets a reply.',
      },
    ],
  },

  engineering: {
    id: 'engineering' as const,
    eyebrow: 'Architecture and security',
    title: 'Small-business CRM, enterprise-grade controls',
    accent: 'enterprise-grade controls',
    lead: 'Cavably is a multi-tenant SaaS designed to pass an IT department’s review while still suiting a salon owner. Right beside the inbox sit custom roles, SLA policies, single sign-on and an audit log that can only be appended to.',
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
    principlesTitle: 'Under the hood',
    principles: [
      {
        label: 'Multi-tenant',
        text: 'Many businesses share the platform, yet each company has a tenant of its own, and its data stays separated from everyone else’s.',
      },
      {
        label: 'Real time',
        text: 'New messages, typing indicators, presence and “already replying” flags show up on every operator’s screen instantly.',
      },
      {
        label: 'Grounded AI',
        text: 'The AI retrieves from each business’s own sources, and the business itself sets the handoff threshold and a monthly cap on AI usage.',
      },
      {
        label: 'Security',
        text: 'Role-based access, sign-in with Google, SSO via SAML 2.0 or OIDC, encrypted storage of channel keys and an audit log that cannot be edited.',
      },
      {
        label: 'Open',
        text: 'Webhooks, an open API whose keys are scoped, and ready-made connectors like Google Sheets.',
      },
      {
        label: 'Three languages',
        text: 'The interface and the AI both speak Azerbaijani, Russian and English, and every business chooses its own language, time zone and working hours.',
      },
    ],
    hub: {
      title: 'Channels and systems it connects to',
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
        title: 'Product design and UX',
        text: 'We organised the product around how a salon, clinic or course actually spends its day: the inbox at the centre, with bookings, payments and deals a single click from any chat.',
      },
      {
        title: 'AI engineering',
        text: 'Retrieval over every business’s knowledge, routing by intent, voice-note transcription and spoken replies, image understanding, and handoff driven by confidence.',
      },
      {
        title: 'Channel integrations',
        text: 'Instagram, WhatsApp, Messenger and Telegram, plus a web chat that embeds on any site, along with templates, broadcasts, opt-outs and rules that turn comments into messages.',
      },
      {
        title: 'Platform engineering',
        text: 'A real-time, multi-tenant SaaS where one data model sits under everything: inbox and bookings, payments and pipeline, campaigns, flows and analytics.',
      },
      {
        title: 'Enterprise-grade security',
        text: 'Custom roles with granular permissions, SLA policies, an append-only audit log, and single sign-on via SAML 2.0 or OIDC.',
      },
      {
        title: 'Launch and operations',
        text: 'We localised both the product and its AI for three languages, put it live on cavably.com, and operate it as a platform of our own.',
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'The technology behind Cavably',
    groups: [
      { label: 'Frontend', items: ['TypeScript', 'React', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'NestJS', 'WebSockets'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis'] },
      { label: 'AI', items: ['LLM APIs', 'RAG', 'Speech-to-text'] },
    ],
  },
  faq: {
    title: 'Questions about Cavably',
    items: [
      {
        q: 'Can I see Cavably live right now?',
        a: 'Yes. It is our own platform, running at cavably.com. Everything in it, the AI assistant, the channel integrations and the enterprise controls alike, was designed and built by us, and we operate it ourselves.',
      },
      {
        q: 'What stops the AI from inventing answers?',
        a: 'The assistant uses only the material the business supplies: FAQs, text and website pages. If it cannot answer with confidence, or the customer wants a human, an operator takes over the chat with the complete history. The business decides how quickly that handoff kicks in.',
      },
      {
        q: 'What does Cavably integrate with?',
        a: 'For messaging: WhatsApp, Instagram, Messenger and Telegram, plus a web chat widget for the business’s website. It also works with Google Sheets, webhooks, an open API and click-to-WhatsApp ads, and supports Google sign-in and single sign-on over SAML 2.0 or OIDC.',
      },
      {
        q: 'Is Azerbaijani supported?',
        a: 'Yes, it is the default. The whole interface and the AI assistant are also available in Russian and English.',
      },
      {
        q: 'Could you build a similar AI assistant or messaging CRM for us?',
        a: 'Yes. We build these same components for other companies too: a knowledge-base AI that hands off to people, voice and image understanding, WhatsApp and Instagram integrations, booking, sales pipelines and no-code automation, either added to the system you already have or delivered as a new product.',
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
  sampleDataNote: 'All names and numbers shown on the screens are sample data.',
  mockupAriaLabel: 'Illustrative Cavably screen with sample data',
} satisfies CaseBase;

export type CavablyCopy = typeof en;
export default en;
