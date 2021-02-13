import Head from "next/head";
import ImageGallery from "../components/ImageGallery.js";
import { useSelector } from "react-redux";

export default function Home() {
  const { onMobile } = useSelector((state) => state.screen);

  return (
    <div>
      <Head>
        <title>Diovici</title>
        <meta
          name="keywords"
          content="e-commerce, pants, pantalones, fashion, lifting, fitness"
        />
      </Head>
      {onMobile ? null : <ImageGallery />}
    </div>
  );
}
