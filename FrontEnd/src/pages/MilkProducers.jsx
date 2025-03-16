import React from 'react'
import BackToTop from '../componets/BackToTop'

const MilkProducers = () => {
    return (
        <div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                    src="/home-1-slide-1.jpg"
                    alt="Milk Producers"
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">MILK PRODUCERS</h1>
                    <p className="text-lg mt-2 opacity-90">Home / Milk Producers</p>
                </div>
            </div>
        <div className="container mx-auto px-4 py-12">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Services Section - Positioned at the top */}
                <div className="self-start">
                    <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg w-full max-h-48">
                        <h2 className="text-2xl font-bold mb-4">Services</h2>
                        <ul className="space-y-2">
                            <li>• Milk Producers</li>
                            <li>• Cattlefeed Plant</li>
                            <li>• Milko Tester</li>
                        </ul>
                    </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold mb-4">MILK PRODUCERS</h1>
                    <p className="text-gray-700 mb-6">
                        Dairy plant produces Sterilized Flavoured Milk, Curd, Paneer like Shrikhand, Amrakhand,
                        Pedha, Khoa, Basundi, Lassi, Taak, Spicy Chaas. BUTTER & GHEE in large quantities is
                        also produced for the National market.
                    </p>

                    {/* Image Grid - 2 images per row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img 
                            src="/milkproducers/milk1.jpg" 
                            alt="Milking process" 
                            className="rounded-lg shadow-md"
                        />
                        <img 
                            src="/milkproducers/milk2.jpg" 
                            alt="Milk Distribution" 
                            className="rounded-lg shadow-md"
                        />
                        <img 
                            src="/milkproducers/milk3.jpg" 
                            alt="Dairy Farm" 
                            className="rounded-lg shadow-md"
                        />
                        <img 
                            src="/milkproducers/milk4.jpg" 
                            alt="Dairy Farm" 
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
        <BackToTop />
        </div>
    )
}

export default MilkProducers
