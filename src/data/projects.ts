export const projects = [
  {
    name: "County-Level Air Quality Prediction (CLAP)",
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
      "LightGBM",
      "RESTful APIs",
      "Machine Learning Model Deployment",
      "React",
      "Tailwind CSS",
      "Cloud Deployment (Render / Vercel)"
    ],
  },
  {
    name: "Binnerri Pickleball Club (BPC)",
    type: "Membership, Event & Admin Platform",
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
      // Backend
      "Node.js (Express)",
      "MongoDB Atlas",
      "Prisma ORM",
      // Security & Access Control
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Email Verification (OTP)",
      // Media & Storage
      "File Upload Handling (Multer)",
      "DigitalOcean Spaces (S3)",
      // Infrastructure
      "VPS Deployment"
    ]
  },
];
