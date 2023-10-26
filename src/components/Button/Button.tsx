import React from 'react';
import './Button.css';

interface Props extends React.PropsWithChildren{
  onClick: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({children, onClick}) => {
  return <button className='button' onClick={onClick}>{children}</button>;
};

export default Button;