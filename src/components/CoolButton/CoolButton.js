import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CoolButton.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const CoolButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonLink
}) => {
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAppeared(true);
    }, 500000); 
    return () => clearTimeout(timeout);
  }, []);

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const buttonClasses = `btn ${checkButtonStyle} ${checkButtonSize} ${appeared ? '' : 'btn-appear'}`;
  return (
    <Link to={buttonLink} className={`btn ${checkButtonStyle} ${checkButtonSize} ${buttonClasses}`} onClick={onClick} type={type}>
      {children}
    </Link>
  );
};