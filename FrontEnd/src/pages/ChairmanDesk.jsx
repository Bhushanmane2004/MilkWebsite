import React from 'react'

const ChairmanDesk = () => {
    return (
        <>
            <div
                className="relative bg-cover bg-center h-48 flex items-center justify-center"
                style={{ backgroundImage: "url('/home-1-slide-1.jpg')" }}
            >
                <div className="bg-opacity-50 w-full h-full flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-3xl font-bold">Chairman Desk</h1>
                        <div className="mt-2 flex justify-center space-x-2 text-sm">
                            <a href="index.html" className="text-gray-300 hover:text-white">Home</a>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-200">Chairman Desk</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto p-4 mt-8">
                {/* Left Side - Image */}
                <div className="w-full md:w-2/5 flex justify-center md:justify-start">
                    <img
                        src="/chairman-desk.png"
                        alt="Shri. Dhairyasheel Rajsinh Mohite-Patil"
                        className="rounded-lg shadow-lg w-72 md:w-full border-2 border-gray-200"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-6 text-gray-800">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Shri. Dhairyasheel Rajsinh Mohite-Patil
                    </h1>
                    <p className="mt-4 text-justify">
                        Shivamrut Cooperative Milk Producers' Union was established on 27th
                        January 1976 under the Cooperative Societies Act. Initially, five
                        talukas of Malshiras, Sangola, Pandharpur, Mangalwedha, and Karmala in
                        Solapur district, Maharashtra state, India, were brought under the
                        purview of this milk union. At present, the activities of this milk
                        union are mainly concentrated in Malshiras taluka and its surrounding
                        villages, covering 236 village collection centers. On the ideological
                        lines of Cooperative Maharshi Shankarrao Mohite-Patil, this
                        organization is continuously marching ahead under valuable guidance.
                    </p>

                    <h2 className="text-xl font-bold mt-6">Achievements and Contributions:</h2>
                    <p className="mt-2 text-justify">
                        Over the years, our cooperative has become a symbol of unity, trust,
                        and hard work. We have empowered countless farmers, especially in
                        rural areas, by providing them with a fair platform to market their
                        milk and dairy products.
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Ensured better prices for our farmers.</li>
                        <li>Established state-of-the-art processing facilities.</li>
                        <li>Expanded our market reach to supply high-quality milk and dairy products.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6">The Role of Farmers:</h2>
                    <p className="mt-2 text-justify">
                        This success is a testament to the tireless efforts of our farmers.
                        You are the backbone of our Sangh, and our commitment to quality and
                        trust has brought us to where we stand today.
                    </p>

                    <h2 className="text-xl font-bold mt-6">Future Plans:</h2>
                    <ul className="list-disc list-inside mt-2">
                        <li>Adopting Advanced Technologies to enhance production efficiency.</li>
                        <li>Promoting Sustainability Initiatives in dairy farming.</li>
                        <li>Expanding our Market reach nationally and internationally.</li>
                        <li>Providing Training and Development for modern dairy farming.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6">Commitment to Values:</h2>
                    <p className="mt-2 text-justify">
                        Our Sangh remains committed to honesty, quality, and mutual growth.
                        Together, we will continue to build a brighter future for our farmers
                        and customers.
                    </p>

                    <h2 className="text-xl font-bold mt-6">Gratitude:</h2>
                    <p className="mt-2 text-justify">
                        I extend my heartfelt gratitude to the members, staff, and supporters
                        who have been instrumental in our journey. Let us pledge to keep this
                        momentum going, ensuring that our Sangh continues to thrive and
                        benefit everyone connected with it.
                    </p>

                    <p className="mt-4 font-bold text-lg">Jai Hind! Jai Kisan!</p>
                </div>
            </div>
        </>
    )
}

export default ChairmanDesk