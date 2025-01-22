import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '../navbar/page'

const Hero = () => {
  return (
    <section>
      {/* Navbar */}
      <Navbar bgColor="bg-[#FBEBB5]" />

      <main className="flex flex-col md:flex-row items-center bg-[#FBEBB5]">
        {/* Left Side */}
        <div className="flex flex-col items-start md:items-start p-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 w-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Poppins'] font-medium text-black leading-tight">
            Rocket Single
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Poppins'] font-medium text-black leading-tight">
            Seater
          </h2>

          <Link href={''}>
            <button className="mt-8 px-8 py-3 text-xl font-medium text-black border-2 border-black hover:bg-black hover:text-white transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Using Next.js Image component with width and height explicitly set */}
          <Image
            src="/sofa1.png" // Ensure this is the correct path to your image
            alt="Rocket Single Seater Sofa"
            width={700} // Set the width of the image
            height={500} // Set the height of the image
            className="object-contain max-w-full max-h-full"
          />
        </div>
      </main>
    </section>
  );
}

export default Hero;
