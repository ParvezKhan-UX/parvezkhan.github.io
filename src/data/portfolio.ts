// ─── SITE DATA — single source of truth ───────────────────────────────────────
// Edit this file to update every section of the portfolio.

export const personal = {
  name: "Md. Parvez Khan",
  nameShort: "Parvez Khan",
  nameFirst: "Parvez",
  nameLast: "Khan",
  title: "UI/UX Designer",
  tagline:
    "Crafting user-centered digital experiences with a focus on research-driven design and intuitive interfaces.",
  bio: "I bridge the gap between user needs and high-quality design. With 5+ years of hands-on UI/UX experience, I create digital products that are as technically sound as they are visually intuitive — from wireframes to production-ready interfaces.",
  location: "Mirpur, Dhaka, Bangladesh",
  status: "Open to Work",
  email: "mpkhasan62@gmail.com",
  phone: "+880 1688799146",
  linkedin: "https://www.linkedin.com/in/md-parvez-khan/",
  behance: "https://www.behance.net/mpkhasan62",
  profileImage: "/profile.jpg",
  interests: ["Leadership", "Sporting", "Human Psychology"],
  languages: [
    { name: "Bangla", level: "Native or Bilingual Proficiency" },
    { name: "English", level: "Professional Working Proficiency" },
  ],
};

export const skills = [
  "User Research",
  "Information Architecture",
  "Design Documentation",
  "Wireframing & Prototyping",
  "Usability & Accessibility",
  "Visual Design",
  "Problem-Solving",
  "Team Collaboration",
  "Communication",
  "Creative & Innovative",
  "Task Prioritization",
  "Figma",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "UI Design",
  "UX Design",
  "HTML",
  "CSS",
  "Graphics Design",
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  accomplishments: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    role: "UI/UX Designer",
    company: "Gigalogy Ltd.",
    location: "Mirpur DOHS, Dhaka, Bangladesh",
    period: "12/2024 — Present",
    isCurrent: true,
    accomplishments: [
      "Designing prototypes and presentations for new clients & projects.",
      "Visualizing client concepts and communicating regarding that.",
      "UX research for new products; asset development for branding and UI.",
      "Interfacing between the development team and design team.",
      "Maintaining an awareness of potential interdependencies with other projects.",
      "Supporting the company with all Graphics & UI/UX Design work.",
    ],
    skills: [
      "Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator",
      "UI Design", "UX Design", "Communication", "Team Leadership",
      "Teamwork", "Graphics", "Project Lead",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Core Devs Ltd.",
    location: "Mirpur DOHS, Dhaka, Bangladesh",
    period: "12/2023 — 11/2024",
    isCurrent: false,
    accomplishments: [
      "Designing prototypes and presentations for new clients & projects.",
      "Visualizing client concepts and communicating regarding that.",
      "UX research for new products; asset development for branding and UI.",
      "Interfacing between the development team and design team.",
      "Maintaining an awareness of potential interdependencies with other projects.",
      "Supporting the company with all UI/UX Design work.",
    ],
    skills: [
      "Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator",
      "UI Design", "UX Design", "Communication", "Leadership", "Teamwork", "Graphics",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "AriSaf Tech Ltd.",
    location: "Mirpur DOHS, Dhaka, Bangladesh",
    period: "02/2020 — 11/2023",
    isCurrent: false,
    accomplishments: [
      "Designing prototypes and presentations for new clients & projects.",
      "Visualizing client concepts and communicating regarding that.",
      "UX research for new products; asset development for branding and UI.",
      "Interfacing between the development team and design team.",
      "Supporting the company with all Graphics & UI/UX Design work.",
    ],
    skills: [
      "Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator",
      "UI Design", "UX Design", "Communication", "Team Leadership",
      "Teamwork", "Graphics", "Project Lead",
    ],
  },
  {
    role: "Jr. UI/UX Designer",
    company: "AriSaf Tech Ltd.",
    location: "Mirpur DOHS, Dhaka, Bangladesh",
    period: "04/2019 — 01/2020",
    isCurrent: false,
    accomplishments: [
      "Designing prototypes and presentations for projects.",
      "Interfacing between the development team and design team.",
      "Supporting the company with all Graphics & UI/UX Design work.",
    ],
    skills: [
      "Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator",
      "UI Design", "UX Design", "Communication", "Teamwork", "Graphics", "CSS", "HTML",
    ],
  },
  {
    role: "UI/UX Designer (Internship)",
    company: "WebHawks IT Ltd.",
    location: "Mirpur DOHS, Dhaka, Bangladesh",
    period: "11/2018 — 03/2019",
    isCurrent: false,
    accomplishments: [
      "Learned about UI/UX Design & Graphics Design.",
      "Interfacing between the development team and design team.",
      "Supporting the company with all Graphics Design work.",
    ],
    skills: [
      "Teamwork", "Graphics", "Adobe XD", "Mobile Apps UI Design", "Website UI Design",
    ],
  },
];

export type Project = {
  id: number;
  name: string;
  description: string;
  type: "work" | "personal";
  category: "ux" | "web" | "mobile";
  status: string;
  links: { label: string; url: string }[];
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    name: "House Finder",
    description:
      "A web and mobile service platform where users can find houses for rent, buy and sell. Provides multiple user roles: User, Agent and Landowner — covering website, web dashboard & mobile application.",
    type: "work",
    category: "ux",
    status: "UI/UX Design Ongoing",
    links: [],
    image: "/project1.png",
    tags: ["UX Research", "Wireframe", "UI Design", "Mobile", "Web"],
  },
  {
    id: 2,
    name: "Whale Swap",
    description:
      "A trading bot blockchain web & mobile dashboard application. Full end-to-end UX research, wireframing and UI design.",
    type: "work",
    category: "ux",
    status: "UI/UX Design Ongoing",
    links: [],
    image: "/project2.png",
    tags: ["UX Research", "Wireframe", "UI Design", "Blockchain", "Dashboard"],
  },
  {
    id: 3,
    name: "Gold Squad VIP Web App",
    description:
      "A trading bot blockchain web & mobile dashboard application. UX research, wireframing and UI design.",
    type: "work",
    category: "ux",
    status: "Development Ongoing",
    links: [],
    image: "/project3.png",
    tags: ["UX Research", "UI Design", "Blockchain", "Dashboard"],
  },
  {
    id: 4,
    name: "AnalyticsX",
    description:
      "A web dashboard tool to generate analysis based on user activity. Full UX research and UI design.",
    type: "work",
    category: "web",
    status: "Development Ongoing",
    links: [],
    image: "/project4.png",
    tags: ["UX Research", "UI Design", "Dashboard", "Analytics"],
  },
  {
    id: 5,
    name: "Salesta",
    description:
      "A web dashboard tool to generate invoices based on user activity.",
    type: "work",
    category: "web",
    status: "Live",
    links: [{ label: "View Live", url: "https://salesta.jp/login" }],
    image: "/project1.png",
    tags: ["UX Research", "UI Design", "Dashboard", "SaaS"],
  },
  {
    id: 6,
    name: "Re-Tourism (Mobile App)",
    description:
      "A tourist app where users can book tours, watch live streams, go on physical tours with a guide, or register as a tour organizer and provide guide services.",
    type: "personal",
    category: "mobile",
    status: "Case Study",
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/171632509/Re-Tourism-Mobile-App-Design",
      },
    ],
    image: "/project2.png",
    tags: ["UX Research", "Wireframe", "UI Design", "Case Study", "Mobile"],
  },
  {
    id: 7,
    name: "HealthCare (Mobile App)",
    description:
      "A healthcare app where people can buy medicine at home, get online doctor services, register for Covid-19 tests, view results, and register for vaccines.",
    type: "personal",
    category: "mobile",
    status: "Live",
    links: [
      { label: "View App", url: "https://healthcare.arisaftech.com/" },
      {
        label: "Behance Case Study",
        url: "https://www.behance.net/gallery/138119489/Health-Care-Application",
      },
    ],
    image: "/project3.png",
    tags: ["UX Research", "Wireframe", "UI Design", "Case Study", "Mobile"],
  },
  {
    id: 8,
    name: "E-commerce Website",
    description:
      "An e-commerce website for selling clothes & gadgets — full UI design and case study.",
    type: "personal",
    category: "web",
    status: "Live",
    links: [
      { label: "View Site", url: "https://twopenny.com.bd/" },
      {
        label: "Behance Case Study",
        url: "https://www.behance.net/gallery/120235671/Twopenny-E-commerce-Website",
      },
    ],
    image: "/project4.png",
    tags: ["UI Design", "Case Study", "E-commerce", "Web"],
  },
  {
    id: 9,
    name: "Proyojan.it (Mobile App)",
    description:
      "A mobile application for digital advertising and digital working for the public.",
    type: "personal",
    category: "mobile",
    status: "Live",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.proyojanit.proyojanapp",
      },
      {
        label: "Behance Case Study",
        url: "https://www.behance.net/gallery/112744333/Proyojanit-AppsCase-Study",
      },
    ],
    image: "/project1.png",
    tags: ["Wireframe", "UI Design", "Case Study", "Mobile"],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  period: string;
};

export const certificates: Certificate[] = [
  {
    title: "Graphics Design",
    issuer: "Bangladesh ICT Division",
    period: "07/2020 — 08/2020",
  },
  {
    title: "Graphics & Web Design",
    issuer: "DISA Institute of Science & Technology (DIST)",
    period: "01/2018 — 12/2018",
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Business Studies",
    institution: "National University",
    period: "10/2014 — 10/2017",
  },
  {
    degree: "HSC",
    institution: "Badiul Alam College, Muradnagar, Cumilla",
    period: "2014",
  },
];

export const contact = [
  { id: "01", label: "EMAIL", value: personal.email, href: `mailto:${personal.email}`, type: "mail" },
  { id: "02", label: "LINKEDIN", value: "md-parvez-khan", href: personal.linkedin, type: "linkedin" },
  { id: "03", label: "BEHANCE", value: "mpkhasan62", href: personal.behance, type: "behance" },
  { id: "04", label: "PHONE", value: personal.phone, href: `tel:${personal.phone}`, type: "phone" },
];
