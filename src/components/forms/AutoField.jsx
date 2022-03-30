// IMPORT LIBRARY
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from '@mui/material/InputAdornment';

const AutoField = ({ id, options, label, children }) => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id={id}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="standard"
            fullwidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{children}</InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default AutoField;
