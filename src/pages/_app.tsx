import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'contexts/AuthContext';
import GlobalStyles from 'styles/global';
import { theme } from 'styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>ioasys Books</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/favicon.ico" />
      <meta name="description" content="ioasys Books" />
    </Head>

    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  </>
);

export default App;
