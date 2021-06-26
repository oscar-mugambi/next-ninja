import Head from "next/head"
import Image from "next/image"
import Footer from "../components/Footer"
import styles from "../styles/Home.module.css"
import NavBar from "./../components/NavBar"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At id
          numquam doloremque, nostrum odio ea dignissimos consequuntur suscipit
          sint, voluptatibus deserunt.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
