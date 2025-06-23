"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Cog,
  Layers,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      videoUrl: "/placeholder.svg?height=300&width=400",
      isPublic: true,
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "Internal productivity tool with team collaboration features and advanced analytics.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Redis"],
      videoUrl: "/placeholder.svg?height=300&width=400",
      isPublic: false,
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description:
        "Scalable messaging platform with WebSocket integration and file sharing capabilities.",
      technologies: ["React", "Socket.io", "MongoDB", "AWS S3"],
      videoUrl: "/placeholder.svg?height=300&width=400",
      isPublic: true,
    },
    {
      id: 4,
      title: "API Gateway Service",
      description:
        "Microservices architecture with automated deployment and monitoring solutions.",
      technologies: ["Node.js", "Docker", "Kubernetes", "GraphQL"],
      videoUrl: "/placeholder.svg?height=300&width=400",
      isPublic: false,
    },
    {
      id: 5,
      title: "Data Visualization Tool",
      description:
        "Interactive dashboard for complex data analysis with real-time updates and exports.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      videoUrl: "/placeholder.svg?height=300&width=400",
      isPublic: true,
    },
    {
      id: 6,
      title: "Learning Management System",
      description:
        "Educational platform with course management, progress tracking, and interactive assessments.",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      videoUrl: "/placeholder.svg?height=300&width=400",
      isPublic: true,
    },
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Web Application Development",
      description: "Frontend & Backend",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "API Design & Integration",
      description: "RESTful & GraphQL APIs",
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Internal Tools & Automation",
      description: "Workflow Optimization",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Solutions",
      description: "Design & Optimization",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Deployment & Infrastructure",
      description: "Scalable Architecture",
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "GraphQL",
  ];

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
              <h1 className="text-xl font-bold text-gray-900">David Kiely</h1>
              <span className="text-gray-500 hidden sm:inline">|</span>
              <span className="text-gray-600 hidden sm:inline">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/projects"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Projects
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
                <a
                  href="/projects"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  Projects
                </a>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-10 leading-tight"
          >
            Full Stack Developer Building{" "}
            <span className="text-emerald-600">Scalable Web Applications</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-5xl mx-auto leading-relaxed"
          >
            I have 6 years of professional experience building efficient, user-friendly, 
            and high-performing web applications. I turn complex ideas into clean and scalable solutions.
            <br /><br />
            My core expertise lies in modern JavaScript development, particularly with Vue and React, 
            and a strong backend foundation in Java and Node. I've collaborated with a variety of clients on fast-paced 
            teams, consistently delivering reliable, effective results.
            <br /><br />
            I’m passionate about continuous learning and always eager to explore new technologies. My focus is on building smart, 
            practical software that stands up in the real world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg group"
            >
              <a href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              My Recent Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in full-stack
              development.
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
                    </div>

                    <CardContent className="p-8 lg:col-span-2 flex flex-col justify-center">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 lg:mb-0">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                          View Case Study
                        </Button>
                        {project.isPublic && (
                          <>
                            <Button variant="ghost" className="justify-start">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                            <Button variant="ghost" className="justify-start">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              My Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="David Kiely - Full Stack Developer"
                  className="w-80 h-80 rounded-2xl object-cover mx-auto shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                As a full-stack developer, I build end-to-end web solutions that
                combine beautiful user interfaces with robust backend systems.
                I'm passionate about creating scalable applications that solve
                real-world problems and deliver exceptional user experiences.
              </p>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Build Your Next Big Idea?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm available for new projects and collaborations. Let's discuss
              how we can bring your vision to life.
            </p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg group"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">David Kiely</h3>
              <p className="text-gray-400">
                Full Stack Developer crafting scalable web applications
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="/projects"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a
                  href="/about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} David Kiely. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
