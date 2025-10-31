import { useState } from "react";
import { ListItem as ListItemComponent } from "./components/ListItem";
import type { ListItemType } from "./types";

function App() {
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

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">List Manager</h1>
        <div className="space-y-4">
          {items.map((item) => (
            <ListItemComponent
              key={item.id}
              item={item}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
