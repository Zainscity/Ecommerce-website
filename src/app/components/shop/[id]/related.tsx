
export default function Related() {
    const products = [
        { name: "Trenton modular sofa", price: "Rs. 25,000.00", img: "/picks1.png" },
        { name: "Granite dining table", price: "Rs. 25,000.00", img: "/picks2.png" },
        { name: "Outdoor bar table", price: "Rs. 25,000.00", img: "/picks3.png" },
        { name: "Plain console", price: "Rs. 25,000.00", img: "/picks4.png" },
      ];
    
      return (
        <section className="bg-white p-8 text-center text-black">
          <h2 className="text-2xl font-bold mb-4">Top Picks For You</h2>
          <p className="text-gray-600 mb-8 opacity-60">Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <img src={product.img} alt={product.name} className="mx-auto w-82 mb-8" />
                <h3 className="mt-4 text-lg font-semibold ">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
          <a href="/components/shop" className="mt-8 inline-block text-black border-b-2 border-black">View More</a>
        </section>
      );
    };
    
    

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
