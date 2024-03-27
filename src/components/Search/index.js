export function Search({ search, setSearch }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <input
        className="w-3/5 sm:w-4/5 self-center border-2 border-metal rounded-md mt-5 p-1 pl-2 focus:outline-none focus:ring-2 focus:ring-metal focus:border-transparent"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Procure pelo nome do produto..."
      />
    </>
  );
}
