import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { GifObject } from "../interfaces/interfaces";

const useGiphy = (initialQuery: string) => {
  const [query, setQuery] = useState(initialQuery);
  const [gifs, setGifs] = useState<GifObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const baseURL = "https://api.giphy.com/v1/gifs";
        const apiKey = import.meta.env.VITE_REACT_GIPHY_API_KEY;
        const url = query
          ? `${baseURL}/search?api_key=${apiKey}&q=${query}`
          : `${baseURL}/trending?api_key=${apiKey}`;

        const response = await axios.get(url);
        setGifs(response.data.data);
      } catch (error) {
        console.log(error);
        setError("Hubo un error en la llamada.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const totalPages = Math.ceil(gifs.length / itemsPerPage);

  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 0));

  const fetchSearchGifs = (newQuery: string) => {
    setQuery(newQuery);
  };

  const gifsToDisplay = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return gifs.slice(start, start + itemsPerPage);
  }, [currentPage, gifs]);

  return {
    gifsToDisplay,
    loading,
    error,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    fetchSearchGifs,
  };
};

export default useGiphy;
