import React from 'react';
import TextField from "@mui/material/TextField";

const TextArea = (props) => {
    const { margin, className, name, label, value, error=null, onChange, rows = 4 } = props;
    return (
        <TextField
            variant="outlined"
            className={className}
            label={label}
            margin={margin}
            name={name}
            value={value}
            onChange={onChange}
            multiline
            rows={rows}
            {...(error && {error:true,helperText:error})}
        />
    );
};

export default TextArea;
