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
  {
    id: 2,
    title: "Movie Mind",
    description:
      "Movie Mind is an AI-powered movie recommendation platform. " +
      "It combines The Movie Database API with OpenAI to deliver personalized movie suggestions " +
      "based on user preferences, showcasing the integration of external APIs with AI-driven " +
      "recommendations and demonstrating how to leverage AI for personalized user experiences. " +
      "This full-stack application also highlights the use of Next.js 15 for server-side rendering " +
      "and API integration, along with Tailwind CSS for styling. Movie Mind intelligently analyzes " +
      "users' favorite films against upcoming releases to provide sophisticated and personalized " +
      "upcoming movie suggestions.",
    technologies: [
      "React",
      "Next.js 15",
      "TypeScript 5",
      "Supabase",
      "Tailwind CSS",
      "OpenAI",
    ],
    images: [
      "/projects/movie-mind/search.png",
      "/projects/movie-mind/favourites.png",
      "/projects/movie-mind/recommended.png",
      "/projects/movie-mind/about.png",
      "/projects/movie-mind/sign in.png",
    ],
    githubUrl: "https://github.com/dave11k/MovieMind",
    projectUrl: "https://movie-mind-l83d.vercel.app/",
    category: "Web Application",
  },
  {
    id: 3,
    title: "The Canning Collective",
    description:
      "The Canning Collective, a coaching business, " +
      "needed a website overhaul as their existing digital presence didn't reflect their values, " +
      "hindering online lead conversion. " +
      "I launched a responsive, performance-optimized site within one month for seamless user experience. " +
      "Integrated Google Reviews and embedded Calendly for enhanced trust and easy booking. " +
      "Redesigned with a clean, aesthetic layout and modern animations to capture attention. " +
      "Delivered a polished, high-converting website, empowering The Canning Collective to market online " +
      "and turn leads into booked consultations effectively.",
    technologies: ["React", "Next.js 15", "Calendly", "Tailwind CSS", "Stripe"],
    images: [
      "/projects/the-canning-collective/hero.png",
      "/projects/the-canning-collective/pricing.png",
      "/projects/the-canning-collective/contact.png",
      "/projects/the-canning-collective/testimonials.png",
    ],
    githubUrl: null,
    projectUrl: "https://www.thecanningcollective.com/",
    category: "Website",
  },
  {
    id: 4,
    title: "DJ Business Academy",
    description:
      "The DJ Business Academy needed a focused, mobile-optimized online presence to capture leads " +
      "and seamlessly integrate with their CRM for efficient follow-up. " +
      "Built a fully custom website from scratch in WordPress Elementor for design flexibility. " +
      "Ensured full responsiveness and excellent mobile performance for seamless user experience. " +
      "Integrated HubSpot with a custom popup form for effective lead generation and CRM integration. " +
      "Delivered a polished, high-converting website, empowering The DJ Business Academy to market online " +
      "and turn leads into booked consultations effectively.",
    technologies: ["WordPress", "Elementor", "HubSpot"],
    images: [
      "/projects/dj-business-academy/hero.png",
      "/projects/dj-business-academy/testimonials.png",
      "/projects/dj-business-academy/footer.png",
      "/projects/dj-business-academy/2.png",
    ],
    githubUrl: null,
    projectUrl: "https://www.thecanningcollective.com/",
    category: "Website",
  },
];
