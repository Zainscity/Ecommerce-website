import Link from 'next/link';

const products = [
  { id: 1, name: 'Product A', price: '$50', description: 'Description of Product A', img: '/product-a.jpg' },
  { id: 2, name: 'Product B', price: '$75', description: 'Description of Product B', img: '/product-b.jpg' },
  { id: 3, name: 'Product C', price: '$100', description: 'Description of Product C', img: '/product-c.jpg' },
];

const Shop = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.img} alt={product.name} className="mb-4 w-full h-40 object-cover" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <Link href={`/product/${product.id}`}>
              <span className="text-blue-500 underline mt-4 block cursor-pointer">View Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
