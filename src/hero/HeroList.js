
//funciones
import 'animate.css';
import { HeroCard } from './HeroCard'
import { useMemo} from 'react';

//componentes
import { getHeroByPublisher } from '../selectors/getHeroByPublisher'

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(()=>{
return getHeroByPublisher(publisher)
  }, [publisher]) 
 

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        < HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  )
}
export default HeroList
