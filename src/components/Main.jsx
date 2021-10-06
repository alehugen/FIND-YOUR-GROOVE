import React, { useContext, useState } from "react";
import MusicContext from '../context/MusicContext';
import musicAPI from '../services/index';

export default function Main() {
  const [artist, setArtist] = useState('');
  const { musics, setMusics } = useContext(MusicContext);

  async function requestAPI() {
    const response = await musicAPI(artist);
    setMusics(response);
  }

  function handleChange({ target: { value }}) {
    setArtist(value);
  }

  function handleClick() {
    requestAPI();
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
