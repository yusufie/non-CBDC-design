import Image from "next/image";
// import Link from "next/link";
import style from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbarLeft}>non-CBDC</div>

      <div className={style.navbarCenter}>
        {/* <Link href="/defi"> */}
        <button>CDC whitepaper</button>
        {/* </Link> */}

        <button>Ecosystem v</button>
        <button>
          News
          <div className={style.notificationCircle}>
            <span className={style.notificationNumber}>1</span>
          </div>
          <Image src="/icon/notification.svg" alt="notification"
            width={16} height={16} className={style.notificationIcon}
          />
        </button>

        <button>non-CBDC</button>
        <button>Socials v</button>
        <button>Contact</button>
      </div>

      {/* <Link href="/defi"> */}
        <div className={style.navbarRight}>
          <button className={style.launchButton}>
            <p>launch dApp</p>
          </button>
        </div>
      {/* </Link> */}
    </nav>
  )
}

export default Navbar