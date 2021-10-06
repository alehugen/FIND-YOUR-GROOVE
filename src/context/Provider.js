import PropTypes from "prop-types"
import React from "react";
import MusicContext from '../context/MusicContext';

function Provider({ children }) {
  const contextValue = {};

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