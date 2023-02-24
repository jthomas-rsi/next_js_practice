import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppLogo from "./parts/AppLogo";
import SearchInput from "./parts/SearchInput";
import LiveHelp from "./parts/LiveHelp";
import Login from "./parts/LoginButton";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        component="nav"
        sx={{ backgroundColor: "#D5BDAF" }}
      >
        <Toolbar>
          <AppLogo />
          <SearchInput />
          <LiveHelp />
          <Login />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
