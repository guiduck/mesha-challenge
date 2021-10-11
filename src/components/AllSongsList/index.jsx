import React from 'react'
import { useUserData } from '../../context/userDataProvider';
import SongList from '../SongList';

const AllSongsList = () => {
  const data = useUserData();

  return (
    <div>
      {data.isLoaded && <SongList />}
    </div>
  )
}

export default AllSongsList;