"use client"

import React, { useState } from "react";
import { FaPlus, FaMinus, FaRegStar, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import products from '../../../../../data/products.json';
import Navbar from "../../navbar/page";
import Related from "./related";
import Footer from "../../footer/page";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

const ProductPage = ({ params }: ProductPageProps) => {
    // Unwrap the params Promise using React.use()
    const { id } = React.use(params);
    const product = products.find((p) => p.id === Number(id));
    const [quantity, setQuantity] = useState(1);
    const colors = ['black', 'purple', 'gold']; // Example colors

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
              
        <div>
          <Navbar bgColor="bg-white"/>
        <div className="flex justify-center items-start gap-10 p-10 bg-white">
          
            {/* Product Image Section */}
            <div className="w-1/2 flex gap-4">
                <div className="flex flex-col gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <img
                            key={i}
                            src={`/orderdetail${i}.png`}
                            alt="Thumbnail"
                            className="w-16 h-16 rounded-lg cursor-pointer border"
                        />
                    ))}
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-xl flex items-center justify-center w-full">
                    <img src={product.img} alt={product.name} className="w-full rounded-lg" />
                </div>
            </div>

            {/* Product Details Section */}
            <div className="w-1/2">
                <h1 className="text-3xl text-black font-bold">{product.name}</h1>
                <p className="text-xl text-gray-700">Rs. {product.price.toLocaleString()}.00</p>
                <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(4)].map((_, i) => (
                        <FaRegStar key={i} fill="currentColor" />
                    ))}
                    <FaRegStar />
                    <span className="text-gray-500 ml-2">5 Customer Review</span>
                </div>
                <p className="text-gray-600 mt-4">{product.description}</p>

                {/* Size Options */}
                <div className="mt-4 text-black">
                    <h3 className="font-semibold">Size</h3>
                    <div className="flex gap-2 mt-2">
                        {['L', 'XL', 'XS'].map((size) => (
                            <button key={size} className="border px-4 py-1 rounded-lg">{size}</button>
                        ))}
                    </div>
                </div>

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
                    <Link href="#" legacyBehavior>
                        <a className="px-6 py-2 border border-black rounded-lg font-bold hover:bg-black hover:text-white transition-all">
                            Add To Cart
                        </a>
                    </Link>
                </div>

                {/* SKU and Tags */}
                <div className="mt-6 text-gray-600">
                    {/* <p><strong>SKU:</strong> {product.sku}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Tags:</strong> {product.tags.join(', ')}</p> */}
                </div>

                {/* Share Icons */}
                <div className="mt-6 flex gap-3 text-black">
                    <FaFacebook className="cursor-pointer" />
                    <FaLinkedin className="cursor-pointer" />
                    <FaTwitter className="cursor-pointer" />
                </div>
            </div>
        </div>
        <Related/>
        <Footer/>
        </div>
    );
};

export default ProductPage;