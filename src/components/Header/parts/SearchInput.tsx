import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const SearchInput = () => {
  return (
    <Stack direction={"row"}>
      <SearchIcon fontSize="large" />
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Stack>
  );
};

export default SearchInput;
