export const profile = {
  name: "Abhinav Tiwary",
  firstName: "Abhinav",
  alternateNames: ["abhiii9vvv"],
  pronouns: "He/Him",
  location: "Delhi NCR, India",
  email: "abhinavv8975@gmail.com",
  phone: "+91 6207363626",
  linkedin: "https://linkedin.com/in/abhinavtiwary",
  github: "https://github.com/abhiii9vvv",
  resume: "https://drive.google.com/file/d/1wKZB20oAqChvdvxSN7Fcs1121IPCvrpi/view?usp=sharing",
  role: "Software & Cloud Engineer",
  headline: "Software and cloud engineer who builds, deploys, and supports production systems on Linux and AWS.",
  subheadline:
    "I build web platforms, run them on Linux and the cloud, and keep them healthy in production.",
  recent: { role: "TechOps Intern", org: "Paytm" },
  about:
    "I build software and run it: web platforms, backend systems, cloud infrastructure on Linux, and the day-to-day operations that keep them healthy.",
  aboutParagraphs: [
    "I'm an engineer who learns by shipping, and by keeping what I ship alive.",
    "At Paytm I worked on the operations side: system monitoring, technical operations, and support for the teams that depend on those systems.",
    "On my own projects I cover the rest of the path: React and Node.js apps, PostgreSQL and Redis, Docker, and deploys to AWS and Linux servers.",
    "I'd rather have something working in production than a perfect plan for it.",
  ],
  availability: {
    summary: "Open to cloud, Linux, support, and full-stack roles",
    graduating: "B.Tech CSE, graduating 2027",
    workModes: ["On-site", "Hybrid", "Remote"],
    preferredLocation: "Delhi, Noida, and Gurugram preferred",
  },
  photo: "/images/abhinav-tiwary.jpg",
  heroPortrait: "/images/abhinav-tiwary-software-cloud-engineer.png",
};

export const stats = [
  { value: 50, suffix: "+", label: "GitHub repositories", icon: "github" },
  { value: 1000, suffix: "+", label: "GitHub contributions", icon: "contributions" },
  { value: 250, suffix: "+", label: "DSA problems solved", icon: "code" },
  { value: 25, suffix: "%", label: "Faster API responses at Unessa", icon: "speed" },
] as const;
