import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { itemSchema } from "../utils/validation";
import type { ItemFormData } from "../types";

interface UseItemFormProps {
  initialData?: ItemFormData;
}

export const useItemForm = ({ initialData }: UseItemFormProps = {}) => {
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

  return {
    register,
    handleSubmit,
    errors,
    reset,
  };
};
