import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // run this every render of this component
  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        // { aborted fetch error }
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });

    // clean up effort, Abort Controller
    // if in the middle of the asnc, user moved to other page,
    // abort the started fetch.
    return () => abortController.abort();
  }, [url]); // dependency for the useEffect to trigger can be adde to the array

  return { data, isPending, error };
};

export default useFetch;
