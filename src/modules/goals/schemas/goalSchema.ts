import { z } from "zod"

export const goalTypes = z.enum(["target", "manual", "goals"])

export const goalSchema = z.object({
  id: z.uuid(),
  parent_goal_id: z.uuid().nullable(),
  user_id: z.uuid(),
  unit_id: z.uuid(),
  goal_type: goalTypes,
  target: z.number().nullable(),
  description: z.string(),
  completed_at: z.date().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
})

export type GoalSchema = z.infer<typeof goalSchema>