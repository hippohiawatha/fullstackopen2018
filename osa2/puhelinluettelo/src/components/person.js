import React from 'react';

const Person = (props) => {
  const persons = props.state.persons
  const search = props.state.search
  if(persons.length !== 0){
    return(
      <table>
        <tbody>
          {persons.filter(person =>
            person.name.toLowerCase()
            .includes(search.toLowerCase())).map(person =>
            <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.number}</td>
                <td>
                    <button onClick={props.remover(person.id, person.name)}>poista</button>
                </td>
            </tr>)}
        </tbody>
      </table>
    )
  }
  else return <p>luettelossa ei ole tietoja</p>
}

export default Person
