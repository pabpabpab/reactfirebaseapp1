import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Input = ({ doMessage, textInput }) => {
    return (
        <form onSubmit={doMessage} className="input">
            <TextField
                {...textInput}
                id="outlined-basic"
                variant="outlined"
                autoFocus
                sx={{
                    backgroundColor: '#fff',
                }}/>
            <Button
                type="submit"
                variant="contained"
                size="small">
                Send
            </Button>
        </form>
    );
}

export default Input;


