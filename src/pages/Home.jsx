import React, { useContext } from "react";
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Main from "../components/Main";
import MusicContext from "../context/MusicContext";
import catIcon from '../images/cat.gif';

export default function Home() {
  const { catRender } = useContext(MusicContext);

  return(
    <div>
      <Header />
      <SearchBar />
      { catRender === false ? <Main /> : <img src={ catIcon } alt="gato curtindo" className="cat-dancing"/> }
      <Footer />
    </div>
  );
}
