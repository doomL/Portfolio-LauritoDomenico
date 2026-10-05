 

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
  "Full Stack Developer and AI Systems Engineer with a focus on LLM-powered applications, HR tech platforms, and applied research. Co-author of 2 academic publications, including an IEEE Outstanding Paper Award at PICom 2025.";

export const EMAIL = "laurito.dom@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/laurito-dom/",
  github: "https://github.com/doomL/",
  instagram: "https://www.instagram.com/dom_laur/",
  facebook: "https://www.facebook.com/domenico.laurito.3/",
  mail: "mailto:laurito.dom@gmail.com"
};

export const DOOGMA_LABS_URL = "https://doogmalabs.com/#progetti";

export type ProjectImageStyle = "logo" | "screenshot";

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
  imageStyle?: ProjectImageStyle;
}

const DOOGMA_SHOT = (file: string) =>
  `https://doogmalabs.com/assets/shots/${file}`;

/** Curated highlights — full catalog on Doogma Labs; older repos on GitHub. */
export const PROJECTS: IProject[] = [
  {
    name: "InPlayAI",
    image:
      "https://www.inplayai.it/inplayai/wp-content/uploads/2025/10/logoORIZZ-1.svg",
    blurImage: "/projects/blur/crazyStaickers.png",
    description:
      "AI-powered HR assessment. LLM-based analysis of how candidates think, not just what they answer.",
    gradient: ["#0F172A", "#1E3A5F"],
    url: "https://www.inplayai.it/",
    tech: ["react", "next", "nodejs", "typescript"],
    imageStyle: "logo",
  },
  {
    name: "SkillMosaico",
    image:
      "https://www.skillmosaico.it/website/wp-content/uploads/2025/09/logo_col_orizz_byArt.svg",
    blurImage: "/projects/blur/crazyStaickers.png",
    description:
      "Configurable assessment platform. Build ideal candidate profiles with gamified simulation scenarios.",
    gradient: ["#2E6B6B", "#1A5252"],
    url: "https://www.skillmosaico.it/",
    tech: ["react", "next", "tailwind", "typescript"],
    imageStyle: "logo",
  },
  {
    name: "OpenRouter Studio",
    image: DOOGMA_SHOT("openrouterstudio.webp"),
    blurImage: "/projects/blur/crazyStaickers.png",
    description:
      "Visual builder for AI workflows — text, images, and video by connecting blocks and models.",
    gradient: ["#1e1b4b", "#312e81"],
    url: "https://openrouterstudio.lauritodomenico.com/",
    tech: ["react", "next", "typescript"],
    imageStyle: "screenshot",
  },
  {
    name: "Nimbus",
    image: DOOGMA_SHOT("nimbus.webp"),
    blurImage: "/projects/blur/crazyStaickers.png",
    description:
      "Semantic photo search — describe a scene in words and find matching shots in your library.",
    gradient: ["#0c4a6e", "#0369a1"],
    url: "https://nimbus.lauritodomenico.com/",
    tech: ["react", "next", "nodejs"],
    imageStyle: "screenshot",
  },
  {
    name: "Cervellone",
    image: DOOGMA_SHOT("cervellone.webp"),
    blurImage: "/projects/blur/crazyStaickers.png",
    description:
      "Live quiz nights: phones as buzzers, big screen for the room, AI-assisted question generation.",
    gradient: ["#4a044e", "#86198f"],
    url: "https://cervellone.doogmalabs.com/",
    tech: ["react", "next", "nodejs"],
    imageStyle: "screenshot",
  },
  {
    name: "Doogma Labs",
    image: DOOGMA_SHOT("chronoclash.webp"),
    blurImage: "/projects/blur/crazyStaickers.png",
    description:
      "Siti, app, giochi e strumenti AI — il catalogo completo con screenshot e link live.",
    gradient: ["#422006", "#b45309"],
    url: DOOGMA_LABS_URL,
    tech: [],
    imageStyle: "screenshot",
  },
];

export interface ISkillIconRow {
  title: string;
  icons: string;
  badges?: string[];
}

/** Skill icon rows (skillicons.dev); badges are text-only when no icon exists in the set. */
export const SKILL_ICON_ROWS: ISkillIconRow[] = [
  {
    title: "Back-end Development",
    icons: "spring,dotnet,java,python,nodejs,cs,flask,express,fastapi",
  },
  {
    title: "Front-end Development",
    icons: "react,tailwind,nextjs,angular,jquery,js,css,bootstrap,html,figma",
  },
  {
    title: "Databases",
    icons: "mysql,postgres,mongodb,redis",
    badges: ["Qdrant"],
  },
  {
    title: "Others",
    icons:
      "cpp,git,nginx,solidity,androidstudio,kubernetes,docker,vercel,wordpress,raspberrypi,arduino,pr,ps,ai,bash,perl,maven,idea,ableton",
    badges: ["OpenRouter"],
  },
];

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
    image: "/logo.svg",
    slideImage: "/timeline/bg.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Computer Science Bachelor",
    size: ItemSize.SMALL,
    subtitle:
      "Started Bachelor Degree in Computer Science at Università della Calabria",
    image: "/timeline/unical.png",
    slideImage: "/timeline/bgunical.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
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
      "Development of a web application with face and object recognition. Use of: Node.js, Python, Flask, OpenCV.",
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
    image: "/logo.svg",
    slideImage: "/timeline/bgd.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full-Stack Developer - Artémat",
    size: ItemSize.SMALL,
    subtitle:
      "Full-Stack Developer at Artémat, using Technologies like Node.js, React, Next.js, Python, LangChain, Spring, Angular.",
    image: "/timeline/logo_art.svg",
    slideImage: "/timeline/bgartemat.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Mar 2024",
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
    title: "Oct 2025",
    size: ItemSize.LARGE,
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
    title: "Feb 2026",
    size: ItemSize.LARGE,
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
