
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// const ProductDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   interface Product {
//     id: number;
//     name: string;
//     price: string;
//     img: string;
//     description: string;
//   }
  
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     if (id) {
//       // Fetch product details based on the ID
//       const products = [
//         { id: 1, name: "Trenton modular sofa", price: "Rs. 25,000.00", img: "/picks1.png", description: "A comfortable modular sofa." },
//         { id: 2, name: "Granite dining table", price: "Rs. 25,000.00", img: "/picks2.png", description: "A sturdy granite dining table." },
//         { id: 3, name: "Outdoor bar table", price: "Rs. 25,000.00", img: "/picks3.png", description: "A stylish outdoor bar table." },
//         { id: 4, name: "Plain console", price: "Rs. 25,000.00", img: "/picks4.png", description: "A simple plain console." },
//         { id: 5, name: "Grain coffee table", price: "Rs. 15,000.00", img: "/shopitem5.png", description: "A beautiful grain coffee table." },
//         { id: 6, name: "Kent coffee table", price: "Rs. 225,000.00", img: "/shopitem6.png", description: "An elegant Kent coffee table." },
//         { id: 7, name: "Round coffee table_color 2", price: "Rs. 251,000.00", img: "/shopitem7.png", description: "A round coffee table in color 2." },
//         { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 25,200.00", img: "/shopitem8.png", description: "A reclaimed teak coffee table." },
//         { id: 9, name: "Plain console", price: "Rs. 258,200.00", img: "/shopitem9.png", description: "Another plain console." },
//         { id: 10, name: "Reclaimed teak Sideboard ", price: "Rs. 20,000.00", img: "/shopitem10.png", description: "A reclaimed teak sideboard." },
//         { id: 11, name: "SJP_0825  ", price: "Rs. 200,000.00", img: "/shopitem11.png", description: "A unique SJP_0825." },
//         { id: 12, name: "Bella chair and table ", price: "Rs. 100,000.00", img: "/shopitem13.png", description: "A Bella chair and table set." },
//         { id: 13, name: "Granite square side table ", price: "Rs. 258,800.00", img: "/shopitem14.png", description: "A granite square side table." },
//         { id: 14, name: "Asgaard sofa ", price: "Rs. 250,000.00", img: "/newarrival.png", description: "An Asgaard sofa." },
//         { id: 15, name: "Maya sofa three seater ", price: "Rs. 115,000.00", img: "/shopitem15.png", description: "A Maya sofa three seater." },
//         { id: 16, name: "Outdoor sofa set ", price: "Rs. 244,000.00", img: "/shopitem16.png", description: "An outdoor sofa set." },
//       ];
//       const product = products.find((product) => product.id === parseInt(id as string));
//       setProduct(product || null);
//     }
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-5">
//       <h1 className="text-3xl font-bold mb-5">{product.name}</h1>
//       <img src={product.img} alt={product.name} className="w-full h-auto mb-5" />
//       <p className="text-xl mb-5">{product.description}</p>
//       <p className="text-2xl font-bold">{product.price}</p>
//     </div>
//   );
// };

// export default ProductDetails;

