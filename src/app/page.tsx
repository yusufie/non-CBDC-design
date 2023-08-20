
import Navbar from "@/component/Navbar/Navbar"
import Hero from "@/component/Hero/Hero"
import Vision from "@/component/Cards/Vision/Vision"

import "./globals.scss"
import styles from "./page.module.scss"

export default function Home() {
  return (
    <main className={styles.home}>

      <Navbar />
      <Hero />
      <Vision />

    </main>
  )
}
