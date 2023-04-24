import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

// imports swiper sliders
import { AuthProvider } from "@/context/AuthContext";
import { CardProvider } from "@/context/CardContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@material-tailwind/react";
import "swiper/swiper-bundle.css";

export default function MyApp({ Component, pageProps }) {
  // if (pageProps.protected && !user) {
  //   return (
  //     <Layout>Loading...</Layout>
  //   )
  // }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Economica:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
