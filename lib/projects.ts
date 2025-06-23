export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  videoUrl: string;
  githubUrl: string | null;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1, 
    title: "Event Admin Dashboard",
    description:
    "A modern, full-stack event management dashboard built with Next.js 15, demonstrating enterprise-level architecture patterns and modern web development practices. This comprehensive system allows for complete event lifecycle management, from creation and editing to deletion, all with rich metadata. It also incorporates robust user administration with role-based access control (admin/organizer roles) and a secure registration system that includes capacity management. Furthermore, the dashboard provides real-time analytics and data visualizations, offering valuable insights into event performance and user engagement. It's a testament to building a scalable and user-friendly platform from the ground up, designed to streamline event operations for various organizations.",
    technologies: ["React", "Next.js 15", "TypeScript 5", "Supabase", "Tailwind CSS", "React Hook Form", "Zod", "Recharts"],
    videoUrl: "https://event-admin-dashboard.vercel.app/",
    githubUrl: "https://github.com/dave11k/event-admin-dashboard",
    category: "Web Application", 
  },
];
