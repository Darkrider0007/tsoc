import Icons from "@/assets/Icons";
import NavbarLogos from "@/assets/Navbar";
import SocialIcons from "@/assets/SocialIcons";

function Footer() {
    return (
        <footer className="bg-Cobalt_Blue mx-20 mt-24 mb-12 rounded-xl text-white py-10 px-6">
            <div className="flex flex-row justify-between items-center">
                <img
                    src={NavbarLogos.logo}
                    alt="Timechain Logo"
                    className="w-40 mb-4"
                />
                <h1 className="text-sm font-rubik font-semibold flex flex-row justify-between items-center">Back To Top
                    <img src={Icons.BTT} alt="Up Arrow" className="w-4 h-4 ml-1" />
                </h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Section */}
                <div className="flex flex-col gap-4">
                    <p className="text-lg mb-4">
                        Apply now to join us for an unforgettable summer!
                    </p>
                    <button className="bg-yellow-400 text-Charcoal font-bold flex flex-row items-center justify-center hover:bg-yellow-500 transition h-[46px] w-[157px] rounded-lg">
                        Apply Now
                        <img src={Icons.LeftArrow} alt="Arrow Right" className="w-4 h-4 ml-1 invert" />
                    </button>
                </div>

                {/* Center Links */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg mb-2">TSoC</h3>
                    <a href="#" className="hover:underline">Code of Conduct</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                    <a href="#" className="hover:underline">FAQs</a>
                    <a href="#" className="hover:underline">How it works</a>
                    <a href="#" className="hover:underline">Mentors</a>
                </div>

                {/* Right Links */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg mb-2">Resources</h3>
                    <a href="#" className="hover:underline">Blog</a>
                    <a href="#" className="hover:underline">Community</a>
                    <a href="#" className="hover:underline">Projects</a>
                    <a href="#" className="hover:underline">Supporters</a>
                    <a href="#" className="hover:underline">2023 Programme</a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-medium text-xl mb-2">Subscribe to the Timechain Summer of Code (TSOC)</h3>
                    <div className="flex flex-row gap-2 border border-Light_Periwinkle rounded-lg p-2">
                        <input type="email" placeholder="Email Address" className="bg-Cobalt_Blue text-black p-2 w-44 rounded-lg" />
                        <button className="bg-yellow-400 text-Charcoal font-bold flex flex-row items-center justify-center hover:bg-yellow-500 transition h-[40px] px-3 rounded-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col ">
                    <h1>CONNECT WITH US</h1>
                    <div className="flex flex-row space-x-2 mt-3">
                        <img src={SocialIcons.Twitter} alt="Twitter" className="w-5 h-5" />
                        <img src={SocialIcons.LinkedIn} alt="Twitter" className="w-5 h-5" />
                        <img src={SocialIcons.Insta} alt="Twitter" className="w-5 h-5" />
                        <img src={SocialIcons.Discord} alt="Twitter" className="w-5 h-5" />
                        <img src={SocialIcons.Youtube} alt="Twitter" className="w-5 h-5" />
                    </div>
                </div>
                <div className="flex gap-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-yellow-400 transition">Terms of Use</a>
                    <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-yellow-400 transition">Legal</a>
                </div>
                <p className="text-sm">&copy; 2023 TIMECHAIN LABS. All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
