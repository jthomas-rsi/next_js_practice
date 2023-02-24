import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const LiveHelp = () => {
  return (
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
  );
};

export default LiveHelp;
