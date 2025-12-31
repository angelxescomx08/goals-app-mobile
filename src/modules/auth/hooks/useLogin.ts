import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginSchema, loginSchema } from "../schemas/authSchema"

export const useLogin = () => {

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return {
    form,
  }
}
