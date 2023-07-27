import React from 'react'

const Country = (props) => {

    const {name, flags} = props.country

  return (
    <div>
      <h1>{name.common}</h1>
      <img src={flags.png} alt="" />
    </div>
  )
}

export default Country
