import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        component="nav"
        sx={{ backgroundColor: "#D5BDAF" }}
      >
        <Toolbar>
          <Avatar sx={{ mr: 1, backgroundColor: "#D6CCC2" }}>WP</Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Work Project
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
