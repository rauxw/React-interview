import { useProducts } from "../context/product.context.jsx";

function ProductList() {
  const { loading, productList } = useProducts();
  console.log(loading, productList);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">Product Listing (Context API)</h1>
      {loading ? (
        <p className="bg-yellow-200 p-3 m-3 text-center rounded font-bold shadow-xl">
          Loading...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {productList.map((product, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border p-5 flex flex-col justify-between hover:shadow-lg transition duration-300"
              >
                <div className="mb-3">
                  <img
                    src={
                      product.images?.[0] || "https://via.placeholder.com/150"
                    }
                    alt={product.title}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold text-green-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-yellow-600 font-medium">
                    ⭐ {product.rating}
                  </span>
                </div>
                {product.returnPolicy && (
                  <div className="text-sm text-gray-500 italic mt-1">
                    {product.returnPolicy}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList;
