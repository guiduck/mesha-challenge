import React from 'react';

import useUserData from '../../hooks/useUserData';

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

  const { songList } = useUserData();

  const handleAddToFavorites = () => {

    const newFavorite = songList.filter((song) => song.title === songName);

    localStorage.setItem('favorites', JSON.stringify(newFavorite));
  }
  
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
      <AddButton onClick={handleAddToFavorites}>
        Add song
      </AddButton>      
    </Container>
  )
}
