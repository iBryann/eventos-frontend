import { RegisterForm } from "@/components/auth/register-form";
import { CalendarDays } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen grid items-center justify-center p-4 md:p-8 bg-slate-50">
      <div className="w-full max-w-[400px] flex flex-col space-y-6">
        <div className="flex flex-col space-y-2 text-center items-center">
          <div className="h-12 w-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-2">
            <CalendarDays className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar uma conta
          </h1>
          <p className="text-sm text-muted-foreground">
            Insira seus dados para entrar na plataforma de Eventos.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm w-full">
          <RegisterForm />
        </div>
        
        <p className="px-8 text-center text-sm text-muted-foreground">
          Ao clicar em criar conta, você concorda com nossos{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            Termos de Serviço
          </a>{" "}
          e{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            Política de Privacidade
          </a>
          .
        </p>
      </div>
    </main>
  );
}
