"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Code,
  Database,
  Cloud,
  Cog,
  Layers,
  Users,
  Target,
  Lightbulb,
  Zap,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js",
        "GSAP",
      ],
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Backend",
      icon: <Cog className="w-6 h-6" />,
      skills: ["Java", "Spring Boot", "Node.js", "Express.js", "Python"],
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Tools & Technologies",
      icon: <Layers className="w-6 h-6" />,
      skills: [
        "Git",
        "RESTful APIs",
        "Web Sockets",
        "GraphQL",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Agile",
        "Test-Driven Development",
        "Microservices",
      ],
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const valueProps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric Approach",
      description:
        "I take the time to truly understand your vision, goals, and challenges. Clear communication and regular updates ensure we're always aligned throughout the project.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality & Scalability",
      description:
        "Every line of code is written with the future in mind. I build robust, maintainable solutions that can grow with your business and stand the test of time.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Problem Solver",
      description:
        "Complex challenges don't intimidate me, they inspire me. I approach each problem with creativity and persistence until we find the perfect solution.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Go-Getter Mentality",
      description:
        "I exceed expectations for every client. Whether it's adding that extra feature or optimizing performance, I always go the extra mile for exceptional results.",
      color: "bg-orange-50 border-orange-200",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="about" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hello, I'm <span className="text-emerald-600">David</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A passionate full-stack developer who believes great software
                comes from understanding people, not just code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="David Kiely - Full Stack Developer"
                  className="w-80 h-96 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Code className="w-12 h-12 text-emerald-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                My Story
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-700 leading-relaxed mb-6"
              >
                My passion for technology and computers began early, leading me
                to pursue Software Development at university. There, I built a
                strong foundation in programming and software engineering. A
                pivotal 9-month internship at McAfee gave me hands-on experience
                developing enterprise desktop tools, and I graduated with
                first-class honors, achieving the highest grade in my final-year
                project. I then spent two years at Client Solutions a
                consultancy company based in Ireland. Here I learned fast-paced,
                enterprise level software development using Agile and
                test-driven development for high-stakes clients, while also
                cultivating essential client relationship management skills.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 leading-relaxed mb-6"
              >
                I spent the next four years at DigiWheel, a gaming industry
                startup, where I was instrumental in building a global casino
                gaming platform from scratch that earned multiple international
                casino game show awards. This experience significantly deepened
                my expertise in developing complex, multi-project platforms. I
                collaborated closely with our senior engineer, deepening my
                development fundamentals and learning advanced methods. I also
                mentored two junior developers. Over the past year, I've
                expanded into freelance web development and design. I found
                immense fulfillment in helping clients achieve their goals and
                exploring new technologies that I have not had the chance to
                work with yet in the process. I'm keen to continue these
                interesting projects while also advancing my career with
                full-time work.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-700 leading-relaxed"
              >
                What truly sets me apart is my genuine curiosity about your
                business and my commitment to understanding the why behind your
                projects, not just the what. I believe the best solutions stem
                from meaningful conversations, active listening, and a truly
                collaborative approach. Clients consistently appreciate my
                ability to translate complex technical concepts into clear,
                actionable insights and my dedication to ensuring their success.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-700 leading-relaxed"
              >
                Outside of work, I stay active with jiu-jitsu, boxing, and
                running. Hobbies that keep me grounded and often spark fresh
                perspectives for my development work.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              My Technical Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
              and continuous learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color} mr-4`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Me?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My commitment to your success goes beyond just delivering code,
              it's about building lasting partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full border-2 ${prop.color} hover:shadow-lg transition-all duration-300`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-gray-700 shadow-sm">
                          {prop.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {prop.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {prop.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
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
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to turn your vision into reality? I'd love to hear about
              your project and discuss how we can make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg group"
                asChild
              >
                <a href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
                asChild
              >
                <a href="/projects">View My Work</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
