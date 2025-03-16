import { React, useState } from 'react';

const Apply = () => {
    const [formData, setFormData] = useState({
        vendorName: "",
        phoneNumber: "",
        email: "",
        city: "",
        tenderNumber: "",
        tenderAbout: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <>
            {/* Background Banner */}
            <div
                className="relative bg-cover bg-center h-32 md:h-40 flex items-center justify-center"
                style={{ backgroundImage: "url('/home-1-slide-1.jpg')" }}
            >
                <div className="bg-opacity-50 w-full h-full flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-2xl md:text-3xl font-bold">Tender Apply</h1>
                        <div className="mt-2 flex justify-center space-x-2 text-sm">
                            <a href="index.html" className="text-gray-300 hover:text-white">Home</a>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-200">Tender Apply</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="flex justify-center items-center bg-gray-100 py-10 px-4">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-lg md:max-w-2xl">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-6 text-center">
                        Vendor Tender Form
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Form Fields */}
                        {[
                            { label: "Vendor Name", name: "vendorName", type: "text", placeholder: "Your name.." },
                            { label: "Phone Number", name: "phoneNumber", type: "tel", placeholder: "Phone Number.." },
                            { label: "Email ID", name: "email", type: "email", placeholder: "Email ID.." },
                            { label: "City", name: "city", type: "text", placeholder: "City.." },
                            { label: "Tender Number", name: "tenderNumber", type: "text", placeholder: "Tender Number.." },
                        ].map((field, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-3 items-center gap-3">
                                <label className="text-gray-600 font-medium">{field.label}</label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className="col-span-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                        ))}

                        {/* Tender About (Textarea) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-3">
                            <label className="text-gray-600 font-medium">Tender About</label>
                            <textarea
                                name="tenderAbout"
                                value={formData.tenderAbout}
                                onChange={handleChange}
                                placeholder="Enter details..."
                                rows="3"
                                className="col-span-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#FEC321] text-white py-2 px-6 rounded-md w-full sm:w-auto transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Apply;
