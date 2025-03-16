import React from 'react'
import { CheckCircle } from "lucide-react";

const AboutShivamrut = () => {
    return (
        <>
            <div
                className="relative bg-cover bg-center h-48 flex items-center justify-center"
                style={{ backgroundImage: "url('/home-1-slide-1.jpg')" }}
            >
                <div className="bg-opacity-50 w-full h-full flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-3xl font-bold">About Shivamrut</h1>
                        <div className="mt-2 flex justify-center space-x-2 text-sm">
                            <a href="index.html" className="text-gray-300 hover:text-white">Home</a>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-200">About Shivamrut</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* ABOUT US */}
            <section className="py-8 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">About Us</h2>
                    <div className="flex flex-col lg:flex-row items-stretch mx-auto max-w-7xl">
                        <div className="lg:w-1/2 w-full flex">
                            <img
                                src="/shivamrut-3.png"
                                alt="Shivamrut"
                                className="w-full h-full object-cover shadow-lg"
                            />
                        </div>
                        <div className="lg:w-1/2 bg-[#FFF3D3] p-4 sm:p-6 text-center lg:text-left flex flex-col justify-center">
                            <p className="text-gray-700 text-sm sm:text-base text-justify">
                                Shivamrut Dudh Utpadak Sahakari Sangh Ltd. Vijaynagar – Akluj Tq. Malshiras Dist. Solapur. This Milk Union is established in the Year 1976 in the earlier period our area of operation was 5 Talukas of Solapur Dist. The Union Staves towards strengthening the livelihood of farmers in the region through dairying. Presently villege level 189 sanstha connected to the shivamrut milk union. Presently the Union procures milk through a network of 189 functional sanstha having 4700 milk producer members. During 2022-23 the Union procured 90 TkgPD milk from its operational area. Presently, the activities of this Milk Union are mainly concentrated within Malshiras taluka and its surrounding villages thereby covering 236 village collection centres. Due to effective implementation of this program, income generated from Dairy business tuned to Rs. 250 crores annually in this area, thereby creating self employments to about 40,000 rural families within this taluka. The Milk Union is offering to the beneficiaries a package deal of basic necessities to meet different needs, to the milk producers in procurement, marketing of milk, biological and medicinal inputs, cattle feed etc.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-4 w-full max-w-7xl mx-auto" />



            {/* OBJECTIVES */}
            <section className="py-8 px-4 flex justify-center">
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Objective</h2>
                    <p className="text-gray-700 mb-4">
                        State the primary goals. Example objectives could include:
                    </p>
                    
                    <ul className="space-y-2">
                        {[
                            "To analyse the factors affecting milk production in dairy farms.",
                            "To explore sustainable practices in dairy farming.",
                            "To improve the health and nutrition of dairy cattle.",
                            "To study the economic impact of dairy farming in a specific region.",
                        ].map((objective, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle className="text-yellow-500" />
                                {objective}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-4 w-full max-w-7xl mx-auto" />



            {/* SCOPE */}
            <section className="py-8 px-4 flex justify-center">
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Scope</h2>
                    <ul className="space-y-2">
                        {[
                            "Dairy farming techniques",
                            "Milk production and processing.",
                            "Waste management in dairy farms.",
                            "Economic and social impact.",
                        ].map((objective, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle className="text-yellow-500" />
                                {objective}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-4 w-full max-w-7xl mx-auto" />


            {/* Methodology */}
            <section className="py-8 px-4 flex justify-center">
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Methodology</h2>
                    <p className="text-gray-700 mb-4">
                    Explain how you will achieve the objectives:
                    </p>
                    <ul className="space-y-2">
                        {[
                            "GField surveys or interviews with farmers.",
                            "Data collection on milk production, cattle health, and farm management.",
                            "Lab Analysis of data using statistical software.",
                        ].map((objective, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle className="text-yellow-500" />
                                {objective}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-4 w-full max-w-7xl mx-auto" />


            {/* Expected Outcomes */}
            <section className="py-8 px-4 flex justify-center">
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Expected Outcomes</h2>
                    <p className="text-gray-700 mb-4">
                    Describe what you hope to achieve :
                    </p>
                    <ul className="space-y-2">
                        {[
                            "Increased milk yield through improved techniques.",
                            "Reduced environmental impact via better waste management. condition.",
                            "Recommendations for cost-effective practices.",
                        ].map((objective, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle className="text-yellow-500" />
                                {objective}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-4 w-full max-w-7xl mx-auto" />

            <section className="py-8 px-4 flex justify-center">
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">DAIRY PLANT</h2>
                    <p className="text-gray-700 mb-4">
                    The Milk Union is having a Dairy Plant of 200,000 liters per day. It has Modern Technology for the Processing of Milk and production of Milk Products.
                    </p>
                </div>
            </section>



            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-4 w-full max-w-7xl mx-auto" />

            <section className="py-8 px-4 flex justify-center">
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">BULK COOLERS</h2>
                    <p className="text-gray-700 mb-4">
                    It has 17 bulk milk coolers & 04 chilling centers operational in rural areas for getting Clean Milk Production.
                    </p>
                </div>
            </section>


            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-4 w-full max-w-7xl mx-auto" />

            <section className="py-8 px-4 flex justify-center">
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">MILK PRODUCTS</h2>
                    <p className="text-gray-700 mb-4">
                    Dairy plant produces Sterilized Flavoured Milk, Curd, Paneer, Shrikhand, Amrakhand, Pedha, Khoa, Basundi, Lassi, Taak, Gulabjamun and Spicy Chaas. Kaju Katle, Mix Kaju Katle, Mix Byte, Mysoor Paak, Butter & Ghee in large quantities is also produced for National market.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AboutShivamrut