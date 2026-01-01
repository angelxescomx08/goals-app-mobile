import { api } from "@/lib/api";
import { CreateGoalSchema, GoalSchema } from "../schemas/goalSchema";

export async function getGoalsByUser() {
  return api.get<{
    goals: GoalSchema[]
  }>("/goals/by-user")
}

export async function createGoal(data: CreateGoalSchema) {
  return api.post<{
    goal: GoalSchema
  }>("/goals", data)
}