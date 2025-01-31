export default function NewArrival() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center bg-[#FFF9E5] px-8 py-16 lg:py-24">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
        <img
          src="newarrival.png"
          alt="Asgaard sofa"
          className="w-11/12 max-w-[600px] lg:max-w-[900px] object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl text-black mb-4 lg:ml-12">New Arrivals</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 lg:ml-12">
          Asgaard Sofa
        </h1>
        <a
          href="/components/shop/14"
          className="inline-block mt-8 lg:ml-12 border-2 border-black py-4 px-12 text-lg text-black hover:bg-black hover:text-white transition duration-300"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
