// import Link from 'next/link';

// export default function Shopitems() {
//   const products = [
//     { id: 1, name: "Trenton modular sofa", price: "Rs. 25,000.00", img: "/picks1.png" },
//     { id: 2, name: "Granite dining table", price: "Rs. 25,000.00", img: "/picks2.png" },
//     { id: 3, name: "Outdoor bar table", price: "Rs. 25,000.00", img: "/picks3.png" },
//     { id: 4, name: "Plain console", price: "Rs. 25,000.00", img: "/picks4.png" },
//     { id: 5, name: "Grain coffee table", price: "Rs. 15,000.00", img: "/shopitem5.png" },
//     { id: 6, name: "Kent coffee table", price: "Rs. 225,000.00", img: "/shopitem6.png" },
//     { id: 7, name: "Round coffee table_color 2", price: "Rs. 251,000.00", img: "/shopitem7.png" },
//     { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 25,200.00", img: "/shopitem8.png" },
//     { id: 9, name: "Plain console", price: "Rs. 258,200.00", img: "/shopitem9.png" },
//     { id: 10, name: "Reclaimed teak Sideboard ", price: "Rs. 20,000.00", img: "/shopitem10.png" },
//     { id: 11, name: "SJP_0825  ", price: "Rs. 200,000.00", img: "/shopitem11.png" },
//     { id: 12, name: "Bella chair and table ", price: "Rs. 100,000.00", img: "/shopitem13.png" },
//     { id: 13, name: "Granite square side table ", price: "Rs. 258,800.00", img: "/shopitem14.png" },
//     { id: 14, name: "Asgaard sofa ", price: "Rs. 250,000.00", img: "/newarrival.png" },
//     { id: 15, name: "Maya sofa three seater ", price: "Rs. 115,000.00", img: "/shopitem15.png" },
//     { id: 16, name: "Outdoor sofa set ", price: "Rs. 244,000.00", img: "/shopitem16.png" },
//   ];

//   return (
//     <section className="bg-white p-8 text-center text-black">
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//         {products.map((product) => (
//           <div key={product.id} className="text-center">
//             <Link href={`/components/productdetails/${product.id}`} legacyBehavior>
//               <a>
//                 <img src={product.img} alt={`Image of ${product.name}`} className="mx-auto w-82 mb-8" />
//                 <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
//                 <p className="text-gray-500">{product.price}</p>
//               </a>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <Link href="/shop" legacyBehavior>
//         <a className="mt-8 inline-block text-black border-b-2 border-black">View More</a>
//       </Link>
//     </section>
//   );
// }

import Link from "next/link";

export default function Shopitems() {
    const products = [
              { id: 1, name: "Trenton modular sofa", price: "Rs. 25,000.00", img: "/picks1.png", description: "A comfortable modular sofa." },
              { id: 2, name: "Granite dining table", price: "Rs. 25,000.00", img: "/picks2.png", description: "A sturdy granite dining table." },
              { id: 3, name: "Outdoor bar table", price: "Rs. 25,000.00", img: "/picks3.png", description: "A stylish outdoor bar table." },
              { id: 4, name: "Plain console", price: "Rs. 25,000.00", img: "/picks4.png", description: "A simple plain console." },
              { id: 5, name: "Grain coffee table", price: "Rs. 15,000.00", img: "/shopitem5.png", description: "A beautiful grain coffee table." },
              { id: 6, name: "Kent coffee table", price: "Rs. 225,000.00", img: "/shopitem6.png", description: "An elegant Kent coffee table." },
              { id: 7, name: "Round coffee table_color 2", price: "Rs. 251,000.00", img: "/shopitem7.png", description: "A round coffee table in color 2." },
              { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 25,200.00", img: "/shopitem8.png", description: "A reclaimed teak coffee table." },
              { id: 9, name: "Plain console", price: "Rs. 258,200.00", img: "/shopitem9.png", description: "Another plain console." },
              { id: 10, name: "Reclaimed teak Sideboard ", price: "Rs. 20,000.00", img: "/shopitem10.png", description: "A reclaimed teak sideboard." },
              { id: 11, name: "SJP_0825  ", price: "Rs. 200,000.00", img: "/shopitem11.png", description: "A unique SJP_0825." },
              { id: 12, name: "Bella chair and table ", price: "Rs. 100,000.00", img: "/shopitem13.png", description: "A Bella chair and table set." },
              { id: 13, name: "Granite square side table ", price: "Rs. 258,800.00", img: "/shopitem14.png", description: "A granite square side table." },
              { id: 14, name: "Asgaard sofa ", price: "Rs. 250,000.00", img: "/newarrival.png", description: "An Asgaard sofa." },
              { id: 15, name: "Maya sofa three seater ", price: "Rs. 115,000.00", img: "/shopitem15.png", description: "A Maya sofa three seater." },
              { id: 16, name: "Outdoor sofa set ", price: "Rs. 244,000.00", img: "/shopitem16.png", description: "An outdoor sofa set." },
            ];
    
      return (
        <section className="bg-white p-8 text-center text-black">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                  <Link href={`/components/shop/${product.id}`}>
                  <img src={product.img} alt={product.name} className="mx-auto w-82 mb-8" />

                      <h3 className="mt-4 text-lg font-semibold ">{product.name}</h3>
                  </Link>
                <p className="text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      );
    };
    
              
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
