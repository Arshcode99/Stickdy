import React from 'react';
import styles from './nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/stickdy.png';

const Footer = () => {
  return (
    <>
      <div className={styles.threecol}>
        <div className={styles.col}>
          <div className={styles.logofoot}>
            <Image src={Logo} alt="stickdy" />
            <span>stickdy</span>
          </div>
          <br />
          <div className={styles.info}>
            <h2 className={styles.h2}>Reach Us Via Networks</h2>
            <span>Email🔗</span>
            <a href="mailto:arshcode99@gmail.com">arshcode99@gmail.com</a>
            <span>Whatsapp💬</span>
            <a href="https://wa.me/+918761820422">Connect</a>
            <h2 className={styles.h2}>Find Us At This Address</h2>
            <span>Telgaram, NRL Road - Numaligarh, Assam, India <br />Pincode - 785613 <br /><b>Note: </b> We are not registerd yet on official land, We are a small startup and working from home to deliver quality services globally.</span>
            <span id="message" className={styles.message}></span>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.infomid}>
            <h2 className={styles.h2}>Company</h2>
            <Link href='#'>
              Home
            </Link>
            <Link href='#'>
              Products
            </Link>
            <Link href='#'>
              Press
            </Link>
            <Link href='#'>
              Careers
            </Link>
            <Link href='#' >
              About
            </Link>
            <Link href='#'>
              Blogs
            </Link>
            <Link href='#' >
              Customer Support
            </Link>
            <Link href='#' >
              Contact
            </Link>
          </div>
        </div>
        <div className={styles.col}>
          Nothing Much!
        </div>
      </div>
      <footer className={styles.Footerboot}><p>© 2023 Stickdy LLC | All Rights Reserved | Designed & Developed By <a href="/">Arshcode</a></p></footer>
    </>
  );
}

export default Footer;
