export const RESUME = {
  role: "Software Developer · Full-Stack & Backend",
  location: "Shimla, Himachal Pradesh, India",
  summary:
    "Computer Science undergraduate (B.Tech, CGPA 8.48/10) and software developer with hands-on experience building and deploying full-stack web applications and RESTful APIs using Next.js, React, TypeScript, Node.js, Express.js, MongoDB, and SQL. Experienced in secure authentication (JWT, bcrypt), automated testing (Jest, Supertest), API performance optimization, and CI/CD with GitHub Actions. Strong foundation in Data Structures, Algorithms, and problem-solving, with a focus on reliable, scalable, and maintainable code.",
  stats: [
    { value: "8.48", label: "CGPA (B.Tech)" },
    { value: "43", label: "Integration tests written" },
    { value: "3", label: "Projects built" },
  ],
  skills: [
    {
      label: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "C", "C++", "SQL"],
    },
    {
      label: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Axios"],
    },
    {
      label: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "Role-Based Access Control",
        "Nodemailer",
      ],
    },
    {
      label: "Databases",
      items: ["MongoDB", "Mongoose", "SQL", "SQLite", "DBMS"],
    },
    {
      label: "Testing & Performance",
      items: [
        "Jest",
        "Supertest",
        "Artillery Load Testing",
        "Caching",
        "Database Indexing",
        "Pagination",
      ],
    },
    {
      label: "DevOps & Deployment",
      items: [
        "Vercel",
        "Deployment",
        "CI/CD",
        "GitHub Actions",
        "Cloudinary",
        "Mailtrap",
      ],
    },
    { label: "Tools", items: ["Git", "GitHub", "Postman"] },
    {
      label: "Core CS",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Problem Solving",
      ],
    },
  ],
  experience: [
    {
      title: "Junior Backend Developer Intern",
      org: "YuvaIntern",
      date: "Jul 2026 – Aug 2026",
      points: [
        "Developed RESTful APIs with Node.js, Express.js, and SQLite, including request validation and centralized error handling.",
        "Improved API performance through pagination, database indexing, caching, and load testing with Artillery.",
        "Wrote 43 integration tests with Jest and Supertest covering CRUD operations, workflows, and database interactions.",
        "Configured GitHub Actions CI/CD to run integration tests automatically on every push and pull request.",
      ],
    },
  ],
  projects: [
    {
      title: "Full-Stack Authentication Application",
      badge: "Deployed on Vercel",
      tech: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Nodemailer",
        "Mailtrap",
        "Axios",
        "JWT",
        "bcrypt",
      ],
      points: [
        "Built a full-stack authentication system with Next.js, React, TypeScript, and MongoDB featuring secure registration and login.",
        "Implemented JWT-based authentication and bcrypt password hashing to protect user credentials and sessions.",
        "Developed email verification and forgot/reset password flows using Nodemailer with Mailtrap.",
        "Designed a responsive UI with Tailwind CSS and deployed the application to production on Vercel.",
      ],
    },
    {
      title: "Project Management System (Backend)",
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "bcrypt",
        "Multer",
      ],
      points: [
        "Built a RESTful backend with JWT authentication, role-based access control, and CRUD operations for projects, tasks, and team members.",
        "Implemented email verification, password reset, file uploads, and a scalable MongoDB schema design.",
      ],
    },
    {
      title: "VidTube (Backend)",
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Cloudinary",
        "Multer",
      ],
      points: [
        "Developed a YouTube-inspired backend supporting video uploads, playlists, subscriptions, likes, comments, and watch history.",
        "Integrated Cloudinary for media storage, JWT authentication, and modular REST APIs for efficient data management.",
      ],
    },
  ],
  education: [
    {
      title: "B.Tech, Computer Science & Engineering",
      org: "University Institute of Technology, Shimla",
      detail: "CGPA: 8.48 / 10.0",
      date: "Expected 2027",
    },
    {
      title: "Senior Secondary (Class XII)",
      org: "Rotary Public School, Gurugram (CBSE)",
      detail: "Percentage: 85.0%",
      date: "2022",
    },
    {
      title: "Secondary (Class X)",
      org: "Rotary Public School, Gurugram (CBSE)",
      detail: "Percentage: 86.8%",
      date: "2020",
    },
  ],
  achievements: [
    "Winner and runner-up in inter-college chess competitions; runner-up at the IIT Mandi Fest Chess Tournament.",
    "Built strategic thinking and analytical problem-solving through competitive chess.",
    "Interests: chess, fiction, cooking.",
  ],
};
