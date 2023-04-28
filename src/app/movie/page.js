import MovieCard from "../components/MovieCard";
import styles from '../styles/common.module.css'

const MoviePage = async () => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'f699890428mshbbe33253e1d8054p151e7cjsn6ee42b91bb3c',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options)
  const data = await res.json()
  const main_data = data.titles
  console.log(data)


  return (
    <>
      <section className={styles.MovieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {
              main_data.map(item => {
                return <MovieCard key={item.jawSummary.id} {...item} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default MoviePage
