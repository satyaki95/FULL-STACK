import React, { useEffect, useState } from "react";
function App() {
const API = `https://disease.sh/v3/covid-19/countries`;

const [searchCountry, setSearchCountry] = useState("");
const [fetchData, setFetchData] = useState([]);
const [dataFound, setdataFound] = useState([]);
const [check, setCheck] = useState(false);

useEffect(()=>{
  fetch(API).then(res => res.json())
  .then(data => setFetchData(data))
},[]);

const searchedCountry = () => {
  setCheck(false);
  fetchData.find((element) => {
    if(element.country === searchCountry){
      setdataFound(element);
      setCheck(true);
    }
  })
}

  return (
    <div>
     <h1>COVID-19 CASES COUNTRY WISE</h1>
     <input type="text"
     value={searchCountry}
     onChange={event => setSearchCountry(event.target.value)} />
     <button onClick={searchedCountry}>Search</button>
     <div>
      {check ? <div>
        <p>Country Name : {dataFound.country}</p>
        <p>Cases : {dataFound.cases}</p>
        <p>Deaths : {dataFound.deaths}</p>
        <p>Recovered : {dataFound.recovered}</p>
        <p>Cases Today : {dataFound.todayCases}</p>
        <p>Deaths Today : {dataFound.todayDeaths}</p>
        <p>Recovered Today : {dataFound.todayRecovered}</p>
        </div> : <p>{searchCountry}</p>}
     </div>
    </div>
  )
}

export default App;
