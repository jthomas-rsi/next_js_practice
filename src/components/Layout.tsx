import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Box } from "@mui/system";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

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
