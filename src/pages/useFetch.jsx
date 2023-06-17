import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const selectData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    selectData();
  }, [url]);

  const reFetch = () => {
    setIsLoading(true);
    const selectData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    selectData();
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
