import React from 'react';
import TextField from '@mui/material/TextField';

const AutocompleteInput = (props) => {
    const { margin, className, name, label, value, error=null, onChange } = props;
    return (
        <TextField
            variant="outlined"
            className={className}
            label={label}
            margin={margin}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    );
};

export default AutocompleteInput;
