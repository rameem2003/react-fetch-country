import React from 'react'
import Country from './Country'
import './countries.css'

const Countries = (props) => {
  return (
    <div className='countries'>
      {props.countries.map(country => {
        return <Country country = {country} removeCountry = {props.removeCountry}/>
      })}
    </div>
  )
}

export default Countries
