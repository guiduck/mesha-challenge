import React, { useState, useEffect } from 'react';
import useUserData from '../../hooks/useUserData';

import { Container, Song } from './styles';

export default function SongList() {

  const[songs, setSongs] = useState([]);

  useEffect(() => {
    if(userData) {
      setSongs(userData.songs);
    }
  }, [songs])

  const userData = useUserData();
  console.log(userData);

 
  return (
    <Container>
      {
        songs &&
        songs.map((song) => {
          return(
            <Song>
              artist: {song.artist.name}
            </Song>
          )          
        })
      }
    </Container>
  )
}
