import { Box, Typography } from "@mui/material";

const HomeView = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F5EBE0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" mt={3}>
        Home View Component
      </Typography>
    </Box>
  );
};

export default HomeView;
