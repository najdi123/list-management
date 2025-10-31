import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
import type { ItemFormData } from "../types";

// Zod schema with custom validation
const itemSchema = z
  .object({
    title: z.string().max(100, "Title must be less than 100 characters"),
    subtitle: z.string().max(200, "Subtitle must be less than 200 characters"),
  })
  .refine(
    (data) => {
      const titleValid = data.title.trim().length >= 3;
      const subtitleValid = data.subtitle.trim().length >= 3;
      return titleValid || subtitleValid;
    },
    {
      message: "At least one field must have 3 or more characters",
      path: ["title"],
    }
  );

interface Props {
  onSubmit: (data: ItemFormData) => void;
  onCancel: () => void;
  initialData?: ItemFormData;
  mode?: "create" | "edit";
}

export const ItemForm = ({
  onSubmit,
  onCancel,
  initialData,
  mode = "create",
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ItemFormData>({
    resolver: zodResolver(itemSchema),
    defaultValues: initialData || {
      title: "",
      subtitle: "",
    },
  });

  // Reset form when initialData changes (for edit mode)
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Title Input */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          {...register("title")}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter title (min 3 characters)"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      {/* Subtitle Input */}
      <div>
        <label
          htmlFor="subtitle"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Subtitle
        </label>
        <input
          id="subtitle"
          type="text"
          {...register("subtitle")}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter subtitle (min 3 characters)"
        />
        {errors.subtitle && (
          <p className="mt-1 text-sm text-red-600">
            {errors.subtitle.message}
          </p>
        )}
      </div>

      {/* Helper text */}
      <p className="text-sm text-gray-500 italic">
        At least one field must have 3 or more characters
      </p>

      {/* Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {mode === "create" ? "Create" : "Update"}
        </button>
      </div>
    </form>
  );
};