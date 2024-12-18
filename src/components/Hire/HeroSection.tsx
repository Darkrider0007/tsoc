import HireFromUs from "@/assets/HireFromUs";
import { Button } from "../ui/button";
import Companies from "@/assets/Companies";

function HeroSection() {
    // Array for card images in Section 2
    const hireCards = [
        HireFromUs.card1,
        HireFromUs.card2,
        HireFromUs.card3
    ];

    // Array for company logos in Section 3
    const companyLogos = [
        Companies.Airbnb,
        Companies.Google,
        Companies.Amazon,
        Companies.Microsoft,
        Companies.Slack
    ];

    return (
        <div className='w-full flex flex-col items-center pt-10'>
            {/* Section 1 */}
            <div className='flex flex-col w-1/2 items-center'>
                <h1 className='text-6xl text-center font-medium'>Hire Top Talent,</h1>
                <h1 className='text-6xl text-center font-medium'>Accelerate Your Growth.</h1>
                <p className='text-center font-rubik font-light text-lg text-Dim_Gray mt-6'>
                    Find the right professionals to elevate your business. From temporary staffing to permanent placements, we connect you with skilled experts tailored to your needs.
                </p>

                <Button className='px-5 py-3 font-rubik font-normal bg-Cobalt_Blue text-white rounded-md hover:bg-blue-700 transition mt-6 w-50'>
                    Request Talent Today
                </Button>
            </div>

            {/* Section 2 - Hire Cards */}
            <div className="flex flex-wrap space-x-3 my-10 mx-20">
                {hireCards.map((card, index) => (
                    <img
                        key={index}
                        src={card}
                        alt={`hero-section-card-${index + 1}`}
                        className="w-[420px] h-[500px] rounded-lg"
                    />
                ))}
            </div>

            {/* Section 3 - Company Logos */}
            <div className="flex flex-col w-full items-center py-8">
                <p className="font-rubik text-xl text-center font-normal">We are trusted by over 20,000+ individuals in these companies</p>
                <div className="flex flex-wrap justify-center items-center space-x-14 mt-10">
                    {companyLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`company-logo-${index + 1}`}
                            className="h-6 w-20"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
