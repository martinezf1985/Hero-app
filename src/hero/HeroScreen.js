import {useMemo} from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroById'
import { heroes } from '../data/heroes'
export const HeroScreen = () => {
  const { heroeId } = useParams()

  const heroes = useMemo ( () => {
    return getHeroById(heroeId)
  }, [heroeId] )

  const navigate = useNavigate()  
  const imagePath = `/assets/${heroes.id}.jpg`
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = heroes;


  const handleReturn = () =>{
navigate(-1)
  }

  if (!heroes) {
    return <Navigate to="/" />
  }

  return (
    
    <div className="row mt-5">
      <h1>{superhero}</h1>
      <div className="row mt-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="row mt-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>

        <ul className="list-group ">
          <li className="lilst-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="lilst-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="lilst-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info"
        onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  )
}
