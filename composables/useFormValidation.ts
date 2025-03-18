import { z, ZodError } from "zod";

export function useFormValidation<T>(schema: z.ZodSchema<T>) {
  const errors = ref<string[]>([]);

  const validate = (data: T): ValidationResult => {
    try {
      schema.parse(data);
      errors.value = [];
      return { isValid: true, errors: [] };
    } catch (err) {
      if (err instanceof ZodError) {
        errors.value = err.errors.map((e) => e.message);
      }
      return { isValid: false, errors: errors.value };
    }
  };

  return { validate, errors };
}
