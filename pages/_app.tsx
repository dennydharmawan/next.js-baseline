import { useEffect } from 'react';
import { AppProps } from 'next/app';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DefaultSeo } from 'next-seo';

import theme from '../lib/theme';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <DefaultSeo
        titleTemplate={'%s | My Site'}
        description="A cool website"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://my-site.vercel.app/',
          site_name: 'My Site',
        }}
        // twitter={{
        //   handle: ‘@handle’,
        //   site: ‘@site’,
        //   cardType: ‘summary_large_image’,
        // }}
      />

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
