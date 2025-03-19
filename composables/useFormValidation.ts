import { z, ZodError } from "zod";
import { ref } from "vue";

export function useFormValidation<T>(schema: z.ZodSchema<T>) {
  const errors = ref<Record<string, string[]>>({});

  const validate = (data: T): ValidationResult => {
    try {
      schema.parse(data);
      errors.value = {};
      return { isValid: true, errors: errors.value };
    } catch (err) {
      if (err instanceof ZodError) {
        const newErrors: Record<string, string[]> = {};

        err.errors.forEach((e) => {
          const field = e.path[0] as string;
          if (!newErrors[field]) {
            newErrors[field] = [];
          }
          newErrors[field].push(e.message);
        });

        errors.value = newErrors;
      }

      return { isValid: false, errors: errors.value };
    }
  };

  return { validate, errors };
}
