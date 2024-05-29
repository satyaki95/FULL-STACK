import React, { useEffect, useState } from "react";

const FETCH_DATA = () => {
  const [data, setdata] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        if(!res.ok){
          throw Error("Fetching is not successful");
        }else{
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
      })
  }, []);

  const dataElement = data && data.map((data) => {
    return (
      <div key={data.id}>
        <p>{data.title}</p>
        <img src={data.url} alt="" />
        <br />
        <img src={data.thumbnailUrl} alt="" />
        <br />
      </div>
    );
  });

  return (
    <div>
      <h1>DATA</h1>
      {error && <p>{error}</p>}
      {isLoading && <p>Data Is Loading...</p>}
      {dataElement}
    </div>
  );
};

export default FETCH_DATA;
