import { JSX } from "react";
import { FaEnvelope } from "react-icons/fa";

function Contact({ "data-aos": aos }: { "data-aos"?: string }) {
    const EnvelopeIcon = FaEnvelope as unknown as () => JSX.Element;

    return (
        <section id="contact" className="my-12" data-aos={aos}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <EnvelopeIcon /> Contact
            </h2>
            <p>
                Feel free to reach out at: <a href="mailto:davidgsk.kim@gmail.com" className="text-blue-500">davidgsk.kim@gmail.com</a>
            </p>
        </section>
    );
}

export default Contact;
