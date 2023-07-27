import React from 'react'
import Country from './Country'

const Countries = (props) => {
  return (
    <div>
      {props.countries.map(country => {
        return <Country country = {country} />
      })}
    </div>
  )
}

export default Countries
