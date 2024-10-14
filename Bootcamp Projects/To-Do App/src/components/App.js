import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [item, setItem] = useState("");
  const [submitItems, manageSubmitItems] = useState([]);

  function addItem(item) {
    manageSubmitItems((prevItem) => {
      return [...prevItem, item];
    });
  }

  function deleteItem(id) {
    manageSubmitItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index != id;
      });
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem}/>
      <div>
        <ul>
          {submitItems.map((listItems, index) => (
            <ToDoItem 
              key={index} 
              id={index} 
              text={listItems} 
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
