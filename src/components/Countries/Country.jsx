import React from 'react'

const Country = (props) => {

    const {name, flags, capital, region} = props.country

    const handleRemove = (name) => {
      props.removeCountry(name)
    }

  return (
    <div className='country'>
      <img src={flags.png} alt="" />
      <h1>{name.common}</h1>

      <div className="box">
        <h4>Capital: {capital}</h4>
        <h4>Region: {region}</h4>
      </div>

      <button type="button" onClick={() => handleRemove(name.common)}>Delete</button>
    </div>
  )
}

export default Country
