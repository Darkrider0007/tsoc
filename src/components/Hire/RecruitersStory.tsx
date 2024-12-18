import Icons from "@/assets/Icons";
import HireFromUs from "@/assets/HireFromUs";
import { useState } from "react";

function RecruitersStory() {

    const recruitersDesktop = [
        {
            image: HireFromUs.rec1,
            quote: "Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures",
            name: "Rohan Sharan",
            position: "Founder, Timechain Labs",
        },
        {
            image: HireFromUs.rec2,
            quote: "Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures",
            name: "Jessica Thompson",
            position: "Founder, InnovaTech Solutions",
        },
        {
            image: HireFromUs.rec3,
            quote: "Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures",
            name: "Priyansh Jain",
            position: "Design Lead, ABC Tech Solutions",
        }
    ];


    const recruiters = [
        {
            image: HireFromUs.rec1,
            quote: "Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures.",
            name: "Rohan Sharan",
            position: "Founder, Timechain Labs",
        },
        {
            image: HireFromUs.rec2,
            quote: "Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures.",
            name: "Jessica Thompson",
            position: "Founder, InnovaTech Solutions",
        },
        {
            image: HireFromUs.rec3,
            quote: "Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures.",
            name: "Priyansh Jain",
            position: "Design Lead, ABC Tech Solutions",
        },
    ];

    // State for both desktop and mobile view
    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigation for Mobile View
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + recruiters.length) % recruiters.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % recruiters.length);
    };

    return (
        <div className="w-full bg-Alice_Blue py-10">
            {/* Desktop View */}
            <div className="hidden md:block">
                <div className="hidden md:flex justify-between mx-20 my-10">
                    <div className="flex flex-col items-start">
                        <h1 className='text-5xl font-sans text-center font-medium'>Recruiters Story</h1>
                        <p className='text-center font-rubik font-light text-xl text-Slate_Gray mt-6'>
                            Together, we're making education accessible and
                        </p>
                        <p className='text-center font-rubik font-light text-xl text-Slate_Gray'>
                            transformative. Join us in shaping a brighter future!
                        </p>
                    </div>

                    <div className="flex flex-row space-x-10 items-center">
                        <button onClick={goToPrevious} className="w-15 h-15 rounded-full hover:bg-black hover:text-white">
                            <img
                                src={Icons.PrevButton}
                                alt="prev-button"
                                className="w-15 h-15 transition-all duration-1000 ease-in-out hover:invert"
                            />
                        </button>

                        <button onClick={goToNext} className="w-15 h-15 rounded-full">
                            <img
                                src={Icons.NextButton}
                                alt="next-button"
                                className="w-15 h-15 transition-all duration-1000 ease-in-out hover:invert"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel for images with smooth sliding */}
            <div className="hidden md:block ml-20 mb-10 overflow-hidden relative">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {recruitersDesktop.map((recruiter, index) => (
                        <div key={index} className="flex flex-col w-[420px] rounded-t-lg bg-white mx-3">
                            <img
                                src={recruiter.image}
                                alt={`recruiter-image-${index + 1}`}
                                className="w-[420px] h-[420px] rounded-lg"
                            />
                            <div className="flex flex-col mb-5">
                                <p className="text-xl font-rubik font-light text-Charcoal m-5">
                                    “{recruiter.quote}”
                                </p>

                                <h1 className="text-2xl text-start font-sans font-medium text-Charcoal mx-5 mt-10">
                                    {recruiter.name}
                                </h1>
                                <p className="text-sm font-rubik font-light text-Dim_Gray mx-5 mt-1">
                                    {recruiter.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden px-4">
                <h1 className="text-3xl font-sans font-medium text-center mb-6">Recruiters' Story</h1>

                {/* Display one recruiter at a time */}
                <div className="relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {recruiters.map((recruiter, index) => (
                            <div key={index} className="min-w-full flex flex-col items-center bg-white rounded-lg shadow-lg">
                                <img
                                    src={recruiter.image}
                                    alt={recruiter.name}
                                    className="w-full h-[250px] object-cover rounded-t-lg"
                                />
                                <div className="p-4 text-center">
                                    <p className="text-base italic mb-4">“{recruiter.quote}”</p>
                                    <h3 className="text-lg font-medium">{recruiter.name}</h3>
                                    <p className="text-sm text-Dim_Gray">{recruiter.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                        <button
                            onClick={goToPrevious}
                            className="w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center"
                        >
                            <img src={Icons.PrevButton} alt="Previous" className="w-4 h-4" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center"
                        >
                            <img src={Icons.NextButton} alt="Next" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecruitersStory;
