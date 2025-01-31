import Link from "next/link";


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
        <Link href={"http://www.instagram.com/zainscity"}
          className="px-6 py-2 bg-[#FAF4F4] text-black font-medium rounded-full shadow-md hover:shadow-lg"
        >
          Follow Us
        </Link>
      </div>
    </div>

    );
  }

 