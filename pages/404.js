import styles from '../styles/Home.module.css'

export default function custom404 () {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>
          👨🏽‍🚀 This page is still in making.
          <br />
          <a
            href='https://wa.me/message/PZMDBQJSOG62L1'
            target='_blank'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            Message us on WhatsApp
            <img src='/whatsapplogo.png' style={{ width: '80px' }} />
          </a>
        </p>
      </main>
    </div>
  )
}
