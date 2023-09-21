
import './App.css';
import Form from './components/Form/Form.jsx';
import Items from './components/Items/Items.jsx';
import React, {useState} from 'react';

function App() {

  // itemList is array the contains a list of to do items
  const [itemList, setItemList] = useState([]);
  
  // Read form input and update the itemList data structure
  const handleSubmitEvent = (event)=>{
    event.preventDefault();
    const itemToAdd = document.querySelector("#itemToAdd");
    if(itemToAdd.value.length !== 0){
      const newItemList = [...itemList];
      newItemList.push({key : `Key-${Date.now()}`,  value : itemToAdd.value})
      setItemList(newItemList);
    }
    itemToAdd.value = "";
    itemToAdd.focus();
  }; 

  // Responds when to do item is clicked and deletes it from webpage and itemList
  const handleDeleteEvent = (event)=>{
    event.preventDefault();
    let idx = 0;
    for(const entry of itemList) {
          if(entry.key === event.target.id){
            break;
          }
          idx = idx + 1;
    }
    const li = document.querySelector(`#${event.target.id}`);
    li.parentNode.removeChild(li);
    const newItemList = itemList.filter((e, i) => i !== idx);
    setItemList(newItemList);
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <Form handleSubmitEvent={handleSubmitEvent}/>
      <Items handleDeleteEvent={handleDeleteEvent} itemList={itemList}/>
    </div>
  );
}

export default App;
