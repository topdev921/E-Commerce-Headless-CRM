import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(null);
      const [error, setError] = useState(null);

      useEffect(() => {
        const fetchData = async () => {
            try {
              setLoading(true)
            const res = await makeRequest.get(url);
            setData(res.data.data);
          } catch (err) {
            setError(true)
          }
          setLoading(false)
        };
        fetchData();
      }, [url]);

      return { data, loading, error}
}

export default useFetch;