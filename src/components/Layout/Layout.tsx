import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Layout/Footer";
import { Box } from "@mui/system";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
//basic layout colors picked from =>  https://coolors.co/palette/edede9-d6ccc2-f5ebe0-e3d5ca-d5bdaf

interface LayoutProps {
  children: ReactJSXElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box className="layout-wrapper">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
