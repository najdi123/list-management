import { useListItems, useModal } from "./hooks";
import { PageLayout } from "./components/layouts";
import { PageHeader, ListContainer, ItemFormModal } from "./components";
import type { ItemFormData } from "./types";

function App() {
  const { items, addItem, updateItem, deleteItem } = useListItems();
  const { isOpen, editingItem, openCreate, openEdit, close } = useModal();

  const handleFormSubmit = (data: ItemFormData) => {
    if (editingItem) {
      updateItem(editingItem.id, data);
    } else {
      addItem(data);
    }
    close();
  };

  return (
    <PageLayout>
      <PageHeader
        title="List Manager"
        itemCount={items.length}
        onCreateClick={openCreate}
      />
      <ListContainer
        items={items}
        onEdit={openEdit}
        onDelete={deleteItem}
      />
      <ItemFormModal
        isOpen={isOpen}
        editingItem={editingItem}
        onSubmit={handleFormSubmit}
        onClose={close}
      />
    </PageLayout>
  );
}

export default App;