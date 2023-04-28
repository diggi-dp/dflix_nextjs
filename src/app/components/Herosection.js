import heroStyles from '../styles/herosection.module.css'
import styles from '../styles/common.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
    weight: ['300', '400', '600', '500', '700', '800', '900'],
    subsets: ['latin'],
})


const Herosection = ({ title, imageUrl }) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={styles.hero_content}>
                        <h1>{title}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorem, at labore suscipit voluptatem quas iure aspernatur sit possimus, incidunt quo tempora id blanditiis aliquam! Atque magni nisi ratione ex, sed id quibusdam rerum ducimus eaque, ea adipisci suscipit exercitationem.</p>
                        <Link href='/movie'>
                            <button className={mulish.className}>
                                Explore Movies
                            </button>
                        </Link>
                    </div>
                    <div className={styles.image}>
                        <Image src={imageUrl} alt='watching picture' width={500} height={400} />
                    </div>
                </div>
            </div>
            <div className={styles["custom-shape-divider-bottom-1682591472"]}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles["shape-fill"]}></path>
                </svg>
            </div>
        </main>
    )
}

export default Herosection
