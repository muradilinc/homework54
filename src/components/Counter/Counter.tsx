import React from 'react';
import './Counter.css';

interface Props {
  count: number;
}

const Counter: React.FC<Props> = ({count}) => {
  return <p className='counter'>Tries: <span>{count}</span></p>;
};

export default Counter;