import HireFromUs from "@/assets/HireFromUs";
import Icons from "@/assets/Icons";

function Benifites() {
    const benefits = [
        "Trained to meet Industry Standard",
        "Independently pre-assessed",
        "Immediate Availability",
        "Hassle Free Experience",
    ];

    return (
        <div className="flex flex-col lg:flex-row my-8 sm:my-12 lg:my-24 mx-4 sm:mx-6 lg:mx-20 justify-between items-center lg:items-start">
            {/* Image Section */}
            <div className="w-full lg:w-auto mb-6 sm:mb-8 lg:mb-0">
                <img
                    src={HireFromUs.Benefits1}
                    alt="benefits1"
                    className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[620px] h-auto rounded-lg"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col w-full sm:w-4/5 lg:w-2/5 items-start">
                <h1 className="text-md sm:text-lg lg:text-xl font-sans font-medium text-Cobalt_Blue">BENEFITS</h1>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-sans font-medium text-Charcoal mt-2 sm:mt-3">
                    Why hire from Us?
                </h1>
                <p className="text-sm sm:text-base lg:text-lg font-rubik font-light text-Dim_Gray mt-4 sm:mt-5">
                    Together, we're making education accessible and transformative. Join us in shaping a brighter
                    future!
                </p>
                <div className="flex flex-col space-y-3 sm:space-y-4 mt-5 sm:mt-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center space-x-2"
                        >
                            <img
                                src={Icons.GreenTick}
                                alt="GreenTick"
                                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                            />
                            <p className="text-sm sm:text-base lg:text-xl font-rubik font-normal text-Charcoal">
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>
                <button className="bg-Cobalt_Blue text-white font-rubik font-medium text-sm sm:text-base lg:text-lg rounded-md px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-3 mt-6 sm:mt-8 lg:mt-12">
                    Request Talent Today
                </button>
            </div>
        </div>
    );
}

export default Benifites;
