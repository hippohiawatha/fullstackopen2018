import React from 'react';

const Person = (props) => {
  const persons = props.state.persons
  const search = props.state.search
  const filtered = persons.filter(pers =>
    pers.name.toLowerCase().includes(search.toLowerCase()))
  if(persons.length !== 0){
    return(
      filtered.map(pers =>
        <p key={pers.id}> {pers.name} {pers.number} <button onClick =
          {props.remover(pers.id,pers.name)}>poista</button></p>)
    )
  }
  else return <p>luettelossa ei ole tietoja</p>
}

export default Person
