import Head from "next/head";
import ShopGallery from "../components/ShopGallery";

const shop = () => {
  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>
      <h1>Shop</h1>
      <ShopGallery />
    </div>
  );
};

export default shop;
