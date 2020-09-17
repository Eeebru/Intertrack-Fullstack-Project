import React from 'react';
import PropTypes from 'prop-types';

const SelectListGroup = ({ name, value, onChange, options }) => {
  const selectOptions = options.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <select
      className='form-control form-control-lg selectFieldGroup'
      name={name}
      value={value}
      onChange={onChange}
    >
      {selectOptions}
    </select>
  );
};
SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectListGroup;
