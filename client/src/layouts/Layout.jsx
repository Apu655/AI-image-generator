import { Navbar } from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
