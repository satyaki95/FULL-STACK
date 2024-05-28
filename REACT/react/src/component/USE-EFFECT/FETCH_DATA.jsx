import React, { useEffect, useState } from 'react';

const FETCH_DATA = () => {
    const [data, setdata] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data) => setdata(data));
    },[]);
  return (
    <div>
        <h1>DATA</h1>
        {
            data.map((data) => {
               return <div key={data.id}>
                <p>{data.title}</p>
                <img src={data.url} alt="" />
                <br />
                <img src={data.thumbnailUrl} alt="" />
                <br />
               </div>
            })
        }
    </div>
  )
}

export default FETCH_DATA;