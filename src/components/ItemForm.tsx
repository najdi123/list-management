import type { ItemFormData } from "../types";
import { useItemForm } from "../hooks/useItemForm";
import { FormContainer, TextInput, FormHelperText, FormActions } from "./form";

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
  const { register, handleSubmit, errors } = useItemForm({ initialData });

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Title"
        id="title"
        placeholder="Enter title (min 3 characters)"
        register={register("title")}
        error={errors.title?.message}
      />

      <TextInput
        label="Subtitle"
        id="subtitle"
        placeholder="Enter subtitle (min 3 characters)"
        register={register("subtitle")}
        error={errors.subtitle?.message}
      />

      <FormHelperText text="At least one field must have 3 or more characters" />

      <FormActions
        onCancel={onCancel}
        submitLabel={mode === "create" ? "Create" : "Update"}
      />
    </FormContainer>
  );
};