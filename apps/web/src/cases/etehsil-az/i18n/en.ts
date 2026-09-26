// eTəhsil case study (/[locale]/projects/etehsil-az), EN. Prose written for Aibaycan (not shared with other sites);
// mockup data kept in sync with the scenes. Type source for the case: AZ/RU are typed `EtehsilCopy`. Mockup data is
// obviously fictional (Demo Academy, first names with an initial) and every figure on a screen is sample data.
import type { CaseBase } from '../../types';

const en = {
  seo: {
    title: 'eTəhsil: Learning Centre & Tutoring Management System',
    description:
      'eTəhsil is the SaaS Aibaycan built and operates for course centres and tutors: auto-scheduling, attendance, debt tracking, contracts, exams and a parent portal.',
  },
  h1: 'Software that runs course centres and private tutoring',
  hero: {
    eyebrow: 'Multi-tenant SaaS · EdTech',
    title: 'A course centre, run from a single screen',
    accent: 'a single screen',
    lead: 'eTəhsil is a SaaS platform of ours for course centres and independent tutors, and we took it from design through build to day-to-day operation. It joins timetables, attendance, fees and debts, contracts, exams, parent access and teacher pay into one system, available in Azerbaijani, English and Russian.',
    primaryCta: 'Plan a project like this',
  },
  facts: { platforms: 'Web · PWA', languages: 'AZ · EN · RU' },

  heroScreen: {
    label:
      'Sample-data mockup of eTəhsil: Demo Academy’s weekly timetable, a card for overdue debt, a stored attendance record and an exam in progress',
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
    eyebrow: 'The starting point',
    title: 'Held together by paper, spreadsheets and chat groups',
    accent: 'paper, spreadsheets and chat groups',
    lead: 'The admin’s day starts long before class, switching between a paper register, one spreadsheet for the timetable, another for who owes money, and a separate WhatsApp group per class. Each person holds a fragment of the centre; no one has the full picture. Month-end results reach the owner only when the month is already history.',
    desk: {
      label:
        'The old routine, illustrated: a paper attendance register full of crossings-out, a timetable spreadsheet with two groups in one room, and a parents’ chat overflowing with questions',
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
        title: 'Double-booked rooms',
        text: 'Two groups end up with the same room, and nobody finds out until both arrive at the same door.',
      },
      {
        title: 'Registers retyped by hand',
        text: 'Marks go on paper, then someone types them up again, and a student absent for three lessons running slips by unnoticed.',
      },
      {
        title: 'Debts tracked from memory',
        text: 'At month end, someone pieces together from scattered notes who owes how much and since when. Reminders are late, if they go out at all.',
      },
      {
        title: 'Contracts and exams built manually',
        text: 'Each contract is a Word file edited for one student at a time. Exams are put together one question after another, and giving one room several different variants is barely feasible.',
      },
      {
        title: 'Payroll by calculator',
        text: 'Working out teacher pay means tallying lessons for each group, and meanwhile parents phone in to ask whether their child attended and how much is left to pay.',
      },
    ],
    flowTitle: 'With eTəhsil, it becomes a single flow',
    flow: ['The lesson takes place', 'Attendance gets marked', 'The balance updates', 'Parents see it', 'The owner sees the results'],
  },

  schedule: {
    id: 'schedule' as const,
    km: '08:00',
    eyebrow: 'Timetable · Rooms',
    title: 'A full course timetable generated for you, with no room clashes',
    accent: 'generated for you',
    lead: 'A group’s weekly rhythm is entered just once. From it, eTəhsil creates every lesson in the course, with a date, room and teacher attached to each, and places the entire centre on a shared calendar.',
    steps: [
      {
        title: 'Describe the week',
        text: 'Which days, what time, how long, which room and teacher, and how many lessons the course has. Nothing else is required to build the schedule.',
      },
      {
        title: 'Dates for every lesson',
        text: 'All lessons of the course are created, and the course end date follows from the final one. If you regenerate, only upcoming lessons are replaced; past ones stay exactly as they were.',
      },
      {
        title: 'No two groups in one room',
        text: 'Should a lesson place two groups in the same room at the same hour, eTəhsil stops it and shows when that room is occupied. The owner settles it on screen, not outside the classroom.',
      },
    ],
    screen: {
      label:
        'Sample-data timetable mockups: the weekly pattern form for IELTS B2, an October calendar filling up with numbered lessons, and a room board that blocks a clashing Math 11 lesson and sends it to a free room',
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
      { title: 'Day to year views', text: 'A single calendar covers the centre, with filters for each teacher or group.' },
      { title: 'Cancellations and moves', text: 'Each change keeps its reason, and cancelled lessons are never counted as absences.' },
      { title: 'Rooms with seat counts', text: 'Rooms are saved along with their capacity, and each lesson belongs to a room.' },
      { title: 'Everyone is told', text: 'When a lesson is cancelled or moved, students and teachers receive a notification.' },
    ],
  },

  attendance: {
    id: 'attendance' as const,
    km: '10:30',
    eyebrow: 'Attendance · Parents’ portal',
    title: 'One tap by the teacher, visible to the parent.',
    accent: 'visible to the parent.',
    lead: 'In class, the teacher opens the lesson, hits All present, flips the mark for the one student who stayed at home, and saves. Parents find that same lesson in a portal they reach through a link plus a PIN, with nothing to download and no sign-up.',
    teacherPhone: {
      label:
        'Sample-data mockup of a teacher’s phone: IELTS B2 attendance with everyone present but one student, saved, with a 24-hour lock',
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
        'Sample-data mockup of the parent portal, reached by link and PIN: attendance, active groups, one payment due and recent lessons',
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
    sync: 'Same record · both screens',
    points: [
      {
        label: 'Single tap',
        text: 'All present fills in the whole group, so the teacher adjusts only the exceptions: absent or excused.',
      },
      {
        label: '24-hour lock',
        text: 'Once 24 hours pass, the teacher can no longer change the marks; only centre management can unlock them.',
      },
      {
        label: 'At-risk list',
        text: 'Anyone missing lessons back to back lands on a separate list well before a parent needs to ask.',
      },
      {
        label: 'Parent portal',
        text: 'One personal link and a PIN show a single child’s attendance, payments and timetable. View-only, with nothing beyond that.',
      },
    ],
  },

  payments: {
    id: 'payments' as const,
    km: '12:30',
    eyebrow: 'Cash desk · Debts',
    title: 'Who owes, how long, and a reminder ready to send',
    accent: 'a reminder ready to send',
    lead: 'Enrolling a student sets up their payment plan. Whether it comes as cash, card or bank transfer, in full or in part, each payment is booked against that plan and issued a receipt. The cash desk lists the longest-overdue payers first, and a WhatsApp reminder to any of them takes a single click.',
    screen: {
      label:
        'Sample-data cash desk mockup: total and overdue balances, students ranked by days late, three picked for WhatsApp reminders, and a payment recorded with its receipt',
      title: 'Cash desk',
      kpis: [
        { label: 'Outstanding', before: '2 430 ₼', after: '2 210 ₼', meta: '8 students' },
        { label: 'Overdue', before: '1 180 ₼', after: '960 ₼', meta: '4 → 3 students' },
        { label: 'Collected in October', before: '6 880 ₼', after: '7 100 ₼', meta: 'Paid this month' },
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
        'Sample-data WhatsApp mockup: three overdue-payment reminders to parents, prepared straight from the cash desk',
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
      { title: 'Payment plans', text: 'Set up at enrolment, monthly or in instalments, with any discounts that apply.' },
      { title: 'Part-payments and prepayment', text: 'Pay a portion today, or move an advance into the next month. The balance updates on its own.' },
      {
        title: 'Receipts and full history',
        text: 'A receipt is issued for each payment. Voiding one keeps it in the history and puts the debt back automatically.',
      },
      {
        title: 'Access by role',
        text: 'Front-desk staff take payments and hand over receipts, yet the centre’s total income stays hidden from them.',
      },
    ],
  },

  contracts: {
    id: 'contracts' as const,
    km: '14:00',
    eyebrow: 'Contracts',
    title: 'The contract you already use, auto-filled and numbered',
    accent: 'auto-filled and numbered',
    lead: 'A centre uploads the Word contract it works with today. eTəhsil picks up each placeholder, flags those it has no data for, and outputs a numbered PDF per student with the student, parent, course and payment details filled in.',
    screen: {
      label:
        'Sample-data contract mockup: six placeholders in a Word template are matched in turn to a student’s numbered PDF contract, which is then marked as signed',
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
        label: 'Your wording',
        text: 'Legal text stays exactly as the centre wrote it; eTəhsil only inserts the data. Each language has a default template.',
      },
      {
        label: 'Placeholder check',
        text: 'Any field that would appear as raw placeholder text is flagged before the first contract is issued.',
      },
      { label: 'Numbering', text: 'Numbers are assigned by the system in order, so no two contracts ever share one.' },
      {
        label: 'Signature status',
        text: 'Awaiting, signed or expired, and contracts nearing their end date move to the top.',
      },
      { label: 'Missing contracts', text: 'A separate list shows active students who still have no contract.' },
    ],
  },

  exams: {
    id: 'exams' as const,
    km: '16:00',
    eyebrow: 'Question bank · Exams',
    title: 'Build an exam in 3 steps, give each student their own variant',
    accent: 'their own variant',
    lead: 'Give the exam a name, pick the subjects, and set how many questions each one takes and from which topics. eTəhsil then draws every variant from the centre’s question bank, with no question used twice. Students work against a timer, anything that can be auto-marked is, and results are split out by topic.',
    builder: {
      label:
        'Sample-data mockup of the exam template builder: its steps for basics, subjects and questions, plus four variants with the questions shuffled differently',
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
        'Sample-data student exam screen: a maths question with five answer options, a countdown timer and a logged tab switch',
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
        'Sample-data exam results: a chart of how scores are spread and the four topics where most mistakes were made',
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
        text: 'Nine question types, essays and numeric answers among them alongside single choice and matching, organised by subject, topic and difficulty, with support for maths notation.',
      },
      {
        title: 'Templates and variants',
        text: 'The template holds the recipe. Every run produces new variants and assigns them to one group or to several.',
      },
      {
        title: 'Timed exams and guest access',
        text: 'A limit for the whole exam or per section, tab-switch tracking, submission that happens by itself when time runs out, and a guest link for external candidates, with a PIN if wanted.',
      },
      {
        title: 'Marking and analytics',
        text: 'The system marks closed questions, teachers mark open ones, and errors are tallied by topic for the whole centre and for each student.',
      },
    ],
  },

  owner: {
    id: 'owner' as const,
    km: '21:00',
    eyebrow: 'Owner dashboard · Payroll',
    title: 'The month’s results, while it is still running',
    accent: 'while it is still running',
    lead: 'Income flows in from the cash desk automatically. Expenses are logged by category, and recurring costs repeat without re-entry. Teacher pay is worked out from groups and lessons held; the owner approves it and the teacher accepts. A single dashboard shows the centre across whatever period you pick.',
    dashboard: {
      label:
        'Sample-data owner dashboard mockup: monthly revenue, overdue debt, students at risk, and gauges for attendance, occupancy and gross margin',
      title: 'Dashboard · October',
      periods: ['This month', '3 months', '12 months'],
      revenue: { label: 'Monthly revenue', value: '7 100 ₼', meta: '+6% on September' },
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
        'Sample-data profit and loss chart: student payments plus other income, less rent, utilities, marketing and teacher payouts, leaving the net result',
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
        'Sample-data teacher payroll mockup: three teachers with their groups, lessons held and amounts; the owner signs off each payout and the teacher then accepts it',
      title: 'Teacher payroll · October',
      columns: ['Teacher', 'Groups', 'Lessons', 'Amount', 'Status'],
      rows: [
        { name: 'Leyla K.', groups: '3', lessons: '36', amount: '1 080 ₼' },
        { name: 'Rauf M.', groups: '2', lessons: '24', amount: '840 ₼' },
        { name: 'Nigar S.', groups: '2', lessons: '20', amount: '680 ₼' },
      ],
      pending: 'Pending',
      approved: 'Approved',
      accepted: 'Accepted',
      approve: 'Approve',
    },
    features: [
      { title: 'Income and spending', text: 'Categories the centre defines itself, recurring expenses, and period-over-period comparison.' },
      {
        title: 'Teacher pay',
        text: 'Based on groups and lessons actually held. The owner signs off; the teacher accepts or rejects.',
      },
      {
        title: 'Accountant-ready reports',
        text: 'Export the financial report to CSV or PDF. The accountant role gets the finances without seeing student records.',
      },
      { title: 'Flexible periods', text: 'This month or last, the past 3, 6 or 12 months, or dates you set yourself.' },
    ],
  },

  engineering: {
    id: 'engineering' as const,
    km: 'SaaS',
    eyebrow: 'Under the hood',
    title: 'Many centres on one platform, none able to see another’s data',
    accent: 'none able to see another’s data',
    lead: 'eTəhsil runs as a multi-tenant SaaS: each centre and each tutor gets a separate tenant, and the database itself, not just the application code, keeps tenant data apart. On top of that foundation we added permissions, secure login, notifications and a three-language app you can install.',
    isolation: {
      label:
        'Diagram: three sample tenants query a single database; every request is limited to its own tenant’s rows, and one that reaches into another tenant is blocked',
      tenants: ['Demo Academy', 'Nümunə Kurs', 'Tutor · Leyla K.'],
      database: 'One database',
      policy: 'Isolation enforced in the database',
      blocked: 'Blocked',
    },
    principles: [
      {
        title: 'Tenant isolation',
        text: 'Rows belonging to each centre are walled off at database level, so no centre can ever read another’s data.',
      },
      {
        title: 'Roles and permissions',
        text: 'Built-in roles like reception and accountant, custom permission groups as fine-grained as view, add, edit and delete, and teachers who see only their own groups.',
      },
      { title: 'Secure login', text: 'Two-factor authentication, sign-in with Google, and invite links for staff and teachers.' },
      {
        title: 'One login, three workspaces',
        text: 'A single person can switch between the business, teacher and student workspaces without opening a second account.',
      },
      {
        title: 'Installable PWA',
        text: 'Install it on any phone and use it in Azerbaijani, English or Russian, in a light or a dark theme.',
      },
      {
        title: 'Covered by tests',
        text: 'Automated architecture tests verify tenant isolation and permission rules in every module.',
      },
    ],
    languages: {
      title: 'Same interface · three languages',
      codes: ['AZ', 'EN', 'RU'],
      words: [
        ['Davamiyyət', 'Attendance', 'Посещаемость'],
        ['Kassa', 'Cash desk', 'Касса'],
        ['İmtahanlar', 'Exams', 'Экзамены'],
        ['Müqavilələr', 'Contracts', 'Договоры'],
      ],
    },
    integrationsTitle: 'Built-in integrations',
    integrations: [
      { name: 'Payriff', note: 'Top up online by card' },
      { name: 'Google', note: 'Log in with a Google account' },
      { name: 'WhatsApp', note: 'Payment reminders sent from the cash desk' },
      { name: 'Telegram', note: 'Notifications via a bot' },
      { name: 'Email', note: 'Invites and notifications' },
      { name: 'Web push', note: 'Browser and phone notifications' },
    ],
  },

  role: {
    eyebrow: 'Our part',
    title: 'What Aibaycan delivered',
    items: [
      {
        title: 'Product and UX design',
        text: 'We studied the real routines of centres, tutors, teachers, students and parents, then shaped one product that gives each of them the screen they need.',
      },
      {
        title: 'Multi-tenant architecture',
        text: 'From the very first line of code we planned the tenant model, the roles and permissions, and data isolation enforced by the database.',
      },
      {
        title: 'Full-stack development',
        text: 'We wrote the API, a web app that installs on phones, the public site, a contract engine working from DOCX templates, and an exam engine with variants and analytics.',
      },
      {
        title: 'Integrations',
        text: 'We wired in Payriff card top-ups, Google sign-in, WhatsApp reminders, and notifications over Telegram, email and web push.',
      },
      {
        title: 'Launch and operations',
        text: 'We took eTəhsil live as a SaaS product and operate it ourselves, shipping releases, handling support and adding modules.',
      },
    ],
  },
  stack: {
    eyebrow: 'Technology',
    title: 'A modern TypeScript stack underneath',
    groups: [
      { label: 'Web app', items: ['TypeScript', 'React', 'PWA'] },
      { label: 'Public site', items: ['Next.js'] },
      { label: 'API', items: ['NestJS', 'TypeScript'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis'] },
    ],
  },
  faq: {
    title: 'eTəhsil: common questions',
    items: [
      {
        q: 'Is eTəhsil actually in use, or just a concept?',
        a: 'It is live. eTəhsil is our own product, with the website and the app running at etehsil.az. We designed it, built it and keep it running.',
      },
      {
        q: 'How do you keep one centre’s data apart from another’s?',
        a: 'Each centre is a separate tenant, and the database enforces that separation rather than relying on application code alone. Within a centre, roles and permissions set what everyone can see: a teacher is limited to their own groups, the front desk has no view of total income, and a parent can open only their own child.',
      },
      {
        q: 'Which local services are integrated?',
        a: 'Online card top-ups through Payriff, sign-in with Google, payment reminders over WhatsApp, and notifications through Telegram, email and web push.',
      },
      {
        q: 'Is there anything parents or teachers need to install?',
        a: 'Nothing. A parent opens their personal link and types in a PIN. Teachers, staff and students work in the web app, which can be added to a phone as a PWA and runs in Azerbaijani, English or Russian.',
      },
      {
        q: 'How would we start on a similar platform for another industry?',
        a: 'By looking at how you work. What sits under eTəhsil, namely multi-tenant architecture, roles and permissions, template-based documents, payments, notifications and dashboards, transfers directly to other vertical SaaS products and internal tools. Walk us through your current processes and we will return with a specific plan.',
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
  sampleDataNote: 'All names and numbers shown on screens are illustrative.',
  mockupAriaLabel: 'eTəhsil screen mockup with sample data',
} satisfies CaseBase;

export type EtehsilCopy = typeof en;
export default en;
