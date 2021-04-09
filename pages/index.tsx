import Head from "next/head";
import Gallery from "../components/Gallery";
import { useSelector } from "react-redux";
import React from "react";

export default function Index(): React.ReactNode {
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
      {onMobile ? null : <Gallery />}
    </div>
  );
}
