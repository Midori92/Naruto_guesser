import { useEffect, useState } from 'react'
import './App.css'


function Card(props){

    const [Character, setCharacter] = useState(null)
    const id = props.id

     useEffect(() => {
    fetch(`https://dattebayo-api.onrender.com/characters/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCharacter(data)
         console.log("Je cherche le personnage :", props.id)
      })
      .catch(error => {
        console.error("Erreur :", error)
      })

  }, [id])


  if (!Character){
    return(<p> Chargement...</p>)
  }
      
    return(
        <>


        { 
        <div className='card'>
            <h1> {Character.name}</h1>
            <img src= {Character.images[0]} alt={Character.name}/>
        </div>

       

}
        </>

    )


}

export default Card