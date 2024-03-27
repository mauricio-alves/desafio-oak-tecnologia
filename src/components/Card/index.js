export function Card({ products, search }) {
  return (
    <>
      <div>
        <div className="grid grid-cols-4 font-sans lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {products
            ?.filter((currentProduct) => {
              return currentProduct.productName
                .toLowerCase()
                .includes(search.toLowerCase());
            })
            .map((currentProduct, index) => {
              return (
                <div
                  key={index}
                  className="max-w-sm rounded m-6 overflow-hidden shadow-[1px_1px_10px_5px_#565584]"
                >
                  <div className="px-6 pt-4 flex justify-center">
                    <div className="font-bold text-xl capitalize">
                      {currentProduct.productName}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="bg-gray-200 px-3 py-1 text-sm font-semibold text-justify text-gray-700 mr-2 mb-2">
                      {currentProduct.productDescription}
                    </p>
                    <p className="bg-gray-200 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Disponível para venda:{" "}
                      {currentProduct.isAvailable === "true" ? "Sim" : "Não"}
                    </p>
                    <p className="bg-gray-200 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      R$ {Number(currentProduct.productValue).toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
