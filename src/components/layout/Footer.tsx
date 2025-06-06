import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation links
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'; // Social icons

interface SocialLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "mailto:email@example.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
            &copy; {currentYear} Your Name/Brand. All rights reserved.
          </div>
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        {/* Optional: Add quick links if needed */}
        {/* <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 text-center md:text-left">
          <Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-700 mr-4">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-slate-500 hover:text-slate-700">Terms of Service</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;