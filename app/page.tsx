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
            With 6 years of professional experience building user-friendly and
            high-performing web applications, I can turn complex your ideas into
            clean and scalable solutions.
            <br />
            <br />
            My core expertise lies in modern JavaScript development,
            particularly with Vue and React, and a strong backend foundation in
            Java and Node. I've collaborated with a variety of clients on
            fast-paced teams, consistently delivering reliable, effective
            results.
            <br />
            <br />
            I'm passionate about continuous learning and always eager to explore
            new technologies. My focus is on building smart, practical software
            that stands up in the real world.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
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
                I have gathered a wide range of skills and experience over the
                years. These are some of the areas I can help you with.
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
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg group"
            >
              <a href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
