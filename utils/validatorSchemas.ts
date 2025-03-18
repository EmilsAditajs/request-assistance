import { z } from "zod";

export const subscriptionFormSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email address"),
});

export const requestAssistanceFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  phoneNumber: z.string().nonempty("Phone number is required"),
  flightNumber: z.string().nonempty("Flight number is required"),
  flightDate: z.string().nonempty("Flight date is required"),
});