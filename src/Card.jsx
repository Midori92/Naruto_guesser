import { useEffect, useState } from 'react'

function Card(props) {
  const [character, setCharacter] = useState(null)
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    fetch(`https://dattebayo-api.onrender.com/characters/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setCharacter(data)
      })
      .catch(error => {
        console.error('Erreur :', error)
      })
  }, [props.id])

  if (!character) {
    return <p>Chargement...</p>
  }

  function Click_value() {
    setSelected(!selected)
  }

  return (
    <>
      <div className="card" onClick={Click_value}>
        <h1>{character.name}</h1>

        <img
          src={character.images[0]}
          alt={character.name}
        />
      </div>

    

      {selected && <p>{props.compare == character.id ? "Bonne réponse" : "Mauvaise reponse"}</p>
      }
    </>
  )
}

export default Card