import type { ComponentType } from "react";

import { ReactIcon } from "./React";
import { NextJsIcon } from "./NextJs";
import { TypeScriptIcon } from "./TypeScript";
import { JavaScriptIcon } from "./JavaScript";
import { TailwindCssIcon } from "./TailwindCss";
import { NodeJsIcon } from "./NodeJs";
import { ExpressIcon } from "./Express";
import { MongoDBIcon } from "./MongoDB";
import { PostgreSQLIcon } from "./PostgreSQL";
import { MySQLIcon } from "./MySQL";
import { RedisIcon } from "./Redis";
import { AWSIcon } from "./AWS";
import { GoogleCloudIcon } from "./GoogleCloud";
import { DockerIcon } from "./Docker";
import { LinuxIcon } from "./Linux";
import { JavaIcon } from "./Java";
import { PythonIcon } from "./Python";
import { RestApisIcon } from "./RestApis";
import { JwtAuthIcon } from "./JwtAuth";
import { WebSocketsIcon } from "./WebSockets";
import { AIAgentsIcon } from "./AIAgents";
import { OpenCVIcon } from "./OpenCV";
import { DataStructuresIcon } from "./DataStructures";
import { AlgorithmsIcon } from "./Algorithms";
import { OOPIcon } from "./OOP";
import { DBMSIcon } from "./DBMS";
import { SystemDesignIcon } from "./SystemDesign";
import { OpenAIIcon } from "./OpenAI";
import { ClaudeIcon } from "./Claude";
import { GeminiIcon } from "./Gemini";
import { VercelIcon } from "./Vercel";
import { CloudinaryIcon } from "./Cloudinary";
import { FramerIcon } from "./Framer";
import { KubernetesIcon } from "./Kubernetes";
import { JenkinsIcon } from "./Jenkins";
import { BashIcon } from "./Bash";
import { Html5Icon } from "./Html5";
import { Css3Icon } from "./Css3";
import { GoogleSheetsIcon } from "./GoogleSheets";
import { ChromeExtensionIcon } from "./ChromeExtension";
import { BcryptIcon } from "./Bcrypt";
import { MernIcon } from "./Mern";
import { AiSentimentIcon } from "./AiSentiment";
import { AiIcon } from "./Ai";
import { JPMorganChaseIcon } from "./JPMorganChase";
import { NptelIcon } from "./Nptel";
import { AWSRealIcon } from "./AWSReal";
import { JPMorganChaseRealIcon } from "./JPMorganChaseReal";
import { NptelRealIcon } from "./NptelReal";
import { TheARambhaLogoIcon } from "./TheARambhaLogo";
import { MentionWaveLogoIcon } from "./MentionWaveLogo";
import { ArthaSocialLogoIcon } from "./ArthaSocialLogo";
import { CampusSetuLogoIcon } from "./CampusSetuLogo";
import { ShardaLogoIcon } from "./ShardaLogo";
import { SkyCodeHubLogoIcon } from "./SkyCodeHubLogo";
import { UnessaLogoIcon } from "./UnessaLogo";

export {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindCssIcon,
  NodeJsIcon,
  ExpressIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  MySQLIcon,
  RedisIcon,
  AWSIcon,
  GoogleCloudIcon,
  DockerIcon,
  LinuxIcon,
  JavaIcon,
  PythonIcon,
  RestApisIcon,
  JwtAuthIcon,
  WebSocketsIcon,
  AIAgentsIcon,
  OpenCVIcon,
  DataStructuresIcon,
  AlgorithmsIcon,
  OOPIcon,
  DBMSIcon,
  SystemDesignIcon,
  OpenAIIcon,
  ClaudeIcon,
  GeminiIcon,
  VercelIcon,
  CloudinaryIcon,
  FramerIcon,
  KubernetesIcon,
  JenkinsIcon,
  BashIcon,
  Html5Icon,
  Css3Icon,
  GoogleSheetsIcon,
  ChromeExtensionIcon,
  BcryptIcon,
  MernIcon,
  AiSentimentIcon,
  AiIcon,
  JPMorganChaseIcon,
  NptelIcon,
  AWSRealIcon,
  JPMorganChaseRealIcon,
  NptelRealIcon,
  TheARambhaLogoIcon,
  MentionWaveLogoIcon,
  ArthaSocialLogoIcon,
  CampusSetuLogoIcon,
  ShardaLogoIcon,
  SkyCodeHubLogoIcon,
  UnessaLogoIcon,
};

export { IconShell } from "./IconShell";

/**
 * Lookup of skill-name string (exact strings used in content/skills.ts)
 * to its icon component. The 17 real-brand technologies render their
 * actual logo via simple-icons path data. The 12 abstract concepts with no
 * real brand mark (REST APIs, JWT Authentication, WebSockets, Generative
 * AI, LLM APIs, AI Agents, OpenCV, Data Structures, Algorithms, OOP, DBMS,
 * System Design) render an original custom glyph through the same
 * IconShell children slot used by AWS, so every skill in content/skills.ts
 * resolves to a tile and none fall back to plain text.
 */
export const techIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "React.js": ReactIcon,
  "Next.js": NextJsIcon,
  TypeScript: TypeScriptIcon,
  JavaScript: JavaScriptIcon,
  "Tailwind CSS": TailwindCssIcon,
  "Node.js": NodeJsIcon,
  "Express.js": ExpressIcon,
  MongoDB: MongoDBIcon,
  PostgreSQL: PostgreSQLIcon,
  MySQL: MySQLIcon,
  Redis: RedisIcon,
  AWS: AWSRealIcon,
  "Google Cloud": GoogleCloudIcon,
  Docker: DockerIcon,
  Linux: LinuxIcon,
  Java: JavaIcon,
  Python: PythonIcon,
  "REST APIs": RestApisIcon,
  "JWT Authentication": JwtAuthIcon,
  WebSockets: WebSocketsIcon,
  "OpenAI API": OpenAIIcon,
  Claude: ClaudeIcon,
  Gemini: GeminiIcon,
  "AI Agents": AIAgentsIcon,
  OpenCV: OpenCVIcon,
  "Data Structures": DataStructuresIcon,
  Algorithms: AlgorithmsIcon,
  OOP: OOPIcon,
  DBMS: DBMSIcon,
  "System Design": SystemDesignIcon,
  "Vercel Blob": VercelIcon,
  Cloudinary: CloudinaryIcon,
  "Framer Motion": FramerIcon,
  Kubernetes: KubernetesIcon,
  Jenkins: JenkinsIcon,
  Bash: BashIcon,
  HTML5: Html5Icon,
  CSS3: Css3Icon,
  HTML: Html5Icon,
  CSS: Css3Icon,
  "Google Sheets API": GoogleSheetsIcon,
  "Chrome Extension": ChromeExtensionIcon,
  bcrypt: BcryptIcon,
  MERN: MernIcon,
  "AI Sentiment": AiSentimentIcon,
  AI: AiIcon,
  JWT: JwtAuthIcon,
};

/**
 * Lookup of certification/community issuer strings (as used in
 * content/achievements.ts) to an icon component. Reuses real simple-icons
 * brand marks where they exist (Google Cloud, AWS via its established
 * IconShell monogram fallback), and original monograms through the same
 * IconShell system for issuers with no discoverable brand icon (JPMorgan
 * Chase, NPTEL).
 */
export const issuerIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "Google Cloud Career Launchpad": GoogleCloudIcon,
  "NPTEL, IIT Kharagpur (SWAYAM)": NptelRealIcon,
  "JPMorgan Chase": JPMorganChaseIcon,
  "MERN Stack Bootcamp": MernIcon,
};

/**
 * Lookup of Experience org names (as used in content/experience.ts) to a
 * real site-favicon icon component, fetched directly from each org's live
 * website where one exists. Orgs with no verified live URL fall back to
 * the generic OrgMark glyph instead of appearing here.
 */
export const orgIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "The ARambha": TheARambhaLogoIcon,
  SkyCodeHub: SkyCodeHubLogoIcon,
  "Unessa Foundation": UnessaLogoIcon,
};

/**
 * Lookup of project slugs (as used in content/projects.ts) to a real
 * site-favicon icon component, fetched from each project's live URL.
 */
export const projectIconMap: Record<string, ComponentType<{ className?: string }>> = {
  mentionwave: MentionWaveLogoIcon,
  "artha-social": ArthaSocialLogoIcon,
  "the-arambha": TheARambhaLogoIcon,
  campussetu: CampusSetuLogoIcon,
};
