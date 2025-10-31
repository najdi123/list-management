import { useState } from "react";
import { ListItem as ListItemComponent } from "./components/ListItem";
import { ItemForm } from "./components/ItemForm";
import { Modal } from "./components/Modal";
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
  const [editingItem, setEditingItem] = useState<ListItemType | null>(null);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const handleCreateClick = () => {
    setEditingItem(null); // Clear any editing item
    setIsFormOpen(true);
  };

  const handleEditClick = (item: ListItemType) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (data: ItemFormData) => {
    if (editingItem) {
      // Update existing item
      setItems(
        items.map((item) =>
          item.id === editingItem.id
            ? { ...item, title: data.title, subtitle: data.subtitle }
            : item
        )
      );
    } else {
      // Create new item
      const newItem: ListItemType = {
        id: crypto.randomUUID(),
        title: data.title,
        subtitle: data.subtitle,
        dateCreated: new Date(),
      };
      setItems([newItem, ...items]);
    }
    setIsFormOpen(false);
    setEditingItem(null);
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Create button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">List Manager</h1>
            <p className="text-gray-600 mt-1">
              {items.length} {items.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={handleCreateClick}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
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
                onEdit={handleEditClick}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal with Form */}
      <Modal
        isOpen={isFormOpen}
        onClose={handleFormCancel}
        title={editingItem ? "Edit Item" : "Create New Item"}
      >
        <ItemForm
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
          initialData={
            editingItem
              ? { title: editingItem.title, subtitle: editingItem.subtitle }
              : undefined
          }
          mode={editingItem ? "edit" : "create"}
        />
      </Modal>
    </div>
  );
}

export default App;