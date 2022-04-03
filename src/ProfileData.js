import packageInfo from "../package.json";
import resumePDF from "./assets/media/resume.pdf";

const ProfileData = {
    uiConfig: { username: "akverma26@web", version: "v" + packageInfo.version },
    name: {
        firstName: "Ankit",
        lastName: "Kumar",
    },
    resumePDF: resumePDF,
    aboutSection: {
        title: "DevOps Engineer | Developer | Programmer",
        education:
            "+ Graduated from NIT Hamirpur, B.Tech in Computer Science and Engineering (2016 - 2020)",
        currentStatus:
            "+ Currently working as Software Engineer at Samsung Electronics (SRID) Delhi, India. (Jan 2021 - Present)",
    },
    skillsSection: [
        {
            type: "Programming Languages",
            skills: ["JavaScript", "Python", "C", "C++"],
        },
        {
            type: "DevOps",
            skills: [
                "AWS",
                "Kubernetes",
                "Docker",
                "Jenkins",
                "Sensu",
                "Grafana",
                "Git",
                "Linux",
            ],
        },
        {
            type: "Web Development",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "ReactJS",
                "NodeJS",
                "Django",
            ],
        },
        {
            type: "Development Tools and Technologies",
            skills: [
                "SQL",
                "Postgres",
                "Git",
                "Linux",
                "PyQt5",
                "OpenGL",
                "Blockchain",
            ],
        },
    ],
    projectsSection: [
        {
            title: "Voting System using Blockchain",
            description: [
                "Developed a web application platform to demonstrate the Indian Election System process online using Blockchain technology.",
                "Using this platform user can cast his/her vote online after logging in the site by entering his/her (dummy) Aadhar ID and OTP (for demonstration OTP is being sent to the Email ID entered by the user).",
                "Developed the backend using Python Framework Django and Blockchain technology is used to store the records of the transactions.",
            ],
            stack: [
                "Python",
                "Django",
                "HTML",
                "CSS",
                "JavaScript",
                "Jinja2",
                "Blockchain",
            ],
            actions: [
                {
                    action: "github",
                    link: "https://github.com/akverma26/Voting-System-using-Block-Chain-Technology",
                },
                {
                    action: "demo",
                    link: "https://vote.pythonanywhere.com/",
                },
            ],
        },
        {
            title: "Deductions",
            description: [
                "This is my personal blog website, where I share some tricks and hacks, some learnings, some code snippets and much more in my words and my way.",
                "Backend is developed using Python framework Django and posts I am creating in Markdown language and using Typora as local editor and to export Markdown into actual HTML.",
                "Next I'm planning to develop it's frontend using ReactJS and custom script to convert Markdown into HTML.",
            ],
            stack: [
                "Python",
                "Django",
                "HTML",
                "CSS",
                "JavaScript",
                "Markdown",
            ],
            actions: [
                {
                    action: "github",
                    link: "https://github.com/akverma26/Deductions",
                },
                {
                    action: "github",
                    link: "https://github.com/akverma26/Deductions-Include",
                },
                {
                    action: "demo",
                    link: "https://deductions.pythonanywhere.com/",
                },
            ],
        },
    ],
    contactsSection: [
        {
            type: "email",
            contact: "akverma0026@gmail.com",
        },
        {
            type: "linkedin",
            contact: "https://www.linkedin.com/in/akverma26/",
        },
        {
            type: "github",
            contact: "https://github.com/akverma26/",
        },
        {
            type: "instagram",
            contact: "https://www.instagram.com/kumar_ankit26/",
        },
        {
            type: "twitter",
            contact: "https://twitter.com/ankit_kumar26",
        },
    ],
    routes: [
        { path: "/", name: "about", menuText: "About" },
        { path: "/#/skills", name: "skills", menuText: "Skills" },
        { path: "/#/projects", name: "projects", menuText: "Projects" },
        { path: "/#/contacts", name: "contacts", menuText: "Contacts" },
        { path: "/#/resume.pdf", name: "resume.pdf", menuText: "CV/Resume" },
    ],
};

export default ProfileData;
