import "tailwindcss/tailwind.css";
import "../styles/globals.css";
// imports swiper sliders
import { AuthProvider } from "@/context/AuthContext";
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
      <ThemeProvider>
        <AuthProvider>
          <SidebarProvider>
            <Component {...pageProps} />
          </SidebarProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
