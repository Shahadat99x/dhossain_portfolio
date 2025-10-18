import { z } from "zod";

export const contactSchema = z
  .object({
    name: z
      .string()
      .min(2, "Please enter at least 2 characters.")
      .max(80, "Keep it under 80 characters."),
    email: z.string().email("Please enter a valid email address."),
    message: z
      .string()
      .min(10, "Tell me a little more - at least 10 characters.")
      .max(2000, "Thanks! Let's keep it under 2000 characters for now."),
    website: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.website && data.website.trim().length > 0) {
      ctx.addIssue({
        path: ["website"],
        code: "custom",
        message: "Bots are not welcome here.",
      });
    }
  });

export type ContactPayload = z.infer<typeof contactSchema>;
