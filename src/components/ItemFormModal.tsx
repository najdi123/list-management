import { Modal } from "./Modal";
import { ItemForm } from "./ItemForm";
import type { ListItemType, ItemFormData } from "../types";

interface ItemFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ItemFormData) => void;
  editingItem?: ListItemType | null;
}

export function ItemFormModal({
  isOpen,
  onClose,
  onSubmit,
  editingItem = null
}: ItemFormModalProps) {
  const mode = editingItem ? "edit" : "create";
  const title = editingItem ? "Edit Item" : "Create New Item";

  const initialData = editingItem
    ? { title: editingItem.title, subtitle: editingItem.subtitle }
    : undefined;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <ItemForm
        onSubmit={onSubmit}
        onCancel={onClose}
        initialData={initialData}
        mode={mode}
      />
    </Modal>
  );
}
