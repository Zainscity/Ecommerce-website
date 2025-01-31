"use client"
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Cartcheckout = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 250000;
  const subtotal = price * quantity;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-10 p-4 lg:p-10 bg-white">
      {/* Cart Items Section */}
      <div className="w-full lg:w-2/3 p-4 lg:p-6 bg-white shadow-lg rounded-xl">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#FFF9E5] text-black font-semibold">
              <th className="p-2 lg:p-4">Product</th>
              <th className="p-2 lg:p-4">Price</th>
              <th className="p-2 lg:p-4">Quantity</th>
              <th className="p-2 lg:p-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 lg:p-4 flex items-center gap-4 text-gray-700">
                <img src="/sofa.png" alt="Asgaard Sofa" className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg bg-yellow-100" />
                <span className="text-gray-500">Asgaard Sofa</span>
              </td>
              <td className="p-2 lg:p-4 text-gray-500">Rs. {price.toLocaleString()}.00</td>
              <td className="p-2 lg:p-4">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded-lg w-12 text-center"
                  min="1"
                />
              </td>
              <td className="p-2 lg:p-4 text-gray-500">Rs. {subtotal.toLocaleString()}.00</td>
              <td className="p-4 text-yellow-500 cursor-pointer">
              <FaTrash />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-1/3 p-4 lg:p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">Subtotal</span>
          <span className="text-gray-700">Rs. {subtotal.toLocaleString()}.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">Shipping</span>
          <span className="text-gray-700">Free</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-500">Total</span>
          <span className="text-gray-700 font-semibold">Rs. {subtotal.toLocaleString()}.00</span>
        </div>
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cartcheckout;
