import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        component="nav"
        sx={{ backgroundColor: "#D5BDAF" }}
      >
        <Toolbar>
          <Avatar
            sx={{
              mr: 2,
              backgroundColor: "#D6CCC2",
              width: 70,
              height: 70,
              padding: "5px",
            }}
          >
            Next.js
          </Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Work Project
          </Typography>

          <Stack direction={"row"}>
            <SearchIcon fontSize="large" />
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Stack>

          <IconButton
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar sx={{ mr: 2 }}>
              <LiveHelpIcon fontSize="large" />
            </Avatar>
            <Typography variant="subtitle2">Live Help</Typography>
          </IconButton>

          <Button variant="contained" color="primary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
