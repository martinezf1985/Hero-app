import {heroes} from '../data/heroes';

export const getHeroByPublisher = (publisher) => {

const validPublishers = ['DC Comics', 'Marvel Comics'];
if(!validPublishers.includes(publisher)){
    throw new Error(`${publisher} is not a valid pusblisher`);
}


  return heroes.filter(hero=> hero.publisher === publisher);
}
