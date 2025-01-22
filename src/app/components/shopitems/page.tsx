
export default function Shopitems() {
    const products = [
        { id: 1 , name: "Trenton modular sofa", price: "Rs. 25,000.00", img: "/picks1.png" },
        { id: 2 , name: "Granite dining table", price: "Rs. 25,000.00", img: "/picks2.png" },
        { id: 3 , name: "Outdoor bar table", price: "Rs. 25,000.00", img: "/picks3.png" },
        { id: 4 , name: "Plain console", price: "Rs. 25,000.00", img: "/picks4.png" },
        { id: 5 , name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem5.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem6.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem7.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem8.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem9.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem10.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem11.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem13.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem14.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/newarrival.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem15.png" },
        {  name: "Plain console", price: "Rs. 25,000.00", img: "/shopitem16.png" },
        
      ];
    
      return (
        <section className="bg-white p-8 text-center text-black">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <img src={product.img} alt={product.name} className="mx-auto w-82 mb-8" />
                <h3 className="mt-4 text-lg font-semibold ">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
          <a href="/shop" className="mt-8 inline-block text-black border-b-2 border-black">View More</a>
        </section>
      );
    };
    
              
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
