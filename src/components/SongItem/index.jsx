import React from 'react';

import { 
  Container,
  Thumbnail,
  Info,
  AddButton
} from './styles';

export default function SongItem({
  artistName, 
  thumbnail, 
  songName
}) {
  
  return (
    <Container>
      <div>
        {/* <Thumbnail src={thumbnail} /> */}
        <Thumbnail imgUrl={thumbnail} />
        <Info>
          <strong>{artistName}</strong>
          <span>{songName}</span>
        </Info>
      </div>
      <AddButton>
        Add song
      </AddButton>      
    </Container>
  )
}
