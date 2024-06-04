import {
mobile,
backend,
creator,
web,
javascript,
typescript,
html,
css,
reactjs,
redux,
tailwind,
nodejs,
mongodb,
git,
figma,
docker,
liyang,
nnu,
unsw,
carrent,
jobit,
tripguide,
threejs,
} from "../assets";

export const navLinks = [
{
    id: "about",
    title: "About",
    url:'#about'
},
{
    id: "work",
    title: "Work",
    url:'#work'
},
{
    id: "contact",
    title: "Contact",
    url:'#contact'
},
    {
    id: "blog",
    title: "Blog",
    url:'https://pigassooo.github.io/my-blog/'
}
];

const services = [
{
    title: "Web Developer",
    icon: web,
},
{
    title: "Full Stack Developer",
    icon: mobile,
},
{
    title: "Backend Developer",
    icon: backend,
},
{
    title: "AI Enthusiast",
    icon: creator,
},
];

const technologies = [
{
    name: "HTML 5",
    icon: html,
},
{
    name: "CSS 3",
    icon: css,
},
{
    name: "JavaScript",
    icon: javascript,
},
{
    name: "TypeScript",
    icon: typescript,
},
{
    name: "React JS",
    icon: reactjs,
},
{
    name: "Redux Toolkit",
    icon: redux,
},
{
    name: "Tailwind CSS",
    icon: tailwind,
},
{
    name: "Node JS",
    icon: nodejs,
},
{
    name: "MongoDB",
    icon: mongodb,
},
{
    name: "Three JS",
    icon: threejs,
},
{
    name: "git",
    icon: git,
},
{
    name: "figma",
    icon: figma,
},
{
    name: "docker",
    icon: docker,
},
];

const experiences = [
{
    title: "Senior High School",
    school_name: "SLZ",
    icon: liyang,
    iconBg: "#E6DEDD",
    date: "September 2019 - June 2022",
    points: [
    "Chinese, Mathematics, English, Japanese, Physics, Chemistry, Geography",
    "NEMT of 600 points, Ranking 1.3w among 40.6w",
    "Served as the Class president, overseeing and maintaining the order of the entire class.",
    "First prize in the National High School Mathematics Competition.",
    "Third Prize at the provincial level in the JPSTMC.",
    "Excellence Certificate during the Nankai University Winter Camp program.",
    "150+ hours dedicated to community volunteer work.",
    ],
},
{
    title: "First Undergraduate program",
    school_name: "NNU",
    icon: nnu,
    iconBg: "#E6DEDD",
    date: "September 2022 - July 2024",
    points: [
    "GPA:81/100, the top 10% of the grade.",
    "Overall score ranked sixth across the entire school.",
    "Received scholarships three times.",
    "Served as the Grade president, overseeing and maintaining the order of the entire class.",
    "Leading a team to achieve a national-level project designation within NUIEP.",
    "400+ hours dedicated to community volunteer work.",
    ],
},
{
    title: "Second Undergraduate program",
    school_name: "UNSW",
    icon: unsw,
    iconBg: "#E6DEDD",
    date: "September 2024 - Now",
    points: [
    "TO BE CONTINUED",
    ],
}
];

const testimonials = [
{
    testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
    testimonial:
    "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
    testimonial:
    "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
},
];

const projects = [
{
    name: "Car Rent",
    description:
    "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
    {
        name: "react",
        color: "blue-text-gradient",
    },
    {
        name: "mongodb",
        color: "green-text-gradient",
    },
    {
        name: "tailwind",
        color: "pink-text-gradient",
    },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
},
{
    name: "Job IT",
    description:
    "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
    {
        name: "react",
        color: "blue-text-gradient",
    },
    {
        name: "restapi",
        color: "green-text-gradient",
    },
    {
        name: "scss",
        color: "pink-text-gradient",
    },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
},
{
    name: "Trip Guide",
    description:
    "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
    {
        name: "nextjs",
        color: "blue-text-gradient",
    },
    {
        name: "supabase",
        color: "green-text-gradient",
    },
    {
        name: "css",
        color: "pink-text-gradient",
    },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
},
];

export { services, technologies, experiences, testimonials, projects };