import {z} from "zod";

export const registerSchema = z.object({
    name:z.string().min(1,"Name is required"),

    username: z.string().min(8,"username should be at least 8 characters"),

    email:z.string().email("Invalid email address"),

    address:z.string().min(1,"Address is required"),

    Phoneno:z.string()
    .min(10,"Mobile number must be 10 digits").max(10,"mobile number must be 10 digits"),


    password:z.string().min(6,"Password must be atleast 6 characters"),

    confirmPassword :z.string(),
}).refine((data) => data.password ===data.confirmPassword,{
    message:"Password do not match",
    path:["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;