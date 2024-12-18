import NavbarLogos from "@/assets/Navbar";
import { Button } from "../ui/button";
import Icons from "@/assets/Icons";

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
    return (
        <nav className="flex items-center justify-between h-[100px] w-full font-sans p-4 bg-white sticky top-0 z-50">
            <div className="flex items-center ml-20">
                <img
                    src={NavbarLogos.logo}
                    alt="Timechain Logo"
                    className="h-10 w-auto"
                />
            </div>
            <div className="flex space-x-10 font-normal text-sm">
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
            <Button className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mr-20">
                Apply Now
                <img src={Icons.LeftArrow} alt="Arrow Right" className="w-4 h-4 ml-1" />
            </Button>
        </nav>
    );
}

export default Navbar;
