import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section>
          <h1>BPCO&apos;MIEUX</h1>
          <h2>L&apos;application mobile pour les patients BPCO qui veulent suivre leurs signes cliniques respiratoires</h2>
          <div>
            <ul>
              <li>
                <div>100% gratuit, 100% anonyme et sans création de compte</div>
                <div>Si vous souhaitez supprimer toutes vos données d&apos;un coup, il vous suffit de désinstaller l&apos;application</div>
              </li>
              <li>
                <div>Sécurité des données</div>
                <div>Je reste propriétaire des données saisies</div>
              </li>
              <li>
                <div>Simple, rapide et intuitive</div>
                <div>En quelques secondes par jour, je remplis mon questionnaire de suivi</div>
              </li>
            </ul>
            <div>IMAGE...</div>
          </div>
        </section>
        <section>
          <h2>La BPCO : un problème de santé publique</h2>
          <ul>
            <li>
              <div>3,5 millions</div>
              <div>de patients atteints de BPCO en France</div>
            </li>
            <li>
              <div>3ème</div>
              <div>cause de mortalité dans le monde</div>
            </li>
            <li>
              <div>700 millions</div>
              <div>le coût annuel des dépenses de santé en hospitalisations</div>
            </li>
          </ul>
          <h3>BPCO&apos;Mieux, pourquoi l&apos;utiliser ?</h3>
          <p>Les exacerbations (aggravations aigues) de BPCO sont responsables de +150000 hospitalisations par an en France. A chaque exacerbation, la fonction respiratoire se dégrade et ce, d&apos;autant plus vite que la maladie est déjà en stade avancée.

Une partie de ces hospitalisations pourraient être évitées si une prise en charge plus précoce était initiée car les signes de dégradation respiratoire sont souvent ignorés ou négligés.

Suivre quotidiennement ses signes cliniques respiratoires permet de limiter la dégradation de sa qualité de vie en devenant acteur de sa maladie.</p>
          <h3>BPCO&apos;Mieux, comment ça marche ?</h3>
          <p>Avec BPCO&apos;Mieux, l&apos;objectif est de limiter les exacerbations ainsi que les hospitalisations, en vous permettant de suivre quotidiennement vos signes cliniques respiratoires de manière très rapide par auto-questionnaire.

L&apos;application vous sensibilise davantage sur les signes d&apos;aggravations et, selon vos réponses, elle vous préconise une orientation afin de vous accompagner dans votre décision.</p>
        </section>
        <section>
          <h3>Qui sommes nous ?</h3>
          <p>BPCO&apos;Mieux est un dispositif expérimental créé par le Dr Jean-Baptiste PERETOUT, médecin réanimateur à l&apos;hôpital Forcilles - Fondation Cognacq-Jay, financé par l&apos;ARS Ile-de-France, en collaboration avec la Fabrique du numérique des ministères sociaux.</p>
        </section>
      </main>
    </>
  )
}