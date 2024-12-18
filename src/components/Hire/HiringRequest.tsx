import React, { useState } from "react";

interface FormData {
    contactName: string;
    companyName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    role: string;
    employmentType: string[];
    skillLevel: string[];
    positionType: string;
    budget: string;
    additionalInfo: string;
}

const HiringRequest: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        contactName: "",
        companyName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        role: "",
        employmentType: [],
        skillLevel: [],
        positionType: "",
        budget: "",
        additionalInfo: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked
                    ? [...prevData[name as keyof FormData], value]
                    : Array.isArray(prevData[name as keyof FormData])
                        ? (prevData[name as keyof FormData] as string[]).filter((item: string) => item !== value)
                        : [],
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            {/* Desktop View */}
            <div className="hidden lg:flex flex-row justify-between mx-20 my-24">
                {/* Left Side Content */}
                <div className="flex flex-col w-[38%] items-start">
                    <div className="flex items-center justify-center px-4 py-1 border-Light_Periwinkle border-2 bg-white rounded-full">
                        Contact Us
                    </div>
                    <h1 className="text-5xl font-sans font-medium mt-3">Hiring Request</h1>
                    <p className="text-lg font-sans font-light mt-4">
                        Unlock the potential of your business with top-tier professionals. We
                        provide custom hiring solutions for every industry, ensuring you find
                        the perfect fit.
                    </p>
                </div>

                {/* Form Section */}
                <div className="w-[52%] bg-Alice_Blue p-4 rounded-lg shadow-md max-h-[600px] overflow-y-scroll scrollbar-hide">
                    {renderForm()}
                </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden flex flex-col mx-4 my-8">
                {/* Left Side Content */}
                <div className="mb-6">
                    <div className="flex items-center justify-center px-3 py-1 border-Light_Periwinkle border-2 bg-white rounded-full">
                        Contact Us
                    </div>
                    <h1 className="text-3xl font-sans font-medium mt-3">Hiring Request</h1>
                    <p className="text-base font-sans font-light mt-4">
                        Unlock the potential of your business with top-tier professionals. We
                        provide custom hiring solutions for every industry, ensuring you find
                        the perfect fit.
                    </p>
                </div>

                {/* Form Section */}
                <div className="bg-Alice_Blue p-4 rounded-lg shadow-md max-h-[80vh] overflow-y-scroll scrollbar-hide">
                    {renderForm()}
                </div>
            </div>
        </div>
    );

    function renderForm() {
        return (
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg">
                {/* Contact Name and Company Name */}
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-1">
                        <label className="block font-rubik font-normal text-base text-Charcoal">Contact Name*</label>
                        <input
                            type="text"
                            name="contactName"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block font-rubik font-normal text-base text-Charcoal">Company Name*</label>
                        <input
                            type="text"
                            name="companyName"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                </div>

                {/* Email and Phone */}
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-1">
                        <label className="block font-rubik font-normal text-base text-Charcoal">Email Address*</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block font-rubik font-normal text-base text-Charcoal">Phone No*</label>
                        <input
                            type="tel"
                            name="phone"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                </div>

                {/* Country and City */}
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-1">
                        <label className="block font-rubik font-normal text-base text-Charcoal">Country*</label>
                        <input
                            type="text"
                            name="country"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block font-rubik font-normal text-base text-Charcoal">City*</label>
                        <input
                            type="text"
                            name="city"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                </div>

                {/* Employment Type */}
                <div>
                    <label className="block font-rubik font-normal text-base text-Charcoal">Employment Type*</label>
                    {["Full-time Role", "Part-time Role", "Internship Role"].map((type) => (
                        <label key={type} className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                name="employmentType"
                                value={type}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            {type}
                        </label>
                    ))}
                </div>

                {/* Skill Level */}
                <div>
                    <label className="block font-rubik font-normal text-base text-Charcoal">Skill Level*</label>
                    {["Intermediate Level", "Junior Level", "Senior Level"].map((level) => (
                        <label key={level} className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                name="skillLevel"
                                value={level}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            {level}
                        </label>
                    ))}
                </div>

                {/* Budget */}
                <div>
                    <label className="block font-rubik font-normal text-base text-Charcoal">What’s your budget?*</label>
                    <input
                        type="number"
                        name="budget"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Additional Information */}
                <div>
                    <label className="block font-rubik font-normal text-base text-Charcoal">Additional Information*</label>
                    <textarea
                        name="additionalInfo"
                        rows={4}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-Cobalt_Blue text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
    }
};

export default HiringRequest;
