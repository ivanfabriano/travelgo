import TextField from '@mui/material/TextField';

const ChatField = () => {
  return (
    <div>
      <TextField
        required
        id="outlined-required"
        defaultValue=""
        size="small"
        fullWidth
        className='bg-white'
      />
    </div>
  );
};

export default ChatField;
