import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">John Doe</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
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
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
          <div className="container flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
              <img src="/placeholder.svg?height=96&width=96" alt="John Doe" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">John Doe</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Software Engineer specializing in full-stack web development with a passion for creating elegant
              solutions.
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
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="John working on a project"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg">
                  Hello! I'm John, a passionate software engineer with over 5 years of experience building web
                  applications and services.
                </p>
                <p className="text-lg">
                  I specialize in JavaScript/TypeScript ecosystems, with expertise in React, Next.js, Node.js, and
                  various database technologies.
                </p>
                <p className="text-lg">
                  My approach to software development focuses on creating clean, maintainable code that solves real
                  problems. I'm constantly learning and exploring new technologies to improve my craft.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                  projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillBadge name="JavaScript" level={90} />
              <SkillBadge name="TypeScript" level={85} />
              <SkillBadge name="React" level={90} />
              <SkillBadge name="Next.js" level={85} />
              <SkillBadge name="Node.js" level={80} />
              <SkillBadge name="Express" level={75} />
              <SkillBadge name="MongoDB" level={70} />
              <SkillBadge name="PostgreSQL" level={75} />
              <SkillBadge name="GraphQL" level={65} />
              <SkillBadge name="Docker" level={60} />
              <SkillBadge name="AWS" level={65} />
              <SkillBadge name="Git" level={85} />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce solution with payment processing, inventory management, and analytics dashboard."
                technologies={["Next.js", "Node.js", "MongoDB", "Stripe"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                githubUrl="https://github.com/johndoe/ecommerce"
                liveUrl="https://ecommerce-demo.example.com"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management application with real-time updates, file sharing, and team communication features."
                technologies={["React", "Firebase", "Material UI", "WebSockets"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                githubUrl="https://github.com/johndoe/taskmanager"
                liveUrl="https://taskmanager-demo.example.com"
              />
              <ProjectCard
                title="Weather Dashboard"
                description="An interactive weather dashboard that displays current conditions and forecasts using multiple weather APIs."
                technologies={["JavaScript", "Chart.js", "Weather API", "Geolocation API"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                githubUrl="https://github.com/johndoe/weatherapp"
                liveUrl="https://weather-demo.example.com"
              />
              <ProjectCard
                title="Personal Finance Tracker"
                description="A secure application for tracking expenses, income, and investments with data visualization."
                technologies={["TypeScript", "React", "D3.js", "PostgreSQL"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                githubUrl="https://github.com/johndoe/financetracker"
                liveUrl="https://finance-demo.example.com"
              />
              <ProjectCard
                title="Recipe Sharing Platform"
                description="A social platform for sharing and discovering recipes with search, filtering, and user profiles."
                technologies={["Next.js", "Tailwind CSS", "Supabase", "Cloudinary"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                githubUrl="https://github.com/johndoe/recipeapp"
                liveUrl="https://recipe-demo.example.com"
              />
              <ProjectCard
                title="Developer Portfolio"
                description="This very portfolio website showcasing my projects and skills (you're looking at it right now!)."
                technologies={["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                githubUrl="https://github.com/johndoe/portfolio"
                liveUrl="#"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
              <div className="space-y-6">
                <p className="text-lg">
                  I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out
                  using the contact form or through my social media profiles.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>john@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://github.com/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/johndoe
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://linkedin.com/in/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/johndoe
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
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
  )
}

