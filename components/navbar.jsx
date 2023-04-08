import React from 'react';
import styles from './nav.module.css';
import Image from 'next/image';
import Logo from '../public/stickdy.png';
import { BsBell, BsPerson, BsCart, BsShop } from 'react-icons/bs';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
     <div className={styles.navbar}>
      <Link href='/'>
      <div className={styles.logo}>
        <Image src={Logo} alt="stickdy"/>
        <span>stickdy</span>
      </div>
      </Link>
      <div className={styles.icons}>
        <Link href='/notifications'><div className={styles.ico} title='Notifications'><BsBell/></div></Link>
        <Link href='/products'><div className={styles.ico} title='Products | Marketplace'><BsShop/></div></Link>
        <Link href='/cart'><div className={styles.ico} title='Shoping Cart'><BsCart/></div></Link>
        <Link href='/account'><div className={styles.ico} title='Account Settings'><BsPerson/></div></Link>
      </div>
      </div> 
    </>
  );
}

export default Navbar;
