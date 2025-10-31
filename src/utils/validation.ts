import { z } from "zod";

// Zod schema with custom validation for item forms
export const itemSchema = z
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

export type ItemSchemaType = z.infer<typeof itemSchema>;
