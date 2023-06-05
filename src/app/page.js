import Card from '@/components/Card'
import CardContainer from '@/components/CardContainer'
import getMovies from '@/utils/getMovies'

export default async function Home () {
  const movie = await getMovies('superman')
  console.log(movie)
  return (
    <main className='flex min-h-screen flex-col items-center mx-auto justify-between mt-12 py-8'>
      <CardContainer>
        {movie.map(({ id, text, url, plainText }) => {
          return (
            <Card text={text} url={url} plainText={plainText} key={id} />
          )
        })}
      </CardContainer>
    </main>
  )
}
