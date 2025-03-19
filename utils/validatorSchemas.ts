import { z } from "zod";

export const subscriptionFormSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email address"),
});

export const requestAssistanceFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required").email("Invalid email address"),
  countryCode: z.string().nonempty("Country code is required"),
  phoneNumber: z.string().nonempty("Phone number is required"),
  flights: z.array(
    z.object({
      flightNumber: z.string().nonempty("Flight number is required"),
      flightDate: z.string().nonempty("Flight date is required")
    })
  ).min(1, "At least one flight is required")
});