import React from 'react';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import TimelineComponent from '@/components/TimelineComponent';
import Footer from '@/components/layout/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

const timelineItems = [
  { id: 1, type: 'experience', title: 'Senior Frontend Developer', subtitle: 'Tech Solutions Inc.', date: 'Jan 2021 - Present', description: 'Leading frontend development for key client projects, focusing on React, TypeScript, and performance optimization. Mentored junior developers and improved code quality.' },
  { id: 2, type: 'education', title: 'B.Sc. in Computer Science', subtitle: 'University of Technology', date: '2017 - 2020', description: 'Graduated with honors, specializing in web development and human-computer interaction. Active member of the coding club.' },
  { id: 3, type: 'experience', title: 'Junior Web Developer', subtitle: 'Web Wizards LLC', date: 'Jun 2020 - Dec 2020', description: 'Developed and maintained client websites using HTML, CSS, JavaScript, and WordPress. Gained foundational experience in web technologies.' },
  { id: 4, type: 'event', title: 'React Conference 2022', subtitle: 'Speaker', date: 'Oct 2022', description: 'Presented a talk on "State Management in Large Scale React Applications".' }
];

const skills = ['React', 'TypeScript', 'Node.js', 'Next.js', 'GraphQL', 'Tailwind CSS', 'Figma', 'CI/CD', 'Agile Methodologies', 'Problem Solving'];

const AboutPage: React.FC = () => {
  console.log('AboutPage loaded');
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
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16 md:mb-24">
          <Avatar className="w-32 h-32 md:w-48 md:h-48 border-4 border-primary">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60" alt="My Name" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <Heading as="h1" className="mb-2">
              John Doe
            </Heading>
            <Text size="xl" className="text-primary mb-4">
              Passionate Full Stack Developer
            </Text>
            <Text className="max-w-xl text-slate-600 dark:text-slate-400">
              Hello! I'm John, a software developer with a knack for building elegant and efficient solutions.
              I thrive on challenges and continuously seek to expand my knowledge in the ever-evolving tech landscape.
              My journey in tech is driven by a desire to create meaningful impact through code.
            </Text>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <Heading as="h2" className="text-center mb-8">
            My Skills
          </Heading>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(skill => (
              <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <Heading as="h2" className="text-center mb-10">
            My Journey
          </Heading>
          <TimelineComponent items={timelineItems} />
        </section>

        <section className="text-center">
          <Button size="lg" onClick={() => window.open('/placeholder-resume.pdf', '_blank')}>
            <Download className="mr-2 h-5 w-5" />
            Download My Resume
          </Button>
          <Text size="sm" muted className="mt-2">
            (Opens a placeholder PDF)
          </Text>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;