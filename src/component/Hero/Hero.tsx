import Image from 'next/image'
// import Link from 'next/link'
import style from './hero.module.scss'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className={style.hero}>
      <h1>
        <span>the last-stand of</span>
        <br />
        financial freedom
      </h1>

      <p>non-CBDC is the Capitalist Digital Currency (CDC) alternative to cryptocurrencies and CBDCs</p>

      {/* <Link href="/learnmore"> */}
      <button>
        <span>Learn more</span>
      </button>
      {/* </Link> */}

      <div className={style.heroImage}>
        <Image
          src="/image/hero.png"
          alt="Image"
          width={1024}
          height={840}
        />
      </div>
      
    </section>
  )
}

export default Hero