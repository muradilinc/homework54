import {useState} from 'react';
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

  const clickSquare = (item: Item) => {
    setItems((prevState): Item[] => {
      return prevState.map((itemState) => {
        if (item === itemState){
          itemState.clicked = true;
        }
        return itemState;
      });
    });
  };

  return (
    <div className="container">
      <div className="gamePlay">
        <div className="squaresContainer">
          {
            items.map((item, index) => {
              return (
                <div key={index} className={item.clicked ? "open" : "square"} onClick={() => clickSquare(item)}>
                  {item.hasItem ? 'here' : null}
                </div>
              );
            })
          }
        </div>
        <p>Tries: 0</p>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default App;