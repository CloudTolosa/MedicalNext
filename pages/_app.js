import '../styles/globals.css'
import '../styles/Navbar.css' 
import '../styles/login.css' 
import 'bootstrap/dist/css/bootstrap.css';
import { AuthContextProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
  <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>
  );
}

export default MyApp
