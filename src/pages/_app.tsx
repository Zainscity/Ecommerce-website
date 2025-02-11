import { AppProps } from 'next/app';
import '../styles/globals.css';
import { CartProvider } from '../app/context/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
