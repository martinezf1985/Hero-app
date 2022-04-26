
import { useParams, Navigate } from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroById';
import{heroes} from '../data/heroes'
export const HeroScreen = () => {

const  {heroeId} = useParams();


const hero = getHeroById(heroeId)

const imagePath = `../data/heroes${heroes.id}.jpg`


const {id, superhero, publisher, alter_ego, first_appearance, characters}= heroes;

if(!hero) {
  return <Navigate to='/'/>

}


  return (
    <div className='row mt-5'>
      <div className='row mt-4'>
        <img src={imagePath}
        alt={superhero}
        className='img-thumbnail'/>
      </div>
      <div className='row mt-8'>
      <h3>{superhero}</h3>
      
        <ul className='list-group '>
        <li className='lilst-group'>
            <b>Alter_ego:</b> {alter_ego}
          </li>
          <li className='lilst-group'>
            <b>Publisher:</b> {publisher}
          </li>
          <li className='lilst-group'>
            <b>First_appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>


      </div>
    </div>
  )
}
