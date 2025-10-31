import { useState } from "react";
import type { ListItemType, ItemFormData } from "../types";
import { createNewItem } from "../utils/itemHelpers";

export function useListItems() {
  const [items, setItems] = useState<ListItemType[]>([
    {
      id: "1",
      title: "My First Task",
      subtitle: "asdasdasd",
      dateCreated: new Date(),
    },
    {
      id: "2",
      title: "Second Task",
      subtitle: "qweqweqwe",
      dateCreated: new Date(),
    },
  ]);

  const addItem = (data: ItemFormData) => {
    const newItem = createNewItem(data);
    setItems([newItem, ...items]);
  };

  const updateItem = (id: string, data: ItemFormData) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, title: data.title, subtitle: data.subtitle }
          : item
      )
    );
  };

  const deleteItem = (id: string) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return {
    items,
    addItem,
    updateItem,
    deleteItem,
  };
}
