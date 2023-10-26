import React, {useState} from 'react';
import {Item} from "../types";

const App = () => {
    const [items, setItems] = useState<Item[]>([]);

    const createItems = () => {
        const squares = [...items];
        const item: Item = {
            hasItem: false,
            clicked: false
        };

        for (let i = 0; i < 36; i++){
            squares.push(item);
        }

        console.log(squares);

    };

    createItems();


    return (
        <div>
            
        </div>
    );
};

export default App;