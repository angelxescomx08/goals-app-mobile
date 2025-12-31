import { authClient } from "@/lib/auth"
import { useQuery } from "@tanstack/react-query"
import { getGoalsByUser } from "../actions/goalsActions"

export const KEY = "goals"

export const useGoalsByUser = () => {

  const session = authClient.useSession()

  const goals = useQuery({
    queryKey: [KEY, {
      userId: session.data?.user?.id
    }],
    queryFn: getGoalsByUser,
  })

  return {
    goals
  }
}
