import React from 'react'
import styles from './Home.module.scss'
import SimpleSlider from '../../components/Slider/SimpleSlider'

const Home = () => {
  return (
    <div >
      <SimpleSlider />
      <h1 className={styles.allGames__title}>
        Best Free Games for PC and Browser in 2022!
      </h1>
      <h2 className={styles.allGames__semititle}>
        361 Free-to-play MMO games found in our list! Please note we are also
        including Multiplayer Online Games with MMO elements.
      </h2>
      <br />
    </div>
  )
}

export default Home