import { useState, useEffect } from "react";
import "./App.css";
import COUNTRIES from "./component/COUNTRIES";
import SEARCH from "./component/SEARCH";

function App() {
  const url = "https://restcountries.com/v3.1/all";

  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([countries]);

  const fetchData = async (url) => {
    setIsloading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFilteredCountries(data);
      setCountries(data);
      setIsloading(false);
      setError(null);
    } catch (error) {
      setIsloading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((country) => {
      return country.name.common !== name;
    });

    setFilteredCountries(filter);
  };

  const handleSearch = (value) => {
    let newValue = value.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(newValue);

    });
    setFilteredCountries(newCountries);
  }

  return (
    <div>
      <h1>COUNTRY APP</h1>
      <SEARCH onSearch={handleSearch} />
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {countries && (
        <COUNTRIES
          countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </div>
  );
}

export default App;
