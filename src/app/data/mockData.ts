// mockData.ts
import { bhadepayimg, botwot, myaimate, fretbox, superdm , ait, aps} from "../../../public/images";
export const mockData = {
  users: [
    {
      id: 1,
      img: "https://media.superdm.me/images/profile/90a4797b1db0be1798c/yrl045h.jpeg",
      name: "Devesh Tiwari",
      role: "Frontend Developer, Final year-AITP",
      location: "Pune, Maharashtra, India",
      profileLink: "https://www.linkedin.com/in/deveshtiwarii/",

      chats: [
        {
          sender: "Devesh Tiwari",
          route: "https://www.linkedin.com/in/deveshtiwarii/",
          message: [
            {
              line: "Hi, I am Devesh. I am Final year Engg Student and a frontend developer.",
            },
            {
              line: "Cold-reachouts are broken and normal resume sharing or assignments are boring that's why I decided to create this to show my skills and to get a chance to work with you.",
            },
            {
              line: "Please checkout the chatbot and ask any question about me. X)",
            },
          ],
        },
        {
          sender: "You",
          route: "https://www.linkedin.com/in/deveshtiwarii/",
          message: "Find more about me in the Sidebar <--",
        },
      ],
    },
    {
      id: 2,
      name: "Experience",
      role: "All the internship work experince.",
      location: "Pune, Maharashtra, India",
      profileLink: "https://www.linkedin.com/in/deveshtiwarii/",

      chats: [
        {
          sender: "Devesh Tiwari",
          message: [
            {
              line: "Talking about my experince, I have 1.5 years of internship experience working with different companies and startups.",
            },
            {
              line: "Most of them were early-stage startups and where I worked most of the time on the frontend part of the project.",
            },
            {
              line: "I have listed them on the sidebar but for for detail read below or download my resume X)",
            },
          ],
        },
        {
          sender: "You",
          message: [
            {
              line: "1. App Developer at FretBox ",
            },
            {
              line: "I worked here for almost 3 months and worked in their hostel management SaaS product using angular framework, typescript along with tailwindcss and material UI. I worked on revamping the UI created multiple pages added additional searching and sorting functionalities. Also optimised the existing codebase. It was fun after all.",
            },
          ],
        },
        {
          sender: "Devesh Tiwari",
          message: [
            {
              line: "2. Frontend Developer at myAImate",
            },
            {
              line: "I crafted an interactive platform where kids dive into AI and ML, creating both a free quiz page and a paid playground section. Built with ReactJS, TypeScript, Material libraries, and Bootstrap, the platform merges fun with learning. To top it off, I implemented Firebase and Firestore, ensuring seamless authentication and database management.",
            },
          ],
        },
        {
          sender: "You",
          message: [
            {
              line: " And also I have done multiple freelance projects and worked with different clients. Along with that also done some few open source projects.",
            },
            {
              line: "To know more checkout the bot in the left bottom XD",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Technical and Soft Skills",
      role: "Talking about the skills I have.",
      location: "Pune, Maharashtra, India",
      profileLink: "https://www.linkedin.com/in/deveshtiwarii/",

      chats: [
        {
          sender: "Devesh Tiwari",
          message: [
            {
              line: "Ok now talking about my skills, I am mainly a frontend developer and I have done soome exceptional work using next and react. I have also worked with angular.",
            },
            {
              line: "But, but, but I am not limited to frontend only. I have also worked with backend technologies like node and express. Done some cool ML projects and also worked with firebase and firestore.",
            },
          ],
        },
        {
          sender: "You",
          message: [
            {
              line: "Ok so for the frontend part I use - React, Next, Angular, Typescript, Material UI, Tailwindcss, Bootstrap, Saas and whatnot for UI. Also used GSAP and framer motion for animations.",
            },
            {
              line: "and in react I have worked with context API, Axios, recoil, redux, redux-thunk, redux-saga, and also with react-query.",
            },
          ],
        },
        {
          sender: "sda",
          message: [
            {
              line: "Also i am always open to learn new stuff and I am also learning stuff related to DevOps like kubernetes, Docker and AWS.",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Projects",
      role: "All the projects I have worked on.",
      location: "Pune, Maharashtra, India",
      profileLink: "https://www.linkedin.com/in/deveshtiwarii/",

      chats: [
        {
          sender: "Devesh Tiwari",
          route: "https://www.linkedin.com/in/deveshtiwarii/",
          message: [
            {
              line: "Ok so lets keep this section short, I will never (and i swear) show my projects like the boring way and describe them.",
            },
            {
              line: "Instead either ask the bot about my projects or to see the canvas i have prepared click on the button below. ",
            },
          ],
        },
      ],
    },
  ],

  addMessage(userId: number, sender: string, message: string) {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      user.chats.push({ sender, message });
    }
  },
};

export const profileData = {
  img: "https://media.superdm.me/images/profile/90a4797b1db0be1798c/yrl045h.jpeg",
  name: "Devesh Tiwari",
  role: "Frontend Developer, Final year-AITP",
  location: "Pune, Maharashtra, India",
  profileLink: "https://www.linkedin.com/in/deveshtiwarii/",
  experience: [
    {
      img: superdm,
      position: "Frontend Developer",
      company: "SuperDM · Internship",
      role: 1,
      duration: "Aug 2024 - Aug 2024 · 1 mo",
    },
    {
      img: botwot,
      position: "Frontend Developer",
      company: "BotWot · Internship",
      role: 1,
      duration: "June 2024 - Aug 2024 · 3 mos",
    },
    {
      img: fretbox,
      alt: "FretBox",
      position: "App Developer ",
      role: 1,
      company: "FretBox · Internship",
      duration: "Jan 2024 - June 2024 · 5 mos",
    },
    {
      img: myaimate,
      position: "Frontend Developer",
      company: "myAImate · Part-time",
      role: 1,
      duration: "Oct 2023 - Dec 2023 · 3 mos",
    },
    {
      img: bhadepayimg,
      position: "Frontend Developer",
      company: "BhadePay CRM · Internship",
      role: 1,
      duration: "June 2023 - Sept 2023 · 4 mos",
    },
  ],
  education: [
    {
      img: ait,
      alt:"ait",
      institution: "Army Institute of Technology, Pune",
      degree: "Bachelor of Engineering (B.E.)",
      duration: "2021 - 2025",
    },
    {
      img: aps,
      institution: "Army Public School",
      degree: "High School - PCM",
      duration: "2018 - 2020",
    },
  ],
};
