import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import ContactForm from "@/components/contact-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Lakshitha Dev</div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/lakshithavimukthi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/lakshitha-vithanaarachchi-791030301/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="lakshithavimukthi10@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50 ">
          <div className="container flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
              <Image
                src="/Lakshitha Vithanaarachchi.jpg"
                width={500}
                height={500}
                alt="Lakshitha Dev"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Lakshitha Vithanaarachchi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Software Developer interested in full-stack web development with a
              passion for creating marvelous solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-[60vh]">
                <Image
                  src="/Lakshitha_Vithanaarachchi.jpg.jpg"
                  width={500}
                  height={500}
                  alt="Lakshitha"
                  className="h-full rounded-lg object-cover shadow-lg w-full"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg">
                  I am a dedicated second year Computer Science student at
                  University ofWestminster who is particularly interested in
                  software development anddata analytics.
                </p>
                <p className="text-lg">
                  Enthusiastic, self-motivated, and responsible professionalwith
                  a proven track record of acquiring new skills quickly and
                  thinkinginnovatively to solve problems. Highly interested in
                  full-stack webdevelopment, I have experience using the latest
                  web technologies andframeworks to build performant and secure
                  web applications
                </p>
                <p className="text-lg">
                  Always up-to-date with advancements in the JavaScript
                  ecosystem and capable ofworking within multi-disciplinary
                  teams to achieve technical and businessgoals.
                </p>
                {/* <p className="text-lg">
                  When I'm not coding, you can find me DJing, 
                </p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillBadge name="JavaScript" level={90} />
              <SkillBadge name="TypeScript" level={75} />
              <SkillBadge name="Java" level={65} />
              <SkillBadge name="React" level={80} />
              <SkillBadge name="Next.js" level={75} />
              <SkillBadge name="Node.js" level={80} />
              <SkillBadge name="Express" level={75} />
              <SkillBadge name="MongoDB" level={70} />
              <SkillBadge name="PostgreSQL" level={75} />
              <SkillBadge name="Redux" level={45} />
              <SkillBadge name="React Query" level={60} />
              <SkillBadge name="Git" level={85} />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Real Estate Marketplace"
                description="Developed a responsive real estate web application using React, featuring advanced multi-criteria search, interactive property pages with image galleries and maps, and a Favorites system leveraging local storage. Enhanced user experience across devices through media queries and React UI components."
                technologies={["Next.js", "React.js", "Vercel"]}
                imageUrl="/Screenshot 2025-03-25 010420.png"
                githubUrl="https://github.com/lakshithavimukthi/realestate-frontend"
                liveUrl="https://realestate-frontend-tau.vercel.app/"
              />
              <ProjectCard
                title="Trail Guard Survival app"
                description="Developing a React-based adventure app featuring real-time location tracking with group safety alarms, AI-driven image recognition for plant and fruit identification, and wildlife information with safety tips for outdoor enthusiasts.
"
                technologies={[
                  "React native/Expo",
                  "React",
                  "ExpressJS.",
                  "Typescript",
                  "Clerk",
                  "React query",
                  "Prisma",
                  "PostgreSQL",
                ]}
                imageUrl="/Home Screen.png"
                githubUrl="https://github.com/KrYpt03/survival-app-sdgp"
                liveUrl="https://youtu.be/KSlC7B1DzoQ"
              />
              <ProjectCard
                title="Music & Entertainment Platform (Work in progress)"
                description="Developing a React-based music & entertainment app featuring an advanced AI chatbot for instant platform assistance, personalized festival recommendations, and integrated artist & band booking functionality.
"
                technologies={["ReactJs.", "NextJs.", "Vercel", "Langchain"]}
                imageUrl="/3569d72e-6ee0-4e64-8f59-9ebd05486c4e_1920x1080.jpg"
                githubUrl="https://github.com/lakshithavimukthi"
                liveUrl="Work in progress"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
              <div className="space-y-6">
                <p className="text-lg">
                  I'm always open to discussing new projects, opportunities, or
                  partnerships. Feel free to reach out using the contact form or
                  through my social media profiles.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>lakshithavimukthi10@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://github.com/lakshithavimukthi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/lakshitha.dev
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://www.linkedin.com/in/lakshitha-vithanaarachchi-791030301/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/lakshitha.dev
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t px-4">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Lakshitha Dev. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:john@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
