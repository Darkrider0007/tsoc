import HireFromUs from "@/assets/HireFromUs";

function HIW() {
    const steps = [
        { number: "01", description: "A quick sign-up process" },
        { number: "02", description: "Receive a customized design plan with 3D renderings" },
        { number: "03", description: "Our placement team reaches out to understand your requirements" },
        { number: "04", description: "Our trainees apply to these opportunities" },
        { number: "05", description: "Extend offers to candidates who match your criteria!" },
    ];

    const images = [
        HireFromUs.HIW1,
        HireFromUs.HTW2,
        HireFromUs.HIW3,
        HireFromUs.HIW4,
        HireFromUs.HIW5,
        HireFromUs.HIW6,
        HireFromUs.HIW7,
        HireFromUs.HIW8,
        HireFromUs.HIW9,
    ];

    return (
        <div className="flex flex-col lg:flex-row justify-between mx-4 sm:mx-8 lg:mx-20">
            {/* Steps Section */}
            <div className="flex flex-col w-full lg:w-[42%] items-start">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-medium text-Charcoal">
                    HOW IT WORKS
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl font-sans font-light text-Charcoal mt-3">
                    Our streamlined process is designed to make your hiring process smooth and enjoyable.
                </p>
                <div className="flex flex-col space-y-3 sm:space-y-4 mt-5 sm:mt-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-row items-center">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-Alice_Blue rounded-full flex items-center justify-center">
                                <h1 className="text-lg sm:text-2xl lg:text-3xl font-sans font-light text-Off_Black">
                                    {step.number}
                                </h1>
                            </div>
                            <h1 className="text-sm sm:text-lg lg:text-xl font-rubik font-normal text-Charcoal ml-4 sm:ml-5 lg:ml-6 my-3 sm:my-4">
                                {step.description}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Images Section */}
            <div className="flex flex-col w-full lg:w-[40%] items-start mt-8 lg:mt-0 py-8 lg:py-14">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`hiw-${index + 1}`}
                            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 object-cover rounded-md border-Light_Periwinkle border-2"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HIW;
