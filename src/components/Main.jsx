import React, { useContext, useEffect } from "react";
import MusicContext from "../context/MusicContext";
import Loading from "./Loading";

export default function Main() {
    const { musics, setMusics, setCatRender } = useContext(MusicContext);

    function clearSearch() {  
        document.querySelector('.clear-button').style.display = 'none';
        document.querySelector('.table-head-box').style.visibility = 'hidden';
        setMusics([]);
        setCatRender(true);
    }

    useEffect(() => {
      if(musics && musics.length > 0) {
        document.querySelector('.clear-button').style.display = 'block';
        document.querySelector('.table-head-box').style.visibility = 'visible';
      }
    }, [musics]);

    if (musics && musics.length > 0) setCatRender(false);

 return(
    <table className="table-box">
         <thead className="table-head-box">
            <th></th>
            <th>Artist Name</th>
            <th>Music Name</th>
            <th>Music Preview</th>
            <button 
              type="button" 
              className="clear-button"
              onClick={ clearSearch }
            >
            X
            </button>
        </thead>
        { 
          musics ? musics.map((music, index) => (
            <tbody key={ index } className="table-body-box">
            <img src={ music.artworkUrl60 }  alt="imagem"/>
            <td>{music.artistName}</td>
            <td>{ music.trackName }</td>
            <audio controls src={ music.previewUrl }>
             <track kind="captions"/>
            </audio>
            </tbody>
          )) : <Loading />
        }   
    </table>
 );
}
