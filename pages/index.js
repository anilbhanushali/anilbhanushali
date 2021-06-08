import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anil Bhanushali</title>
        <meta
          name='description'
          content='Boutique software development company specializing in building simple and scalable solutions'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>👋 Hey there</h1>

        <p className={styles.description}>Thanks for stopping by !</p>

        <div className={styles.grid}>
          <a href='/whatsappexperience' className={styles.card}>
            <h2>Featured &rarr;</h2>
            <p>Humanly customer experience using WhatsApp</p>
          </a>

          <a href='/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about our tech stories and problems</p>
          </a>

          <a href='/live' className={styles.card}>
            <h2>Videos & Streams &rarr;</h2>
            <p>coming soon...</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a href='mailto:anil@hey.com' target='_blank' rel='noopener noreferrer'>
          👉 Reach out to us{' '}
        </a> */}
        <a
          href='https://wa.me/message/PZMDBQJSOG62L1'
          target='_blank'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          Message us on WhatsApp
          <img src='/whatsapplogo.png' style={{ width: '80px' }} />
        </a>
      </footer>
    </div>
  )
}
