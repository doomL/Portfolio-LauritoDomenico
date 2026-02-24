 

export const METADATA = {
  title: "Portfolio | Laurito Domenico",
  description:
    "Full Stack Developer and AI Systems Engineer with a focus on LLM-powered applications, HR tech platforms, and applied research. Co-author of 2 academic publications, including an IEEE Outstanding Paper Award at PICom 2025.",
  siteUrl: "https://portfolio.lauritodomenico.com/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Publications",
    ref: "publications",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Full-Stack Developer",
  "AI Systems Engineer",
  "LLM-powered applications",
  "I design and build things that work",
];

export const HERO_BIO =
  "Full Stack Developer & AI Systems Engineer. 2 publications, IEEE Outstanding Paper Award @ PICom 2025.";

export const EMAIL = "laurito.dom@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/laurito-dom/",
  github: "https://github.com/doomL/",
  instagram: "https://www.instagram.com/dom_laur/",
  facebook: "https://www.facebook.com/domenico.laurito.3/",
  mail: "mailto:laurito.dom@gmail.com"
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
  category?: "professional" | "academic";
}

export const PROJECTS: IProject[] = [
  // Professional Work
  {
    name: "InPlayAI",
    image: "/timeline/bgartemat.jpg",
    blurImage: "/projects/blur/crazyStaickers.png",
    description: "AI-powered HR assessment platform that analyses how candidates think — not just what they answer. Combines immersive simulations with LLM-based reasoning analysis to surface cognitive patterns, logical consistency and mindset.",
    gradient: ["#0F172A", "#1E3A5F"],
    url: "https://www.inplayai.it/",
    tech: [],
    category: "professional",
  },
  {
    name: "SkillMosaico",
    image: "/timeline/bgartemat.jpg",
    blurImage: "/projects/blur/crazyStaickers.png",
    description: "Configurable assessment platform that lets companies compose their ideal candidate profile by selecting competencies from a predefined map. Generates personalised gamified simulation scenarios with interconnected decision-making challenges.",
    gradient: ["#1E3A5F", "#0F172A"],
    url: "https://www.skillmosaico.it/",
    tech: [],
    category: "professional",
  },
  {
    name: "Abstract Forward",
    image: "/timeline/bgartemat.jpg",
    blurImage: "/projects/blur/crazyStaickers.png",
    description: "Gamified business simulation platform designed for enterprise recruitment and training. Candidates tackle realistic management scenarios that assess both hard and soft skills through engaging, story-driven challenges.",
    gradient: ["#1E3A5F", "#0F172A"],
    url: "https://www.artemat.it/",
    tech: [],
    category: "professional",
  },
  {
    name: "UMARI",
    image: "/timeline/bgartemat.jpg",
    blurImage: "/projects/blur/crazyStaickers.png",
    description: "Blockchain-based digital passport system for agricultural supply chain traceability. Tracks bioactive phytoextracts from Calabrian agricultural waste through the entire production chain, providing consumers with verified, tamper-proof product data via QR code.",
    gradient: ["#0D2818", "#1B4332"],
    url: "https://ecs-nodes.eu/",
    tech: [],
    category: "professional",
  },
  {
    name: "VOLTA COHERENT",
    image: "/timeline/bgartemat.jpg",
    blurImage: "/projects/blur/crazyStaickers.png",
    description: "European research project (Fondazione RESTART) developing an AI-assisted intent-mapping system for Digital Twin Networks — automatically translating business intentions into technical network parameters. Awarded IEEE Outstanding Paper Award at PICom 2025.",
    gradient: ["#2D1B4E", "#4A2C6A"],
    url: "https://doi.org/10.1109/picom68402.2025.00017",
    tech: [],
    category: "professional",
  },
  // Academic Projects
  {
    name: "inRuolo",
    image: "/projects/Mockup/classi4.png",
    blurImage: "/projects/blur/Mockup/classi4.png",
    description: "Web Platform for people that wants to became teacher.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://github.com/doomL/in-ruolo",
    tech: ["javascript", "cs", "asp","sqlserver"],
    category: "academic",
  },
  {
    name: "FaceRec",
    image: "/projects/faceRec.png",
    blurImage: "/projects/blur/crazyStaickers.png",
    description: "Surveillance software with face recognition.",
    gradient: ["#172839", "#334659"],
    url: "https://github.com/doomL/faceRecognitionNode",
    tech: ["nodejs", "npm", "javascript"],
    category: "academic",
  },
  {
    name: "Crazy StAIckers",
    image: "/projects/crazyStaickers1.png",
    blurImage: "/projects/blur/crazyStaickers.png",
    description: "Automatic Crazy Stackers Solver using DLV2.",
    gradient: ["#552A04", "#614023"],
    url: "https://github.com/doomL/Crazy-Stackers-IA",
    tech: ["java"],
    category: "academic",
  },
  {
    name: "LARA - Arduino Domotic Assistant",
    image: "/projects/lara.png",
    blurImage: "/projects/blur/lara.jpg",
    description: "Lara is a Vocal Assistant that can control a domotic house based on arduino.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://github.com/doomL/Arduino-Domotic-Assistant",
    tech: ["androidstudio", "java", "arduino"],
    category: "academic",
  },
  {
    name: "3D Print Store",
    image: "/projects/3dPrintStore.PNG",
    blurImage: "/projects/blur/crazyStaickers.png",
    description: "Website where users can send object to 3dprinters in their area.",
    gradient: ["#245B57", "#004741"],
    url: "https://github.com/doomL/3DPrintStore",
    tech: ["java", "jquery", "postgres"],
    category: "academic",
  },
  {
    name: "FantaSiw",
    image: "/projects/FantaSiw.jpg",
    blurImage: "/projects/blur/crazyStaickers.png",
    description: "Fantasoccer website for the SIW exam @ Unical.",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://github.com/doomL/fantasiw-league",
    tech: ["java", "jquery", "postgres"],
    category: "academic",
  },
  {
    name: "Togheter Hike",
    image: "/projects/togetherHike2.png",
    blurImage: "/projects/blur/crazyStaickers.png",
    description: "An App to meet and go hiking new people in your area.",
    gradient: ["#003052", "#167187"],
    url: "https://www.figma.com/proto/c9DdmzA4PXwpgS9UWydXSa/Prototyping-in-Figma?node-id=0-78&starting-point-node-id=0%3A2&mode=design&t=jIFe985AK0eV6exj-1",
    tech: ["figma"],
    category: "academic",
  },
];

export const SKILLS = {
  backend: [
    "java",
    "python",
    "nodejs",
    "cs",
  ],
  databases:[
    "mysql",
    "sql",
    "mariadb",
    "mongodb",
  ],
  frontend: [
    "javascript",
    "jquery",
    "html",
    "css",
  ],
  other: ["docker","figma","illustrator", "photoshop","git","lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2015",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Scientific High School Degree",
    size: ItemSize.SMALL,
    subtitle:"High School Diploma at Liceo Scientifico \"E. Mattei\" in Castrovillari (CS)",
    // image: "/timeline/xda.svg",
    slideImage: "/timeline/bg.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Computer Science Bachelor",
    size: ItemSize.SMALL,
    subtitle:"Started Bachelor Degree in Computer Science at Università della Calabria"+'<br/><br/><br/>',
    image: "/timeline/unical.png",
    slideImage: "/timeline/bgunical.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019"+'</br></br></br>',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Back-end Developer - Horeca Soft",
    size: ItemSize.SMALL,
    subtitle:
      "Working on Back-end with C# Asp.net developing a web app for hotel management",
    image: "/timeline/horeca.png",
    slideImage: "/timeline/bghoreca.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "School Internship - Artémat",
    size: ItemSize.SMALL,
    subtitle:
      "Development of a web application with face and object recognition. Use of: Node.js, Python, Flask, OpenCV."+'</br></br></br></br> ',
    image: "/timeline/logo_art.svg",
    slideImage: "/timeline/bgartemat.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Bachelor Degree in Computer Science",
    size: ItemSize.SMALL,
    subtitle:
    "Achieved a Bachelor's degree in Computer Science from the University of Calabria with a final grade of 92/110.",
    image: "/timeline/unical.png",
    slideImage: "/timeline/bgunical.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full-Stack Developer .Net - Horeca Soft",
    size: ItemSize.SMALL,
    subtitle:
      "Development of a web platform in Asp.Net Framework",
    image: "/timeline/horeca.png",
    slideImage: "/timeline/bghoreca.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SEO Professional Course",
    size: ItemSize.SMALL,
    subtitle:
      "Course on SEO completed at WMR Academy.",
    image: "/timeline/wmr.png",
    slideImage: "/timeline/bgwmr.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Back-end Developer - Exabit",
    size: ItemSize.SMALL,
    subtitle:
      "Implementation of some functions for a banking web application using Quarkus, Kafka, gRPC, and MongoDB technologies.",
    image: "/timeline/exabit.png",
    slideImage: "/timeline/bgexabit.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
 
  {
    type: NodeTypes.CHECKPOINT,
    title: "Azienda Agricola Laurito",
    size: ItemSize.SMALL,
    subtitle:
      "Worked in the family agricultural company in the roles of marketing, web developer, and advertiser.",
    image: "/timeline/azlaurito.png",
    slideImage: "/timeline/bgazlaurito.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Freelancer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked As a Freelancer website developer,SEO Engineer, photographer, video maker, music Producer, Sound Engineer. ",
    // image: "/timeline/hotstar.svg",
    slideImage: "/timeline/bgd.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full-Stack Developer - Artémat",
    size: ItemSize.SMALL,
    subtitle:
      "Full-Stack Developer at Artémat, using Technologies like Node.js, React, Next.js, Python, LangChain, Spring, Angular."+'</br></br></br></br> ',
    image: "/timeline/logo_art.svg",
    slideImage: "/timeline/bgartemat.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024 – Mar",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UMARI Project — Artémat S.r.l.",
    size: ItemSize.SMALL,
    subtitle:
      "Blockchain-based digital passport for agricultural traceability. Artemat + MACROFARM + CGF Food.",
    image: "/timeline/logo_art.svg",
    slideImage: "/timeline/bgartemat.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025 – Oct",
    size: ItemSize.SMALL,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "IEEE Outstanding Paper Award 🏆",
    size: ItemSize.SMALL,
    subtitle:
      "AI-assisted Intent-Mapping for Digital Twin Networks — IEEE PICom 2025, Japan. VOLTA COHERENT project.",
    image: "/timeline/logo_art.svg",
    slideImage: "/timeline/bgartemat.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2026 – Feb",
    size: ItemSize.SMALL,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "ECAI 2025 Publication",
    size: ItemSize.SMALL,
    subtitle:
      "LUMI Agents: A Fuzzy BDI Framework for Intelligent Agents — CEUR-WS Vol-4165, ECAI 2025.",
    image: "/timeline/unical.png",
    slideImage: "/timeline/bgunical.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export interface IPublication {
  title: string;
  venue: string;
  award?: string;
  authors?: string;
  details?: string;
  doi?: string;
  url?: string;
}

export const PUBLICATIONS: IPublication[] = [
  {
    title: "AI-assisted Intent-Mapping and translation for Digital Twins Network applications",
    venue: "IEEE PICom 2025 · Hakodate, Japan · October 2025",
    award: "IEEE Outstanding Paper Award",
    authors: "P. Pace, G. Aloi, A. Iera, A. Mendicelli, P. Guarasci, D. Laurito",
    doi: "10.1109/picom68402.2025.00017",
    url: "https://doi.org/10.1109/picom68402.2025.00017",
  },
  {
    title: "LUMI Agents: A Fuzzy BDI Framework for Intelligent Agents",
    venue: "2nd Workshop on Green-Aware AI @ ECAI 2025 · February 2026",
    details: "CEUR-WS Vol-4165, pp. 29-37 · CC BY 4.0",
    url: "https://ceur-ws.org/Vol-4165/short12.pdf",
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
