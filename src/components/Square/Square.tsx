import React from 'react';
import {Item} from '../../types';
import './Square.css';

import image from './../../assets/4306aad807f0b2d4d0adfa89587d146a.jpg';

interface Props {
  item: Item;
  clickSquare: (item: Item) => void;
}

const Square: React.FC<Props> = ({item, clickSquare}) => {
  return (
    <div className={item.clicked ? 'open' : 'square'} onClick={() => clickSquare(item)}>
      {
        item.hasItem ?
          <img src={image} alt="game"/>
          : null
      }
    </div>
  );
};

export default Square;