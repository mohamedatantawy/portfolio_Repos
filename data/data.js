// ============================================================
//  data/data.js  —  Single source of truth for all content
//  Edit this file to update the entire portfolio
// ============================================================

export const PORTFOLIO = {

  // ── Personal Info ─────────────────────────────────────────
  owner: {
    nameEn: "Mohamed tanatwy",
    nameAr: "محمد طنطاوي",
    roleEn: "Mobile Developer",
    roleAr: "مطوّر جوال",
    email: "tantawymo2003@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    whatsapp: "https://wa.me/",
    avatarEmoji: "💻",
  },

  // ── Stats ─────────────────────────────────────────────────
  stats: [
    { num: "+30", labelAr: "مشروع مكتمل",  labelEn: "Projects Done" },
    { num: "4+",  labelAr: "سنوات خبرة",   labelEn: "Years Exp." },
    { num: "15+", labelAr: "عميل راضٍ",     labelEn: "Happy Clients" },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      titleAr: "منصة E-Commerce متكاملة",
      titleEn: "Full E-Commerce Platform",
      descAr:  "منصة تجارة إلكترونية كاملة مع لوحة تحكم، نظام دفع، وإدارة مخزون. تضم 50k+ مستخدم نشط.",
      descEn:  "Full e-commerce platform with admin dashboard, payment system, and inventory management. Serves 50k+ active users.",
      tags:    [
        { label: "React",    type: "cyan"   },
        { label: "Node.js",  type: "purple" },
        { label: "MongoDB",  type: "green"  },
        { label: "Stripe",   type: "amber"  },
      ],
      icon:    "🛒",
      bgFrom:  "#0a1628",
      bgTo:    "#0d2444",
      featured: true,
      liveUrl:  "#",
      codeUrl:  "#",
    },
    {
      titleAr: "تطبيق ذكاء اصطناعي",
      titleEn: "AI Chat Application",
      descAr:  "محادثة ذكية مدعومة بنماذج GPT مع دعم عربي كامل وذاكرة محادثة.",
      descEn:  "Smart conversation powered by GPT models with full Arabic support and conversation memory.",
      tags:    [
        { label: "Python",  type: "purple" },
        { label: "FastAPI", type: "cyan"   },
      ],
      icon:    "🤖",
      bgFrom:  "#1a0a28",
      bgTo:    "#2d1244",
      featured: false,
      liveUrl:  "#",
      codeUrl:  "#",
    },
    {
      titleAr: "لوحة تحليلات البيانات",
      titleEn: "Data Analytics Dashboard",
      descAr:  "داشبورد تفاعلي لتصوير البيانات في الوقت الحقيقي مع تقارير قابلة للتصدير.",
      descEn:  "Interactive dashboard for real-time data visualization with exportable reports.",
      tags:    [
        { label: "Vue.js", type: "green" },
        { label: "D3.js",  type: "cyan"  },
      ],
      icon:    "📊",
      bgFrom:  "#0a1a12",
      bgTo:    "#0d2d1a",
      featured: false,
      liveUrl:  "#",
      codeUrl:  "#",
    },
    {
      titleAr: "تطبيق موبايل للمهام",
      titleEn: "Mobile Task Manager",
      descAr:  "تطبيق iOS و Android لإدارة المهام والمشاريع مع مزامنة فورية عبر الأجهزة.",
      descEn:  "iOS & Android app for task and project management with real-time cross-device sync.",
      tags:    [
        { label: "React Native", type: "amber"  },
        { label: "Firebase",     type: "purple" },
      ],
      icon:    "📱",
      bgFrom:  "#1a1200",
      bgTo:    "#2d2000",
      featured: false,
      liveUrl:  "#",
      codeUrl:  "#",
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  skills: {
    frontend: [
      { nameAr: "React / Next.js",    nameEn: "React / Next.js",    pct: 92 },
      { nameAr: "Vue.js",             nameEn: "Vue.js",             pct: 85 },
      { nameAr: "TypeScript",         nameEn: "TypeScript",         pct: 88 },
      { nameAr: "Tailwind / CSS",     nameEn: "Tailwind / CSS",     pct: 95 },
    ],
    backend: [
      { nameAr: "Node.js / Express",     nameEn: "Node.js / Express",     pct: 87 },
      { nameAr: "Python / FastAPI",      nameEn: "Python / FastAPI",      pct: 80 },
      { nameAr: "PostgreSQL / MongoDB",  nameEn: "PostgreSQL / MongoDB",  pct: 83 },
    ],
    soft: [
      { nameAr: "حل المشكلات",  nameEn: "Problem Solving", pct: 95 },
      { nameAr: "العمل الجماعي", nameEn: "Teamwork",        pct: 90 },
      { nameAr: "إدارة الوقت",  nameEn: "Time Management", pct: 88 },
    ],
    tools: [
      "🐳 Docker", "☁️ AWS",   "⚡ Vite",    "🔧 Git",
      "🚀 Vercel", "🔄 CI/CD", "📦 Redis",   "🔐 JWT",
      "📝 GraphQL","🎨 Figma", "🧪 Jest",    "📊 Prisma",
    ],
  },

  // ── Certificates ──────────────────────────────────────────
  certificates: [
    {
      nameEn: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      dateAr: "يناير 2024",
      dateEn: "January 2024",
      icon:   "☁️",
    },
    {
      nameEn: "Meta Frontend Developer Professional",
      issuer: "Meta",
      dateAr: "أغسطس 2023",
      dateEn: "August 2023",
      icon:   "⚛️",
    },
    {
      nameEn: "Machine Learning Specialization",
      issuer: "Stanford Online / Coursera",
      dateAr: "مارس 2023",
      dateEn: "March 2023",
      icon:   "🤖",
    },
    {
      nameEn: "Google Cybersecurity Certificate",
      issuer: "Google",
      dateAr: "نوفمبر 2023",
      dateEn: "November 2023",
      icon:   "🔐",
    },
    {
      nameEn: "UI/UX Design Foundations",
      issuer: "Google / Coursera",
      dateAr: "يونيو 2022",
      dateEn: "June 2022",
      icon:   "🎨",
    },
    {
      nameEn: "Python for Data Science",
      issuer: "IBM",
      dateAr: "فبراير 2022",
      dateEn: "February 2022",
      icon:   "🐍",
    },
  ],

  // ── Experience / Training ─────────────────────────────────
  experience: [
    {
      titleAr: "مطوّر Full Stack أول",
      titleEn: "Senior Full Stack Developer",
      orgAr:   "TechCorp Solutions — القاهرة",
      orgEn:   "TechCorp Solutions — Cairo",
      dateAr:  "2023 — الحاضر",
      dateEn:  "2023 — Present",
      descAr:  "قيادة فريق مكوّن من 5 مطورين لبناء منصات ويب enterprise. أشرفت على تصميم المعمارية التقنية ورفعت سرعة التسليم بنسبة 40%.",
      descEn:  "Led a team of 5 developers building enterprise web platforms. Oversaw technical architecture and increased delivery speed by 40%.",
    },
    {
      titleAr: "مطوّر Backend — عن بُعد",
      titleEn: "Backend Developer — Remote",
      orgAr:   "StartupHub — دبي",
      orgEn:   "StartupHub — Dubai",
      dateAr:  "2022 — 2023",
      dateEn:  "2022 — 2023",
      descAr:  "بناء APIs عالية الأداء تخدم أكثر من مليون طلب يومياً. تطوير خدمات microservices وتكامل بوابات الدفع.",
      descEn:  "Built high-performance APIs serving 1M+ daily requests. Developed microservices and payment gateway integrations.",
    },
    {
      titleAr: "مطوّر Frontend — تدريب",
      titleEn: "Frontend Developer — Intern",
      orgAr:   "Digital Agency X — الإسكندرية",
      orgEn:   "Digital Agency X — Alexandria",
      dateAr:  "2021 — 2022",
      dateEn:  "2021 — 2022",
      descAr:  "تطوير واجهات مستخدم لأكثر من 15 موقع تجاري باستخدام React وAnimation libraries.",
      descEn:  "Developed user interfaces for 15+ commercial websites using React and animation libraries.",
    },
    {
      titleAr: "بكالوريوس هندسة الحاسبات",
      titleEn: "B.Sc. Computer Engineering",
      orgAr:   "جامعة القاهرة",
      orgEn:   "Cairo University",
      dateAr:  "2019 — 2023",
      dateEn:  "2019 — 2023",
      descAr:  "تخرّج بتقدير امتياز. مشروع التخرج: نظام تعرّف على الوجوه مبني على Deep Learning — حاز جائزة أفضل مشروع.",
      descEn:  "Graduated with Distinction. Graduation project: Deep Learning face recognition system — awarded Best Project.",
    },
  ],
};
