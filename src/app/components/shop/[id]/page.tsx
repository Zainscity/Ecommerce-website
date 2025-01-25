interface ProductPageProps {
    params: {
        id: string;
    };
}
import products from '../../../../../data/products.json';
const ProductPage = ({ params }: ProductPageProps) => {
    const { id } = params;
    const product = products.find((p) => p.id === Number(id));
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-sm md:max-w-md">
          <img 
            src={product.img} 
            alt={product.name} 
            className="w-full h-60 object-cover" 
          />
          <div className="p-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
            <p className="text-xl text-gray-700 font-semibold mb-5">
              Price: <span className="text-green-600">${product.price}</span>
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      
    );
};

export default ProductPage;

{/* <div className="container mx-auto p-5">
//       <h1 className="text-3xl font-bold mb-5">{product.name}</h1>
//       <img src={product.img} alt={product.name} className="w-full h-auto mb-5" />
//       <p className="text-xl mb-5">{product.description}</p>
//       <p className="text-2xl font-bold">{product.price}</p>
//     </div> */}