const getGenre = (temp) => {
  if (temp > 32) {
    return 'ROCK';
  } else if (temp > 24 && temp < 32) {
    return 'POP';
  } else if (temp < 24 && temp > 16) {
    return 'CLASSIC';
  } else if (temp < 16) {
    return 'LOFI';
  } else {
    //console.log('temperature is not valid');
  }
}

export default getGenre;