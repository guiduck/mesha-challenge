import React, { useState, useEffect } from 'react';
import { useUserData } from '../../context/userDataProvider';
import SongItem from '../SongItem';


export default function SongList() {

  const[songs, setSongs] = useState([]);

  
  const userData = useUserData();


  useEffect(() => {
    if(userData) {
      setSongs(userData.songs);
    }
  }, [userData])
 
  return (
    <div>
      {
        songs &&
        songs.map((song) => {
          return(
            <SongItem 
              id={song.id}
              key={song.id}
              artistName={song.artist.name} 
              songName={song.title} 
              thumbnail={song.album.cover_medium} 
           />
          )          
        })
      }
    </div>
  )
}
