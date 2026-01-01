import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { createGoalSchema, CreateGoalSchema } from "../schemas/goalSchema"

export const useCreateGoal = () => {

  const form = useForm<CreateGoalSchema>({
    resolver: zodResolver(createGoalSchema),
    defaultValues: {
      title: "",
      description: "",
      goal_type: "target",
      parent_goal_id: null,
      target: null,
      unit_id: null,
    },
  })

  return {
    form,
  }
}
