import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css'; // Make sure this path is correct

const Button = ({ children, onClick, disabled, variant = 'primary', size = 'md', className = '', ...rest }) => {
  const classes = classNames(
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    {
      'btn-disabled': disabled,
    },
    className
  );

  return (
    <button onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
};

export default Button;
