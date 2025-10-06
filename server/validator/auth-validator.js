const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(255, "Name must not be more than 255 characters"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email address"),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .regex(/^[0-9]{10,20}$/, "Phone must be between 10 and 20 digits"),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(1024, "Password must not be more than 1024 characters"),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email address"),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(1024, "Password must not be more than 1024 characters"),
});

module.exports = { signupSchema, loginSchema };
