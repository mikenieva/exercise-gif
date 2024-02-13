import { useState } from "react";
import Pagination from "./components/Pagination";
import GifList from "./components/GifList";
import SearchForm from "./components/SearchForm";

import useGiphy from "./hooks/useGiphy";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState<string>("");
  const {
    gifsToDisplay,
    loading,
    error,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    fetchSearchGifs,
  } = useGiphy(search);

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    fetchSearchGifs(search);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(evt.target.value);

  if (error) return <Error message={"There was an error..."} />;

  return (
    <>
      <header className="flex items-center justify-center">
        <h1 className="text-3xl mt-12 font-bold underline">Giphy API</h1>
      </header>
      <main>
        <SearchForm
          searchValue={search}
          onSearchChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
        />
        {loading ? <Loader /> : <GifList gifs={gifsToDisplay} />}
      </main>
    </>
  );
}

export default App;
