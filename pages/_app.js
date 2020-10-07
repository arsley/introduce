/* eslint react/prop-types: 0 */

import { ParallaxProvider } from 'react-scroll-parallax';

import 'bulma/css/bulma.css';
import './app.css';

export default function App({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
