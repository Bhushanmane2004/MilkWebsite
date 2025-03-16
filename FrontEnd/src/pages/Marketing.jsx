import React from 'react'

const Marketing = () => {
    return (
        <>
            <div
                className="relative bg-cover bg-center h-48 flex items-center justify-center"
                style={{ backgroundImage: "url('/home-1-slide-1.jpg')" }}
            >
                <div className="bg-opacity-50 w-full h-full flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-3xl font-bold">Marketing</h1>
                        <div className="mt-2 flex justify-center space-x-2 text-sm">
                            <a href="index.html" className="text-gray-300 hover:text-white">Home</a>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-200">Marketing</span>
                        </div>
                    </div>
                </div>
            </div>




            <div className="max-w-5xl mx-auto p-4 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Marketing</h1>
      
      {/* Description */}
      <p className="text-justify mb-4">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
      </p>

      <p className="text-justify mb-6">
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>

      {/* Akluj Branch Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Akluj Branch</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#FEC321]">
              <th className="border border-gray-300 px-4 py-2">Sr.No.</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">1</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 1 cell1</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 1 cell2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">2</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 2 cell1</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 2 cell2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">3</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 3 cell1</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 3 cell2</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Madha Branch Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Madha Branch</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#FEC321]">
              <th className="border border-gray-300 px-4 py-2 ">Sr.No.</th>
              <th className="border border-gray-300 px-4 py-2 ">Title</th>
              <th className="border border-gray-300 px-4 py-2 ">Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">1</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 1 cell1</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 1 cell2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">2</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 2 cell1</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 2 cell2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">3</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 3 cell1</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Row 3 cell2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

        </>
    )
}

export default Marketing