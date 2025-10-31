import { useState } from "react";
import type { ListItemType } from "../types";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ListItemType | null>(null);

  const openCreate = () => {
    setEditingItem(null);
    setIsOpen(true);
  };

  const openEdit = (item: ListItemType) => {
    setEditingItem(item);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setEditingItem(null);
  };

  return {
    isOpen,
    editingItem,
    openCreate,
    openEdit,
    close,
  };
}
