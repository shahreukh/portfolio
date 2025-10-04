import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Page",
    description:
      "Personal portfolio site built with modern UI design principles.",
    image: import.meta.env.BASE_URL + "projects/project1.png",
    tags: ["React", "Tailwind", "Next.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/shahreukh/react-portfolio",
  },
  {
    id: 2,
    title: "LookUp Website",
    description:
      "Corporate portfolio site with sleek black-themed UI and responsive design.",
    image: import.meta.env.BASE_URL + "projects/project2.png",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Cactus Software",
    description:
      "Corporate site showcasing social media and digital services, built with React and Tailwind.",
    image: import.meta.env.BASE_URL + "projects/project3.png",
    tags: ["React", "Tailwind", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Admin Dashboard Panel",
    description:
      "Admin panel with React, Node.js, and MongoDB for managing users, posts, and projects efficiently.",
    image: import.meta.env.BASE_URL + "projects/project4.png",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "DOSEV Foundation",
    description:
      "Multilingual NGO foundation site with donation and project management pages.",
    image: import.meta.env.BASE_URL + "projects/project5.png",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Mental Creative Agency",
    description:
      "Creative agency showcase with animations and modern responsive layouts.",
    image: import.meta.env.BASE_URL + "projects/project6.png",
    tags: ["React", "Tailwind", "JavaScript", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {project.id === 1 && (
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/shahreukh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
