import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from '../public/stickdy.png';
import Link from 'next/link';
import { MdWorkHistory, MdVideoSettings, MdTrendingUp, MdSupport } from 'react-icons/md';
import { AiFillHeart, AiFillMessage, AiFillSetting } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <section className={styles.home}>
      <div className={styles.mainhero}>
        <div className={styles.centerhero}>
          <span className={styles.smallinfo}>😎 A Place Where You Can Find Stickers For Everything!</span>
        <h1 className={styles.heroh1}>Browse & Buy <span className={styles.spc}>Premimum</span> Stickers For Your Stuff!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem dolorum autem recusandae nihil, nobis maxime debitis inventore, harum odio accusantium neque minus. Eius, est ab aliquam reiciendis iusto alias numquam.</p>
        <button>Browse Stickers</button>
        </div>
      </div>
    </section>
    </>
  )
}
