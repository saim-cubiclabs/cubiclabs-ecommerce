export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
      {product.image && (
        <img
          src={product.image}
          alt={product.productName}
          className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded mx-auto sm:mx-0"
        />
      )}
      <div className="text-center sm:text-left flex-1">
        <h3 className="font-semibold text-base sm:text-lg">{product.productName}</h3>
        <p className="text-sm sm:text-base">Price: ${product.price}</p>
        <p className="text-sm sm:text-base">Qty: {product.quantity}</p>
        {product.category && <p className="text-sm sm:text-base">Category: {product.category}</p>}
      </div>
    </div>
  );
}

