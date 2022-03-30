// IMPORT LIBRARY
import DateAdapter from "@mui/lab/AdapterMoment";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';

const DateField = ({ value, handleChange, label, children }) => {
  return (
    <div className="w-full">
      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label={label}
          inputFormat="DD/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{children}</InputAdornment>
                ),
              }}
            />
          )}
          className="w-full"
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateField;
