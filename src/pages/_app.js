//css reset
import '../assets/css/reset.css';
//global style
import GlobalStyle from '../theme/GlobalStyle';
//theme
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
//prop validation
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.shape({}),
  Component: PropTypes.elementType,
};

export default MyApp;
