import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import UserNavbar from '../components/UserNavbar';

function MyApp({ Component, pageProps }) {
  return <><UserNavbar/><Component {...pageProps} /></>
}

export default MyApp
