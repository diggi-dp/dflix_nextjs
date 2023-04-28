import Link from 'next/link'
import styles from '../styles/common.module.css'
import Image from 'next/image'

const MovieCard = (item) => {
    const { id, type, title, synopsis } = item.jawSummary
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={item.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
                </div>
                <div className={styles.card_data}>
                    {title.substring(0, 18)}
                </div>
                <p style={{marginLeft : '10px'}}>{synopsis.substring(0, 65)} ...</p>
                <Link href={`/movie/${id}`}>
                    <button>
                        Read More
                    </button>
                </Link>
            </div>
        </>
    )
}

export default MovieCard
