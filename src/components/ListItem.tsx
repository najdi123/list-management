import type { ListItemType } from "../types";
import { Trash2, Pencil } from "lucide-react";

interface Props {
  item: ListItemType;
  onEdit: (item: ListItemType) => void;
  onDelete: (id: string) => void;
}

export const ListItem = ({ item, onEdit, onDelete }: Props) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(item.dateCreated);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-2">{formattedDate}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600">{item.subtitle}</p>
        </div>

        <div className="flex gap-2 ml-4">
          <button
            onClick={() => onEdit(item)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            aria-label="Edit item"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Delete item"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};