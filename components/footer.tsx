import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
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
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a
                href="https://github.com/dave11k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/david-kiely-28661765"
                target="_blank"
                rel="noopener noreferrer"
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
            &copy; {new Date().getFullYear()} David Kiely. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
