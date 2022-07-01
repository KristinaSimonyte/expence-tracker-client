import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, type, placeholder, handleChange }) => {
  const [value, setValue ] = useState("");

  const onInputChange = (e) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };

    return (
    <div className='field'>
        {label && (
      <label className="label" htmlFor={name}>
        {label}
      </label>
        )}

      <div className="control">
        <input
          className="input" 
          type={type}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

TextInput.propTypes = {
name: PropTypes.string.isRequired,
label: PropTypes.string,
placeholder: PropTypes.string.isRequired,
handleChange: PropTypes.func.isRequired,
};

export default TextInput;
