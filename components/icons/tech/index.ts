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
};

export { IconShell } from "./IconShell";

/**
 * Lookup of skill-name string (exact strings used in content/skills.ts)
 * to its branded 3D icon component. Only real, logo-able technologies are
 * included here. Abstract CS concepts (REST APIs, JWT Authentication,
 * WebSockets, Generative AI, LLM APIs, AI Agents, OpenCV, Data Structures,
 * Algorithms, OOP, DBMS, System Design) have no real brand mark and are
 * intentionally left out; the Skills section renders those as plain text.
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
};
