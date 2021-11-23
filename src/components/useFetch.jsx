// CustomHook API
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const fetched = async () => {
    try {
      const req = await fetch(url);
      const res = await req.json();
      setData(res);
    } catch (error) {
	    console.error(error.message)
    }
  };

  useEffect(() => {
    fetched();
  }, [url]);

  return data;
};

export default useFetch;
