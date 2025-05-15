import { useEffect, useState } from "react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="max-w-4xl mx-auto flex justify-between items-center px-6 py-3">
                <a href="#" className="font-bold text-lg">David Kim</a>
                <div className="flex items-center gap-6 text-sm font-medium">
                    <a href="#about" className="hover:text-blue-500 transition">About</a>
                    <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
                    <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
                    <a href="/resume.pdf" download className="text-blue-500 hover:underline">Resume</a>

                    {/* Toggle switch */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl" title="Toggle dark mode">
                            {darkMode ? "🌞" : "🌙"}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
