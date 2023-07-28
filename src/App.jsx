import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Countries from "./components/Countries/Countries";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries)

  const fetchData = async (url) => {
    setIsloading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data)
      setIsloading(false);
      setError(null);
      console.log(countries);
    } catch (error) {
      setError(error);
      setIsloading(false)
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const removeCountry = (name) => {
    const filter = filteredCountries.filter((country) => country.name.common !== name)

    setFilteredCountries(filter)
  }

  const onSearch = (country) => {
    let value = country.toLowerCase();
    const searchCountries = countries.filter((countryName) => {
      const name = countryName.name.common.toLowerCase();
      return name.startsWith(value)
    })

    setFilteredCountries(searchCountries)
  }

  return (
    <>
      <Header />
      <Search onSearch = {onSearch}/>

      {isLoading && <h1>Loading....</h1>}
      {error && <h1>{error.message}</h1>}
      {countries && <Countries countries = {filteredCountries} removeCountry = {removeCountry}/>}
    </>
  );
}

export default App;
