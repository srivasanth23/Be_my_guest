import Navbar from "../Navbar";
// import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Layouts = () => {
  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Navbar />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layouts;
