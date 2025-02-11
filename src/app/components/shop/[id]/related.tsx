import Link from 'next/link';
import Image from 'next/image';

export default function Related() {
  const products = [
    { name: "Trenton modular sofa", price: "Rs. 25,000.00", img: "/picks1.png" },
    { name: "Granite dining table", price: "Rs. 25,000.00", img: "/picks2.png" },
    { name: "Outdoor bar table", price: "Rs. 25,000.00", img: "/picks3.png" },
    { name: "Plain console", price: "Rs. 25,000.00", img: "/picks4.png" },
  ];

  return (
    <section className="bg-white p-8 text-center text-black">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <Image src={product.img} alt={product.name} width={200} height={200} className="mx-auto w-82 mb-8" />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
      <Link href="/components/shop" className="mt-8 inline-block text-black border-b-2 border-black">
        View More
      </Link>
    </section>
  );
}
