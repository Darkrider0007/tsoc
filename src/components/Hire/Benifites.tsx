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
        <div className="flex flex-row my-24 mx-20 justify-between">
            <div>
                <img src={HireFromUs.Benefits1} alt="benefits1" className="w-[620px] h-[518px] rounded-lg" />
            </div>
            <div className="flex flex-col w-2/5 items-start">
                <h1 className="text-xl font-sans font-medium text-Cobalt_Blue">BENEFITS</h1>
                <h1 className="text-5xl font-sans font-medium text-Charcoal mt-3">Why hire from Us?</h1>
                <p className="text-lg font-rubik font-light text-Dim_Gray mt-5">Together, we're making education accessible and transformative. Join us in shaping a brighter future!</p>
                <div className="flex flex-col space-y-4 mt-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-row items-center space-x-2">
                            <img src={Icons.GreenTick} alt="GreenTick" />
                            <p className="text-xl font-rubik font-normal text-Charcoal my-2">{benefit}</p>
                        </div>
                    ))}
                </div>
                <button className="bg-Cobalt_Blue text-white font-rubik font-medium text-lg rounded-md px-5 py-3 mt-10">Request Talent Today</button>
            </div>
        </div>
    );
}

export default Benifites;
