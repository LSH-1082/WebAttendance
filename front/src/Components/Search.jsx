import { FormControl, OutlinedInput } from '@mui/material';

const Search = () => {
  return (
    <FormControl sx={{ width: '200px'}} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1, 
            borderRadius: '10px',
        }}
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default Search;