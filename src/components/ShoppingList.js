import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [input, setInput] = useState("");
  const [list, setList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function handleInputChange(event){
      setInput(event.target.value)
  }

  function updateList(newInput){
      setList([...list, newInput])
  }

  const itemsToDisplay = list.filter((item) => {
    if (selectedCategory === "All" && input === "") return true;

    return item.category === selectedCategory || item.name.indexOf(input)> -1;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={updateList} />
      <Filter onSearchChange={handleInputChange} search={input} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
