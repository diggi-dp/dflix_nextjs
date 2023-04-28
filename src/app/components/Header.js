import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import Nav from './Nav'

const Header = () => {
  return (
    <header className={styles.main_header} >
        <div className={styles.navbar_brand}>
            <Link href='/'>
                <Image src='/logo1.png' alt='logo' width={150} height={50}/>
            </Link>
        </div>
        <Nav />
    </header>
  )
}

export default Header
