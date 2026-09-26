// eTəhsil case study (/[locale]/projects/etehsil-az), EN. Ported from Atlas `src/i18n/en/cases/etehsil.ts`.
// Type source for the case: AZ/RU are typed `EtehsilCopy`. Mockup data is obviously fictional (Demo Academy, first
// names with an initial) and every figure on a screen is sample data.
import type { CaseBase } from '../../types';

const en = {
  seo: {
    title: 'eTəhsil: Education Centre Management Software',
    description:
      'Education centre management software we built and run: eTəhsil schedules lessons, tracks attendance and debts, fills contracts, builds exams, informs parents.',
  },
  h1: 'Education centre management software for course centres and tutors',
  hero: {
    eyebrow: 'EdTech · Multi-tenant SaaS',
    title: 'The whole education centre on one screen',
    accent: 'on one screen',
    lead: 'We designed, built and run eTəhsil, our SaaS platform for education centres and private tutors. Schedules, attendance, payments and debts, contracts, exams, parents and payroll work as one system in Azerbaijani, English and Russian.',
    primaryCta: 'Discuss a similar project',
  },
  facts: { platforms: 'Web · PWA', languages: 'AZ · EN · RU' },

  heroScreen: {
    label:
      'Illustrative eTəhsil screen with sample data: the week timetable of Demo Academy, an overdue debt card, a saved attendance record and a running exam',
    url: 'etehsil.az',
    centre: 'Demo Academy',
    view: 'This week',
    now: 'Now',
    nav: ['Dashboard', 'Schedule', 'Attendance', 'Cash desk', 'Contracts', 'Exams', 'Finance'],
    rooms: ['Room 1', 'Room 2', 'Room 3'],
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    times: ['09:00', '10:30', '12:00', '14:00', '15:30'],
    groups: ['English A2', 'IELTS B2', 'Math 11', 'SAT Math', 'Coding Kids', 'Logic', 'Russian B1'],
    debt: { label: 'Overdue debt', value: '960 ₼', meta: '3 students' },
    attendance: { label: 'Attendance saved', value: '11/12', meta: 'IELTS B2 · Room 2' },
    exam: { label: 'Exam running', value: '42:18', meta: 'Variant B' },
    toasts: ['Reminder ready · 3 students', 'Contract DA-2026-0142 generated', 'Payout approved · Leyla K.'],
  },

  challenge: {
    id: 'challenge' as const,
    km: '07:45',
    eyebrow: 'The challenge',
    title: 'A centre that runs on notebooks, spreadsheets and group chats',
    accent: 'notebooks, spreadsheets and group chats',
    lead: 'Before the first lesson, the administrator is already juggling a paper register, a timetable in one spreadsheet, a debt list in another and a WhatsApp group for every class. Everyone holds a piece of the centre and nobody sees all of it. The owner learns how the month went only after it has ended.',
    desk: {
      label:
        'Illustration of the old way of working: a paper attendance register with crossed-out marks, a timetable spreadsheet with a room clash and a parents’ group chat full of questions',
      register: {
        title: 'Register · October',
        rows: ['Aysel D.', 'Murad N.', 'Kamran T.', 'Nərmin Q.', 'Tural H.'],
        note: 'paid?? ask Monday',
      },
      sheet: {
        file: 'timetable_final_v3.xlsx',
        columns: ['Time', 'Room 1', 'Room 2'],
        rows: [
          ['09:00', 'English A2', ''],
          ['10:30', 'IELTS B2', 'IELTS B2 / Math 11 ?'],
          ['12:00', '#REF!', 'Logic'],
        ],
      },
      chat: {
        title: 'IELTS B2 · parents',
        messages: [
          'Is there a lesson today?',
          'Who still hasn’t paid for October?',
          'The teacher is ill. Moved to when?',
          'Did Aysel come on Wednesday?',
        ],
      },
    },
    pains: [
      {
        title: 'Timetables clash',
        text: 'Two groups are booked into one room, and the clash only surfaces when both walk through the same door.',
      },
      {
        title: 'Attendance copied by hand',
        text: 'Teachers tick paper registers, someone retypes them, and nobody notices the student who has missed three lessons in a row.',
      },
      {
        title: 'Debts live in someone’s memory',
        text: 'Who owes what, and for how long, is rebuilt from notes at the end of the month. Reminders go out late or never.',
      },
      {
        title: 'Contracts and exams made by hand',
        text: 'Every contract is edited in Word, student by student. Every exam is assembled question by question, and separate variants for one room are close to impossible.',
      },
      {
        title: 'Payroll on a calculator',
        text: 'Teacher pay means counting lessons group by group, while parents keep calling to ask whether their child came and what is still owed.',
      },
    ],
    flowTitle: 'eTəhsil turns it into one flow',
    flow: ['A lesson is held', 'Attendance is recorded', 'The debt recalculates', 'The parent sees it', 'The owner sees the month'],
  },

  schedule: {
    id: 'schedule' as const,
    km: '08:00',
    eyebrow: 'Schedule · Rooms',
    title: 'The course schedule builds itself and never double-books a room',
    accent: 'builds itself',
    lead: 'Enter a group’s weekly pattern once. eTəhsil turns it into every lesson of the course, each with its own date, room and teacher, and keeps the whole centre in one calendar.',
    steps: [
      {
        title: 'Set the weekly pattern',
        text: 'Days, start time, length, room and teacher, plus the number of lessons in the course. That is the only input the schedule needs.',
      },
      {
        title: 'Every lesson gets a date',
        text: 'eTəhsil generates each lesson of the course and sets the end date from the last one. Regenerating replaces only future lessons and never touches lessons already held.',
      },
      {
        title: 'Rooms stay free of clashes',
        text: 'If a lesson would put two groups in one room at the same time, eTəhsil blocks it and says when the room is taken. The owner decides at the screen, not at the classroom door.',
      },
    ],
    screen: {
      label:
        'Illustrative schedule screens with sample data: a weekly pattern form for the IELTS B2 group, an October calendar filling with numbered lessons, and a room board where a clashing Math 11 lesson is blocked and moved to another room',
      patternTitle: 'Weekly pattern',
      fields: [
        { label: 'Group', value: 'IELTS B2' },
        { label: 'Days', value: 'Mon · Wed · Fri' },
        { label: 'Start · length', value: '10:30 · 90 min' },
        { label: 'Room', value: 'Room 2' },
        { label: 'Teacher', value: 'Leyla K.' },
        { label: 'Course', value: '36 lessons' },
      ],
      generate: 'Generate lessons',
      generated: '36 lessons · ends 25 Dec',
      month: 'October',
      weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      more: '+24 lessons in November and December',
      boardTitle: 'Wednesday · rooms',
      rooms: ['Room 1', 'Room 2', 'Room 3'],
      times: ['09:00', '10:30', '12:00'],
      booked: [
        { group: 'English A2', room: 0, time: 0 },
        { group: 'Logic', room: 2, time: 2 },
        { group: 'Russian B1', room: 0, time: 2 },
      ],
      newGroup: 'IELTS B2',
      clashGroup: 'Math 11',
      clashMessage: 'Room 2 is taken at 10:30 by another group',
      resolved: 'Moved to Room 3',
    },
    features: [
      { title: 'Day, week, month and year', text: 'One calendar for the whole centre, filtered by teacher or group.' },
      { title: 'Cancel or move a lesson', text: 'The reason is recorded, and a cancelled lesson never counts against attendance.' },
      { title: 'Rooms and capacity', text: 'Every room is stored with its seats, and every lesson is tied to a room.' },
      { title: 'Changes reach people', text: 'Students and teachers get a notification when a lesson is cancelled or rescheduled.' },
    ],
  },

  attendance: {
    id: 'attendance' as const,
    km: '10:30',
    eyebrow: 'Attendance · Parent portal',
    title: 'Marked on the teacher’s phone. Seen on the parent’s.',
    accent: 'Seen on the parent’s.',
    lead: 'The teacher opens the lesson, taps All present, switches the one student who stayed home and saves. The parent sees that lesson in a portal that opens with a link and a PIN. No app to install, no account to create.',
    teacherPhone: {
      label:
        'Illustrative teacher phone with sample data: attendance for the IELTS B2 lesson, all students present except one absent, saved and locking in 24 hours',
      time: 'Today · 10:30',
      group: 'IELTS B2 · Room 2',
      topic: 'Topic: Reading · skimming',
      allPresent: 'All present',
      marks: ['P', 'A', 'E'],
      students: ['Aysel D.', 'Murad N.', 'Kamran T.', 'Nərmin Q.', 'Tural H.', 'Sevinc R.'],
      absentIndex: 3,
      save: 'Save',
      saved: 'Saved · locks in 24 h',
    },
    parentPhone: {
      label:
        'Illustrative parent portal with sample data: opened with a link and a PIN, showing attendance, active groups, a pending payment and the latest lessons',
      portal: 'Parent portal',
      centre: 'Demo Academy',
      pin: 'Enter PIN',
      access: 'Link + PIN',
      child: 'Nərmin Q.',
      tabs: ['Overview', 'Attendance', 'Payments', 'Schedule'],
      kpis: [
        { label: 'Attendance', value: '92%' },
        { label: 'Groups', value: '2' },
        { label: 'To pay', value: '1' },
      ],
      history: [
        { when: 'Wed 10:30 · IELTS B2', status: 'Absent' },
        { when: 'Mon 10:30 · IELTS B2', status: 'Present' },
        { when: 'Sat 12:00 · Math 11', status: 'Present' },
      ],
    },
    sync: 'One record · two screens',
    points: [
      {
        label: 'One tap',
        text: 'All present marks the whole group, so the teacher changes only the exceptions: absent or excused.',
      },
      {
        label: '24-hour lock',
        text: 'A teacher’s marks lock after 24 hours. From then on only the centre’s management can reopen them.',
      },
      {
        label: 'At-risk list',
        text: 'Students who miss lessons in a row gather on their own list, long before a parent has to ask.',
      },
      {
        label: 'Parent portal',
        text: 'A personal link and a PIN open one child’s attendance, payments and schedule. Read-only, and nothing else.',
      },
    ],
  },

  payments: {
    id: 'payments' as const,
    km: '12:30',
    eyebrow: 'Cash desk · Debts',
    title: 'Every debt has a name, a day count and a reminder',
    accent: 'a reminder',
    lead: 'Enrolment creates the student’s payment plan. Cash, card or transfer, full or partial, every payment lands against that plan with a receipt. The cash desk puts the latest payers on top, and a WhatsApp reminder for each of them is one click away.',
    screen: {
      label:
        'Illustrative cash desk with sample data: outstanding and overdue totals, students sorted by days overdue, three selected for WhatsApp reminders and one payment recorded with a receipt',
      title: 'Cash desk',
      kpis: [
        { label: 'Outstanding', before: '2 430 ₼', after: '2 210 ₼', meta: '8 students' },
        { label: 'Overdue', before: '1 180 ₼', after: '960 ₼', meta: '4 → 3 students' },
        { label: 'Collected in October', before: '6 880 ₼', after: '7 100 ₼', meta: 'Paid this month' },
      ],
      filters: ['Overdue', 'Due this month', 'Paid up', 'No plan'],
      rows: [
        { name: 'Murad N.', group: 'SAT Math', late: '3 payments · 64 days', amount: '420 ₼' },
        { name: 'Aysel D.', group: 'IELTS B2', late: '2 payments · 34 days', amount: '360 ₼' },
        { name: 'Kamran T.', group: 'Math 11', late: '1 payment · 12 days', amount: '180 ₼' },
        { name: 'Sevinc R.', group: 'English A2', late: '1 payment · 5 days', amount: '220 ₼' },
      ],
      selected: '3 selected',
      remind: 'WhatsApp reminder',
      paidUp: 'Paid up',
      receipt: 'Receipt Q-0419',
    },
    chat: {
      label:
        'Illustrative WhatsApp reminders with sample data: three messages about overdue payments, prepared from the cash desk for parents',
      title: 'WhatsApp · reminders',
      messages: [
        {
          to: 'Murad N. · parent',
          text: 'Hello! Demo Academy here. Murad has 3 overdue payments for SAT Math, 420 ₼ in total. You can pay at the desk or by transfer.',
        },
        { to: 'Aysel D. · parent', text: 'Hello! Demo Academy here. 2 payments for IELTS B2 are overdue, 360 ₼ in total.' },
        { to: 'Kamran T. · parent', text: 'Hello! Demo Academy here. The October payment for Math 11 is overdue, 180 ₼.' },
      ],
    },
    features: [
      { title: 'Payment plans', text: 'Monthly or in instalments, created on enrolment, with discounts where they apply.' },
      { title: 'Partial payments and advances', text: 'Pay part now or carry an advance into next month. The balance recalculates itself.' },
      {
        title: 'Receipts and a clean trail',
        text: 'Every payment gets a receipt. A voided payment keeps its history and restores the debt automatically.',
      },
      {
        title: 'Staff see what they need',
        text: 'Reception records payments and hands out receipts without ever seeing the centre’s total income.',
      },
    ],
  },

  contracts: {
    id: 'contracts' as const,
    km: '14:00',
    eyebrow: 'Contracts',
    title: 'The centre’s own contract, filled and numbered in one click',
    accent: 'filled and numbered',
    lead: 'The centre uploads the Word contract it already uses. eTəhsil recognises every placeholder, warns about any it cannot fill, and produces a numbered PDF for each student with the student’s, parent’s, course and payment details already in place.',
    screen: {
      label:
        'Illustrative contract generation with sample data: a Word template whose six placeholders are matched one by one to a numbered PDF contract for a student, which is then marked as signed',
      file: 'contract_standard.docx',
      template: 'Template',
      ready: 'Ready · 6 of 6 placeholders will be filled',
      pdf: 'PDF',
      docTitle: 'Education services contract',
      party: 'Demo Academy',
      fields: [
        { key: 'contract_no', label: 'Contract no.', value: 'DA-2026-0142' },
        { key: 'date', label: 'Date', value: '14.10.2026' },
        { key: 'student_name', label: 'Student', value: 'Aysel D.' },
        { key: 'parent_name', label: 'Parent', value: 'Rəna D.' },
        { key: 'course', label: 'Course', value: 'IELTS B2 · 36 lessons' },
        { key: 'monthly_fee', label: 'Monthly fee', value: '180 ₼' },
      ],
      signature: 'Signature',
      awaiting: 'Awaiting signature',
      signed: 'Signed',
    },
    points: [
      {
        label: 'Your own form',
        text: 'The centre keeps its legal wording. eTəhsil only fills in the data, with a default template for each language.',
      },
      {
        label: 'Placeholder check',
        text: 'Fields that would print as literal text are flagged before a single contract goes out.',
      },
      { label: 'Numbering', text: 'The system issues contract numbers in sequence, so a number never repeats.' },
      {
        label: 'Signature status',
        text: 'Awaiting, signed or expired, with contracts close to their end date brought forward.',
      },
      { label: 'Contract gap', text: 'Active students who have no contract yet appear on their own list.' },
    ],
  },

  exams: {
    id: 'exams' as const,
    km: '16:00',
    eyebrow: 'Question bank · Exams',
    title: 'A 3-step exam builder and a unique variant for every student',
    accent: 'a unique variant for every student',
    lead: 'Name the exam, choose the subjects with a question count and topic mix for each, and eTəhsil fills every variant from the centre’s question bank without repeating a question. Students sit it against a timer, answers are marked automatically wherever possible, and the results break down by topic.',
    builder: {
      label:
        'Illustrative exam template builder with sample data: three steps (basics, subjects, questions) and four variants whose question order differs',
      title: 'New exam template',
      steps: ['Basics', 'Subjects', 'Questions'],
      basics: [
        { label: 'Name', value: 'Mock exam · Entrance' },
        { label: 'Time', value: '180 min · per section' },
        { label: 'Negative marking', value: 'On' },
        { label: 'Tab switches', value: 'Recorded' },
      ],
      subjects: [
        { name: 'Mathematics', count: '25', mix: 'Test 20 · Open 5' },
        { name: 'English', count: '30', mix: 'Test 30' },
        { name: 'Logic', count: '10', mix: 'Test 10' },
      ],
      difficulty: ['Easy', 'Medium', 'Hard'],
      autofill: 'Auto-fill',
      progress: '65/65 questions',
      noRepeat: 'No repeated questions',
      variant: 'Variant',
    },
    taking: {
      label:
        'Illustrative student exam screen with sample data: a mathematics question with five options, a countdown timer and a recorded tab switch',
      section: 'Mathematics · 12 of 25',
      left: 'left',
      question: 'If 3x − 7 = 11, what is x?',
      options: ['4', '5', '6', '7', '8'],
      chosen: 2,
      tabSwitch: 'Tab switch recorded',
      autoSubmit: 'Submits itself at 00:00',
    },
    results: {
      label:
        'Illustrative exam results with sample data: a score distribution chart and the four topics with the highest share of mistakes',
      title: 'Results · Mock exam',
      distribution: 'Score distribution',
      scale: ['0', '50', '100'],
      weak: 'Weakest topics · share of mistakes',
      topics: [
        { name: 'Fractions', value: 58 },
        { name: 'Logarithms', value: 46 },
        { name: 'Reading: inference', value: 39 },
        { name: 'Word problems', value: 31 },
      ],
      summary: ['Average 61.4', 'Passed 74%'],
    },
    features: [
      {
        title: 'Question bank',
        text: 'Nine question types, from single choice and matching to numeric and essay, sorted by subject, topic and difficulty, with maths input.',
      },
      {
        title: 'Templates and variants',
        text: 'A template stores the recipe once. Each run fills fresh variants and gives them to one group or several.',
      },
      {
        title: 'Timed and guest exams',
        text: 'Total or per-section time, automatic submission, tab-switch tracking and a guest link with an optional PIN for outside candidates.',
      },
      {
        title: 'Marking and analytics',
        text: 'Closed questions are marked automatically, open answers by the teacher, and mistakes are counted by topic for the centre and for each student.',
      },
    ],
  },

  owner: {
    id: 'owner' as const,
    km: '21:00',
    eyebrow: 'Owner dashboard · Payroll',
    title: 'The owner sees the month before it ends',
    accent: 'before it ends',
    lead: 'Income arrives from the cash desk by itself. Expenses go in by category, and recurring ones repeat on their own. Teacher pay is calculated from groups and lessons held, approved by the owner and accepted by the teacher. One dashboard shows the centre for any period.',
    dashboard: {
      label:
        'Illustrative owner dashboard with sample data: monthly revenue, overdue debt, at-risk students, attendance, occupancy and gross margin gauges',
      title: 'Dashboard · October',
      periods: ['This month', '3 months', '12 months'],
      revenue: { label: 'Monthly revenue', value: '7 100 ₼', meta: '+6% on September' },
      debt: { label: 'Overdue debt', value: '960 ₼', meta: '3 students' },
      risk: { label: 'At-risk students', value: '5', meta: 'Missed lessons in a row' },
      gauges: [
        { label: 'Attendance', value: 88 },
        { label: 'Occupancy', value: 77 },
        { label: 'Gross margin', value: 41 },
      ],
    },
    pnl: {
      label:
        'Illustrative profit and loss chart with sample data: student payments and other income, minus rent, utilities, marketing and teacher payouts, give the net result',
      title: 'Profit and loss · October',
      rows: [
        { label: 'Student payments', value: 7100 },
        { label: 'Other income', value: 450 },
        { label: 'Rent', value: -1600 },
        { label: 'Utilities', value: -380 },
        { label: 'Marketing', value: -520 },
        { label: 'Teacher payouts', value: -2600 },
      ],
      net: 'Net result',
    },
    payroll: {
      label:
        'Illustrative teacher payroll with sample data: three teachers with groups, lessons held and amounts; the owner approves payouts and teachers accept them',
      title: 'Teacher payroll · October',
      columns: ['Teacher', 'Groups', 'Lessons', 'Amount', 'Status'],
      rows: [
        { name: 'Leyla K.', groups: '3', lessons: '36', amount: '1 080 ₼' },
        { name: 'Rauf M.', groups: '2', lessons: '24', amount: '840 ₼' },
        { name: 'Nigar S.', groups: '2', lessons: '20', amount: '680 ₼' },
      ],
      pending: 'Pending',
      approved: 'Approved',
      accepted: 'Accepted',
      approve: 'Approve',
    },
    features: [
      { title: 'Income and expenses', text: 'The centre’s own categories, recurring costs and side-by-side periods.' },
      {
        title: 'Teacher payroll',
        text: 'Calculated per group and lesson held. The owner approves, the teacher accepts or declines.',
      },
      {
        title: 'Reports for the accountant',
        text: 'The financial report exports to CSV and PDF, and the accountant role sees finance without student records.',
      },
      { title: 'Any period', text: 'This month, last month, the last 3, 6 or 12 months, or a custom range.' },
    ],
  },

  engineering: {
    id: 'engineering' as const,
    km: 'SaaS',
    eyebrow: 'Engineering',
    title: 'One platform for many centres, and each centre’s data stays its own',
    accent: 'stays its own',
    lead: 'eTəhsil is a multi-tenant SaaS. Every centre and every tutor works in a separate tenant, and tenant data isolation is enforced in the database itself, not only in application code. Around that core we built permissions, secure sign-in, notifications and an installable app in three languages.',
    isolation: {
      label:
        'Diagram: three sample tenants send requests into one database; each request reaches only its own tenant’s rows, and a request that reaches for another tenant is blocked',
      tenants: ['Demo Academy', 'Nümunə Kurs', 'Tutor · Leyla K.'],
      database: 'One database',
      policy: 'Isolation enforced in the database',
      blocked: 'Blocked',
    },
    principles: [
      {
        title: 'Tenant data isolation',
        text: 'Each centre’s rows are fenced off in the database, so one centre never reads another centre’s data.',
      },
      {
        title: 'Roles and permissions',
        text: 'Ready roles such as reception and accountant, custom groups down to view, add, edit and delete, and teachers limited to their own groups.',
      },
      { title: 'Secure sign-in', text: 'Two-factor authentication, Google sign-in and invitation links for staff and teachers.' },
      {
        title: 'One account, three workspaces',
        text: 'The same person moves between business, teacher and student workspaces without a second account.',
      },
      {
        title: 'Installable PWA',
        text: 'The app installs on any phone, in Azerbaijani, English or Russian, with light and dark themes.',
      },
      {
        title: 'Guarded by tests',
        text: 'Automated architecture tests check the tenant isolation and permission rules across modules.',
      },
    ],
    languages: {
      title: 'One interface · three languages',
      codes: ['AZ', 'EN', 'RU'],
      words: [
        ['Davamiyyət', 'Attendance', 'Посещаемость'],
        ['Kassa', 'Cash desk', 'Касса'],
        ['İmtahanlar', 'Exams', 'Экзамены'],
        ['Müqavilələr', 'Contracts', 'Договоры'],
      ],
    },
    integrationsTitle: 'Integrations built in',
    integrations: [
      { name: 'Payriff', note: 'Online card top-ups' },
      { name: 'Google', note: 'Sign-in with a Google account' },
      { name: 'WhatsApp', note: 'Payment reminders from the cash desk' },
      { name: 'Telegram', note: 'Notifications through a bot' },
      { name: 'Email', note: 'Invitations and notifications' },
      { name: 'Web push', note: 'Notifications in the browser and on the phone' },
    ],
  },

  role: {
    eyebrow: 'Our role',
    title: 'What Aibaycan did',
    items: [
      {
        title: 'Product and UX design',
        text: 'We mapped how centres, tutors, teachers, students and parents actually work, and designed one product with the right screen for each of them.',
      },
      {
        title: 'Multi-tenant architecture',
        text: 'We designed the tenant model, roles and permissions, and data isolation enforced in the database from the first line of code.',
      },
      {
        title: 'Full-stack engineering',
        text: 'We built the API, the installable web app, the public website, the contract engine from DOCX templates and the exam engine with variants and analytics.',
      },
      {
        title: 'Integrations',
        text: 'We connected Payriff online card top-ups, Google sign-in, WhatsApp reminders, and Telegram, email and web push notifications.',
      },
      {
        title: 'Launch and operation',
        text: 'We launched eTəhsil as a live SaaS product and run it ourselves: releases, support and new modules.',
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Built on a modern TypeScript stack',
    groups: [
      { label: 'Web app', items: ['TypeScript', 'React', 'PWA'] },
      { label: 'Website', items: ['Next.js'] },
      { label: 'API', items: ['NestJS', 'TypeScript'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis'] },
    ],
  },
  faq: {
    title: 'What buyers ask about eTəhsil',
    items: [
      {
        q: 'Is eTəhsil a real, working product?',
        a: 'Yes. eTəhsil is our own product and it is live: the website and the app are online at etehsil.az. We designed and built it, and we run it.',
      },
      {
        q: 'How is each centre’s data kept separate?',
        a: 'Every centre is its own tenant, and isolation is enforced in the database, not only in application code. Inside a centre, roles and permissions decide what each person sees: a teacher sees only their own groups, reception never sees total income, and a parent sees one child.',
      },
      {
        q: 'Do parents and teachers have to install anything?',
        a: 'No. Parents open a personal link and enter a PIN. Teachers, staff and students use the web app, which installs on a phone as a PWA in Azerbaijani, English or Russian.',
      },
      {
        q: 'Which local services does it connect to?',
        a: 'Payriff for online card top-ups, Google sign-in, WhatsApp for payment reminders, and Telegram, email and web push for notifications.',
      },
      {
        q: 'We need a platform like this for another sector. Where do we start?',
        a: 'With your processes. The foundations of eTəhsil carry straight over to other vertical SaaS products and internal systems: multi-tenant architecture, roles and permissions, documents from templates, payments, notifications and dashboards. Tell us how your work runs today and we come back with a concrete plan.',
      },
    ],
  },
  railLabels: {
    challenge: 'Challenge',
    schedule: 'Schedule',
    attendance: 'Attendance',
    payments: 'Payments',
    contracts: 'Contracts',
    exams: 'Exams',
    owner: 'Owner',
    engineering: 'Engineering',
  },
  sampleDataNote: 'Names and figures on screens are sample data.',
  mockupAriaLabel: 'Illustrative eTəhsil screen with sample data',
} satisfies CaseBase;

export type EtehsilCopy = typeof en;
export default en;
