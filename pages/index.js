import Head from "next/head";
import ImageGallery from "../components/ImageGallery.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diovici</title>
        <meta
          name="keywords"
          content="e-commerce, pants, pantalones, fashion, lifting, fitness"
        />
      </Head>
      <ImageGallery />
    </div>
  );
}
