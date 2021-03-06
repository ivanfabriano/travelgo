// IMPORT LIBRARY
import TextFields from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const TextField = ({label, name, value, required, children}) => {
  return (
    <>
      <TextFields
        fullWidth 
        id="origin"
        label={label}
        defaultValue={value}
        variant="standard"
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {children}
              </InputAdornment>
            ),
          }}
  
      />
    </>
  );
};

export default TextField;
