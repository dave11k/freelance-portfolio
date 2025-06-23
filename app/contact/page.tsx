"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Send,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    // You can add success/error handling here
  };

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
                <h1 className="text-xl font-bold text-gray-900">David Kiely</h1>
                <span className="text-gray-500 hidden sm:inline">|</span>
                <span className="text-gray-600 hidden sm:inline">
                  Full Stack Developer
                </span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </a>
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
              <span className="text-emerald-600 font-medium">Contact</span>
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
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  Home
                </a>
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
                <span className="text-emerald-600 font-medium text-left">
                  Contact
                </span>
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
            Let's <span className="text-emerald-600">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            I'm excited to hear about your project! Fill out the form below or
            use one of the options to get in touch.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Me a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700"
                        >
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-sm font-medium text-gray-700"
                      >
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="w-full"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full resize-none"
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg group"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Alternative Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Or Find Me Here
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Prefer a more direct approach? Feel free to reach out through
                  any of these channels. I typically respond within 24 hours
                  during business days.
                </p>
              </div>

              <div className="space-y-6">
                {/* Direct Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            Email Me Directly
                          </h3>
                          <a
                            href="mailto:hello@alexjohnson.dev"
                            className="text-emerald-600 hover:text-emerald-700 transition-colors"
                          >
                            hello@alexjohnson.dev
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* LinkedIn */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Linkedin className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            Connect on LinkedIn
                          </h3>
                          <a
                            href="https://linkedin.com/in/alexjohnson-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            linkedin.com/in/alexjohnson-dev
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            Location
                          </h3>
                          <p className="text-gray-600">
                            Based in Bali, Indonesia
                          </p>
                          <p className="text-sm text-gray-500">
                            (Available Globally)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Response Time Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-emerald-50 rounded-lg p-6 border border-emerald-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Quick Response Guaranteed
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I understand that timing is crucial for your projects. I
                  typically respond to all inquiries within 24 hours during
                  business days, and often much sooner. For urgent matters, feel
                  free to mention it in your message subject line.
                </p>
              </motion.div>
            </motion.div>
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
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you have a detailed brief or just an idea, I'd love to
              discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg group"
                asChild
              >
                <a href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
                asChild
              >
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
              <h3 className="text-lg font-semibold mb-4">David Kiely</h3>
              <p className="text-gray-400">
                Full Stack Developer crafting scalable web applications
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="/"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
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
                <span className="block text-white">Contact</span>
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
