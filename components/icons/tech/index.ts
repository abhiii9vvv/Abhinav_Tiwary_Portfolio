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
import { GenerativeAIIcon } from "./GenerativeAI";
import { LlmApisIcon } from "./LlmApis";
import { AIAgentsIcon } from "./AIAgents";
import { OpenCVIcon } from "./OpenCV";
import { DataStructuresIcon } from "./DataStructures";
import { AlgorithmsIcon } from "./Algorithms";
import { OOPIcon } from "./OOP";
import { DBMSIcon } from "./DBMS";
import { SystemDesignIcon } from "./SystemDesign";

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
  GenerativeAIIcon,
  LlmApisIcon,
  AIAgentsIcon,
  OpenCVIcon,
  DataStructuresIcon,
  AlgorithmsIcon,
  OOPIcon,
  DBMSIcon,
  SystemDesignIcon,
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
  AWS: AWSIcon,
  "Google Cloud": GoogleCloudIcon,
  Docker: DockerIcon,
  Linux: LinuxIcon,
  Java: JavaIcon,
  Python: PythonIcon,
  "REST APIs": RestApisIcon,
  "JWT Authentication": JwtAuthIcon,
  WebSockets: WebSocketsIcon,
  "Generative AI": GenerativeAIIcon,
  "LLM APIs": LlmApisIcon,
  "AI Agents": AIAgentsIcon,
  OpenCV: OpenCVIcon,
  "Data Structures": DataStructuresIcon,
  Algorithms: AlgorithmsIcon,
  OOP: OOPIcon,
  DBMS: DBMSIcon,
  "System Design": SystemDesignIcon,
};
