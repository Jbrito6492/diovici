import { useEffect } from "react";
import Layout from "../components/Layout";
import { Provider, useDispatch } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { ChakraProvider } from "@chakra-ui/react";
import { onMobile } from "../store/actions";
import { getWindowDimensions } from "./utils/utils.js";
import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getWindowDimensions((result) => {
      dispatch(onMobile(result));
    });
    window.addEventListener("resize", () => {
      getWindowDimensions((result) => {
        dispatch(onMobile(result));
      });
    });

    return () => {
      window.removeEventListener("resize", () => {
        getWindowDimensions((result) => {
          dispatch(onMobile(result));
        });
      });
    };
  });

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
