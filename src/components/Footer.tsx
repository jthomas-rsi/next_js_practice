import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { Paper } from "@mui/material";

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ backgroundColor: "#D5BDAF" }}
        >
          <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
          <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
          <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};

export default Footer;
