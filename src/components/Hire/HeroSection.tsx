import HireFromUs from "@/assets/HireFromUs";
import { Button } from "../ui/button";
import Companies from "@/assets/Companies";

function HeroSection() {
    // Array for card images in Section 2
    const hireCards = [
        HireFromUs.card1,
        HireFromUs.card2,
        HireFromUs.card3,
    ];

    // Array for company logos in Section 3
    const companyLogos = [
        Companies.Airbnb,
        Companies.Google,
        Companies.Amazon,
        Companies.Microsoft,
        Companies.Slack,
    ];

    return (
        <div className="w-full flex flex-col items-center pt-10 px-4 md:px-10">
            {/* Section 1 */}
            <div className="flex flex-col w-full md:w-1/2 items-center text-center">
                <h1 className="text-4xl md:text-6xl font-medium">
                    Hire Top Talent,
                </h1>
                <h1 className="text-4xl md:text-6xl font-medium">
                    Accelerate Your Growth.
                </h1>
                <p className="font-rubik font-light text-sm md:text-lg text-Dim_Gray mt-4 md:mt-6">
                    Find the right professionals to elevate your business. From
                    temporary staffing to permanent placements, we connect you
                    with skilled experts tailored to your needs.
                </p>

                <Button className="px-4 py-2 md:px-5 md:py-3 font-rubik font-normal bg-Cobalt_Blue text-white rounded-md hover:bg-blue-700 transition mt-4 md:mt-6 w-auto">
                    Request Talent Today
                </Button>
            </div>

            {/* Section 2 - Hire Cards */}
            <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-3 my-10">
                {hireCards.map((card, index) => (
                    <img
                        key={index}
                        src={card}
                        alt={`hero-section-card-${index + 1}`}
                        className="w-[300px] h-[350px] md:w-[420px] md:h-[500px] rounded-lg"
                    />
                ))}
            </div>

            {/* Section 3 - Company Logos */}
            <div className="flex flex-col w-full items-center py-8">
                <p className="font-rubik text-base md:text-xl text-center font-normal">
                    We are trusted by over 20,000+ individuals in these
                    companies
                </p>
                <div className="flex flex-wrap justify-center space-x-8 md:gap-14 mt-6 md:mt-10 items-center">
                    {companyLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`company-logo-${index + 1}`}
                            className="h-12 w-16 md:h-16 md:w-20 object-contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
