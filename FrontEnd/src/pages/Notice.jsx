import React from 'react'

const Notice = () => {
  return (
    <>
     <div
                className="relative bg-cover bg-center h-48 flex items-center justify-center"
                style={{ backgroundImage: "url('/home-1-slide-1.jpg')" }}
            >
                <div className="bg-opacity-50 w-full h-full flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-3xl font-bold">Tendor Notice</h1>
                        <div className="mt-2 flex justify-center space-x-2 text-sm">
                            <a href="index.html" className="text-gray-300 hover:text-white">Home</a>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-200">Tendor Notice</span>
                        </div>
                    </div>
                </div>
            </div>


    <div className="overflow-x-auto mt-8 mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#FEC321]">
              <th className="border border-gray-300 px-4 py-2 ">Sr.No.</th>
              <th className="border border-gray-300 px-4 py-2 ">Tendor No.</th>
              <th className="border border-gray-300 px-4 py-2 ">Details</th>
              <th className="border border-gray-300 px-4 py-2 ">Date of Posting</th>
              <th className="border border-gray-300 px-4 py-2 ">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">1</td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
            </tr>
            <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">2</td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">3</td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
              <td className="border border-gray-300 px-4 py-2 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Notice