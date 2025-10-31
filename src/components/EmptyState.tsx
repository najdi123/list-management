interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({
  title = "No items yet",
  description = "Get started by creating your first item"
}: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg mb-4">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
