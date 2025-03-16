import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 z-1">
      <div className="mx-auto bg-white shadow-xl overflow-hidden">
        <div className="relative h-40 sm:h-64 w-full">
          <img
            src="/contact_img.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-2xl sm:text-4xl font-bold px-4 text-center">
              Contact Us
            </h1>
          </div>
        </div>

        <div className="p-4 sm:p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex flex-col items-center text-center bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
              <MapPin size={32} className="text-blue-600" />
              <h2 className="text-lg font-semibold mt-3">Address</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Vijaynagar, Vizori, Akluj, Maharashtra 413118, India
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
              <Phone size={32} className="text-green-600" />
              <h2 className="text-lg font-semibold mt-3">Phone</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                <a
                  href="tel:+912185222566"
                  className="hover:text-green-600 transition-colors"
                >
                  02185-222566
                </a>{" "}
                /
                <a
                  href="tel:+912185222915"
                  className="hover:text-green-600 transition-colors ml-1"
                >
                  222915
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
              <Mail size={32} className="text-red-600" />
              <h2 className="text-lg font-semibold mt-3">Email</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                <a
                  href="mailto:shivamrutakluj@gmail.com"
                  className="hover:text-red-600 transition-colors"
                >
                  shivamrutakluj@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl font-semibold mb-4 px-2">Our Location</h2>
            <div className="relative overflow-hidden pb-4 h-64 sm:h-96 rounded-xl shadow-lg">
              <iframe
                title="Google Map"
                className="w-full h-full absolute top-0 left-0 border-0"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d242221.60487670783!2d73.73297501854617!3d18.451354837669488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zICDgpLbgpL_gpLXgpL7gpK7gpYPgpKQg4KSm4KWC4KSnIOCkieCkpOCljeCkquCkvuCkpuCklSDgpLjgpLngpJXgpL7gpLDgpYAg4KS44KSC4KSYIOCkruCksOCljeCkr-CkvuCkpuCkv-CkpA!5e0!3m2!1sen!2sin!4v1742131938906!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form - Added for better user interaction */}
          <div className="mt-8 sm:mt-12 bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
