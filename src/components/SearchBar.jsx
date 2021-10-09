import React, { useContext, useState } from "react";
import MusicContext from '../context/MusicContext';
import musicAPI from '../services/index';

export default function SearchBar() {
  const [artist, setArtist] = useState('');
  const { setMusics, setCatRender } = useContext(MusicContext);

  async function handleClick() {
    const response = await musicAPI(artist);
    setMusics(response);
    if (artist !== '') setCatRender(false);
  }

  function handleChange({ target: { value }}) {
    setArtist(value);
  }

  return(
    <div className="search-bar-box">
      <label htmlFor='search'>
        <input 
          type='text' 
          id='search'
          placeholder='type the artist name or music name'
          onChange= { handleChange }
        />
      </label>
      <button 
      type='button'
      onClick={ () => handleClick() }
      >
        FIND PREVIEWS
      </button>
    </div>
  );
}
