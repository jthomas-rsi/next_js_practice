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
import Logo from "../data/genericCompanyLogo_2.jpeg";
import Image from "next/image";

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
            variant="rounded"
            sizes="large"
            sx={{
              mr: 1,
              backgroundColor: "#D6CCC2",
              width: 70,
              height: 70,
            }}
          >
            <Image
              src="/genericCompanyLogo_2.png"
              alt="company-logo"
              width={70}
              height={70}
            />
          </Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Business Consulting
          </Typography>

          <Stack direction={"row"}>
            <SearchIcon fontSize="large" />
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Stack>

          <IconButton>
            <Stack
              sx={{
                direction: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar sx={{}}>
                <LiveHelpIcon fontSize="large" />
              </Avatar>
              <Typography variant="subtitle2">Live Help</Typography>
            </Stack>
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
