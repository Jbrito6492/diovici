import { useEffect } from "react";
import Layout from "../components/Layout";
import { Provider, useDispatch } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { ChakraProvider } from "@chakra-ui/react";
import { onMobile } from "../store/actions";
import { getWindowDimensions } from "./utils/utils.js";
import store from "../store";
import "../styles/globals.css";
import PropTypes from "prop-types";
import { AppProps } from "next/app";

function MyApp(props: AppProps) {
  const dispatch = useDispatch();
  const { Component, pageProps } = props;

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

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  pageProps: PropTypes.object,
};

export default wrapper.withRedux(MyApp);
