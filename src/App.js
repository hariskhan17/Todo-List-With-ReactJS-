import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [editMode, setEditMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  const addItem = () => {
    let value = [...list];
    value.push(inputValue);
    setList(value);
    setInputValue("");
  };

  const deleteItem = (index) => {
    let value = [...list];
    value.splice(index, 1);
    setList(value);
  };

  const updateItem = () => {
    const copylist = [...list];
    copylist[currentIndex] = inputValue;
    setList(copylist);
    setEditMode(false);
    setInputValue("");
  };

  const editItem = (index) => {
    let valuehe = list[index];
    setInputValue(valuehe);
    setEditMode(true);
    setCurrentIndex(index);
  };

  const inputwala = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const deleteAllItems = () => {
    if (window.confirm("Are you sure you want to delete all items?")) {
      setList([]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input className="inputval"
          onChange={inputwala}
          type="text"
          placeholder="Entre Any Task"
          value={inputValue}
        />
        {editMode ? (
          <button onClick={updateItem}>Update</button>
        ) : (
          <button onClick={addItem}>Add</button>
        )}
        {list.length > 0 && <button onClick={deleteAllItems}>Delete All</button>}

        <ol>
          {list.map((item, index) => {
            return (
              <li>
                {item}
                <button onClick={() => deleteItem(index)}>Delete</button>
                <button onClick={() => editItem(index)}>Edit</button>
              </li>
            );
          })}
        </ol>
      </header>
    </div>
  );
}

export default App;