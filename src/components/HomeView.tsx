import { Box, Button, Grid, Icon, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const HomeView = () => {
  return (
    <Grid
      container
      sx={{
        height: "90vh",
        backgroundColor: "#F5EBE0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box mt={3}>
        <Typography variant="h6" sx={{ mb: 3 }} textAlign={"center"}>
          {`Welcome To ABC's Online Service Portal`}
        </Typography>
        <Typography variant="h4" textAlign={"center"}>
          How Can We Help You?
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
          height={150}
          width={400}
          mt={4}
        >
          <Icon
            color="primary"
            sx={{
              fontSize: "40px !important",
              marginBottom: 4,
            }}
          >
            <MenuBookIcon />
          </Icon>
          <Button
            variant="contained"
            sx={{ height: "fit-content", width: "fit-content" }}
          >
            Customer Services
          </Button>{" "}
        </Box>
      </Box>
    </Grid>
  );
};

export default HomeView;
