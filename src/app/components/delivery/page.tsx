import React from 'react';

const Delivery = () => {
  return (
    <main className="w-full h-[400px] md:h-[320px] lg:h-[300px] flex flex-col md:flex-row items-center justify-between bg-[#FAF4F4] p-6 gap-6">
      {/* Section 1 */}
      <div className="flex flex-col items-start text-center md:text-left md:w-[376px]">
        <h2 className="text-2xl md:text-[32px] font-medium text-black">
          Free Delivery
        </h2>
        <p className="text-gray-500 text-lg md:text-[20px]">
          For all orders over $50, consectetur adipiscing elit.
        </p>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col items-start text-center md:text-left md:w-[376px]">
        <h2 className="text-2xl md:text-[32px] font-medium text-black">
          90 Days Return
        </h2>
        <p className="text-gray-500 text-lg md:text-[20px]">
          If goods have problems, consectetur adipiscing elit.
        </p>
      </div>
      {/* Section 3 */}
      <div className="flex flex-col items-start text-center md:text-left md:w-[376px]">
        <h2 className="text-2xl md:text-[32px] font-medium text-black">
          Secure Payment
        </h2>
        <p className="text-gray-500 text-lg md:text-[20px]">
          100% secure payment, consectetur adipiscing elit.
        </p>
      </div>
    </main>
  );
};

export default Delivery;
