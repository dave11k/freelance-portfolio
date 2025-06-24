"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/projects";
import ImageSlider from "@/components/image-slider";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Full-width image section */}
        <div className="relative overflow-hidden">
          <ImageSlider images={project.images} title={project.title} />
        </div>

        {/* Content section */}
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              {project.category && (
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 text-xs"
                >
                  {project.category}
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed text-base flex-grow">
            {project.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => window.open(project.projectUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
            <Button
              variant="ghost"
              className={`justify-start ${!project.githubUrl ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={!project.githubUrl}
              onClick={() => {
                if (project.githubUrl) {
                  window.open(project.githubUrl, "_blank");
                }
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
