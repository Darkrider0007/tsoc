import Icons from "@/assets/Icons";
import HireFromUs from "@/assets/HireFromUs";
import { useState, useEffect } from "react";

function RecruitersStory() {
    // Array with only 3 recruiters' information
    const recruiters = [
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

    // State to track the current index of the recruiters to display
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    // Function to go to the previous recruiter (left button)
    const goToPrevious = () => {
        if (!isSliding) {
            setIsSliding(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + recruiters.length) % recruiters.length);
        }
    };

    // Function to go to the next recruiter (right button)
    const goToNext = () => {
        if (!isSliding) {
            setIsSliding(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % recruiters.length);
        }
    };

    // Add delay to allow the transition to finish before enabling next action
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSliding(false);
        }, 500); // matches the transition duration

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className='w-full bg-Alice_Blue'>
            <div className="flex justify-between mx-20 my-10">
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

            {/* Carousel for images with smooth sliding */}
            <div className="ml-20 mb-10 overflow-hidden relative">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {recruiters.map((recruiter, index) => (
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
        </div>
    );
}

export default RecruitersStory;
