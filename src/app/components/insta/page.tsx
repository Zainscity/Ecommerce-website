
// export default function Insta() {
//     return (
//       <section  className=" p-8 text-center">
//         <h2 className="text-2xl font-bold mb-4"> Our Instagram</h2>
//         <p className="text-gray-600 mb-4">Follow our store on Instagram</p>
//         <a href="https://instagram.com" className="inline-block border-2 border-black py-2 px-4">Follow Us</a>
//       </section>
//     );
//   };
  

export default function Insta() {
    return (
      <div className="relative flex flex-col items-center justify-center  h-[450px] mx-auto">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-500"
        style={{
          backgroundImage: "url('/insta.jpg')", // Replace with your image
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-bold text-black mb-2">Our Instagram</h1>
        <p className="text-md text-gray-700 mb-4">Follow our store on Instagram</p>
        <button
          className="px-6 py-2 bg-[#FAF4F4] text-black font-medium rounded-full shadow-md hover:shadow-lg"
        >
          Follow Us
        </button>
      </div>
    </div>

    );
  }

 