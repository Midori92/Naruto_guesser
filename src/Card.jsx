import { useEffect, useState } from 'react'


function Card({id, onCardClick}) {
  
  const [character, setCharacter] = useState(null)
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    fetch(`https://dattebayo-api.onrender.com/characters/${id}`)
      .then(response => response.json())
      .then(data => {
        setCharacter(data)
      })
      .catch(error => {
        console.error('Erreur :', error)
      })
  }, [id])

  if (!character) {
    return <p>Chargement...</p>
  }

 

  return (
    <>
      <div className="card" onClick={() => onCardClick(id)}>
        <h1>{character.name}</h1>

        <img
          src={character.images[0]}
          alt={character.name}
        />
      </div>

    

    
    </>
  )
}

export default Card