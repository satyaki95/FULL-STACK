import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setdata] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Fetching is not successful");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setdata(data);
        setIsloading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsloading(false);
      });
  }, [url]);

  return {data, isLoading, error};
}

export default useFetch;