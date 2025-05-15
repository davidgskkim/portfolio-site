import { JSX } from "react";
import { FaUser } from "react-icons/fa";
import profilePic from "../myface.jpg";

function About({ "data-aos": aos }: { "data-aos"?: string }) {
    const UserIcon = FaUser as unknown as () => JSX.Element;

    return (
        <section id="about" className="my-12" data-aos={aos}>
            <img
                src={profilePic}
                alt="David Kim"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <UserIcon /> About Me
            </h2>
            <p className="mb-4">
                I am a computer science graduate with a strong background in software development and economics. I am passionate about building scalable and maintainable software solutions that solve real-world problems efficiently.
            </p>
            <p className="mb-4">
                Throughout my academic career and internships, I have gained hands-on experience in backend and full-stack development, data analysis, and automation. I thrive in collaborative environments and enjoy tackling complex challenges with clean, well-structured code.
            </p>
            <p>
                In addition to technical skills, I bring strong problem-solving abilities, attention to detail, and a commitment to continuous learning. I am eager to contribute to impactful projects and grow as a developer in a dynamic team.
            </p>
        </section>
    );
}

export default About;
