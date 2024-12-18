import NavbarLogos from "@/assets/Navbar";
import { Button } from "../ui/button";
import Icons from "@/assets/Icons";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navbarLinks = [
    { href: "#mentors", label: "Mentors" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#faq", label: "FAQ" },
    { href: "#code-of-conduct", label: "Code of Conduct" },
    { href: "#hire-from-us", label: "Hire from Us" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between h-[100px] w-full font-sans p-4 bg-white sticky top-0 z-50">
            {/* Logo Section */}
            <div className="flex items-center ml-4 sm:ml-20">
                <img
                    src={NavbarLogos.logo}
                    alt="Timechain Logo"
                    className="h-10 w-auto"
                />
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex space-x-10 font-normal text-sm">
                {navbarLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`text-Charcoal hover:text-Cobalt_Blue ${link.href === "#hire-from-us" ? "text-Cobalt_Blue font-medium" : ""}`}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden mr-4">
                <button
                    className="p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Apply Now Button */}
            <Button className="hidden lg:flex px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mr-4 sm:mr-20">
                Apply Now
                <img src={Icons.LeftArrow} alt="Arrow Right" className="w-4 h-4 ml-1" />
            </Button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg p-4 lg:hidden z-50">
                    <div className="flex flex-col space-y-4">
                        {navbarLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-Charcoal hover:text-Cobalt_Blue ${link.href === "#hire-from-us" ? "text-Cobalt_Blue font-medium" : ""}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button className="w-full px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                            Apply Now
                            <img src={Icons.LeftArrow} alt="Arrow Right" className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
