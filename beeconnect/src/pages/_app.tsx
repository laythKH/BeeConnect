import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
// import { GoogleOAuthProvider } from '@react-oauth/google'
import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import store from '../Redux/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


const MyApp = ({ Component, pageProps }) => {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      const language = url.split('/')[1];
      console.log(language);
      const dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <Provider store={store} >
      <ChakraProvider>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ChakraProvider>
    </Provider>
  )
}


export default appWithTranslation(MyApp)
