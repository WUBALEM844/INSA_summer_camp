# Personal Portfolio Website 
A modern and responsive personal portfolio website built with React.js to showcase my skills, projects, experience, and contact information.

## 👨‍💻 About Me

Hi, I'm Wubalem Gashaw, an Information Technology student and Full Stack Developer passionate about building modern web applications.

I work with frontend and backend technologies to create clean, responsive, and user-friendly solutions.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Material UI
- React Icons

### Tools
- Git
- GitHub
- VS Code
- npm

## ✨ Features

- Responsive design for desktop and mobile
- Hero section with profile information
- About Me section
- Skills showcase
- Project cards
- Contact form
- Smooth navigation
- Modern UI design

## 📂 Projects Included

### 📚 Digital Library Management System

A full-stack library management application that helps manage books, users, borrowing, and authentication.

**Technologies:**
- React
- Node.js
- Express.js
- MySQL
- Material UI


### 🚀 DevLaunch

A modern developer platform designed to showcase and manage innovative ideas using a clean and responsive interface.

**Technologies:**
- React
- JavaScript
- CSS3

---

## 📁 Project Structure

portfolio/
│
├── public/
│   ├── favicon.ico
│   ├── project1.JPG
│   ├── project2.png
│   └── profile.jpg
│
├── src/
│   │
│   ├── assets/
│   │   │
│   │   ├── images/
│   │   │   ├── profile.jpg
│   │   │   ├── hero.png
│   │   │   ├── project-library.png
│   │   │   └── project-devlaunch.png
│   │   │
│   │   ├── icons/
│   │   │   ├── github.svg
│   │   │   ├── linkedin.svg
│   │   │   └── email.svg
│   │   │
│   │   └── files/
│   │       └── Wubalem_Gashaw_CV.pdf
│   │
│   │
│   ├── components/
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   │
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   │
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   │
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   │
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.css
│   │   │
│   │   ├── Certifications/
│   │   │   ├── Certifications.jsx
│   │   │   └── Certifications.css
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │
│   │
│   ├── data/
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── experience.js
│   │   ├── certifications.js
│   │   └── social.js
│   │
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   │
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   ├── animations.css
│   │   └── responsive.css
│   │
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── vite.config.js
└── index.html

Component Responsibility
Navbar
 └── Navigation links + smooth scroll

Hero
 └── Name, role, profile image, CV download

About
 └── Personal introduction

Skills
 └── Technical skills with icons

Projects
 └── Project cards:
      - Digital Library Management System
      - DevLaunch

Experience
 └── Internship, education, work timeline

Certifications
 └── Certificates:
      - Cisco
      - Red Hat
      - Udacity
      - AICTE/OIBSIP

Contact
 └── Contact form + social links

Footer
 └── Copyright + quick links
Data Folder Purpose
data/
│
├── skills.js
       → React, Node.js, MySQL, Git...

├── projects.js
       → Digital Library, DevLaunch

├── experience.js
       → Internship and education

├── certifications.js
       → Certificates list

└── social.js
       → GitHub, LinkedIn, Email