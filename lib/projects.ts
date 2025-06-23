export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  videoUrl: string;
  isPublic: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and comprehensive admin dashboard for seamless online retail operations.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    videoUrl: "/placeholder.svg?height=300&width=400",
    isPublic: true,
    category: "Web Application",
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description:
      "Internal productivity tool with team collaboration features, advanced analytics, and real-time notifications for enterprise clients to streamline workflow management.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Redis", "Socket.io"],
    videoUrl: "/placeholder.svg?height=300&width=400",
    isPublic: false,
    category: "Internal Tool",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description:
      "Scalable messaging platform with WebSocket integration, file sharing capabilities, and end-to-end encryption for secure communication across teams and organizations.",
    technologies: ["React", "Socket.io", "MongoDB", "AWS S3", "JWT"],
    videoUrl: "/placeholder.svg?height=300&width=400",
    isPublic: true,
    category: "Web Application",
  },
  {
    id: 4,
    title: "API Gateway Service",
    description:
      "Microservices architecture with automated deployment, monitoring solutions, and comprehensive API documentation for scalable backend systems and service orchestration.",
    technologies: ["Node.js", "Docker", "Kubernetes", "GraphQL", "Prometheus"],
    videoUrl: "/placeholder.svg?height=300&width=400",
    isPublic: false,
    category: "Backend Service",
  },
  {
    id: 5,
    title: "Data Visualization Tool",
    description:
      "Interactive dashboard for complex data analysis with real-time updates, custom chart generation, and automated report exports for business intelligence and analytics.",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    videoUrl: "/placeholder.svg?height=300&width=400",
    isPublic: true,
    category: "Data Analytics",
  },
  {
    id: 6,
    title: "Learning Management System",
    description:
      "Educational platform with course management, progress tracking, interactive assessments, and video streaming capabilities for online learning and training programs.",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "AWS"],
    videoUrl: "/placeholder.svg?height=300&width=400",
    isPublic: true,
    category: "Web Application",
  },
  {
    id: 7,
    title: "Inventory Management System",
    description:
      "Comprehensive inventory tracking solution with barcode scanning, automated reordering, and detailed analytics for retail businesses to optimize stock management.",
    technologies: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS", "Vercel"],
    videoUrl: "/placeholder.svg?height=300&width=400",
    isPublic: false,
    category: "Business Tool",
  },
  {
    id: 8,
    title: "Social Media Analytics Platform",
    description:
      "Multi-platform social media monitoring tool with sentiment analysis, engagement tracking, and automated reporting features for brand management and marketing insights.",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Celery"],
    videoUrl: "/placeholder.svg?height=300&width=400",
    isPublic: true,
    category: "Analytics Platform",
  },
  {
    id: 9,
    title: "Restaurant Ordering System",
    description:
      "Complete restaurant management solution with online ordering, kitchen display system, and integrated payment processing for streamlined food service operations.",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "Firebase"],
    videoUrl: "/placeholder.svg?height=300&width=400",
    isPublic: true,
    category: "Mobile Application",
  },
];
