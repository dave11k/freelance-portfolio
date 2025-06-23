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
      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="relative overflow-hidden lg:col-span-1">
            <ImageSlider images={project.images} title={project.title} />
            {project.category && (
              <div className="absolute top-4 left-4 z-10">
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-gray-700 text-xs"
                >
                  {project.category}
                </Badge>
              </div>
            )}
          </div>

          <CardContent className="p-8 lg:col-span-2 flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 lg:mb-0">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
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
        </div>
      </Card>
    </motion.div>
  );
}
