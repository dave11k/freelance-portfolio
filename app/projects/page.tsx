"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, ExternalLink, Menu, X, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
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
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <a href="/" className="flex items-center space-x-2">
                <h1 className="text-xl font-bold text-gray-900">Alex Johnson</h1>
                <span className="text-gray-500 hidden sm:inline">|</span>
                <span className="text-gray-600 hidden sm:inline">Full Stack Developer</span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </a>
              <span className="text-emerald-600 font-medium">Projects</span>
              <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-100"
            >
              <div className="flex flex-col space-y-4">
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                  Home
                </a>
                <span className="text-emerald-600 font-medium text-left">Projects</span>
                <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                  About
                </a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            My <span className="text-emerald-600">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore a selection of my work, demonstrating my full-stack capabilities and problem-solving approach across
            various industries and technologies.
          </motion.p>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From web applications to mobile solutions, each project represents a unique challenge and innovative
              solution
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="relative overflow-hidden lg:col-span-1">
                      <img
                        src={project.videoUrl || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-8 lg:col-span-2 flex flex-col justify-center">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 lg:mb-0">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">View Case Study</Button>
                        <Button
                          variant="ghost"
                          className={`justify-start ${!project.isPublic ? "opacity-50 cursor-not-allowed" : ""}`}
                          disabled={!project.isPublic}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          variant="ghost"
                          className={`justify-start ${!project.isPublic ? "opacity-50 cursor-not-allowed" : ""}`}
                          disabled={!project.isPublic}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Interested in Working Together?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and help bring innovative ideas to life. Let's discuss your
              next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg group"
                asChild
              >
                <a href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg" asChild>
                <a href="/about">Learn More About Me</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Alex Johnson</h3>
              <p className="text-gray-400">Full Stack Developer crafting scalable web applications</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
                <span className="block text-white">Projects</span>
                <a href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </a>
                <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Alex Johnson. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
