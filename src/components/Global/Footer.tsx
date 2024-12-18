import Icons from "@/assets/Icons";
import NavbarLogos from "@/assets/Navbar";
import SocialIcons from "@/assets/SocialIcons";

function Footer() {
    return (
        <footer className="bg-Cobalt_Blue mx-4 md:mx-20 mt-12 md:mt-24 mb-6 md:mb-12 rounded-xl text-white py-6 md:py-10 px-4 md:px-6">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <img
                    src={NavbarLogos.logo}
                    alt="Timechain Logo"
                    className="w-32 md:w-40 mb-4 md:mb-0"
                />
                <h1 className="text-sm font-rubik font-semibold flex flex-row justify-between items-center">
                    Back To Top
                    <img src={Icons.BTT} alt="Up Arrow" className="w-4 h-4 ml-1" />
                </h1>
            </div>

            {/* Main Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                {/* Left Section */}
                <div className="flex flex-col gap-4">
                    <p className="text-base md:text-lg">
                        Apply now to join us for an unforgettable summer!
                    </p>
                    <button className="bg-yellow-400 text-Charcoal font-bold flex flex-row items-center justify-center hover:bg-yellow-500 transition h-[40px] md:h-[46px] w-full md:w-[157px] rounded-lg">
                        Apply Now
                        <img src={Icons.LeftArrow} alt="Arrow Right" className="w-4 h-4 ml-1 invert" />
                    </button>
                </div>

                {/* Center Links 1 */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-base md:text-lg mb-2">TSoC</h3>
                    <a href="#" className="hover:underline">Code of Conduct</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                    <a href="#" className="hover:underline">FAQs</a>
                    <a href="#" className="hover:underline">How it works</a>
                    <a href="#" className="hover:underline">Mentors</a>
                </div>

                {/* Center Links 2 */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-base md:text-lg mb-2">Resources</h3>
                    <a href="#" className="hover:underline">Blog</a>
                    <a href="#" className="hover:underline">Community</a>
                    <a href="#" className="hover:underline">Projects</a>
                    <a href="#" className="hover:underline">Supporters</a>
                    <a href="#" className="hover:underline">2023 Programme</a>
                </div>

                {/* Subscription Section */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-medium text-lg md:text-xl mb-2">
                        Subscribe to the Timechain Summer of Code (TSOC)
                    </h3>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 border border-Light_Periwinkle rounded-lg p-2">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-Cobalt_Blue text-black p-2 w-full md:w-44 rounded-lg"
                        />
                        <button className="bg-yellow-400 text-Charcoal font-bold flex flex-row items-center justify-center hover:bg-yellow-500 transition h-[40px] px-3 rounded-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-sm md:text-base">CONNECT WITH US</h1>
                    <div className="flex flex-row space-x-2 mt-3">
                        <img src={SocialIcons.Twitter} alt="Twitter" className="w-5 h-5" />
                        <img src={SocialIcons.LinkedIn} alt="LinkedIn" className="w-5 h-5" />
                        <img src={SocialIcons.Insta} alt="Instagram" className="w-5 h-5" />
                        <img src={SocialIcons.Discord} alt="Discord" className="w-5 h-5" />
                        <img src={SocialIcons.Youtube} alt="YouTube" className="w-5 h-5" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start">
                    <a href="#" className="hover:text-yellow-400 transition">Terms of Use</a>
                    <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-yellow-400 transition">Legal</a>
                </div>
                <p className="text-xs md:text-sm text-center">&copy; 2023 TIMECHAIN LABS. All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
