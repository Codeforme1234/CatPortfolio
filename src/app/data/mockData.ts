// mockData.ts
import { mindtickle, dobr, botwot, fretbox, superdm , ait, aps, Profile} from "../../../public/images";

export const img = Profile
export const name = "Devesh Tiwari"
export const role = "Software Developer"
export const location = "Pune, Maharashtra, India"
export const profileLink = "https://www.linkedin.com/in/deveshtiwarii/"

// Clean JSON structure with \n for new lines and $$ for usernames
export const mockData = {
  users: [
    {
      id: 1,
      img: Profile,
      name: name,
      role: role,
      location: location,
      profileLink: profileLink,
      chats: [
        {
          sender: "$$Devesh Tiwari",
          message: "Hi, I am Devesh. A Software Developer from India having Bachelor's in Engineering.\n\nCold-reachouts are broken and normal resume sharing or assignments are boring that's why I decided to create this to show my skills and to get a chance to work with you."
        },
        {
          sender: "$$You",
          message: "Or click on the Company card --> \n\nto know more about my experience."
        },
        {
          sender: "$$Devesh Tiwari",
          message: "Find more about me in the Sidebar <-- X)"
        }
      ]
    },
    {
      id: 2,
      name: "Experience",
      role: "All the internship work experience.",
      location: "Pune, Maharashtra, India",
      profileLink: "https://www.linkedin.com/in/deveshtiwarii/",
      chats: [
        {
          sender: "$$Devesh Tiwari",
          message: "Talking about my experience, I have 2 years of experience working with different companies and startups.\n\nMost of them were early-stage startups and where I worked as a Full Stack Developer.\n\nI have listed them on the sidebar. click on them to know in detail about my experience X)"
        },
        {
          sender: "$$You",
          message: "Else you can check out my resume here --> https://drive.google.com/file/d/1QuNfLYaurTjym7dGKI67PpR9LDY5ODNW/view?usp=sharing"
        },
      ]
    },
    {
      id: 3,
      name: "Technical and Soft Skills",
      role: "Talking about the skills I have.",
      location: "Pune, Maharashtra, India",
      profileLink: "https://www.linkedin.com/in/deveshtiwarii/",
      chats: [
        {
          sender: "$$Devesh Tiwari",
          message: "Ok now talking about my skills, I am a Software Developer and I have done some exceptional work using next and react like this portfolio XD."
        },
        {
          sender: "$$You",
          message: "For the frontend part I use - React, Next, Angular, Typescript, Material UI, Tailwindcss, Bootstrap, Saas and whatnot for UI. Also used GSAP and framer motion for animations."
        },
        {
          sender: "$$Devesh Tiwari",
          message: "And for the backend part I use - Go, Java and NodeJS and sometimes Python. \n\nAlso I have worked with AWS, Kubernetes, Docker, DataDog, Kafka, Snowflake, Lambda, Step Functions, S3, and many more."
        },
        {
          sender: "$$You",
          message: "I have also worked with a vareity of databases like MongoDB, PostgreSQL, MySQL, Couchbase and DynamoDB. Sometimes I also deepdive into stuff related to AI like agentic workflows."
        }
      ]
    },
    {
      id: 5,
      name: "Freelance Projects",
      role: "All the projects I have worked on.",
      location: "Pune, Maharashtra, India",
      profileLink: "https://www.linkedin.com/in/deveshtiwarii/",
      chats: [
        {
          sender: "$$Devesh Tiwari",
          message: "I’ve worked on quite a few things as a freelancer — from creating landing pages to building full-fledged softwares like CMS, LMS, and even MVP applications for clients."
        },
        {
          sender: "$$You",
          message: "That sounds like a mix of quick projects and heavy ones. Any recent work that really stood out?"
        },
        {
          sender: "$$Devesh Tiwari",
          message: "Yeah, the most recent one was for an educational institute called Shoonyaveer in India.\n\nI helped them go online, starting with a landing page and then building an LMS from scratch."
        },
        {
          sender: "$$Devesh Tiwari",
          message: "The LMS managed virtual classes, payments, and even tracked homework for students — all in one place."
        },
        {
          sender: "$$You",
          message: "Okay, but did you stop there or was there more?"
        },
        {
          sender: "$$Devesh Tiwari",
          message: "Oh, I went further. I built a content management system where teachers could create custom study material, assign tests, and even generate AI-powered questions and modules.\n\nSo yeah — not just quick fixes, but end-to-end solutions where I handled pretty much everything myself."
        }
      ]
    }
    
  ],

  addMessage(userId: number, sender: string, message: string) {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      user.chats.push({ sender: `$$${sender}`, message });
    }
  },
};

// Company-specific chat data with clean structure
export const companyChatData = {
  mindtickle: [
    {
      sender: "$$Devesh Tiwari",
      message: "I am currently working as a Software Developer Intern at Mindtickle, and it’s been an amazing 7 months so far. Mindtickle operates in the sales enablement and coaching domain, where we design and maintain enterprise-grade software solutions.\n\nI am part of the Rev-LMS team, which contributes to 50% of the company’s revenue and is the most widely used product by our clients."
    },
    {
      sender: "$$You",
      message: "The tech stack I worked with here includes Go, Java, Python, Node.js, and React. But what stood out the most was the exposure to AWS infrastructure.\n\nI gained hands-on experience with services such as Lambda, Step Functions, S3, DynamoDB, Snowflake, and also worked with tools and platforms like DataDog, Kubernetes, and Kafka."
    },
    {
      sender: "$$Devesh Tiwari",
      message: "The culture at Mindtickle is fantastic—supportive, collaborative, and growth-oriented.\n\nThis internship has given me valuable experience in building and maintaining large-scale applications while learning how enterprise-level software systems are designed, scaled, and managed."
    },
    {
      sender: "$$You",
      message: "Key contributions:\n\n• Led the migration of services from Couchbase to DynamoDB, reducing infrastructure costs by up to $100K annually.\n• Redesigned the admin site, significantly improving the user experience and usability.\n• Served as an on-call engineer, enhancing service health by proactively monitoring systems, fine-tuning alerts, and implementing real-time fixes to prevent API overload.\n• Worked on complex data migration projects, including a backdated migration of 145k+ records, ensuring consistency across both legacy and new systems."
    }
  ],
  dobr: [
    {
      sender: "$$Devesh Tiwari",
      message: "I worked as a Software Developer Intern at Dobr.AI for 2 months, where I got the opportunity to take full ownership of products at a very early stage.\n\nDobr.AI is an innovative company building next-generation AI-powered interview and assessment solutions."
    },
    {
      sender: "$$You",
      message: "Key contributions:\n\n• Built a browser extension that allows users to seamlessly convert any LeetCode problem into a Dobr interview, enhancing user engagement and platform utility.\n• Improved interview security on the Scout platform by implementing video proctoring and monitoring keyboard and camera activity.\n• Deprecated and refactored legacy code in the Coach platform’s code editor, significantly boosting maintainability and performance.\n• Worked across the stack using React (React Query, Zustand, Redux), FastAPI for backend services, and AWS infrastructure."
    },
    {
      sender: "$$Devesh Tiwari",
      message: "you can even check out the extension I built here --> \n\nhttps://chromewebstore.google.com/detail/ajnlblnaolamomfhakmemjanajfjoako?utm_source=item-share-cb"
    },
    {
      sender: "$$Devesh Tiwari",
      message: "This internship gave me valuable experience in owning features end-to-end in a fast-paced startup environment, while working on highly impactful AI-driven products."
    }
  ],  
  superdm: [
    {
      sender: "$$Devesh Tiwari",
      message: "SuperDM was a great learning experience! 💪\n\nI worked as a Frontend Developer Intern for 1 month, focusing on social media management tools.\n\nSuperDM provides comprehensive social media management and analytics solutions."
    },
    {
      sender: "$$You",
      message: "During this short but intensive period, I:\n\n• Built responsive dashboard components using React and modern CSS\n• Worked on data visualization components for social media analytics\n• Implemented real-time updates and interactive features\n• Gained experience in fast-paced development environments"
    },
    {
      sender: "$$Devesh Tiwari",
      message: "Even though it was just a month, I learned a lot about rapid development and working with social media APIs!"
    }
  ],
  botwot: [
    {
      sender: "$$Devesh Tiwari",
      message: "BotWot was where I really grew as a developer! 🤖\n\nI spent 3 months as a Frontend Developer Intern, working on chatbot and automation solutions.\n\nBotWot specializes in creating intelligent chatbots and automation tools for businesses."
    },
    {
      sender: "$$You",
      message: "My major achievements here:\n\n• Developed interactive chatbot interfaces using React and TypeScript\n• Built real-time messaging components with WebSocket integration\n• Created admin dashboards for bot management and analytics\n• Implemented responsive design for mobile and desktop platforms\n• Worked with REST APIs and state management solutions"
    },
    {
      sender: "$$Devesh Tiwari",
      message: "This experience taught me a lot about real-time applications and user experience design!\n\nI also got to work with some really cool AI integration features."
    }
  ],
  fretbox: [
    {
      sender: "$$Devesh Tiwari",
      message: "FretBox was my first major internship experience! 🎸\n\nI worked as an App Developer for 5 months, focusing on their hostel management SaaS product.\n\nFretBox provides comprehensive hostel and accommodation management solutions for educational institutions."
    },
    {
      sender: "$$You",
      message: "This was a significant learning experience where I:\n\n• Worked extensively with Angular framework and TypeScript\n• Used Tailwind CSS and Material UI for styling and components\n• Revamped the entire UI/UX of the application\n• Implemented advanced search and sorting functionalities\n• Optimized existing codebase for better performance\n• Created multiple new pages and features from scratch"
    },
    {
      sender: "$$Devesh Tiwari",
      message: "This internship really helped me understand how to build scalable web applications!\n\nI learned a lot about Angular, component architecture, and working with complex data structures.\n\nIt was challenging but incredibly rewarding! 🚀"
    }
  ]
};



export const blogLinks = [
  {
    id: 1,
    title: "Mindtickle Interview Experience",
    url: "https://medium.com/@deveshtiwari2511/sde-internship-mindtickle-2089301b3f52",
    platform: "medium"
  },
  {
    id: 2,
    title: "Dobr.AI Internship Experience",
    url: "https://www.linkedin.com/posts/deveshtiwarii_leetcode-coach-chrome-web-store-activity-7309341892750491648-PzTq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgpkH0BrPpvFrA4adgFWqftBf2A9jplnHE",
    platform: "linkedin"
  },
];

export const profileData = {
  img: img,
  name: name,
  role: role,
  location: location,
  profileLink: profileLink,
  experience: [
    {
      img: mindtickle,
      position: "Software Developer",
      company: "Mindtickle · Internship",
      role: 1,
      duration: "Feb 2025 - Present · 7 mos",
      companyId: "mindtickle",
      hidden: false,
    },
    {
      img: dobr,
      position: "Software Developer",
      company: "Dobr.AI · Internship",
      role: 1,
      duration: "Dec 2024 - Feb 2025 · 2 mos",
      companyId: "dobr",
      hidden: false,
    },
    {
      img: superdm,
      position: "Frontend Developer",
      company: "SuperDM · Internship",
      role: 1,
      duration: "Aug 2024 - Aug 2024 · 1 mo",
      companyId: "superdm",
      hidden: true, // This company will be hidden and non-clickable
    },
    {
      img: botwot,
      position: "Frontend Developer",
      company: "BotWot · Internship",
      role: 1,
      duration: "June 2024 - Aug 2024 · 3 mos",
      companyId: "botwot",
      hidden: true,
    },
    {
      img: fretbox,
      alt: "FretBox",
      position: "App Developer ",
      role: 1,
      company: "FretBox · Internship",
      duration: "Jan 2024 - June 2024 · 5 mos",
      companyId: "fretbox",
      hidden: true,
    }
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
