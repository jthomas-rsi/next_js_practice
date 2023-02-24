import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const SearchInput = () => {
  return (
    <Stack
      direction={"row"}
      sx={{ backgroundColor: "#A6A2A2" }}
      padding={1}
      margin={1}
    >
      <SearchIcon fontSize="large" sx={{ mr: 1 }} />
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        sx={{ backgroundColor: "#CFD2CD" }}
      />
    </Stack>
  );
};

export default SearchInput;
