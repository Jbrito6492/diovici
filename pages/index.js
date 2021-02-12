import Head from "next/head";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diovici</title>
        <meta
          name="keywords"
          content="e-commerce, pants, pantalones, fashion, lifting, fitness"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <h1>styles for any occasion</h1>
      <div>
        <Carousel />
      </div>
    </div>
  );
}
