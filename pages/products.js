import React from 'react';
import styles from '../styles/products.module.css';

const Products = () => {
  return (
    <>
     <section className={styles.Products}>
      <div className={styles.ProductsHolder}>
        <div className={styles.ProductsCard}>
          Product #1
        </div>
        <div className={styles.ProductsCard}>
          Product #2
        </div>
        <div className={styles.ProductsCard}>
          Product #3
        </div>
        <div className={styles.ProductsCard}>
          Product #4
        </div>
        <div className={styles.ProductsCard}>
          Product #5
        </div>
        <div className={styles.ProductsCard}>
          Product #6
        </div>
      </div>
      </section> 
    </>
  );
}

export default Products;
