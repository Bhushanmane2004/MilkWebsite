import React from 'react';

const Home = () => {
    return (
        <div className="w-full">
            {/* Welcome Section */}
            <section>
                <img
                    src="/shivamrut.png"
                    alt="Shivamrut Banner"
                    className="w-full h-auto object-cover"
                />

                <section
                    className="relative bg-cover bg-center py-10 sm:py-14 md:py-16 px-4 flex flex-col items-center text-center text-black pb-20"
                    style={{ backgroundImage: "url('/yellow_bg.jpg')", minHeight: "300px" }}
                >
                    <div className="relative z-10 max-w-4xl">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome To Our Farm!</h1>
                        <p className="text-base sm:text-lg max-w-2xl mx-auto">
                            Here you will find a wide range of healthy and fresh dairy products that were proudly produced at our farm by our farmers and cows. Welcome to Jacksons!
                        </p>
                    </div>

                    {/* Floating Logo */}
                    <div className="absolute bottom-[-50px] sm:bottom-[-60px] flex justify-center w-full">
                        <img
                            src="/logo.png"
                            alt="Farm Logo"
                            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-cover rounded-full border-4 border-white shadow-lg"
                        />
                    </div>
                </section>

            </section>

            {/* About Us Section */}
            <section className="pt-16 sm:pt-24 pb-8 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">About Us</h2>
                    <div className="flex flex-col lg:flex-row items-center lg:items-stretch mx-auto max-w-7xl">
                        <div className="lg:w-1/2 w-full">
                            <img
                                src="/shivamrut-5.png"
                                alt="Shivamrut"
                                className="w-full h-auto object-cover shadow-lg"
                            />
                        </div>
                        <div className="lg:w-1/2 bg-[#FFF3D3] p-6 sm:p-10 text-center lg:text-left flex flex-col justify-center">
                            <div>
                                <h4 className="text-xl sm:text-2xl font-semibold mb-4">
                                    Shivamrut Milk Union, Akluj (History)
                                </h4>
                                <p className="text-gray-700 text-sm sm:text-base text-justify">
                                    Shivamrut Co-operative Milk Producers Union was established on 27th January, 1976 under the Co-operative Societies Act. Initially, five talukas from Solapur District, Maharashtra State in India, namely Malshiras, Sangola, Pandharpur, Mangalwedha, and Karmala, were brought under the operational area of this Milk Union.
                                </p>
                            </div>
                            <a
                                href="/about-shivamrut"
                                className="inline-block px-6 py-2 mt-6 sm:mt-8 bg-[#FEC321] text-white rounded transition-colors self-center lg:self-start"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Fresh Section */}
            <section
                className="text-white min-h-[300px] sm:min-h-[500px] md:min-h-[600px] py-10 sm:py-16 px-4 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/bg_fresh.jpg')" }}
            >
                <div className="container mx-auto">
                    <div className="flex ml-10 flex-col lg:flex-row gap-8 sm:gap-12 items-center">
                        <div className="lg:w-1/2 space-y-4 sm:space-y-6 px-4 lg:px-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#FEC321]">What's Fresh</h2>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                                From Our Family<br className="hidden sm:block" />to Yours
                            </h3>
                            <p className="text-sm sm:text-base leading-relaxed opacity-90">
                                Although any mammal can produce milk, commercial dairy farms are typically one-species enterprises. In developed countries, dairy farms typically consist of high-producing dairy cows.
                            </p>
                            <a
                                href="/farm"
                                className="inline-block px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white hover:bg-[#FEC321] hover:text-black transition-all duration-300 font-medium rounded-lg"
                            >
                                Read More
                            </a>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <img
                                src="/girl.png"
                                alt="Fresh Dairy"
                                className="w-3/5 sm:w-2/5 rounded-lg shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
