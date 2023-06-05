async function fetchData (keyword) {
  const URL = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${keyword}?exact=false&titleType=movie`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6693b3dec8mshce4d4dac92b4bf0p1b257bjsn68f53b0df41f',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  }

  const response = await fetch(URL, options)
  const result = await response.json()
  const data = result.results.map(movie => ({
    id: movie.id,
    text: movie.originalTitleText.text,
    url: movie.primaryImage?.url,
    plainText: movie.primaryImage?.caption?.plainText
  }))
  return data
}

export default fetchData
