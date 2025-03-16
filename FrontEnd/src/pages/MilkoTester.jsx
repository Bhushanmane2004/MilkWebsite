import React from 'react';
import BackToTop from '../componets/BackToTop';


const MilkoTester = () => {
    return (
        <div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                    src="/home-1-slide-1.jpg"
                    alt="Milk Producers"
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">MILKO TESTER</h1>
                    <p className="text-lg mt-2 opacity-90">Home / Milko Tester</p>
                </div>
            </div>


            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Services Section */}
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
                        <h1 className="text-3xl font-bold mb-4">Milko Tester</h1>
                        <img
                            src="/milkotester/milkotester1.jpg"
                            alt="Milko Tester"
                            className="rounded-lg shadow-md w-2/3 mx-auto mb-4"
                        />
                        <p className="text-gray-700">
                            Milko Tester is a device which electronically determines the Fat % rapidly in milk. Milko Testers, Auto SNF Indicators & Milk Analyzers are used at primary Dairy Cooperative Societies (DCSs) in villages. The milk supplied by producer is tested before acceptance and payment is made on the basis of milk quality. This helps to good quality milk at primary dairy cooperative as well as at Union level. The transparent process results in strengthening faith of milk producer on Village Society and Union.

                            Our Union provides Milko Testers, Auto SNF Indicators & Milk Analyzers to the DCSs on subsidized rate. Also we provide required Chemical, Sachet powder & Cleaning solution on subsidized rate. During the year 2023-24, we have distributed 553 Eco Ultra milk analyzer Machines , 99 ultrascan Kurian Machines, 52 Aceteroca machines, 41 Akashganga milk analyzer machines, space ex altra 10 machines and kb hitech 6 machines to 761 DCSs.
                        </p>
                        <h2 className="text-2xl font-bold mt-6">Repair and Maintenance</h2>
                        <p className="text-gray-700">
                            We have 19 centers with a fleet of 43 qualified technicians for repair of Milko Testers, Auto SNF Indicators & Milk Analyzers, in various places of the district, through which we provide services to the DCSs. We bear expenditure on spare parts above Rs.1500/- for Milko tester & Auto SNF machine and above Rs.7500/- for Milk Analyzer.
                        </p>
                        <h2 className="text-2xl font-bold mt-6">Risk Fund</h2>
                        <p className="text-gray-700">
                            Our Union has started ‘Risk Fund’ scheme for milk testing machines. For this purpose, DCSs have to contribute an amount of Rs.3000/- per Milko Tester/Auto SNF m/c., and Rs.7500/- for Milk Analyzer. Due to short circuit If any machine got damaged, we provide new machine from this scheme to DCSs.
                        </p>
                    </div>
                </div>
            </div>
            <BackToTop />
        </div>
    );
}

export default MilkoTester;