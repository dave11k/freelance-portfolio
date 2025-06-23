export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  githubUrl: string | null;
  projectUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Event Admin Dashboard",
    description:
      "A modern event management dashboard " +
      "demonstrating enterprise-level architecture patterns and modern web development practices. " +
      "This comprehensive system allows for complete event lifecycle management, from creation and " +
      "editing to deletion, all with rich metadata. It also incorporates robust user administration " +
      "with role-based access control (admin/organizer roles) and a secure attendee registration system that " +
      "includes capacity management. Furthermore, the dashboard provides real-time analytics and " +
      "data visualizations, offering valuable insights into event performance and user engagement. ",
    technologies: [
      "React",
      "Next.js 15",
      "TypeScript 5",
      "Supabase",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Recharts",
    ],
    images: [
      "/projects/event-dashboard/create.png",
      "/projects/event-dashboard/dashboard.png",
      "/projects/event-dashboard/events.png",
      "/projects/event-dashboard/register.png",
    ],
    githubUrl: "https://github.com/dave11k/event-admin-dashboard",
    projectUrl: "https://event-admin-dashboard.vercel.app",
    category: "Web Application",
  },
];
