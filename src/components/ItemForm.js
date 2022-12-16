import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, item, setItem }) {
  const { name, category } = item;

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }

  console.log("ItemForm", item);
  console.log("name, category", name, category);
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setItem({ ...item, name: event.target.value })}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(event) =>
            setItem({ ...item, category: event.target.value })
          }
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={handleSubmit}>
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;
