"use client"
import Image from 'next/image';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Cartcheckout = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id: number, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

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
              <th className="p-2 lg:p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2 lg:p-4 flex items-center gap-4 text-gray-700">
                  <Image src={item.img} alt={item.name} width={64} height={64} className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg bg-yellow-100" />
                  <span className="text-gray-500">{item.name}</span>
                </td>
                <td className="p-2 lg:p-4 text-gray-500">Rs. {item.price.toLocaleString()}.00</td>
                <td className="p-2 lg:p-4">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                    className="border rounded-lg w-12 text-center"
                    min="1"
                  />
                </td>
                <td className="p-2 lg:p-4 text-gray-500">Rs. {(item.price * item.quantity).toLocaleString()}.00</td>
                <td className="p-2 lg:p-4 text-gray-500">
                  <button onClick={() => handleRemove(item.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-1/3 p-4 lg:p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">Subtotal</span>
          <span className="text-gray-700">Rs. {calculateSubtotal().toLocaleString()}.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">Shipping</span>
          <span className="text-gray-700">Free</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-500">Total</span>
          <span className="text-gray-700 font-semibold">Rs. {calculateSubtotal().toLocaleString()}.00</span>
        </div>
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cartcheckout;
