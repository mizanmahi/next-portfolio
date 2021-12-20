import Theme from '../styles/theme';
import 'react-toastify/dist/ReactToastify.css';



export default function App({ Component, pageProps }) {

  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 