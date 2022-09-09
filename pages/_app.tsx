/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
// import Footer from "../layout/Footer";

import Navbar from "../layout/Navbar";
import theme from "../utils/theme";
import GlobalStyles from "./global";

const StridentApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </>
  </ThemeProvider>
);

export default StridentApp;
