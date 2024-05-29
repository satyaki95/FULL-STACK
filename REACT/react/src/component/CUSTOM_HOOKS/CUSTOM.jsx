import React from "react";
import useFetch from "./HOOK";

const CUSTOM = () => {
  const {data, isLoading, error} = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  const dataElement =
    data &&
    data.map((data) => {
      return (
        <div key={data.id}>
          <p>{data.title}</p>
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

export default CUSTOM;
