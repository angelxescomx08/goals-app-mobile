import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { createGoalSchema, CreateGoalSchema } from "../schemas/goalSchema"
import { createGoal } from "../actions/goalsActions"

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

  const handleSubmit = async (data: CreateGoalSchema) => {
    return await createGoal(data)
  }

  return {
    form,
    handleSubmit,
  }
}
