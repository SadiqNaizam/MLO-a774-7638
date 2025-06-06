import React from 'react';
import AnimatedHero from '@/components/AnimatedHero';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import ProjectShowcaseCard from '@/components/ProjectShowcaseCard';
import Footer from '@/components/layout/Footer'; // Custom component
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Link, useNavigate } from 'react-router-dom';

const placeholderProjects = [
  { id: 'proj1', title: 'E-commerce Platform', description: 'A full-stack e-commerce solution with modern features.', imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', tags: ['React', 'Node.js', 'Stripe'] },
  { id: 'proj2', title: 'Project Management App', description: 'A collaborative tool for teams to manage tasks and projects.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', tags: ['Vue.js', 'Firebase', 'Tailwind CSS'] },
  { id: 'proj3', title: 'Personal Portfolio Site', description: 'This very portfolio, showcasing my skills and projects.', imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', tags: ['React', 'TypeScript', 'shadcn/ui'] },
];

const Homepage: React.FC = () => {
  console.log('Homepage loaded');
  const navigate = useNavigate();

  const handleViewProjectDetails = (projectId: string) => {
    console.log('View details for project:', projectId);
    // For homepage, this might navigate to the portfolio page with a hash or open a quick view
    // For simplicity, let's navigate to the portfolio page.
    navigate(`/portfolio#${projectId}`);
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

      <AnimatedHero
        title="Innovative Developer & Designer"
        subtitle="Crafting seamless digital experiences with cutting-edge technology and creative design. Let's build something amazing together."
        ctaText="Explore My Work"
        onCtaClick={() => navigate('/portfolio')}
        imageUrl="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
      />

      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <section className="text-center mb-16 md:mb-24">
          <Heading as="h1" variant="subtle" className="mb-4 text-slate-700 dark:text-slate-300">
            Welcome to My Creative Space
          </Heading>
          <Text size="lg" className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
            I'm a passionate developer focused on creating impactful and user-friendly applications.
            Dive into my projects to see my skills in action.
          </Text>
        </section>

        <section className="mb-16 md:mb-24">
          <Heading as="h2" className="text-center mb-10">
            Featured Projects
          </Heading>
          <ScrollArea className="w-full pb-4">
            <div className="flex space-x-6 p-1">
              {placeholderProjects.map((project) => (
                <ProjectShowcaseCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  onViewDetailsClick={() => handleViewProjectDetails(project.id)}
                />
              ))}
            </div>
          </ScrollArea>
          <div className="text-center mt-10">
            <Button size="lg" onClick={() => navigate('/portfolio')}>
              View All Projects
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;