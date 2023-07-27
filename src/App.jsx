import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Countries from "./components/Countries/Countries";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setIsloading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
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

  return (
    <>
      <Header />
      <Search />

      {isLoading && <h1>Loading....</h1>}
      {error && <h1>{error.message}</h1>}
      {countries && <Countries countries = {countries} />}
    </>
  );
}

export default App;
