import { Plus } from "lucide-react";

interface PageHeaderProps {
  title: string;
  itemCount: number;
  onCreateClick: () => void;
}

export function PageHeader({ title, itemCount, onCreateClick }: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-1">
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </p>
      </div>
      <button
        onClick={onCreateClick}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
      >
        <Plus size={20} />
        Create Item
      </button>
    </div>
  );
}
