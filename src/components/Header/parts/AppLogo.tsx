import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const AppLogo = () => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        marginRight: "auto",
        flexWrap: "wrap",
      }}
    >
      <Avatar
        variant="rounded"
        sizes="large"
        sx={{
          mr: 1,
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
        Services Portal
      </Typography>
    </Stack>
  );
};

export default AppLogo;
