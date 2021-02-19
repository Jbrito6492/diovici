import Head from "next/head";
import ShopGallery from "../components/ShopGallery";
import Checkout from "../components/Checkout";
import styles from "../styles/Shop.module.css";

const shop = () => {
  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>
      <div className={styles.pageContainer}>
        <ShopGallery />
        <Checkout />
      </div>
    </div>
  );
};

export default shop;
