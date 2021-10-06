import React, { useState } from "react";
import musicAPI from '../services/index';

export default function Main() {
  const [artist, setArtist] = useState('');

  async function requestAPI() {
    const result = await musicAPI('micheal jackson')
    return result;
  }

  function handleChange({ target: { value }}) {
    setArtist(value);
  }

  function handleClick() {
    console.log(requestAPI());
  }

  return(
    <div>
      <label htmlFor='search'>
        <input 
          type='text' 
          id='search'
          placeholder='type the artist name'
          onChange= { handleChange }
        />
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
