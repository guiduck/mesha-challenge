import React from 'react';

import { Container, Song } from './styles';

export default function SongList({songs}) {
  return (
    <Container>
      {
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
