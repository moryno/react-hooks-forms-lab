import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [input, setInput] = useState({
    id: null,
    name: "",
    category:"Produce"
  });

  const handleChange = (event) => {
    const {name, value} =  event.target;
    
    setInput({
      ...input,id: uuid(), [name]: value
    });
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onItemFormSubmit(input);
    
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
