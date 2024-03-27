import { useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Toaster, toast } from "react-hot-toast";
import { Search } from "../../components/Search";

export function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    productName: "",
    productDescription: "",
    productValue: 0,
    isAvailable: "",
  });
  const [loading, setLoading] = useState(true);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !form.productName.trim() ||
      !form.productDescription.trim() ||
      !form.productValue ||
      !form.isAvailable
    ) {
      toast.error("Preencha todos os campos!");
      return;
    }

    try {
      setProducts([...products, form]);
      toast.success("Produto cadastrado com sucesso!");
      setForm({
        productName: "",
        productDescription: "",
        productValue: 0,
        isAvailable: "",
      });
      setLoading(false);
    } catch (error) {
      toast.error("Erro ao cadastrar produto!");
      console.log(error);
    }
  }

  function handleSortAlphabetic() {
    setProducts(
      [...products].sort((a, b) => a.productName.localeCompare(b.productName))
    );
  }

  function handleSortPrice() {
    setProducts([...products].sort((a, b) => a.productValue - b.productValue));
  }

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center p-4">
          <h2 className="xl:text-2xl lg:text-xl md:text-xl sm:text-lg sm:font-bold  font-mono text-center">
            Cadastre um produto!
          </h2>
        </div>
        <div className="flex justify-center my-4">
          <form className="border-2 lg:w-3/5 sm:w-4/5 border-metal rounded-md p-1 pl-2 focus:outline-none focus:ring-2 focus:ring-metal focus:border-transparent shadow-[5px_5px_20px_10px_#565584] w-2/5 flex justify-center pt-4">
            <div className="flex flex-col">
              <div className="sm:flex sm:flex-col sm:items-center py-1">
                <label htmlFor="productName-input">Nome do produto: </label>
                <input
                  className="border-2 border-metal rounded-md p-1 pl-2 focus:outline-none focus:ring-2 focus:ring-metal focus:border-transparent"
                  id="productName-input"
                  type="text"
                  name="productName"
                  required
                  value={form.productName}
                  onChange={handleChange}
                />
              </div>
              <div className="sm:flex sm:flex-col sm:items-center py-1">
                <label htmlFor="productValue-input">Valor do produto: </label>
                <input
                  className="border-2 border-metal rounded-md p-1 pl-2 focus:outline-none focus:ring-2 focus:ring-metal focus:border-transparent"
                  id="productValue-input"
                  type="number"
                  name="productValue"
                  required
                  value={form.productValue}
                  onChange={handleChange}
                />
              </div>
              <div className="sm:flex sm:flex-col sm:items-center py-1">
                <label htmlFor="isAvailable-input">
                  Disponível para venda:{" "}
                </label>
                <select
                  value={form.isAvailable}
                  onChange={handleChange}
                  id="isAvailable-input"
                  name="isAvailable"
                  required
                  className="border-2 border-metal rounded-md p-1 pl-2 focus:outline-none focus:ring-2 focus:ring-metal focus:border-transparent"
                >
                  <option value="">Escolha uma opção</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </div>
              <div className="flex flex-col sm:items-center py-1">
                <label className="pb-2" htmlFor="productDescription-input">
                  Descrição do produto:{" "}
                </label>
                <textarea
                  className="border-2 w-96 sm:w-56 border-metal rounded-md p-1 pl-2 focus:outline-none focus:ring-2 focus:ring-metal focus:border-transparent"
                  id="productDescription-input"
                  type="text"
                  placeholder="Adicione uma descrição ao produto aqui..."
                  rows="5"
                  required
                  maxLength={150}
                  name="productDescription"
                  value={form.productDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center my-2">
                <button
                  id="buttonCriar"
                  className="focus:outline-none text-white uppercase bg-gradient-to-r from-bermuda to-tahiti hover:from-tahiti hover:to-bermuda focus:ring-4 focus:ring-purple font-medium rounded-lg text-sm px-5 py-2.5 my-2"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Criar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-center my-4">
          <Search search={search} setSearch={setSearch} />
        </div>
        <div className="flex justify-end sm:justify-center mr-5">
          <div>
            <div className="flex justify-center">
              <span>Ordenar por: </span>
            </div>
            <div className="flex gap-2">
              <button
                className="focus:outline-none text-white uppercase bg-gradient-to-r from-bermuda to-tahiti hover:from-tahiti hover:to-bermuda focus:ring-4 focus:ring-purple font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                onClick={handleSortAlphabetic}
              >
                Nome
              </button>
              <button
                className="focus:outline-none text-white uppercase bg-gradient-to-r from-bermuda to-tahiti hover:from-tahiti hover:to-bermuda focus:ring-4 focus:ring-purple font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                onClick={handleSortPrice}
              >
                Valor
              </button>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center p-4">
            <h2>Nenhum produto cadastrado ainda...</h2>
          </div>
        ) : (
          <Card products={products} search={search} />
        )}
      </div>
      <Footer />
    </div>
  );
}
