import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { ChakraProvider } from "@chakra-ui/react";
import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
