export const projects = [
  {
    name: "UT Dallas Student Veterans Association Administrative Platform",
    type: "Student Organization & Events Management Platform",
    desc: "AP is a full-stack web platform developed for the UT Dallas Student Veterans Association to support member engagement, event registration, attendance tracking, and administrative workflows. The system features role-based access control, secure JWT cookie-based authentication, registration and check-in flows, and dedicated dashboards for members and administrators.",
    links: {
      live: [
        {
          label: "Live Website (Vercel)",
          url: "https://ap-fe-six.vercel.app/",
          disabled: false,
        },
      ],
      git: [
        {
          label: "Frontend Repository (Private)",
          url: "https://github.com/cchung7/ap_fe",
          disabled: true,
        },
        {
          label: "Backend Repository (Private)",
          url: "https://github.com/cchung7/ap_be",
          disabled: true,
        },
      ],
    },
    tags: [
      // Frontend
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      // Backend
      "RESTful APIs",
      "MongoDB",
      "Prisma ORM",
      // Security & Access Control
      "JWT Authentication",
      "Cookie-Based Authentication",
      "Role-Based Access Control",
      // Product Features
      "Admin Dashboard",
      "User Dashboard",
      "Event Registration",
      "Attendance Tracking",
      "Points / Rewards System",
      "Transactional State Updates",
      // Infrastructure
      "Vercel Deployment"
    ]
  },
  {
    name: "Binnerri Pickleball Club Administrative Platform",
    type: "Membership, Event & Admin Management Platform",
    desc: "BPC is a production-grade web platform supporting membership applications, event management, and administrative workflows. The system features role-based access control, dynamic event publishing, and an admin dashboard for user and operational management.",
    links: {
      live: [
        {
          label: "Live Website (Hostinger VPS)",
          url: "https://binnerripickleball.com/",
          disabled: false,
        },
      ],
      git: [
        {
          label: "Frontend Repository (Private)",
          url: "https://github.com/cchung7/bpc_fe",
          disabled: true,
        },
        {
          label: "Backend Repository (Private)",
          url: "https://github.com/cchung7/bpc_be",
          disabled: true,
        },
      ],
    },
    tags: [
      // Frontend
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      // Backend
      "Node.js (Express)",
      "MongoDB Atlas",
      "Prisma ORM",
      // Security & Access Control
      "JWT Authentication",
      "Role-Based Access Control",
      "Email Verification (OTP)",
      // Media & Storage
      "File Upload Handling (Multer)",
      "DigitalOcean Spaces (S3)",
      // Infrastructure
      "VPS Deployment"
    ]
  },
  {
    name: "County-Level Air Quality Prediction Web Application",
    type: "Predictive Analytics Platform",
    desc: "CLAP is a production-deployed single-page web application that leverages a machine learning model trained on historical EPA AQI datasets to forecast future AQI values for 770+ U.S. counties. The platform integrates a Flask-based API backend with a React frontend for real-time prediction and visualization.",
    links: {
      live: [
        {
          label: "Live Demo (Render)",
          url: "https://clap-v1-2-render.onrender.com/",
          disabled: false,
        },
      ],
      git: [
        {
          label: "Frontend & Backend Repository (Public)",
          url: "https://github.com/cchung7/clap_v1.2-render",
          disabled: false,
        },
      ],
    },
    tags: [
      "Python",
      "Flask",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "LightGBM",
      "RESTful APIs",
      "ML Model Deployment",
      "React",
      "Vite",
      "Tailwind CSS",
      "Cloud Deployment"
    ],
  },
];
