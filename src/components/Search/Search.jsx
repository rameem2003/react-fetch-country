import React, { useEffect, useState } from 'react'
import './search.css'

const Search = (props) => {

  const [searchCountry, setSearchCountry] = useState("");

  const handleChange  = (e) => {
    setSearchCountry(e.target.value);
  }

  useEffect(() => {
    props.onSearch(searchCountry);
  }, [searchCountry])

  return (
    <div>
      <input type="text" name="countryName" id="" value={searchCountry} placeholder='Search Country...' onChange={handleChange}/>
    </div>
  )
}

export default Search
