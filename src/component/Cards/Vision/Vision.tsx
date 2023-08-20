import Image from "next/image"
import style from "./vision.module.scss"

const Vision = () => {
    
  return (
    <section className={style.vision}>

      <h1>Feature & Use-case</h1>

      <div className={style.cards}>

            <div className={style.container}>
              <div className={style.icon}>
                <Image src="/icon/tabler-arrows.svg" alt="dolar" width="32" height="32" />
              </div>
              <div className={style.info}>
                <h2>IDO Participation</h2>
                <p>
                non-CBDC holders will be eligible to participate in the IDO of ecosystem DAO-Shares. 
                </p>
              </div>
            </div>

            <div className={style.container}>
              <div className={style.icon}>
                <Image src="/icon/government.svg" alt="globe" width="32" height="32" />
              </div>
              <div className={style.info}>
                <h2>Governance</h2>
                <p>
                Throughout the consensus mechanism, holders can participate in the decision-making process.
                </p>
              </div>
            </div>

            <div className={style.container}>
              <div className={style.icon}>
                <Image src="/icon/zap.svg" alt="zap" width="32" height="32" />
              </div>
              <div className={style.info}>
                <h2>Security</h2>
                <p>
                non-CBDC doesn’t consist of functions like expiration dates, freezing, or decreasing the funds.
                </p>
              </div>
            </div>

            <div className={style.container}>
              <div className={style.icon}>
                <Image src="/icon/dollar.svg" alt="zap" width="32" height="32" />
              </div>
              <div className={style.info}>
                <h2>Funding</h2>
                <p>
                non-CBDC can be used to create liquidity swaps or credits to support profitable businesses.
                </p>
              </div>
            </div>

            <div className={style.container}>
              <div className={style.icon}>
                <Image src="/icon/globe.svg" alt="zap" width="32" height="32" />
              </div>
              <div className={style.info}>
                <h2>Gold & Fiat Backed CDC</h2>
                <p>
                non-CBDC is Capitalist Digital Currency (CDC) backed by a basket of $, €, and Gold with 1:6 leverage.
                </p>
              </div>
            </div>

            <div className={style.container}>
              <div className={style.icon}>
                <Image src="/icon/circle.svg" alt="zap" width="32" height="32" />
              </div>
              <div className={style.info}>
                <h2>Adaptation</h2>
                <p>
                non-CBDC can also be used for domestic currencies. I.e: National currency-backed CDC.
                </p>
              </div>
            </div>
      </div>
    </section>
  )
}

export default Vision