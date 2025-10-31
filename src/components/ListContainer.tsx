import { ListItem } from "./ListItem";
import { EmptyState } from "./EmptyState";
import type { ListItemType } from "../types";

interface ListContainerProps {
  items: ListItemType[];
  onEdit: (item: ListItemType) => void;
  onDelete: (id: string) => void;
}

export function ListContainer({ items, onEdit, onDelete }: ListContainerProps) {
  if (items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
