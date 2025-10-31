import { useState } from "react";
import { ListItem as ListItemComponent } from "./components/ListItem";
import { ItemForm } from "./components/ItemForm";
import type { ListItemType, ItemFormData } from "./types";
import { Plus } from "lucide-react";

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

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCreateClick = () => {
    setIsFormOpen(true);
  };

  const handleFormSubmit = (data: ItemFormData) => {
    const newItem: ListItemType = {
      id: crypto.randomUUID(),
      title: data.title,
      subtitle: data.subtitle,
      dateCreated: new Date(),
    };
    setItems([newItem, ...items]);
    setIsFormOpen(false);
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Create button */}
        <div className="flex flex-wrap justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">List Manager</h1>
            <p className="text-gray-600 mt-1">
              {items.length} {items.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={handleCreateClick}
            className="flex items-center my-2 gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Plus size={20} />
            Create Item
          </button>
        </div>

        {/* Empty State */}
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No items yet</p>
            <p className="text-gray-400">
              Get started by creating your first item
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <ListItemComponent
                key={item.id}
                item={item}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <ItemForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
      )}
    </div>
  );
}

export default App;