import * as z from "zod";

export const userRegistrationSchema = z.object({
  nome: z.string().min(3, "O nome deve ter no mínimo 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("Endereço de e-mail inválido"),
  documento: z
    .string()
    .min(11, "Documento inválido")
    .transform((val) => val.replace(/[^\d]/g, "")), // Apenas números,
  telefone: z
    .string()
    .min(10, "Telefone inválido")
    .transform((val) => val.replace(/[^\d]/g, "")),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  sexo: z.enum(["M", "F", "O"], {
    required_error: "Selecione uma opção de sexo",
  }),
});

export type UserRegistrationFormValues = z.infer<typeof userRegistrationSchema>;
