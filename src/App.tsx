import axios from "axios";
import { useState, useEffect, useMemo } from "react";

import { GifObject } from "./interfaces/interfaces";
import Pagination from "./components/Pagination";
import GifList from "./components/GifList";

function App() {
  const [gifs, setGifs] = useState<GifObject[]>([]);
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=${
            import.meta.env.VITE_REACT_GIPHY_API_KEY
          }`
        );

        const {
          data: { data },
        } = response;
        setGifs(data);
      } catch (error) {
        console.log(error);
        setError("Hubo un error en la llamada.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchSearchGifs = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${
          import.meta.env.VITE_REACT_GIPHY_API_KEY
        }&q=${query}`
      );

      const {
        data: { data },
      } = response;

      setGifs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    fetchSearchGifs(search);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(evt.target.value);

  const gifsToDisplay = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return gifs.slice(start, start + itemsPerPage);
  }, [currentPage, gifs]);

  const totalPages = Math.ceil(gifs.length / itemsPerPage);

  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 0));

  if (error) return <p>Existe un error en el llamado con Giphy</p>;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <form className="flex" onSubmit={handleSubmit}>
        <label>Búsqueda</label>
        <input name="search" value={search} onChange={handleChange} />
        <button>Buscar en Ghipy</button>
      </form>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
      {loading ? <p>Cargando...</p> : <GifList gifs={gifsToDisplay} />}
    </>
  );
}

export default App;
