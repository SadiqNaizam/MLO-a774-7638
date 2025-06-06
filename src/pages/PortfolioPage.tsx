import React, { useState } from 'react';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import ProjectShowcaseCard from '@/components/ProjectShowcaseCard';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags?: string[];
  liveLink?: string;
  repoLink?: string;
}

const allProjects: Project[] = [
  { id: 'proj1', title: 'E-commerce Platform', description: 'A full-stack e-commerce solution with modern features.', longDescription: 'This project involved building a responsive e-commerce website from scratch. Key features include product listings, shopping cart functionality, user authentication, and a secure payment gateway integration. Technologies used: React, Node.js, Express, MongoDB, Stripe.', imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'E-commerce'], liveLink: '#', repoLink: '#' },
  { id: 'proj2', title: 'Project Management App', description: 'A collaborative tool for teams to manage tasks and projects.', longDescription: 'A real-time project management application designed to improve team collaboration. Features include task creation and assignment, progress tracking, Kanban boards, and team communication. Built with Vue.js and Firebase for real-time data synchronization.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', tags: ['Vue.js', 'Firebase', 'Real-time', 'Productivity'], liveLink: '#'},
  { id: 'proj3', title: 'Personal Portfolio Site', description: 'This very portfolio, showcasing my skills and projects.', longDescription: 'The portfolio site you are currently viewing. Developed using React, TypeScript, Tailwind CSS, and shadcn/ui components. It serves as a central hub to showcase my work, skills, and experience. The goal was a clean, modern, and performant design.', imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', tags: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'], repoLink: '#'},
  { id: 'proj4', title: 'AI Powered Chatbot', description: 'An intelligent chatbot for customer service.', longDescription: 'Developed an AI-powered chatbot using natural language processing (NLP) techniques to handle customer inquiries. Integrated with various communication channels and backend systems. The bot significantly reduced response times and improved customer satisfaction.', imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', tags: ['Python', 'NLP', 'AI', 'Dialogflow'], liveLink: '#'},
  { id: 'proj5', title: 'Mobile Fitness Tracker', description: 'A cross-platform mobile app for tracking fitness activities.', longDescription: 'A mobile application built with React Native that allows users to track their workouts, set goals, and monitor progress. Features GPS tracking for outdoor activities, calorie counting, and social sharing. Focused on intuitive UX and performance.', imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', tags: ['React Native', 'Mobile App', 'Fitness', 'Firebase'], repoLink: '#'},
];

const PortfolioPage: React.FC = () => {
  console.log('PortfolioPage loaded');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredProjects = allProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <NavigationMenu className="flex-1">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold sm:inline-block">MyPortfolio</span>
            </Link>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <Heading as="h1" className="text-center mb-4">
          My Work
        </Heading>
        <Text className="text-center max-w-xl mx-auto text-slate-600 dark:text-slate-400 mb-8 md:mb-10">
          Here's a selection of projects I've worked on. Feel free to explore and see the details behind each one.
        </Text>
        <div className="mb-8 md:mb-10 max-w-lg mx-auto">
          <Input
            type="text"
            placeholder="Search projects by title, description, or tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        <ScrollArea className="w-full" style={{ height: 'calc(100vh - 350px)' }}> {/* Adjust height as needed */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-1">
              {filteredProjects.map(project => (
                <ProjectShowcaseCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  onViewDetailsClick={() => handleViewDetails(project)}
                />
              ))}
            </div>
          ) : (
            <Text className="text-center text-slate-500 dark:text-slate-400 py-10">
              No projects found matching your search criteria.
            </Text>
          )}
        </ScrollArea>
      </main>

      {selectedProject && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="mt-1">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="flex-grow pr-6 -mr-6"> {/* Added pr for scrollbar space */}
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-auto max-h-96 object-contain rounded-md my-4" />
                <Text className="my-4 text-slate-700 dark:text-slate-300">
                  {selectedProject.longDescription}
                </Text>
                {selectedProject.tags && selectedProject.tags.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                )}
            </ScrollArea>
            <DialogFooter className="mt-auto pt-4">
              <div className="flex gap-2 w-full">
                {selectedProject.liveLink && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
                {selectedProject.repoLink && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                )}
                 <Button onClick={() => setIsDialogOpen(false)} variant="default" className="flex-1">Close</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      <Footer />
    </div>
  );
};

export default PortfolioPage;