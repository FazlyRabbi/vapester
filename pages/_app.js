import "tailwindcss/tailwind.css";
import "../styles/globals.css";
// imports swiper sliders
import "swiper/swiper-bundle.css";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "@/context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  // if (pageProps.protected && !user) {
  //   return (
  //     <Layout>Loading...</Layout>
  //   )
  // }

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
