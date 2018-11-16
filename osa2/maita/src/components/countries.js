import React from 'react';

const Countries = (props) => {
  const countries = props.state.countries
  const search = props.state.search

  if(search !== ''){

    const filtered = countries.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))

    if(filtered.length > 10) return <p>too many maches, specify another filter</p>

    else if(filtered.length === 1){
      const country = filtered[0]
      
      return(
        <div>
          <h1>{country.name}</h1>
          <p>capital: {country.capital}</p>
          <p>population: {country.population}</p>
          <img src={country.flag} alt = '' height="350" width="600"/>
        </div>
      )
    }

    else return filtered.map((x,i) => <p key={i}>{x.name}</p>)
  }
  else return <p></p>
}

export default Countries
