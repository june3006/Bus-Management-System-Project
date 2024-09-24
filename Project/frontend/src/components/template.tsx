import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import HeaderSignIn from "../HeaderSignIn/headerSignIn";
import Footer from "../Footer/footer";

interface TemplateProps {
  isAuthenticated: boolean;
}

const Template: React.FC<TemplateProps> = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? <HeaderSignIn /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Template;
