import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
 
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },



  
 
  
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

// @/constants.ts



// @/constants.ts

import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import the appropriate icons

export const Socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.svg", // Replace with the appropriate LinkedIn icon path
    icon: FaLinkedin, // Replace with the appropriate icon component
    url: "https://www.linkedin.com/in/raj-gupta-b8363719b/",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
    icon: FaFacebook,
    url: "https://www.facebook.com/profile.php?id=your-facebook-id",
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    icon: FaInstagram,
    url: "https://www.instagram.com/me_rajgupta_/",
  },
];


export const Projects = [
  {
    title: "Modern Website",
    text: "Shopping Zone Website (10/2023 - Present)",

    src: "/NextWebsite.png",
  },
  {
    title: "FoodzA Website",
    text: "Food ordering is the process of ordering food from a local restaurant or food cooperative through it",

    src: "/SpaceWebsite.png",
  },
  {
    title: "Modern Nextjs Portfolio",
    text: "Portfolio website by using frontend ",
    src: "/WebPortfolio.png",
  },
  {
    title: "Tic-Tac-Toe",
    text: "GAming website ",
    src: "/Matrix.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
