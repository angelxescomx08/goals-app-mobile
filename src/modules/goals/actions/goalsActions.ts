import { api } from "@/lib/api";
import { GoalSchema } from "../schemas/goalSchema";

export async function getGoalsByUser() {
  return api.get<{
    goals: GoalSchema[]
  }>("/goals/by-user")
}