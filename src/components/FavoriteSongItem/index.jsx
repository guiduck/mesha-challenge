import React from 'react'

import { 
  Container,
  Thumbnail,
  Info,
  DeleteButton
} from './styles';

export default function FavoriteSongItem({
  artistName, 
  thumbnail, 
  songName
}) {

  // const [favorites, setFavorites] = useState(userFavorites);

  // const handleDelete = (name) => {
  //   const newFavorites = userFavorites.filter((favorite) => favorite.artist.name !== name);
  //   setFavorites(newFavorites);
  // }

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
      <DeleteButton >Delete song</DeleteButton>
    </Container>
  )
}
