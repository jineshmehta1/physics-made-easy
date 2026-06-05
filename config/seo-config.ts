/**
 * SEO single source of truth — Physics Made Easy
 *
 * This is the ONLY file the SEO specialist needs to edit. Every page,
 * robots.ts, sitemap.ts, and the root layout all read from here.
 *
 * Edit the strings below to change titles, descriptions, keywords, OG
 * images, indexing rules, and structured-data fields. Do not edit the
 * Next.js metadata helper in lib/seo.ts — it is a pure consumer of this
 * file.
 *
 * CHANGELOG — Jun 2026 initial SEO config
 * ─────────────────────────────────────────────────────────────────────
 * [SITE_CONFIG]
 *   • Domain set to https://makephysicseasy.com (canonical across site)
 *   • Replaced stale chess-academy copy from root layout metadata
 *   • googleVerification / bingVerification placeholders added
 *
 * [PAGE_SEO — all public pages]
 *   • Full page-by-page titles, descriptions, and keywords added
 *   • Stale root layout description (chess training) replaced
 *
 * [PAGE_SEO — /login, /admin]
 *   • noIndex: true — auth and admin portals should not compete in SERPs
 *
 * [PAGE_SEO — footer links without live pages]
 *   • /methodology, /testimonials, /resources, /privacy — entries added
 *     with notes; remove noIndex or adjust when pages are built
 *
 * [ORGANIZATION_SCHEMA]
 *   • Unified schema replacing conflicting inline JSON-LD across components
 *   • @type: EducationalOrganization + LocalBusiness for Singapore rich results
 *
 * [HOME_FAQS]
 *   • Sourced from stats-section.tsx; answers expanded for FAQ rich results
 *
 * [CRAWL_RULES + SITEMAP_STATIC_PAGES]
 *   • Admin, login, and API routes excluded from indexing
 *
 * PRE-DEPLOY CHECKLIST
 * ─────────────────────────────────────────────────────────────────────
 *   □ Confirm /public/og/default.png exists (or update defaultOgImage)
 *   □ Add per-page OG images under /public/og/ as they are designed
 *   □ Fill in googleVerification (search.google.com/search-console)
 *   □ Fill in bingVerification (bing.com/webmasters → Meta tag)
 *   □ Build missing footer pages: /methodology, /testimonials, /resources, /privacy
 *   □ Uncomment social profiles in sameAs once accounts are live
 * ─────────────────────────────────────────────────────────────────────
 */

export const SITE_CONFIG = {
  name: "Physics Made Easy",
  tagline: "Master Physics Through Logic, Strategy & Critical Thinking",
  domain: "https://makephysicseasy.com",
  locale: "en_SG",
  twitterHandle: "",
  defaultOgImage: "/og/default.png",
  themeColor: "#0d9488",
  googleVerification: "", // ← FILL IN: Google Search Console → HTML tag
  bingVerification: "", // ← FILL IN: bing.com/webmasters → Meta tag verification
} as const;

export interface PageSeoEntry {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  canonical?: string;
}

/**
 * Page-by-page meta tags. Keys are URL paths.
 * Add a new entry here to give a page its own metadata.
 *
 * Title rules:   ≤56 chars. Include primary keyword. Brand name optional.
 * Desc rules:    ≤155 chars. Include a CTA. No keyword stuffing.
 */
export const PAGE_SEO: Record<string, PageSeoEntry> = {

  // ─── Public marketing pages ───────────────────────────────────────

  "/": {
    title: "Physics Tuition Singapore | O-Level, A-Level & IB",
    description:
      "Expert Physics tuition in Singapore by Ex-MOE Scholar Mr. Chew. O-Level, A-Level, IB & IGCSE. Multiple Intelligences method. Toa Payoh centre & online. Book a trial.",
    keywords: [
      "physics tuition singapore",
      "O level physics tuition",
      "A level physics tutor singapore",
      "IB physics tuition singapore",
      "IGCSE physics tutor",
      "physics tuition toa payoh",
      "best physics tutor singapore",
      "H2 physics tuition",
      "physics and chess tuition",
      "online physics tuition singapore",
      "MOE scholar physics tutor",
      "physics made easy singapore",
    ],
    ogImage: "/og/home.png",
  },

  "/about": {
    title: "About Mr. Chew | Ex-MOE Scholar Physics Tutor",
    description:
      "Meet Mr. Chew Kok Mun — Ex-MOE Scholar, FIDE Instructor, and founder of Physics Made Easy. Learn his Multiple Intelligences approach to mastering Physics.",
    keywords: [
      "Mr Chew physics tutor",
      "Cornelius Chew physics",
      "physics tutor singapore profile",
      "MOE scholar physics teacher",
      "FIDE instructor singapore",
      "physics made easy about",
    ],
    ogImage: "/og/about.png",
  },

  "/courses": {
    title: "Physics & Chess Courses | O-Level to IB",
    description:
      "Structured Physics courses for O-Level, A-Level H2, IB HL/SL, IP, and IGCSE. Plus FIDE-certified chess coaching. Group and one-on-one classes in Singapore.",
    keywords: [
      "physics courses singapore",
      "O level physics class",
      "A level H2 physics course",
      "IB HL physics tuition",
      "IGCSE physics lessons",
      "chess coaching singapore",
      "physics tuition packages",
      "secondary science tuition",
    ],
    ogImage: "/og/courses.png",
    canonical: "https://makephysicseasy.com/courses",
  },

  "/multiple": {
    title: "Multiple Intelligences Method | Physics Made Easy",
    description:
      "How Physics Made Easy uses Gardner's Multiple Intelligences theory to teach Physics — not rote memorisation, but deep understanding through logic and strategy.",
    keywords: [
      "multiple intelligences physics",
      "MI theory tuition singapore",
      "howard gardner physics teaching",
      "critical thinking physics tuition",
      "physics learning methodology",
    ],
    ogImage: "/og/multiple.png",
  },

  "/science": {
    title: "Science Understanding | Beyond Memorising Formulas",
    description:
      "Our Science Understanding framework helps students build real conceptual mastery — from lower secondary science through advanced Physics exam preparation.",
    keywords: [
      "science tuition singapore",
      "science understanding method",
      "lower secondary science tutor",
      "conceptual physics learning",
      "science critical thinking singapore",
    ],
    ogImage: "/og/science.png",
  },

  "/gallery": {
    title: "Gallery | Physics Made Easy Academy Moments",
    description:
      "Photos from Physics Made Easy classes, chess sessions, and student achievements. See our Toa Payoh centre and online learning in action.",
    keywords: [
      "physics tuition centre photos",
      "physics class gallery singapore",
      "chess coaching photos",
    ],
    ogImage: "/og/gallery.png",
  },

  "/blog": {
    title: "Physics Blog | Tips, Guides & Exam Strategies",
    description:
      "Physics study tips, exam strategies, and improvement guides from Mr. Chew. O-Level, A-Level, and IB Physics advice for Singapore students.",
    keywords: [
      "physics blog singapore",
      "physics study tips",
      "O level physics tips",
      "IB physics exam strategy",
      "how to improve physics grades",
      "physics exam preparation singapore",
    ],
    ogImage: "/og/blog.png",
  },

  "/study": {
    title: "Free Study Materials | Physics Made Easy",
    description:
      "Download Physics study notes, worksheets, and revision resources for O-Level, A-Level, and IB. Curated by Mr. Chew for Singapore students.",
    keywords: [
      "physics study notes singapore",
      "free physics worksheets",
      "O level physics notes",
      "IB physics revision materials",
      "physics study resources download",
    ],
    ogImage: "/og/study.png",
  },

  "/contact": {
    title: "Contact Physics Made Easy | Book a Trial",
    description:
      "Contact Mr. Chew for Physics tuition enquiries. Toa Payoh centre, online lessons, and WhatsApp booking. Reply within 24 hours. Trial classes available.",
    keywords: [
      "contact physics tutor singapore",
      "book physics trial lesson",
      "physics tuition enquiry",
      "physics made easy contact",
      "toa payoh physics tuition",
    ],
    ogImage: "/og/contact.png",
  },

  "/curriculum": {
    title: "Physics Curriculum | Structured Learning Path",
    description:
      "Explore the Physics Made Easy curriculum — structured progression from foundations to exam mastery for O-Level, A-Level, IB, and IGCSE students.",
    keywords: [
      "physics curriculum singapore",
      "structured physics syllabus",
      "O level physics curriculum",
      "IB physics syllabus coverage",
    ],
    ogImage: "/og/curriculum.png",
  },

  "/achievements": {
    title: "Student Achievements | Physics Made Easy Results",
    description:
      "95% of O-Level students score A/B grades. 95% of IB HL Physics students achieve Grade 7. See the results Physics Made Easy delivers year after year.",
    keywords: [
      "physics tuition results singapore",
      "O level physics A grade",
      "IB physics grade 7 tuition",
      "physics tutor track record",
      "student success stories physics",
    ],
    ogImage: "/og/achievements.png",
  },

  // ─── Footer-linked pages (not yet built — pre-configured) ─────────

  "/methodology": {
    // NOTE: Page does not exist yet. Footer links here. Build page or redirect.
    title: "Our Methodology | Physics Made Easy",
    description:
      "Discover how Physics Made Easy combines Multiple Intelligences, chess strategy, and MOE-trained pedagogy to help students truly understand Physics.",
    keywords: [
      "physics teaching methodology",
      "multiple intelligences tuition",
      "chess and physics learning",
    ],
    noIndex: true, // ← change to false when page is live
  },

  "/testimonials": {
    // NOTE: Page does not exist yet. Testimonials currently on /about.
    title: "Student Testimonials | Physics Made Easy",
    description:
      "Read what parents and students say about Physics Made Easy. Real reviews from O-Level, A-Level, and IB Physics students in Singapore.",
    keywords: [
      "physics tuition reviews singapore",
      "physics tutor testimonials",
      "Mr Chew physics reviews",
    ],
    noIndex: true, // ← change to false when page is live
  },

  "/resources": {
    // NOTE: Page does not exist yet. Study materials are at /study.
    title: "Free Physics Resources | Physics Made Easy",
    description:
      "Free Physics resources, worksheets, and revision guides for Singapore students. O-Level, A-Level, and IB exam preparation materials.",
    keywords: [
      "free physics resources singapore",
      "physics revision guides",
      "O level physics free notes",
    ],
    noIndex: true, // ← change to false when page is live
  },

  "/privacy": {
    // NOTE: Page does not exist yet. Footer links here.
    title: "Privacy Policy | Physics Made Easy",
    description:
      "Read Physics Made Easy's privacy policy — how we collect, use, and protect your personal data.",
    canonical: "https://makephysicseasy.com/privacy",
    noIndex: true, // ← change to false when page is live
  },

  // ─── Legal ────────────────────────────────────────────────────────

  "/terms": {
    title: "Terms of Service | Physics Made Easy",
    description:
      "Physics Made Easy terms of service — the rules and conditions for using our tuition platform and coaching services in Singapore.",
    canonical: "https://makephysicseasy.com/terms",
  },

  // ─── Auth & admin — noIndex ───────────────────────────────────────

  "/login": {
    title: "Admin Sign In | Physics Made Easy",
    description: "Sign in to the Physics Made Easy admin portal.",
    noIndex: true,
  },

  "/admin": {
    title: "Admin Dashboard | Physics Made Easy",
    description: "Physics Made Easy admin portal.",
    noIndex: true,
  },
};

/* ---------------- Structured data templates ---------------- */

export const ORGANIZATION_SCHEMA: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "Physics Made Easy",
  url: "https://makephysicseasy.com",
  logo: "https://makephysicseasy.com/logo.png",
  description:
    "Singapore Physics tuition centre offering O-Level, A-Level, IB, and IGCSE coaching. Led by Ex-MOE Scholar Mr. Chew using Multiple Intelligences and chess-based critical thinking.",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "186 Toa Payoh Central, Lobby H 02-430",
    addressLocality: "Toa Payoh",
    addressRegion: "Singapore",
    postalCode: "310186",
    addressCountry: "SG",
  },
  telephone: "+65-9727-7419",
  email: "chewkm2001@yahoo.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+65-9727-7419",
    email: "chewkm2001@yahoo.com",
    areaServed: "SG",
    availableLanguage: ["English", "Chinese"],
  },
  founder: {
    "@type": "Person",
    name: "Mr. Chew Kok Mun",
    jobTitle: "Founder & Lead Physics Tutor",
    description: "Ex-MOE Scholar and FIDE Instructor specialising in Physics tuition and chess coaching.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
    bestRating: "5",
  },
  sameAs: [
  // Uncomment once profiles are live:
  // "https://www.facebook.com/physicsmadeeasy",
  // "https://www.linkedin.com/company/physics-made-easy",
  // "https://www.youtube.com/@physicsmadeeasy",
  ],
};

export function getCourseSchema(course: {
  title: string;
  description: string;
  level: string;
  url: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    educationalLevel: course.level,
    url: course.url.startsWith("http") ? course.url : `${SITE_CONFIG.domain}${course.url}`,
    inLanguage: "en",
    isAccessibleForFree: false,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      courseWorkload: "PT4H",
      location: {
        "@type": "Place",
        name: "Physics Made Easy — Toa Payoh Centre",
        address: {
          "@type": "PostalAddress",
          streetAddress: "186 Toa Payoh Central, Lobby H 02-430",
          addressLocality: "Toa Payoh",
          postalCode: "310186",
          addressCountry: "SG",
        },
      },
    },
  };
}

export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.domain}${item.url}`,
    })),
  };
}

export function getBlogPostSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_CONFIG.domain}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.domain}/logo.png`,
      },
    },
    ...(post.image
      ? {
        image: post.image.startsWith("http")
          ? post.image
          : `${SITE_CONFIG.domain}${post.image}`,
      }
      : {}),
  };
}

/* ------------------------------------------------------------------ */
/* FAQ — HOME_FAQS                                                     */
/* Sourced from stats-section.tsx; answers expanded for rich results  */
/* ------------------------------------------------------------------ */
export const HOME_FAQS = [
  {
    question: "What makes Physics Made Easy different from other tuition centres?",
    answer:
      "We use Gardner's Multiple Intelligences theory to teach Physics — not rote memorisation. Led by Mr. Chew, an Ex-MOE Scholar and FIDE Instructor, we combine academic rigour with chess-based strategic thinking. This helps students develop the critical reasoning skills needed to solve complex O-Level, A-Level, and IB exam problems confidently.",
  },
  {
    question: "Which levels and exam boards do you cover?",
    answer:
      "We specialise in Physics for GCE O-Levels, A-Levels (H1 and H2), IB (HL and SL), IP, and IGCSE. We also offer lower secondary science coaching to build a strong foundation early. Whether your child is starting secondary school or preparing for the A-Level promos, we have a structured programme matched to their syllabus and exam timeline.",
  },
  {
    question: "Where are classes held? Do you offer online lessons?",
    answer:
      "Physical classes are held at our centre at 186 Toa Payoh Central, Lobby H 02-430, Singapore 310186. We also offer high-quality online lessons for students who prefer learning from home or are based overseas. Both formats use the same Multiple Intelligences methodology and are taught by Mr. Chew personally or his trained associates.",
  },
  {
    question: "How does chess help with Physics?",
    answer:
      "Chess teaches pattern recognition, foresight, and disciplined calculation — skills directly transferable to Physics problem-solving. It trains the brain to think continuously and logically under time pressure, which is crucial for tackling high-level exam questions in O-Level Paper 2 and IB HL Paper 3. Many of our students take optional chess coaching alongside Physics.",
  },
  {
    question: "What is your track record for student results?",
    answer:
      "We have a proven history of excellence: 95% of our O-Level students have scored A or B grades, and 95% of our IB HL Physics students achieved Grade 7. We focus on turning one-off improvements into consistent performance across every test, weighted assessment, and final examination throughout the academic year.",
  },
  {
    question: "Do you offer trial classes?",
    answer:
      "Yes. We believe in finding the right fit before you commit. You can book a paid trial lesson to experience our teaching style firsthand. Contact us via WhatsApp at +65 9727 7419 or use the contact form on our website. Mr. Chew will personally respond and help schedule a session at a time that works for you.",
  },
  {
    question: "Who is the best physics tutor in Singapore for O-Level and IB?",
    answer:
      "Mr. Chew Kok Mun at Physics Made Easy is an Ex-MOE Scholar with decades of classroom and private tuition experience. His students consistently achieve top grades in O-Level, A-Level, and IB Physics. The combination of MOE-trained pedagogy, Multiple Intelligences methodology, and optional chess coaching sets Physics Made Easy apart from generic tuition centres.",
  },
  {
    question: "How do I improve my Physics grade from fail to A?",
    answer:
      "The fastest path from a failing grade to an A requires identifying conceptual gaps, not just drilling past-year papers. At Physics Made Easy, we diagnose exactly which topics and question types are costing marks, then rebuild understanding from first principles. Students who attend consistently and complete assigned practice typically see a two-grade improvement within one academic term.",
  },
];

/* ------------------------------------------------------------------ */
/* llms.txt — AI crawler guidance                                      */
/*                                                                     */
/* HOW TO DEPLOY:                                                      */
/*   Option A — Static file: copy LLMS_TXT into /public/llms.txt      */
/*   Option B — Dynamic route: app/llms.txt/route.ts importing this   */
/* ------------------------------------------------------------------ */
export const LLMS_TXT = `# Physics Made Easy
> Expert Physics tuition in Singapore by Ex-MOE Scholar Mr. Chew. O-Level, A-Level, IB & IGCSE coaching using Multiple Intelligences and chess-based critical thinking. Toa Payoh centre and online lessons.

## Pages

- [Home](https://makephysicseasy.com): Overview, courses, results, and trial booking
- [About](https://makephysicseasy.com/about): Mr. Chew's profile, teaching philosophy, team
- [Courses](https://makephysicseasy.com/courses): O-Level, A-Level, IB, IGCSE Physics and chess coaching
- [Multiple Intelligences](https://makephysicseasy.com/multiple): Gardner's MI theory applied to Physics
- [Science Understanding](https://makephysicseasy.com/science): Conceptual science learning framework
- [Gallery](https://makephysicseasy.com/gallery): Class photos and student moments
- [Blog](https://makephysicseasy.com/blog): Physics tips, exam strategies, study guides
- [Study Materials](https://makephysicseasy.com/study): Free notes and revision resources
- [Contact](https://makephysicseasy.com/contact): Book a trial, WhatsApp, location

## Key facts

- Led by Mr. Chew Kok Mun — Ex-MOE Scholar, FIDE Instructor
- 95% O-Level students score A/B grades; 95% IB HL students achieve Grade 7
- Covers: GCE O-Level, A-Level H1/H2, IB HL/SL, IP, IGCSE, lower secondary science
- Location: 186 Toa Payoh Central, Lobby H 02-430, Singapore 310186
- Online and in-person classes available
- Optional FIDE-certified chess coaching alongside Physics
- Paid trial lessons available — no long-term commitment required

## Contact

- Phone / WhatsApp: +65 9727 7419
- Email: chewkm2001@yahoo.com
- Website: https://makephysicseasy.com
`;

/* ---------------- Crawl rules ---------------- */

export const CRAWL_RULES = {
  allow: [
    "/",
    "/about",
    "/courses",
    "/multiple",
    "/science",
    "/gallery",
    "/blog",
    "/study",
    "/contact",
    "/curriculum",
    "/achievements",
    "/terms",
  ],
  disallow: [
    "/admin",
    "/login",
    "/api",
    "/methodology",   // page not built yet
    "/testimonials",  // page not built yet
    "/resources",     // page not built yet
    "/privacy",       // page not built yet
  ],
};

/* ---------------- Sitemap static pages ---------------- */

export const SITEMAP_STATIC_PAGES: Array<{
  path: string;
  changeFrequency:
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";
  priority: number;
}> = [
  { path: "/",              changeFrequency: "weekly",  priority: 1.0 },
  { path: "/about",         changeFrequency: "monthly", priority: 0.8 },
  { path: "/courses",       changeFrequency: "weekly",  priority: 0.9 },
  { path: "/contact",       changeFrequency: "monthly", priority: 0.9 },
  { path: "/multiple",      changeFrequency: "monthly", priority: 0.7 },
  { path: "/science",       changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog",          changeFrequency: "weekly",  priority: 0.8 },
  { path: "/study",         changeFrequency: "weekly",  priority: 0.7 },
  { path: "/gallery",       changeFrequency: "monthly", priority: 0.5 },
  { path: "/achievements",  changeFrequency: "monthly", priority: 0.7 },
  { path: "/curriculum",    changeFrequency: "monthly", priority: 0.6 },
  { path: "/terms",         changeFrequency: "yearly",  priority: 0.3 },
];
