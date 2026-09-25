
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card.jsx'






function shuffleID(){

  const ids = []

    while (ids.length < 12) {
      const id = Math.floor(Math.random() * 100) + 1

      if (!ids.includes(id)) {
        ids.push(id)
      }
    }

    return ids
  }

function App() {

    const [value_id, setValueId] = useState(() => shuffleID())
    const [character, setCharacter] = useState(null)
    const [guessId, setGuessId] = useState(null)
    const [score, setScore] = useState(0)
    const [best_score, setBestscore] = useState(0)

 

    


 useEffect(() => {

    const randomIndex = Math.floor(Math.random() * value_id.length)
    const randomId = value_id[randomIndex]

    setGuessId(randomId)

    fetch(`https://dattebayo-api.onrender.com/characters/${randomId}`)
      .then(response => response.json())
      .then(data => {
        console.log('Personnage à deviner :', data)
        setCharacter(data)
      })
      .catch(error => {
        console.error('Erreur :', error)
      })

  }, [value_id])


function CardClick(clickedID){

  if (clickedID == guessId){
    console.log("Good Answer")
    setScore(score + 1)
    setValueId(shuffleID())
    
  }

  else{
    console.log("Wrong Answer")
    setScore(0)
    
  }

}

  if (!character) {
    return <p>Chargement...</p>
  }


  return (
    <>
      <div className="presentation">

        <h1 className="title">
          Naruto's character guesser
        </h1>

        <p>
          Click on the Naruto character wearing the following name:
        </p>

        <div className='score_content'> 
          <p className='score'> Score: {score} </p>
          <p className='best_score'> Best Score: {score > best_score ? setBestscore(score) : best_score}</p>
        </div>

        <div className="guesser">

          {character && (
            <p className="name_guess">
              {character.name}
            </p>
          )}

        </div>

      </div>


      <div className="cadran">

        {value_id.map((item) => (
          <div className="card" key={item}>
            <Card id={item} onCardClick={CardClick} />
          </div>
        ))}

      </div>
    </>
  )
}

export default App


