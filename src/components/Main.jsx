import React from "react";
import musicAPI from '../services/index';

export default function Main() {

  async function requestAPI() {
    const result = await musicAPI('jack johnson')
    return result;
  }

  function handleClick() {
    console.log(requestAPI());
  }

  return(
    <div>
      <label htmlFor='search'>
        <input type='text' id='search' onChange= { (e) => (e.target.value) }/>
      </label>
      <button 
      type='button'
      onClick={ handleClick }
      >
        FIND PREVIEWS
      </button>
    </div>
  );
}
