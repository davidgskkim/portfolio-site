import { JSX } from "react";
import { FaFolderOpen } from "react-icons/fa";

type Project = {
    title: string;
    description: string;
    tech: string[];
    link: string;
};

const projects: Project[] = [
    {
        title: "Schedule Maker",
        description: "Automatically generates optimal shift schedules based on staff availability and constraints.",
        tech: ["Python", "Pandas", "Optimization"],
        link: "https://github.com/davidgskkim/schedule-maker",
    },
    {
        title: "Stock Check Automater",
        description: "Connects to the Lightspeed POS API to automatically track and reduce ingredient stock on orders.",
        tech: ["Python", "Lightspeed API", "Automation"],
        link: "#", // You can update this later
    },
];

function Projects({ "data-aos": aos }: { "data-aos"?: string }) {
    const FolderIcon = FaFolderOpen as unknown as () => JSX.Element;
    return (
        <section id="projects" className="my-12" data-aos={aos}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FolderIcon /> Projects
            </h2>
            <div className="grid gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="mt-2">{project.description}</p>
                        <p className="mt-2 text-sm text-gray-500">
                            {project.tech.join(" • ")}
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-blue-500 hover:underline"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
