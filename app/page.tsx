"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/project-card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { projects } from "@/lib/projects";
import { Code, Database, Cloud, Cog, Layers, ArrowRight } from "lucide-react";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
    "Java",
    "Spring Boot",
    "MongoDB",
    "AWS",
    "Docker",
    "GraphQL",
    "Web Sockets",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mt-2 sm:mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2"
          >
            Full Stack Developer Building{" "}
            <span className="text-emerald-600">Scalable Web Applications</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2"
          >
            With 6 years of professional experience building user-friendly and
            high-performing web applications, I can turn your complex ideas into
            clean and scalable solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
          >
            My core expertise lies in modern JavaScript development,
            particularly with Vue and React, and a strong backend foundation in
            Java and Node. I've collaborated with a variety of clients on
            fast-paced teams, consistently delivering reliable, effective
            results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg group w-full sm:w-auto"
            >
              <a href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              My Recent Work
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              A selection of projects showcasing my expertise in full-stack
              development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
              My Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="David Kiely - Full Stack Developer"
                  className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover mx-auto shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
                I have gathered a wide range of skills and experience over the
                years. These are some of the areas I can help you with.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors mx-2"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 sm:pt-6 px-2">
                <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm"
                    >
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
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Ready to Build Your Next Big Idea?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              I'm available for new projects and collaborations. Let's discuss
              how we can bring your vision to life.
            </p>
            <div className="px-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg group w-full sm:w-auto"
              >
                <a href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
