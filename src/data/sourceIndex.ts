import {
  additionalQuestionSparkUrls,
  banzaiInteractiveLinks,
  banzaiResourceLinks,
  coreResourceLinks,
  questionSparkLinks,
  type TeacherResource
} from "./teacherResources";

export type SourceCategory = {
  id: string;
  title: string;
  note: string;
  links: TeacherResource[];
};

const fullYearUnitLinks: TeacherResource[] = [
  {
    title: "NGPF Full-Year Course",
    topic: "Course map",
    url: "https://www.ngpf.org/courses/full-year-course/",
    classroomUse: "Use as a broad topic reference for deeper or older-student extensions."
  },
  {
    title: "Behavioral Economics",
    topic: "Decision making",
    url: "https://www.ngpf.org/curriculum/behavioral-economics/",
    classroomUse: "Use with habit, impulse, social pressure, and tradeoff events."
  },
  {
    title: "Paying for College",
    topic: "College costs",
    url: "https://www.ngpf.org/curriculum/paying-for-college/",
    classroomUse: "Use with aid, scholarship, community college, trade, and loan choices."
  },
  {
    title: "Taxes",
    topic: "Paychecks",
    url: "https://www.ngpf.org/curriculum/taxes/",
    classroomUse: "Use with gross pay, net pay, withholding, refunds, and gig taxes."
  },
  {
    title: "Entrepreneurship",
    topic: "Business choices",
    url: "https://www.ngpf.org/curriculum/entrepreneurship/",
    classroomUse: "Use with side hustle, inventory, pricing, and profit scenarios."
  },
  {
    title: "Spanish Resources",
    topic: "Language support",
    url: "https://www.ngpf.org/spanish/",
    classroomUse: "Use as an optional teacher reference for vocabulary supports."
  }
];

const finCapLinks: TeacherResource[] = [
  {
    title: "NGPF FinCap Friday",
    topic: "Current events",
    url: "https://www.ngpf.org/fincap-friday/",
    classroomUse: "Use as an optional Friday warm-up or post-game discussion source."
  },
  {
    title: "How Teachers Use FinCap Fridays",
    topic: "Class routines",
    url: "https://www.ngpf.org/blog/fincap-friday/how-teachers-use-fincap-fridays/",
    classroomUse: "Use for teacher planning inspiration, not copied student-facing text."
  },
  {
    title: "FinCap Friday Carousel",
    topic: "Current events",
    url: "https://www.ngpf.org/fincap-friday/#fcfCarousel",
    classroomUse: "Browse for optional bell ringer prompts that pair with MoneyLife topics."
  }
];

const officialPublicFinanceLinks: TeacherResource[] = [
  {
    title: "CFPB Youth Financial Education",
    topic: "Youth financial capability",
    url: "https://www.consumerfinance.gov/youth-financial-education/",
    classroomUse: "Use for public youth financial education framing around decision habits, planning, and money skills."
  },
  {
    title: "FDIC Money Smart for Young People",
    topic: "Banking and saving",
    url: "https://www.fdic.gov/resources/consumers/money-smart/teach-money-smart/money-smart-for-young-people/",
    classroomUse: "Use for public banking, saving, borrowing, and money management topic coverage."
  },
  {
    title: "FTC Consumer Advice",
    topic: "Scams and identity theft",
    url: "https://consumer.ftc.gov/",
    classroomUse: "Use for broad public scam, fraud, identity theft, and consumer protection themes."
  },
  {
    title: "Investor.gov",
    topic: "Investing basics",
    url: "https://www.investor.gov/",
    classroomUse: "Use for public investor education around diversification, risk, compound interest, and investment fraud."
  },
  {
    title: "Federal Student Aid",
    topic: "College and career path costs",
    url: "https://studentaid.gov/",
    classroomUse: "Use for public college cost, aid, grants, loans, and repayment topic framing."
  },
  {
    title: "IRS Understanding Taxes",
    topic: "Taxes and paychecks",
    url: "https://apps.irs.gov/app/understandingTaxes/",
    classroomUse: "Use for public tax education around paychecks, withholding, refunds, and filing concepts."
  }
];

const teacherGoogleDocLinks: TeacherResource[] = [
  {
    title: "NGPF Middle School Personal Finance Dictionary",
    topic: "Vocabulary",
    url: "https://docs.google.com/document/d/16JX29Ei17XkvPCmPKazAY7ZFWOkclvoqiVVscfLYu0s/edit?tab=t.0#heading=h.95lzvkix4ogg",
    classroomUse: "Teacher-provided vocabulary reference; do not copy protected definitions into the game."
  },
  {
    title: "MS Unit 1.0 Plan",
    topic: "Money in our lives",
    url: "https://docs.google.com/document/d/1epEOvqQbItJDGusBSIwilAep8JfRioz0n4maEyrOc6w/edit?tab=t.0",
    classroomUse: "Use as a private teacher alignment reference."
  },
  {
    title: "MS Unit 2.0 Plan",
    topic: "Consumer skills",
    url: "https://docs.google.com/document/d/1Pq4or8C2xZSWasagyZjPk_aKujz1iG2eQdDuZfkQB5k/edit?tab=t.0",
    classroomUse: "Use for topic alignment only."
  },
  {
    title: "MS Unit 3.0 Plan",
    topic: "Budgeting",
    url: "https://docs.google.com/document/d/1SIjaISR0Qrcw6p4EGwH4V9t8dnZDSw-91TFGrIpiV9w/edit?tab=t.0",
    classroomUse: "Use for topic alignment only."
  },
  {
    title: "MS Unit 4.0 Plan",
    topic: "Credit",
    url: "https://docs.google.com/document/d/1EsB_ZgYQ0ORuh8BXe24X7ROzR67zFF-wlrihfvtSRko/edit?tab=t.0",
    classroomUse: "Use for topic alignment only."
  },
  {
    title: "MS Unit 5.0 Plan",
    topic: "Saving",
    url: "https://docs.google.com/document/d/18B1NY4aADwB0sJKobvbg7tJgcxWJ4c_l6HTE3KFDEv8/edit?tab=t.0",
    classroomUse: "Use for topic alignment only."
  },
  {
    title: "MS Unit 6.0 Plan",
    topic: "Investing",
    url: "https://docs.google.com/document/d/1hrSrGhM8Sre6WXWrz0zvDxEj4mVVPXMUXEXa6ASbM3A/edit?tab=t.0",
    classroomUse: "Use for topic alignment only."
  },
  {
    title: "MS Unit 7.0 Plan",
    topic: "Protecting yourself",
    url: "https://docs.google.com/document/d/1G8h4lwiTvD3H90UF_QWM4uaWV26n08S9XP3RDP7zRp0/edit?tab=t.0",
    classroomUse: "Use for topic alignment only."
  },
  {
    title: "MS Unit 8.0 Plan",
    topic: "Preparing for success",
    url: "https://docs.google.com/document/d/1P_wsyeSOR5TFYrTh1qgRodDCybJA5-U6bBsl6DBoruM/edit?tab=t.0",
    classroomUse: "Use for topic alignment only."
  },
  {
    title: "MS Unit 9.0 Plan",
    topic: "Life after high school",
    url: "https://docs.google.com/document/d/1KXQSrMJ5VQ4qExpr83dtXHQuuzDSntxWHVNOw4cocb4/edit?tab=t.0",
    classroomUse: "Use for topic alignment only."
  },
  {
    title: "Full-Year Course Syllabus",
    topic: "Course map",
    url: "https://docs.google.com/document/d/1Kp6Apbqpfl0oqBuF6Zw8L_8utJJ27ZQNuEfTWxXeWfI/edit?tab=t.0",
    classroomUse: "Use as a teacher-only scope reference."
  }
];

const teacherProjectFiles: TeacherResource[] = [
  {
    title: "Future Life Budget Project Logbook",
    topic: "Class project context",
    url: "local:Fin Lit Project Logbook Final.pdf",
    classroomUse: "Used to extract project themes: career pathway, gross/net pay, costs, housing, transportation, insurance, food, lifestyle, savings, and final budget reflection."
  },
  {
    title: "Daily Board Slides Days 2-15",
    topic: "Class project sequence",
    url: "local:Future_Life_Budget_Project_Daily_Board_Slides_Days_2_15_REVISED.pdf",
    classroomUse: "Used to match the adult-outcome scenario arc to daily math themes without copying slide text."
  },
  {
    title: "Daily Research Resources Days 1-15",
    topic: "Research routines",
    url: "local:Future_Life_Budget_Project_Daily_Research_Resources_Days_1_15.pdf",
    classroomUse: "Used to include source-checking, real websites, and evidence habits in teacher context."
  },
  {
    title: "Napkin Finance - Tina Hay",
    topic: "Finance concept map",
    url: "local:Napkin Finance - Tina Hay.pdf",
    classroomUse: "Used for high-level topic coverage such as compound interest, credit, debt, insurance, investing, taxes, entrepreneurship, and Rule of 72."
  },
  {
    title: "Student Exemplars",
    topic: "Future-life budget products",
    url: "local:Pathway 1/4/5/6 student exemplar PDFs",
    classroomUse: "Used only to understand the kind of future-adult budget outcomes students may create."
  },
  {
    title: "Humble Math Financial Literacy",
    topic: "7th-grade financial math",
    url: "local:Humble_Math_Financial_Literacy.pdf",
    classroomUse:
      "Used for broad math-skill inspiration: decimals, percentages, discounts, sales tax, tipping, unit rates, budgets, subscriptions, interest, loans, inflation, and profit."
  }
];

const additionalQodLinks: TeacherResource[] = additionalQuestionSparkUrls.map((url) => ({
  title: formatUrlTitle(url),
  topic: "Additional QOD prompt",
  url,
  classroomUse: "Optional current-events extension for teacher discussion."
}));

export const sourceCategories: SourceCategory[] = [
  {
    id: "glossary-vocabulary",
    title: "Glossary and Vocabulary Support",
    note: "Vocabulary references used to create original MoneyLife Quest definitions and math connections in the inline glossary tooltips.",
    links: [
      teacherGoogleDocLinks[0],
      {
        title: "NGPF Middle School Course",
        topic: "Vocabulary context",
        url: "https://www.ngpf.org/courses/middle-school-course/",
        classroomUse: "Use to align glossary terms to middle-school units without copying student-facing definitions."
      },
      teacherProjectFiles.find((resource) => resource.title.includes("Napkin Finance"))!,
      teacherProjectFiles.find((resource) => resource.title.includes("Humble Math"))!
    ]
  },
  {
    id: "middle-school-units",
    title: "Middle School Units",
    note: "Public NGPF pages used to align the original scenario bank to common middle-school finance topics.",
    links: coreResourceLinks
  },
  {
    id: "full-year-units",
    title: "Full-Year and Extension Units",
    note: "Additional public NGPF hubs used for advanced or future-life scenario coverage.",
    links: fullYearUnitLinks
  },
  {
    id: "qod-current-events",
    title: "QOD Current Events",
    note: "Question-of-the-Day links used as bell-ringer inspiration for original prompts and reflection questions.",
    links: [...questionSparkLinks, ...additionalQodLinks]
  },
  {
    id: "arcade-fincap",
    title: "Arcade Games and FinCap Friday",
    note: "Public game/current-event formats used as inspiration for short decision cycles and discussion routines.",
    links: [
      {
        title: "NGPF Arcade",
        topic: "Game-based finance",
        url: "https://www.ngpf.org/arcade/",
        classroomUse: "Use as a model for play plus reflection; MoneyLife text and mechanics remain original."
      },
      ...finCapLinks
    ]
  },
  {
    id: "official-public-finance",
    title: "Official Public Finance Education",
    note: "Government and official public education pages used as broad context for original future-adult scenarios.",
    links: officialPublicFinanceLinks
  },
  {
    id: "banzai-context",
    title: "Banzai Context",
    note: "Banzai public courses and resources used only as topic inspiration for original MoneyLife scenarios.",
    links: [...banzaiResourceLinks, ...banzaiInteractiveLinks]
  },
  {
    id: "teacher-google-docs",
    title: "Teacher-Provided Google Docs",
    note: "Teacher-supplied planning documents used as private alignment references only.",
    links: teacherGoogleDocLinks
  },
  {
    id: "teacher-project-files",
    title: "Teacher Project Files and OCR Context",
    note: "Local classroom project PDFs/OCR files used to understand the math project and future-adult budget themes.",
    links: teacherProjectFiles
  }
];

function formatUrlTitle(url: string): string {
  const slug = url
    .replace(/\/$/, "")
    .split("/")
    .pop()
    ?.replace(/^question-of-the-day-/, "")
    .replace(/^qod-/, "")
    .replace(/^chart-/, "")
    .replace(/-/g, " ");
  return slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Question of the Day";
}
