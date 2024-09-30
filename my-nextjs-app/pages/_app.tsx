import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';
import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
	<Provider store={store}>
	  <Navbar />
	  <Component {...props} />
	</Provider>
  );
};

export default MyApp;