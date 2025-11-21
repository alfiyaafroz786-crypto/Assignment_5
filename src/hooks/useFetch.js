import { useState, useEffect, useCallback } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch function memoized using useCallback
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (!result) {
        throw new Error("Malformed or empty data received");
      }

      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  // fetching runs only once OR when URL changes
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}
