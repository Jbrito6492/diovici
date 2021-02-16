import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import DesktopNav from "./DesktopNav";
import { useSelector } from "react-redux";
import styles from "../styles/Layout.module.css";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const { onMobile } = useSelector((state) => state.screen);
  return (
    <>
      <Banner />
      {onMobile ? null : <DesktopNav />}
      <div className={styles.container}>
        {onMobile ? null : <Header />}
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;
