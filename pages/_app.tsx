
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Montserrat } from 'next/font/google'
import Footer from "../layout/Footer";


const montserrat = Montserrat({ subsets: ['latin'] })

import Navbar from "../layout/Navbar";
import theme from "../utils/theme";
import GlobalStyles from "./global";

const StridentApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
      <>
          <style jsx global>{`
              html {
                  font-family: ${montserrat.style.fontFamily};
              }
          `}</style>
          <GlobalStyles/>
          <Navbar/>
          <main>
              <Component {...pageProps} />
          </main>
           <Footer />
      </>
  </ThemeProvider>
);

export default StridentApp;
