import type { ListItemType, ItemFormData } from "../types";

export function createNewItem(data: ItemFormData): ListItemType {
  return {
    id: crypto.randomUUID(),
    title: data.title,
    subtitle: data.subtitle,
    dateCreated: new Date(),
  };
}
