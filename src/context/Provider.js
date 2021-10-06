import PropTypes from "prop-types"
import React, { useState } from "react";
import MusicContext from '../context/MusicContext';

function Provider({ children }) {
  const [musics, setMusics] = useState([]);

  const contextValue = {
    musics,
    setMusics,
  };

  return(
      <MusicContext.Provider value={ contextValue }>
          { children }
      </MusicContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node
}.isRequired;

export default Provider;