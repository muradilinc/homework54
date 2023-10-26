import {useState} from 'react';
import Square from '../components/Square/Square.tsx';
import Button from '../components/Button/Button.tsx';
import Counter from '../components/Counter/Counter.tsx';
import {Item} from '../types';
import './App.css';

const createItems = () => {
  const squares = [];
  const randomNumber = Math.floor(Math.random() * 36);

  for (let i = 0; i < 36; i++) {
    const item: Item = {
      hasItem: false,
      clicked: false
    };

    squares.push(item);
  }

  squares[randomNumber].hasItem = true;
  return squares;
};

const App = () => {
  const [items, setItems] = useState<Item[]>(createItems());
  const [count, setCount] = useState<number>(0);

  const clickSquare = (item: Item) => {
    setItems((prevState): Item[] => {
      return prevState.map((itemState) => {
        if (item === itemState){
          itemState.clicked = true;
        }
        return itemState;
      });
    });

    if (item.hasItem){
      setTimeout(() => {
        alert("Вы нашли!! нажмите ок что бы начать занаво");
        setItems(createItems());
        setCount(0);
      }, 200);
    }

    setCount(prevState => prevState + 1);
  };

  const resetButton = () => {
    setItems(createItems());
    setCount(0);
  };

  return (
    <div className="container">
      <div className="gamePlay">
        <div className="squaresContainer">
          {
            items.map((item, index) => {
              return <Square key={index} item={item} clickSquare={clickSquare}/>;
            })
          }
        </div>
        <Counter count={count}/>
        <Button onClick={resetButton}>Reset</Button>
      </div>
    </div>
  );
};

export default App;