import React, { useState, useEffect } from 'react';
import SongItem from '../SongItem';

import useUserData from '../../hooks/useUserData';

import { Container } from './styles';

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
            <SongItem 
              artistName={song.artist.name} 
              songName={song.title} 
              thumbnail={song.album.cover_medium} 
           />
          )          
        })
      }
    </Container>
  )
}
