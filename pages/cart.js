import React from 'react';
import styles from '../styles/notification.module.css';

const Cart = () => {
  return (
    <>
      <section className={styles.Notifications}>
        <div className={styles.Notificationsbox}>
          <b>Your Cart</b>
          <hr />
          <div className={styles.Cart}>

            <table className={styles.table} id="myTable">
              <tr>
                <th className={styles.th}>S No.</th>
                <th className={styles.th}>Particulars</th>
                <th className={styles.th}>Quantity</th>
                <th className={styles.th}>Price</th>
              </tr>
            </table>


          </div>
          <button>Continue To Checkout</button>
        </div>
      </section>
    </>
  );
}

export default Cart;
