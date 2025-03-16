import React from 'react'
import BackToTop from '../componets/BackToTop'

const MDMilkUnion = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                    src="/home-1-slide-1.jpg"
                    alt="Milk Producers"
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">MANAGING DIRECTOR MILK UNION</h1>
                    <p className="text-lg mt-2 opacity-90">Home / Managing Director Milk Union</p>
                </div>
            </div>
            {/* Main Content Section */}
            <section className="container mx-auto py-12 px-6">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3">
                        <img
                            src="/mdmilkunion/person.png"
                            alt="Managing Director"
                            className="w-full rounded-lg shadow-lg"
                        />
                        <h3 className="text-blue-600 text-center mt-4 font-semibold text-lg">
                            Managing Director
                        </h3>
                        <p className="text-gray-500 text-center">Shivamrut Milk Union</p>
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Speech by the Managing Director of a Milk Union
                        </h2>
                        <p className="text-gray-600 italic mt-2">Good [morning/afternoon/evening] everyone,</p>

                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            It is my great pleasure to address you all today as the Managing Director of
                            Shivamrut Milk Union. I would like to extend my heartfelt gratitude to all our
                            farmers, employees, stakeholders, and consumers who contribute to making our
                            union a symbol of quality, trust, and prosperity.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                            Our Commitment to Dairy Farmers:
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our milk union exists because of the hard work and dedication of our dairy farmers.
                            They are the backbone of our operations, and we are committed to ensuring their
                            welfare. Through better pricing, technical assistance, and modern farming
                            practices, we aim to improve productivity and profitability for our farmers.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-gray-900">Quality and Innovation:</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We take immense pride in delivering the highest quality milk and dairy products
                            to our consumers. Our focus remains on maintaining strict quality standards,
                            adopting modern processing technologies, and ensuring hygiene at every stage of
                            milk collection and processing.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                            Strengthening Our Supply Chain:
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            To ensure fresh and safe dairy products reach every household, we have been continuously improving our supply chain. Investments in cold storage, efficient transportation, and digital tracking systems are helping us streamline operations and reduce wastage.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                            Sustainability and Future Growth:
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Sustainability is at the heart of our vision. We are working on reducing our environmental impact by promoting eco-friendly dairy farming, reducing plastic usage, and encouraging organic feed and fodder practices. Furthermore, we aim to expand our presence in new markets and explore export opportunities.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                            Appreciation and Call to Action:
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I sincerely thank all our members and employees for their dedication and hard work. It is because of your efforts that we continue to grow and serve millions of consumers every day. Let us work together to build a stronger, more prosperous, and sustainable dairy sector.

                            Once again, I appreciate your contributions, and I look forward to a future filled with growth and success together.

                            Thank you!
                        </p>
                    </div>
                </div>
            </section>
            <BackToTop />
        </div>
    )
}

export default MDMilkUnion
