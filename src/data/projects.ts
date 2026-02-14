export const projects = [
  {
    name: "County Level Air Quality Prediction (CLAP)",
    type: "Full-Stack Web Application",
    desc: "CLAP is a single-page web application that utilizes a Machine-Learning model and historical AQI data to predict the future AQI for over 770+ U.S. county locations.",
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
          label: "Frontend & Backend Git (Public)",
          url: "https://github.com/cchung7/clap_v1.2-render",
          disabled: false,
        },
      ],
    },
    tags: [
      "Python",
      "Flask",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Vite",
      "Render",
    ],
  },
  {
    name: "Binnerri Pickleball Club (BPC)",
    type: "Full-Stack Web Application",
    desc: "BPC features a home page that displays events and members/users. Visitors may apply for membership. An admin page manages all users/members and events.",
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
          label: "Frontend Git (Private)",
          url: "https://github.com/cchung7/bpc_fe",
          disabled: true,
        },
        {
          label: "Backend Git (Private)",
          url: "https://github.com/cchung7/bpc_be",
          disabled: true,
        },
      ],
    },
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "MongoDB",
      "Ubuntu VPS",
    ],
  },
];
