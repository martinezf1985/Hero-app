import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
 import queryString from 'query-string'
import {useMemo} from 'react';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import {HeroCard} from '../../hero/HeroCard'



export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
// console.log(location); 


 const {q = ''} = queryString.parse(location.search);

  const  [formValues,  handleInputChange]= useForm({
    searchtext:q,
  })

  const {searchText} = formValues 

  const heroesFiltred = useMemo(()=>getHeroesByName(q), [q]);    //getHeroesByName(q)

const handleSearch = (e) =>{
  e.preventDefault();
 navigate(`?q=${searchText}`)

}



  return (
    <>
      <h1>search</h1>
      <hr/>
      
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              className="form-control"
              type="text"
              placeholder="Busca un Heroe"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange ={handleInputChange}
            />

            <button  onClick={handleSearch} className='btn btn-outline-primary mt-1 ' type='submit'>
              Search...
            </button>
          </form>
        </div>

          <div className='col-7'>
          <h4>Resultados</h4>
          <hr/>
          {
          (q === '')
          ?<div className='alert alert-info'>busca un heroe </div>
              :(heroesFiltred.length === 0) && <div className=' alert alert-danger'>no hay resultados: {q}</div>
          }
          {
            heroesFiltred.map(hero=>(
              <HeroCard
              key={hero.id}
              {...hero}
              
              />
            ))
          }

          </div>


      </div>
    </>
  )
}
