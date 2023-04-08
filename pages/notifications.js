import React from 'react';
import styles from '../styles/notification.module.css';
import { RxCross2 } from 'react-icons/rx';
import { MdLocalOffer } from 'react-icons/md';

const Notifications = () => {
  return (
    <>
     <section className={styles.Notifications}>
      <div className={styles.Notificationsbox}>
        <b>Notifications</b>
        <hr />
        <div className={styles.noti}>
          <div className={styles.ico}><MdLocalOffer/></div>
          <div className={styles.text}>Good News 😍, 50% Off on Stickers Just For You Today!</div>
          <div className={styles.ico}><RxCross2/></div>
        </div>
      </div>
      </section> 
    </>
  );
}

export default Notifications;
