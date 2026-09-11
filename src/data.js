export const profile = {
  firstName: "Mihir",
  lastName: "Giri",
  role: "MCA Student · Full Stack Developer",
  tagline: "Turning ideas into real-world solutions through code.",
  summary:
    "Currently pursuing MCA (2026–2028) from Srinath University, Jamshedpur, and learning MERN Stack development. Hands-on experience in MERN Stack and ASP.NET through two internships and live deployed projects. Eager to contribute to a dynamic tech team as a Software Developer or Web Development Intern.",
  email: "mihirgiri2@gmail.com",
  phone: "+91 6203570295",
  linkedin: "https://linkedin.com/in/mihir-giri",
  github: "https://github.com/MihirGiri",
  location: "Jamshedpur, Jharkhand",
};

export const stats = [
  { label: "Internships", value: "2" },
  { label: "Live Projects", value: "2" },
  { label: "BCA CGPA", value: "7.71" },
  { label: "Cloud Arcade Legend", value: "2024" },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    place: "Srinath University Jamshedpur",
    period: "2026 – 2028",
    detail: "In progress",
    logo: "/education/srinath-university.png",
  },

  {
    degree: "Bachelor of Computer Applications (BCA)",
    place: "Srinath University Jamshedpur",
    period: "June 2023 – June 2026",
    detail: "CGPA: 7.71 / 10 · Aggregate: 70.35%",
    logo: "/education/srinath-university.png",
  },

  {
    degree: "Higher Secondary Certificate (HSC) — PCM + Computer Science",
    place: "Ghatshila College, Ghatsila",
    period: "2021 – 2023",
    detail: "60.4% · JAC Board",
    logo: "/education/JAC_Ranchi.png",
  },

  {
    degree: "Secondary School Certificate (SSC)",
    place: "B C High School, Shyamsundarpur",
    period: "2019 – 2021",
    detail: "82.80% · JAC Board",
    logo: "/education/JAC_Ranchi.png",
  },
];

export const skills = {
  Languages: ["JavaScript", "Java", "C++", "C#"],
  Frontend: ["React.js", "HTML", "CSS"],
  Backend: ["Node.js", "Express.js", "ASP.NET"],
  Database: ["MongoDB", "MySQL", "SQL"],
  Tools: ["Git", "GitHub", "Visual Studio", "VS Code", "Render"],
};

export const techStack = [
  "React.js",
  "Node.js",
  "MongoDB",
  "ASP.NET",
  "JavaScript",
  "Java",
  "C++",
  "MySQL",
  "Git",
  "VS Code",
];

export const experience = [
  {
    role: "Web Development Intern",
    company: "PaulTech Software Services (OPC) Pvt. Ltd.",
    place: "Jamshedpur, Jharkhand",
    period: "Feb 2026 – Apr 2026",
    logo: "/experience/paultech.png",

    points: [
      "Completed industrial training in Web Development — Live Project",
      "Built full-stack e-commerce web application SwadistChai using MERN Stack",
      "Tech Stack: MongoDB, Express.js, React.js, Node.js",
      "Deployed live project on Render",
      "Certificate No: PSS/848/2026",
    ],
  },

  {
    role: "Web Development Intern",
    company: "Generix InfoTech",
    place: "Jamshedpur, Jharkhand",
    period: "Jun 2025 – Sep 2025",
    logo: "/experience/generix.png",

    points: [
      "Completed internship in Web Development at an ISO 9001:2008 certified company",
      "Built HealthLive — a web-based pharmacy e-commerce application",
      "Tech Stack: ASP.NET (C#), HTML, CSS, JavaScript, MySQL",
      "Certificate No: GEN/2025/C62",
    ],
  },
];

export const projects = [
  {
    name: "SwadistChai",
    type: "E-commerce Web Application",
    period: "Feb 2026 – Apr 2026",

    image: "/projects/swadistchai.png",

    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
    ],

    points: [
      "Developed a full-stack e-commerce web application for an artisan whole-leaf tea brand.",
      "Implemented product catalog, responsive UI, and complete MERN Stack architecture.",
      "Deployed on Render with a live production environment.",
    ],

    live: "https://swadistchai.onrender.com/",
    code: "#",
  },

  {
    name: "HealthLive",
    type: "Pharmacy E-commerce Application",
    period: "Jun 2025 – Sep 2025",

    image: "/projects/healthlive.png",

    stack: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],

    points: [
      "Built a web-based pharmacy e-commerce application for ordering medicines online.",
      "Implemented product listings, medicine catalog, cart functionality, and MySQL database.",
      "Built with Visual Studio using the ASP.NET (C#) framework.",
    ],

    live: "#",
    code: "#",
  },
];

export const certificates = [
  {
    title: "Google Cloud Arcade Legend 2024",
    issuer: "Google Cloud",
    date: "2024",
    image: "/certificates/google-cloud-arcade.png",
    detail:
      "Earned Google Cloud Arcade Legend badge and exclusive swag from the Google Cloud program.",
  },

  {
    title: "Internship Certificate",
    issuer: "Generix InfoTech",
    date: "Sep 2025",
    image: "/certificates/generix-certificate.png",
    detail:
      "Completion in Web Development · Cert No: GEN/2025/C62",
  },

  {
    title: "Industrial Training Certificate",
    issuer: "PaulTech Software Services",
    date: "Apr 2026",
    image: "/certificates/paultech-certificate.png",
    detail:
      "Completion in Web Development Live Project · Cert No: PSS/848/2026",
  },

  {
  title: "Graduate Employability Enhancement Training",
  issuer: "Learnnet Skills in partnership with Yuva",
  date: "May 2026",
  image: "/certificates/infosysGEET-certificate.png",
  detail:
    "Certificate of Participation · Supported by Infosys Foundation · Trainee ID: U25000152313 · Srinath University, Jharkhand",
},
];
