import Link from 'next/link';
import { FaMinus, FaPlus, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const Order = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const product = {
    id: 1,
    name: 'Asgaard Sofa',
    price: 250000,
    img: '/sofa.png',
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const colors = ['black', 'purple', 'gold']; // Example colors

  return (
    <div className="p-4 lg:p-10 bg-white">
      {/* Color Options */}
      <div className="mt-4 text-black">
        <h3 className="font-semibold">Color</h3>
        <div className="flex gap-3 mt-2">
          {colors.map((color) => (
            <span
              key={color}
              className={`w-6 h-6 rounded-full border-2 border-gray-300 bg-${color}-500`}
            ></span>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 text-black">
        <div className="flex items-center border rounded-lg">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-2">
            <FaMinus />
          </button>
          <span className="px-4">{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)} className="p-2">
            <FaPlus />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="px-6 py-2 border border-black rounded-lg font-bold hover:bg-black hover:text-white transition-all"
        >
          Add To Cart
        </button>
      </div>

      {/* SKU and Tags */}
      <div className="mt-6 text-gray-600">
        <p><strong>SKU:</strong> SS001</p>
        <p><strong>Category:</strong> Sofas</p>
        <p><strong>Tags:</strong> Sofa, Chair, Home, Shop</p>
      </div>

      {/* Share Icons */}
      <div className="mt-6 flex gap-3 text-black">
        <FaFacebook className="cursor-pointer" />
        <FaLinkedin className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Order;